'use strict';

var ChartArea = require('../../../../common/chart/intraday');
var PageBase = require('../../../../app/page-base');
var Util = require('../../../../app/util');
var Base = require('../../../../app/base');
var Config = require('../../../../app/config');
var Cookie = require('../../../../lib/cookie');

export default class Chart extends Base {
  constructor(config) {
    super(config);

    this._bind();
    this._initChart();
  }

  _bind() {
    var doc = $(document);

    doc.on('tap', '.range-selector', $.proxy(this._selectRange, this));
  }

  _selectRange(e) {
    var curEl = $(e.currentTarget),
      index = curEl.index(),
      buttonEls = document.getElementsByClassName('highcharts-button'),
      buttonEl = $(buttonEls[index]);

    var types = this.types;
    var type = types[index];


    this._getCandle(type, true, 'area', index);

    if (curEl.hasClass('active')) {
      return;
    }

    this.chartInstance.showLoading();
    curEl.addClass('active');
    curEl.siblings().removeClass('active');
  }

  _initChart() {
    this._getCandle('m5', false, 'area');
  }

  _getCandle(type, refresh, chartType, selectedIndex) {
    var self = this;

    this.chartType = chartType;

    if (type) {
      this.candleType = type;
      this.chartType = chartType;
    } else {
      type = this.candleType;
      chartType = chartType;
    }

    var map = {
      m1: 60,
      m5: 5 * 60,
      m15: 15 * 60,
      m30: 30 * 60,
      h1: 60 * 60,
      d1: 24 * 60 * 60
    };

    this.ajax({
      url: this.candleUrl,
      dateType: 'jsonp',
      data: {
        id: this.symbol,
        //start_time: Util.formateTime((this.startTime || Date.now()) - (map[type] * 1000 * 50), "yyyy-MM-dd HH:mm:ss"),
        tf: type,
        group_name: Cookie.get('type') == 'real' ? Cookie.get('real_group') : Cookie.get('demo_group')
      },
      unjoin: true,
    }).then((data) => {
      //x,open,high,low,close

      data = data.data;

      // var unit = this.unit.toString().split('.')[1].length;

      var list = [];
      for (var i = data.price.length - 1, count = 0; i > 0; i--) {
        var item = data.price[i];
        ++count;

        if (chartType === 'area') {
          list.push([
            Util.getTime(item.beijing_time),
            parseFloat(((item.open + item.close) / 2).toFixed(this.unit))
          ]);
        } else {
          list.push([
            Util.getTime(item.beijing_time),
            item.open,
            item.high,
            item.low,
            item.close
          ]);

          if (count > 50) {
            break;
          }
        }

      }
      list = list.sort(function(a, b) {
        return a[0] > b[0] ? 1 : -1;
      });

      this.lastData = list[list.length - 1];

      if (this.chart) {
        try {
          // var chart = self.chartInstance;
          this.chart.update(list);
          this.chart.selectedIndex = selectedIndex;

          if (refresh && self.curState == 'close') {
            this.refresh = false;
            this._getData();
          }
        } catch (e) {}

        return;
      }

      // create the chart
      this.chart = new ChartArea({
        data: list,
        price: self.price,
        up: false,
        stockName: self.name,
        selectedIndex: self.types.indexOf(type)
      });
      this.type = 'up';
      this.chartInstance = self.chart.instance;
    });
  }

  shouldChartUpdate(priceInfo) {
    var type = this.candleType;

    if (!priceInfo.received_time) {
      return;
    }
    var receiveTime = Util.getTime(priceInfo.received_time);

    if (receiveTime === this.receiveTime) {
      return;
    }

    this.receiveTime = receiveTime;
    var interval = 60;

    switch (type) {
      case 'm1':
        interval = 60;
        break;
      case 'm5':
        interval = 60 * 5;
        break;
      case 'm15':
        interval = 60 * 15;
        break;
      case 'm30':
        interval = 60 * 30;
        break;
      case 'h1':
        interval = 60 * 60;
        break;
      case 'd1':
        interval = 60 * 60 * 24;
        break;
    }

    if (receiveTime % (1000 * interval) >= Config.getInterval()) {
      return;
    }

    console.log(true);

    this.chart = null;
    this._getCandle(type, true, 'area');
  }

  addPoint(point) {
    this.chart && this.chart.addPoint(point);
  }

  defaults() {
    return {
      types: ['m1', 'm5', 'm15', 'm30', 'h1', 'd1']
    };
  }
}