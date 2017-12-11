var Toast = require('../common/toast');

module.exports = {
  // 老生产服

  // credentialUrl: 'http://weixin.invhero.com/weixin/get_sign_package',
  // 新生产服
  credentialUrl: getCredentialUrl(),  //修改之后
  // 测试服获取数据接口
  // credentialUrl: 'http://apitest.invhero.com/v1/weixin/share/package/',  //修改之后

  getPersonalInfoUrl: getPersonalInfoUrl(),

  recommendUrl: getRecommendUrl(),

  isWeixin: function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },

  onShareSuccess: function (shareKind) {
      // alert('window.shareSuccess');
      // console.log('window.shareSuccess');
      
      this.notifyShareBehavior(shareKind);
      // new Toast('test!');
      window.shareSuccess && window.shareSuccess();
      
  },

  notifyShareBehavior: function(shareKind) {
    var self = this;
    var t;
    if (self.orderObject) {
      t = self.orderObject.ticket;
    } else {
      t = null;
    }

    this.ajax({
      url: getIfyShareBehaviorUrl(),
      type: 'post',
      unjoin: true,
      data: {
        kind: shareKind,
        invite: self.cookie.get('inviteCode'),
        order: t,
        from: window.location.origin
      }
    }).then(function(data) {});
  },

  /**
   *
   * shareKind: 
   * 'order': 分享当前订单    
   * 'history': 分享历史订单
   * 'invite': 邀请好友
   * 'recommend': 今日推荐
   *
   */
  setupWeiXinShare: function(shareKind, url) {
    var self = this,
      lo = window.location.href;
    this.debug = false;
    if (lo.indexOf('waibao') != -1 || lo.indexOf('localhost') != -1) {
      self.debug = true;
    }

    this.ajax({
      url: this.credentialUrl, //getWXCredentialUrl() || ,
      data: {
        // 'wl': getWXWL(),
        'wl': Cookie.get('wl'),
        'url': url || window.location.href
      },
      unjoin: true
    }).then(function(data) {
      var data = data.data;
      wx.config({
        debug: self.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });

      wx.ready(function() {

        var inviteCode = self.cookie.get('inviteCode');
        var uid = self.cookie.get('uid');

        var t, d, l, i;
        var avatar, nick;
        // 分享当前订单
        if (shareKind == 'order') {
         
          if (self.profileObject) {
            if (self.profileObject.inviteCode) {
              inviteCode = self.profileObject.inviteCode;
            }
            avatar = self.profileObject.avatar;
            if (avatar && avatar.indexOf('http') == -1) {
              avatar = "http:" + avatar;
            }
            nick = self.profileObject.nickname;
          }

          i = avatar || getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = (nick || '我') + ' 买' + (self.orderObject.cmd.indexOf('buy') != -1 ? '涨' : '跌') + self.orderObject.symbolName + ', 快来跟我买一起赚!'; // 分享标题
          d = getWXCurrentDesWL(); // 分享描述
          l = getWXDomainWL() /*window.location.origin*/ + '/s/order-share.html?order=' + self.orderObject.ticket + '&symbol=' + self.orderObject.symbol + '&name=' + encodeURIComponent(self.orderObject.symbolName) + '&invite=' + inviteCode  + '&nickname=' + encodeURIComponent((nick || '我')) + '&cmd=' + encodeURIComponent(self.orderObject.cmd) + '&uid=' + uid; // 分享链接  
          if (self.profileObject && self.profileObject.repostInviteCode) {
            l += '&repostInviteCode=' + self.profileObject.repostInviteCode;
          }
        }
        // 分享历史订单
        else if (shareKind == 'history') {
          
          if (self.profileObject) {
            if (self.profileObject.inviteCode) {
              inviteCode = self.profileObject.inviteCode;
            }
            
            avatar = self.profileObject.avatar;
            if (avatar && avatar.indexOf('http') == -1) {
              avatar = "http:" + avatar;
            }
            nick = self.profileObject.nickname;
          }

          var allProfit = parseFloat(self.orderObject.profit) + parseFloat(self.orderObject.swap) - parseFloat(self.orderObject.commission);
          i = avatar || getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = (nick || '我') + ' 买' + (self.orderObject.cmd.indexOf('buy') != -1 ? '涨' : '跌') + self.orderObject.symbolName + ', ' + (allProfit >= 0 ? '赚' : '亏') + '了' + allProfit.toFixed(2) + '美元, 收益率' + (allProfit / self.orderObject.margin * 100).toFixed(2) + '%, 快来跟我一起赚!'; // 分享标题
          d = getWXHistoricalDesWL(); //'点击查看详情, 新用户注册可获赠金!'; // 分享描述
          l = getWXDomainWL() /*window.location.origin*/ + '/s/order-share.html?order=' + self.orderObject.ticket + '&symbol=' + self.orderObject.symbol + '&name=' + encodeURIComponent(self.orderObject.symbolName) + '&invite=' + inviteCode + '&nickname=' + encodeURIComponent((nick || '我')) + '&cmd=' + encodeURIComponent(self.orderObject.cmd) + '&uid=' + uid; // 分享链接  
          if (self.profileObject && self.profileObject.repostInviteCode) {
            l += '&repostInviteCode=' + self.profileObject.repostInviteCode;
          }
        }
        // 分享极速交易
        else if (shareKind == 'rapid') {
         
          if (self.profileObject) {
            if (self.profileObject.inviteCode) {
              inviteCode = self.profileObject.inviteCode;
            }
            avatar = self.profileObject.avatar;
            if (avatar && avatar.indexOf('http') == -1) {
              avatar = "http:" + avatar;
            }
            nick = self.profileObject.nickname;
          }

          i = avatar || getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = (nick || '我') + '在' + getWLName() + '使用 极速交易, 捕捉行情稳准狠!'; // 分享标题
          d = getWXInviteDesWL(); // '投资英豪新用户注册即送15美金, 24小时内赚多少提多少, 不收手续费!'; // 分享描述
          l = getWXInviteUrlWL() + inviteCode; //window.location.origin + '/i/' + inviteCode; // 分享链接

          if ( getIsNewShareWl() ) {
            l = getNewShareWl() + uid;
          }

          if(t.indexOf('%s') != -1 && nick && nick != undefined ) {
            t = t.replace(/%s/, nick);
            i = avatar || getWXIconWL();
          }
        }
        // 每日分享
        else if (shareKind == 'recommend') {
          var myDate = new Date();
          i = getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = getWXRecommendTitleWL() + (myDate.getMonth() + 1) + '月' + myDate.getDate() + '日'; // 分享标题
          d = getWXRecommendDesWL(); // '投资英豪为您汇总最优秀的交易信号, 助您投资收益迅速翻番!'; // 分享描述
          l = getWXRecommendLinkWL(); // self.recommendUrl; // 分享链接
        }
        // 个人详情页面
        else if (shareKind == 'profile') {
          // 以 // 开头的情况
          var ava = self.profileObject.avatar;
          if (ava && ava.indexOf('http') == -1) {
            ava = "http:" + ava;
          }
          i = ava; // getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = '我伙呆! ' + self.profileObject.nick_name + '的投资收益率达到了...'; // 分享标题
          d = '全时盈利: ' + self.profileObject.gross_profit + '美元, 月均收益率: ' + (self.profileObject.month_rate_of_return * 100).toFixed(2) + '%';
          l = getWXDomainWL() /*window.location.origin*/ + '/s/my/profile.html?inviteCode=' + self.profileObject.inviteCode + '&uid=' + uid;
          if (self.profileObject.repostInviteCode) {
            l += '&repostInviteCode=' + self.profileObject.repostInviteCode;
          }
           // 分享链接  
        }
        // 中秋活动
        else if (shareKind == 'autumn') {
          i = getWXIconWL(); // window.location.origin + '/img/autumn_share_icon.png';
          t = '我已备好放“粽”大礼 等你来领!';
          d = '过节天天领红包, 还有粽子礼盒等你拿!'; // 分享描述'
          l = url;
        }
        // 转发邀请, 使用当前链接
        else if (shareKind == 'origin_share') {
          i = getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = getWXInviteTitleWL(); // '新用户24小时赚多少提多少 免费提现!'; // 分享标题
          d = getWXInviteDesWL(); // '投资英豪新用户注册即送15美金, 24小时内赚多少提多少, 不收手续费!'; // 分享描述
          l = location.href; // 分享链接

          if(t.indexOf('%s') != -1 ) {
            t = t.replace(/%s/, '我');
          }
        }
        // 发红包页面
        else if (shareKind === '1111') {
          i = getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = '抢红包！'; // 分享标题
          d = '投资英豪助力投资者，为投资加油，为你撒钱...'; // 分享描述
          l = location.origin + '/s/weixin/1111.html?refer=' + inviteCode; // 分享链接
        }
        // 默认邀请页面
        else if (shareKind == 'default_invite') {
          i = getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = getWXInviteTitleWL(); // '新用户24小时赚多少提多少 免费提现!'; // 分享标题
          d = getWXInviteDesWL(); // '投资英豪新用户注册即送15美金, 24小时内赚多少提多少, 不收手续费!'; // 分享描述
          l = getWXInviteUrlWL() + self.cookie.get('inviteCode') + '&source=default_invite'; // 分享链接
          
          if ( getIsNewShareWl() ) {
            l = getNewShareWl() + uid;
          }

          nick = '我';
          if(t.indexOf('%s') != -1 && nick && nick != undefined ) {
            t = t.replace(/%s/, nick);
          }
        }

        //系统公告
        else if (shareKind === 'announcement') {
          i = getWXIconWL();
          t = "系统公告";
          d = '系统公告';
          l = window.location.href;
        }

        // 高手详情
        else if (shareKind === 'superior') {
            if(self.profileObject) {
                if (avatar && avatar.indexOf('http') == -1) {
                  avatar = "http:" + avatar;
                }
                nick = self.profileObject.nickname;
            }

            i = avatar || getWXIconWL();
            t = '我是高手详情';
            d = '我是高手详情';
            l = getWXDomainWL() + '/s/follow-order.html?expertId=' + self.profileObject.expertId;
        }

        // 邀请好友页面
        else {
          if (self.profileObject) {           
            avatar = self.profileObject.avatar;
            if (avatar && avatar.indexOf('http') == -1) {
              avatar = "http:" + avatar;
            }
            nick = self.profileObject.nickname;
          }

          i = getWXIconWL(); // window.location.origin + '/img/share.jpg';
          t = getWXInviteTitleWL(); // '新用户24小时赚多少提多少 免费提现!'; // 分享标题
          d = getWXInviteDesWL(); // '投资英豪新用户注册即送15美金, 24小时内赚多少提多少, 不收手续费!'; // 分享描述
          l = getWXInviteUrlWL() + inviteCode; //window.location.origin + '/i/' + inviteCode; // 分享链接

          if ( getIsNewShareWl() ) {
            l = getNewShareWl() + uid;
          }

          if(t.indexOf('%s') != -1 && nick && nick != undefined ) {
            t = t.replace(/%s/, nick);
            i = avatar || getWXIconWL();
          }
        }
        
        wx.onMenuShareAppMessage({
          title: t, // 分享标题
          desc: d, // 分享描述
          link: l, // 分享链接
          imgUrl: i, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function(o) {
            self.notifyShareBehavior(shareKind);
            new Toast('分享成功!');

            window.shareSuccess && window.shareSuccess();
          },
          cancel: function(o) {
            new Toast('取消分享, 您的朋友就看不到了!');
          }
        });

        wx.onMenuShareTimeline({
          title: t, // 分享标题
          link: l, // 分享链接
          imgUrl: i, // 分享图标
          success: function() {
            self.notifyShareBehavior(shareKind);
            // 用户确认分享后执行的回调函数
            new Toast('分享成功!');

            window.shareSuccess && window.shareSuccess();
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
            new Toast('取消分享, 您的朋友就看不到了!');
          }
        });

        wx.onMenuShareQQ({
          title: t, // 分享标题
          desc: d, // 分享描述
          link: l, // 分享链接
          imgUrl: i, // 分享图标
          success: function() {
            self.notifyShareBehavior(shareKind);
            new Toast('分享成功!');
            window.shareSuccess && window.shareSuccess();
          },
          cancel: function() {
            new Toast('取消分享, 您的朋友就看不到了!');
          }
        });

        wx.onMenuShareWeibo({
          title: t, // 分享标题
          desc: d, // 分享描述
          link: l, // 分享链接
          imgUrl: i, // 分享图标
          success: function() {
            self.notifyShareBehavior(shareKind);
            new Toast('分享成功!');
            window.shareSuccess && window.shareSuccess();
          },
          cancel: function() {
            new Toast('取消分享, 您的朋友就看不到了!');
          }
        });

        wx.onMenuShareQZone({
          title: t, // 分享标题
          desc: d, // 分享描述
          link: l, // 分享链接
          imgUrl: i, // 分享图标
          success: function() {
            self.notifyShareBehavior(shareKind);
            new Toast('分享成功!');
            window.shareSuccess && window.shareSuccess();
          },
          cancel: function() {
            new Toast('取消分享, 您的朋友就看不到了!');
          }
        });

      });

    });
  }
}