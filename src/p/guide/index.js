"use strict";

var Base = require('../../app/base');
var PageBase = require('../../app/page-base');
var Dialog = require('../../common/dialog/index');
var Cookie = require('../../lib/cookie');
var Login = require('../../common/login');
var Uri = require('../../app/uri');
var SymbolEngine = require('../../app/symbol-engine');
var Util = require('../../app/util');
require('../../common/slider/index');


function Guide() {
    Guide.superclass.constructor.apply(this, arguments);
    var self = this;

    

    var params = new Uri().getParams();
    // 记录用户来源, 优先取微信的from, 其次是我们自己定的source
    this.source = params.from ? params.from : params.source;
    if (!Cookie.get('source') && this.source) {
        Cookie.set('source', this.source);
    }

    /*
    this.getToken().then(function() {
        self.init();
    });
    */
    

    // guide页面不用注册匿名用户
    self.init();
}

Base.extend(Guide, PageBase, {
    init: function() {
        this._initHeight();
        this._requires();
        this._bind();
        this.configStatistics();
        this._initAttrs();
    },

    _WeiXinOAuth: function() {
        this.ajax({
            url: this.weixinUrl,
            data: {},
            unjoin: true
        }).then(function(data) {

            var openID = data.openid;
            // alert(data);
        });
    },

    _initAttrs: function() {
        var params = new Uri().getParams();
        /*
         * kind: 
         *    dl: 只显示下载入口
         *    n: 普通流程, 显示直接去option的入口
         */

        this.kind = params.kind;
        if (this.kind === 'dl') {
            $('.J_Desc').remove();
        }

        this.referCode = new Uri().getNextPath('i/', 6);
        Cookie.set('referCode', this.referCode);
        // console.log("referCode= " + this.referCode);

        // $('.J_TradeNow').attr('href', '../s/deal/pro-trading.html?symbol=EURUSD&unit=0.01&stopLossInPip=50&takeProfitInPip=25&cmd=&deal=investnow&volume=0.01&refer=' + this.referCode +'&src=' + encodeURIComponent(location.href));
        
        // 注册红包金额
        this.hb_amount = params.hb ? params.hb : 15;

        $('.J_Hongbao').text(this.hb_amount);
    },

    _bind: function() {
        var doc = $(document);

        doc.on('tap', '.register', $.proxy(this._register, this));
        doc.on('tap', '.get-code', $.proxy(this._getCode, this));

        $('.action-wrapper').on('submit', $.proxy(function(e) {
            var curEl = $(e.currentTarget),
                telEl = $('.tel', curEl),
                tel = telEl.val();
            e.preventDefault();

            this._submit(tel);

        }, this));

        $('.tel').on('focus', $.proxy(this._scrollIntoView, this));
        // 添加默认微信分享
        if (this.isWeixin()) {
          this.setupWeiXinShare('default_invite');
        }
    },

    _getCode: function(e) {
        var curEl = $(e.currentTarget),
            parent = curEl.parent('.wrapper').parent('.action-wrapper'),
            tel = $('.tel', parent).val();

        if (!this._validate(tel)) {
            return;
        }

        $('.code').removeAttr('disabled');
        if (curEl.hasClass('disable')) {
            return;
        }

        this._countdown(curEl);

        this.ajax({
            url: '/v1/captcha/' + tel,
            type: 'post',
            data: {
                cc: 86,
                wl: getWXWL(),
                _r: Math.random()
                    //phone: telEl
            }
        }).then(function(data) {

        });
    },

    _countdown: function(el) {
        var count = 60;

        coundown();
        el.val(count);
        el.addClass('disable');

        function coundown() {
            setTimeout(function() {
                var val = el.val();

                if (val == 0) {
                    el.val('重新获取');
                    el.removeClass('disable');
                } else {
                    val -= 1;
                    el.val(val);


                    coundown();
                }
            }, 1000);
        }
    },

    _scrollIntoView: function(e) {
        var top = $(e.currentTarget).offset().top;
        var height = $(window).height();
        var timer;

        setTimeout(function() {
            document.body.scrollTop = height;
        }, 100);
    },

    _initHeight: function() {
        var winHeight = $(window).height(),
            navEl = $('.km-slider-nav');

        $('#slider').css('height', winHeight);
        navEl.css('top', winHeight - navEl.height() - 40);
    },

    _register: function(e) {
        var curEl = $(e.currentTarget),
            parent = curEl.parent('.action-wrapper'),
            telEl = $('.tel', parent),
            codeEl = $('.code', parent),
            tel = telEl.val(),
            code = codeEl.val();

        if (!code) {
            var dialog = this.dialog;

            dialog.setContent('请输入验证码');
            dialog.show();
            return;
        }

        this._submit(tel, curEl, code);
    },

    _validate: function(tel) {
        var dialog = this.dialog;

        if (!tel) {
            dialog.setContent('请输入手机号码');
            dialog.show();
            return;
        }

        // 验证手机号，默认是11位  
        if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(tel)) {
            dialog.setContent('请输入正确的手机号码');
            dialog.show();
            return;
        }

        return true;
    },

    _submit: function(tel, submitEl, code) {
        var dialog = this.dialog,
            self = this;

        if (!this._validate(tel)) {
            return;
        }


        dialog.setContent('您已注册成功，登录密码已发送至您的手机，请注意查收。');
        dialog.show();
        self.registerPhone = true;

        submitEl.val('处理中');
        this.ajax({
            url: '/v1/user',
            type: 'post',
            data: {
                phone: tel,
                vcode: code,
                cc: 86,
                uuid: Util.guid(),
                nickname: self.login._generateNickname(),
                refer: self.referCode,
                source: Cookie.get('source'),
                wl: getWXWL()
            }
        }).then(function(data) {
            Cookie.set('phone', tel, {
                expires: Infinity
            });
            Cookie.set('token', data.data.token, {
                expires: Infinity
            });
            Cookie.set('uuid', data.data.uuid, {
                expires: Infinity
            });
            Cookie.set('inviteCode', data.data.invite_code, {
                expires: Infinity
            });
            Cookie.set('type', 'demo', {
                expires: Infinity
            });

            submitEl.val('马上注册');

            self.registerErr = false;
            self._goRegister();
        }, function(data) {
            self.registerErr = true;
            var dialog = self.dialog;

            dialog.setContent(data.message);
            dialog.show();
            submitEl.val('马上注册');
        });
    },

    _goRegister: function() {
        if (!this.registerPhone || this.registerErr) {
            return;
        }

        var wl = window.location.pathname.substring(0, window.location.pathname.indexOf('/s/'));

        if (this.isWeixin()) {
            // 直接去option页面
            var url = '?token=' + Cookie.get('token') + '&ri=' + window.location.origin + wl + '/s/register-guide.html?f=g&s=b';
            url = this.weixinUrlFirst + encodeURIComponent(url) + this.weixinUrlLast;

            window.location = url;
        }
        // 直接跳转版本 
        else {
            window.location = window.location.origin + wl + '/s/register-guide.html?kind=' + this.kind;
        }
    },

    _requires: function() {
        var sliderEl = $('#slider');

        sliderEl.slider({
            loop: true,
            play: false
        });
        sliderEl.removeClass('init-remove');

        this.login = new Login();
        this.dialog = new Dialog({
            isShow: false,
            tmpl: this.tmpl,
            cancleCallback: $.proxy(function() {
                this._goRegister();
                this.confirm = true;
            }, this)
        });

        this._initHeight();
        this._resize();
    },

    _check: function() {
        var navEl = $('.km-slider-nav');
        var navElTop = navEl.offset().top;

        var descEl = $('.J_Desc');
        var top = descEl.offset().top + descEl.height();

        if (navElTop < top) {
            $('.hb-wrapper').addClass('thin');
        }
    },

    _resize: function() {
        var winHeight = $(window).height(),
            navEl = $('.km-slider-nav'),
            referEl = $('.action-wrapper'),
            titleEl = $('.hd-title');

        var ratio = winHeight / 1134;
        var dpr = $('html').attr('data-dpr');
        var top = 0;

        var navOffsetTop = navEl.offset().top;
        var referTop = referEl.offset().top + referEl.height() + 50;

        if (ratio > 1) {
            setStyle();

            var next = true;

            while (navOffsetTop > referTop && next) {
                setStyle();
                var referTop = referEl.offset().top + referEl.height() + 60;
            }

            this._check();
        } else {
            if (navOffsetTop < referTop) {
                $('.hb-wrapper').addClass('thin');

                var navOffsetTop = navEl.offset().top;
                var referTop = referEl.offset().top + referEl.height() + 60;

                // 还是超出时，具体底部10px
                if (navOffsetTop < referTop) {
                    // navEl.css('top', $(window).height() - 10);
                    // var navOffsetTop = navEl.offset().top;
                    $('.hd-bg').addClass('mini');

                    referTop = referEl.offset().top + referEl.height() + 60;
                    navOffsetTop = navEl.offset().top;
                }

                // 还是超出时，隐藏
                if (navOffsetTop < referTop) {
                    navEl.hide();
                }

            }
        }

        function setStyle() {
            top += 5;

            if (top > 60) {
                next = false;
                return;
            }

            titleEl.css('margin-top', top);
        }
    },

    attrs: {
        tmpl: [
            '<div class="dialog-ios8 J_Dialog" id="J_Dialog">',
            '   <div class="dialog-title-ios8">提示</div>',
            '   <div class="dialog-content-ios8 J_Content"><%= data.content %></div>',
            '   <div class="dialog-buttons-ios8">',
            '       <span class="dialog-btn J_DialogClose" data-idx="alert0">知道了</span>',
            '   </div>',
            '</div>',
            '<div class="dialog-mask J_DialogMask"></div>'
        ].join('')
    }
});

new Guide();