"use strict";

require('../../../lib/zepto');
var PageBase = require('../../../app/page-base');
var Util = require('../../../app/util');
var InfinityScroll = require('../../../common/infinite-scroll/index');
var BottomBanner = require('../../../common/weixin-bottom-banner');
var TopSwitch = require('../../../common/top-switch');
var tmpl = require('./index.ejs');

class FriendsRank extends PageBase {
    constructor() {
        super();

        this._initAttrs();
        this._requires();
        this._initInfinite();
        this.configStatistics();
    }

    _requires() {
        new BottomBanner();
        new TopSwitch();

        // 添加默认微信分享
        if (this.isWeixin()) {
          this.setupWeiXinShare('default_invite');
        }
    }

    _initAttrs() {
        var isDemo = this.isDemo();

        this.containerEl = $('#J_List');
        // this.url = isDemo ? '/v1/rank/upline_reward/demo/' : '/v1/rank/upline_reward/real/';

        // this.url = '/v1/rank/upline_reward/all/';
        this.url = '/v1/rank/upline_reward/whitelabel/';
    }

    _initInfinite(date) {
        var count = 10;
        var params = {
            access_token: this.cookie.get('token'),
            start: 0,
            end: count,
            wl: getWXWL(),
        };

        return new InfinityScroll({
            loadingConfig: {
                el: $('#J_Loading'),
                needInit: false,
            },
            params: params,
            el: this.containerEl,
            url: this.url,
            tmpl: tmpl,
            emptyTmpl: '<li class="empty">暂无推荐信息</li>',
            infinite: true,
            hideNoMore: true,
            beforeRequest: function(params) {
                return {
                    end: (params.page + 1) * count - 1,
                    start: params.page * count
                };
            },
            parse: function(data, params) {
                if (data && data.data) {
                    data = data.data;
                    var hasNextPage = true;

                    if (data.list.length === 0 || data.list.length < count) {
                        hasNextPage = false;
                    }

                    return {
                        data: data.list,
                        hasNextPage: hasNextPage
                    }
                }

                return data;
            }
        });
    }
}

new FriendsRank();
