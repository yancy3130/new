var Toast = require('../common/toast');
var Config = require('./config');

module.exports = {
  errorMessage: {
    "-1": "未知错误",
    "0": "成功",
    "1": "结果未知",
    "128": "交易超时",
    "129": "无效的开仓价格, 请重试",
    "130": "无效的止损价格, 请修改后重试",
    "131": "交易量设置错误, 请注意该品种的最小交易量",
    "132": "当前品种处于休市状态, 请稍后再试",
    "133": "当前品种暂时不可交易",
    "135": "价格已变化, 请重新下单",
    "136": "市场报价已关闭",
    "137": "清算通道繁忙, 请稍候重试",
    "138": "重新报价",
    "139": "订单已锁定",
    "1403": "账户错误, 请清除缓存后重新使用",
    "1402": "账户异常, 已被锁定, 请联系客服",
    "1413": "实盘账户登录错误, 请刷新重试",
    "141": "请求过于频繁, 请稍后重试",
    "145": "修改价格与当前价格差距太小, 请修改后重试",
    "146": "交易系统繁忙, 请稍后重试",
    "147": "过期时间设置有误, 请修改后重试",
    "148": "交易服务器繁忙, 请稍后重试",
    "149": "系统不允许对冲订单",
    "150": "关闭订单未遵守先进先出原则",
    "1500": "提交银行卡失败",
    "1505": "当前品种只允许做多(买涨)",
    "151": "市场波动导致价格失效, 请修改重试",
    "2": "一般性错误",
    "200": "请求成功",
    "3": "交易参数错误",
    "4": "交易服务器繁忙, 请稍后再试",
    "400": "请求参数错误, 请刷新重试",
    "401": "登录失败",
    "402": "服务器配置导致登录失败",
    "4030": "级别不够兑换条件",
    "4031": "账户中模拟币不足",
    "404": "没有搜索到结果",
    "4041": "奖品无效",
    "4042": "奖品已下架",
    "4043": "奖品未开卖",
    "4044": "库存不够",
    "405": "该订单已平仓, 无法竞猜",
    "406": "兑换码超出使用次数",
    "4061": "模拟账户下单过于频繁, 请切换实盘或者休息一下",
    "407": "该兑换码不能重复使用",
    "408": "请求超时",
    "409": "资源冲突",
    "5": "客户端版本过低, 请更新后使用",
    "500": "服务器错误",
    "501": "配置错误",
    "502": "无效响应",
    "503": "服务器不可用",
    "504": "连接超时",
    "505": "服务器错误",
    "506": "服务器繁忙",
    "507": "服务器繁忙",
    "509": "流量超标",
    "5100": "市场流动性不足, 请稍后重试!",
    "5101": "交易账户已启动",
    "5102": "交易账户已被其他用户占用",
    "5103": "交易账户尝试连接中, 请稍后重试",
    "5104": "交易账户未启动",
    "5105": "交易账户未准备好",
    "5106": "清算通道存在错误",
    "5107": "",
    "5108": "服务器繁忙, 请稍后重试",
    "5109": "",
    "5110": "服务器错误, 请稍后重试",
    "5111": "交易账户不存在",
    "5205": "价格无效, 请稍后重试",
    "5208": "超过该品种允许的最大持仓量",
    "5251": "交易数据存在错误",
    "5252": "交易订单不存在",
    "5253": "时间服务出现错误, 请手动取消带有过期时间的订单",
    "5254": "过期时间格式错误, 请手动取消带有过期时间的订单",
    "5255": "止损价格错误, 请重新设置",
    "5266": "止盈价格错误, 请重新设置",
    "5267": "止损价格错误, 请重新设置",
    "5268": "止盈价格错误, 请重新设置",
    "5269": "止损价格错误, 请重新设置",
    "5270": "止盈价格错误, 请重新设置",
    "5271": "过期时间错误, 请重新设置",
    "5272": "挂单模式中, 开仓价格与当前价格至少有10点价差",
    "5275": "账户资金不足, 请充值或调低投入资金", 
    "5276": "账户资金不足, 请充值或调低投入资金",
    "5277": "账户资金不足, 请充值或调低投入资金",
    "5301": "开仓价格存在错误, 请重新设置",
    "5302": "开仓价格存在错误, 请重新设置",
    "5303": "开仓价格存在错误, 请重新设置",
    "5304": "当前订单不能取消",
    "5305": "当前订单不能平仓",
    "5306": "当前账户可用保证金不足, 请尽快充值",
    "5307": "当前品种不可操作",
    "5308": "当前品种暂时不可交易, 请稍后重试",
    "5309": "恶意请求",
    "5310": "缺少参数",
    "5311": "参数不合法",
    "5312": "当前品种暂时不可模拟交易",
    "5313": "当前品种暂时不可实盘交易",
    "5314": "当前品种暂时不可做空(买跌)",
    "5315": "当前品种暂时不可做空(买跌)",
    "5316": "服务器错误",
    "5317": "出金或入金错误",
    "5318": "服务器错误",
    "5319": "入金类型错误",
    "5320": "当前订单不可取消",
    "5321": "下单超时",
    "5322": "下单操作被拒绝",
    "5323": "平仓超时",
    "5324": "当前订单正在平仓中",
    "5325": "平仓操作被拒绝",
    "5326": "服务器错误",
    "5327": "出入金类型错误",
    "5328": "金额不足",
    "5329": "奖金不可为负数",
    "5330": "未知的格式",
    "5331": "提交的位置不存在",
    "5332": "服务器错误",
    "5401": "消息服务错误",
    "5402": "消息服务错误",
    "5501": "交易账户错误",
    "5601": "服务器错误",
    "5390": "期货品种进入交割期",
    "6": "无法连接到交易服务器, 请检查网络",
    "64": "交易账户不可用",
    "65": "无效的交易账户",
    "7": "权限不足",
    "8": "请求过于频繁, 请稍后再试",
    "9": "恶意交易行为, 已被禁止",
    "5273": "低于品种最小交易量",
    "5274": "高于品种最大交易量",
    "5701": "自选列表仅支持20个品种",
    "1600": "缺少身份标识",
    "1601": "系统已禁用, 请联系客服",
    "1602": "系统维护中, 请稍后重试",
    "1603": "系统当前不可注册, 请联系客服",
    "1604": "系统当前不允许开仓, 请联系客服",
    "1605": "系统当前不允许平仓, 请联系客服",
    "1606": "系统当前不允许入金, 请联系客服",
    "1607": "系统当前不允许出金, 请联系客服"
  },

  groupPriceUrl: getGroupPriceUrl(),

  priceUrl: getPriceUrl(),
  candleUrl: getCandleUrl(),
  // 新生产服
  weixinUrlFirst: getWeixinUrlFirst(),

  // 老生产服
  // weixinUrlFirst: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Config.getDefaultAppId()+ '&redirect_uri=http%3a%2f%2fweixin.invhero.com%2fweixin%2fauthorization_callback',

  // 测试服接口版本
  // weixinUrlFirst: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+Config.getDefaultAppId()+'&redirect_uri=http%3a%2f%2fapitest.invhero.com%2fv1%2fweixin%2fauthorization%2fcallback%2f',
  


  // 静默授权版本
  weixinUrlLast: '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect',
  // 显式授权版本
  weixinUserInfoUrlLast: '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect',

  ajax: function(options) {
    var d = new $.Deferred(),
      self = this,
      url = options.url;

    if (!options.unjoin) {
      options.url = options.url[0] !== '/' ? '/' + options.url : options.url;
      url = Config.getAjaxPrefix() + options.url;
    }


    var defaultOptions = {
      data: {},
      type: 'get',
      dataType: 'json',
      success: function(data) {
        if (data.status == 200) {
          d.resolve(data);
        } else {
          // 如果是登录下行403, 那么这里不处理
          if (data.status !== 0 && !(data.status == 403 && url.indexOf('user/login') != -1)) {

            if (data.status == 500 && (data.message.indexOf('Connection aborted') != -1 || data.message.indexOf('Read timed out') != -1)) {
              // 域名解析错误不提示
            }
            // 图片数字验证码错误
            else if (data.status == 400 && data.message === "image_vcode error"){
              var a = 0;
            }
            // Guide页面已注册手机不提示错误
            else if (data.status == 400 && url.indexOf('/user') != -1 ) {
              var a = 0;
            }
            // 实盘交易密码错误
            else if (data.status == 403 && (url.indexOf('/tradepassword/verify/') != -1 || url.indexOf('/profile') != -1)) {
              var a = 0;
            }
            // 输入兑换码错误
            else if ((data.status == 405 || data.status == 404 || data.status == 406) && url.indexOf('/promocode') != -1) {
              var a = 0;
            }
            // 分享订单页面挂单删除
            else if (data.status == 404 && url.indexOf('/v1/order') != -1) {
              new Toast('您查阅的订单是挂单, 且已被删除.');
            }
            // 这里需要判断如果设置了交易密码, 就弹输入交易密码, 否则弹设置交易密码
            else if (data.status == 1413) {
              Cookie.expire('real_token');

              location.reload();
            }

            /*
                        
            // 这里需要弹出登录框, 同时要注意只能弹一次, 因为有可能并行下来很多1403
            else if (data.status = 1403) {
                Cookie.expire('token');
            }
            */
            else {
              var errorCode = new String(data.status);

              var str = errorCode + ": ";
              if (self.errorMessage[errorCode])
                str += self.errorMessage[errorCode];
              else
                str += "未知错误";

              if (!options.noToast) {
                new Toast(str);
              }
            }
          }
          d.reject(data);
        }

      },
      error: function(e) {
        // 0 是成功
        if (e.status !== 0 && !options.hideError) {

          var errorCode = new String(e.status);

          var str = errorCode + ": ";
          if (self.errorMessage[errorCode])
            str += self.errorMessage[errorCode];
          else
            str += "未知错误";
          
          // 记录分享的接口会返回404
          if (e.responseURL.indexOf('share_counter') == -1) {
            new Toast(str);
          }
        }
        d.reject(e);
      }
    };
    var options = $.merge(defaultOptions, options);
    options.url = url;
    options.data._f = Math.random();

    $.ajax(options);

    return new d.promise();
  },

  jsonp: function(options) {
    options.dataType = 'jsonp';

    return this.ajax(options);
  },

  postURL: function(url) {
    var form = document.createElement("FORM");
    form.method = "POST";
    form.style.display = "none";
    document.body.appendChild(form);
    form.action = url.replace(/\?(.*)/, function(_, urlArgs) {
      urlArgs.replace(/\+/g, " ").replace(/([^&=]+)=([^&=]*)/g, function(input, key, value) {
        input = document.createElement("INPUT");
        input.type = "hidden";
        input.name = decodeURIComponent(key);
        input.value = decodeURIComponent(value);
        form.appendChild(input);
      });
      return "";
    });
    form.submit();
  }
}