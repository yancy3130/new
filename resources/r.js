// app 菜单配置
function getBottomNavPages() {
	return ['home', 'option', 'master', 'actual', 'news']
}

/**
 * 支付配置相关
 */

// 默认支付方式
function getDefaultPayWay() {
	return 'weixin'
}

// 显示哪几种支付方式, 与getPayUrl()中对应
function getShowPayWay() {
	return ['weixin', 'pc'] //, 'zhifubao',  'weixinWeb', 'zhifubaoWeb', 'kuaijie',
}

/**
 * desc: 支付地址 在recharge 把url渲染到元素中去 然后直接在元素中拿
 * @param url 支付接口
 * @param openType 使用哪种方式来处理 Url 中下行的数据， 包括： postForm: 表单提交，openUrl: 直接跳转打开，createRr: 创建二维码，showImg
 * @param img 用于说明支付方式的图片路径
 * @param 对应支付所需要的特定参数（标识）
 * 对于快捷支付而言，是该是打开html的路径
 */

function getPayUrl() {
	return {
		weixin: {
			url: '/v1/user/pay/depost_daddy_wechat/new/',//'/v1/user/pay/deposit_juxin/',
			openType: 'showImg',
			img: '../img/recharge/weixin-saoma.png',
			params: {
				terminal: 2,
				channel: 'weixin'
				// depositType: 'wechat_saoma'
			}
		},
		weixinWeb: {
			url: '/v1/user/pay/deposit_juxin/',
			openType: 'postForm',
			img: '../img/recharge/weixin-web.png',
			params: {
				depositType: 'wechat_web'
			}
		},
		zhifubao: {
			url: '/v1/user/pay/deposit_juxin/',
			openType: 'postForm',
			img: '../img/recharge/zhifubao-saoma.png',
			params: {
				depositType: 'alipay_saoma'
			},
		},
		zhifubaoWeb: {
			url: '/v1/user/pay/deposit_juxin/',
			openType: 'postForm',
			img: '../img/recharge/zhifubao-web.png',
			params: {
				depositType: 'alipay_web'
			},
		},
		kuaijie: {
			url: '/s/stf-kuaijie-pay/juxin.html?',
			img: '../img/recharge/yinliankuaijie.png'
		},
		pc: {
			img: '../img/recharge/pc-web.png',
		}
	}
}

// 获取出金接口
function getRealWithdrawUrl() {
	return '/v2/user/real/withdraw/';
}

//选择引用那套皮肤
function getAppUi() {
	return 'index.css';
}

// highcharts 的 ui
function getChartUi() {
	return { // 默认
		background: '#fff',
		gridLineColor: '#F5F5F5',
		upColor: '#f7786c', 
		downColor: '#6cd583',
		upPlotLinebackground: '#f7786c',
		downPlotLinebackground: '#6cd583',
		openPlotLineBackground: '#548DEB',
		closePlotLineBackground: '#F7CB38',
		tooltipBackground: 'rgba(22,14,27,0.65)',
		areaColor: '#F7CB38',
		otherChartColor: 'rgba(84,141,235,.3)'
	}
}

// 有无模拟盘 true 代表有
function getSimulatePlate() {
	return true;
}

// 是否只显示实盘
function getIsOnlyShowReal() {
	return false;
}

// 在微信中是否显示实盘 优先级高于getIsOnlyShowReal
function getWeiXinIsHasReal() {
	return true;
}

// 是否显示在浏览器打开提示
function getIsShowOptionWeinixnGuide() {
	return false;
}

// 微信分享域名
function getWXDomainWL () {
	return 'https://t-firstbroker.firstbkr.com/';
}

// 微信分享ICON
function getWXIconWL () {
	return 'https://t-firstbroker.firstbkr.com/img/firstbroker/share.jpg';
}

// 微信邀请好友图片
function getWXInviteImgUrlWl () {
	return 'https://t-firstbroker.firstbkr.com/img/firstbroker/share.jpg'
}

// 微信邀请好友标题
// 0526更新
function getWXInviteTitleWL () {
	// return '%s 在壹号金融赚的太嗨，送美金给你，注册后立即到账！';
	return ' 注册壹号金融即送100美元交易本金, 玩赚市场, 让您的收益节节高！';
}

// 微信邀请好友描述
// 0526更新
function getWXInviteDesWL () {
	return '壹号金融为您提供全球交易品种、低交易成本、智能化跟单系统、全方位资金安全保障、随时随地，畅快交易！';
}

// 获取首页登录链接
function getHomeUrl() {
	return 'main.html'
}

// 邀请好友链接, 把source写死在链接里, 只需要提供refer
// 0526更新
function getWXInviteUrlWL () {
	return 'https://t-firstbroker.firstbkr.com/s/register.html?inviteCode=';
}

// 是否启用新的邀请链接
function getIsNewShareWl() {
	return false;
}
// 新的邀请链接
function getNewShareWl() {
	return 'https://firstbroker.tonglingdi.cn/subscribe?uid=';
}

// 微信转发标题
// 0526更新
function getWXRepostTitleWL () {
	return ' 注册壹号金融即送100美元交易本金, 玩赚市场, 让您的收益节节高！';
}

// 微信转发描述
function getWXRepostDesWL () {
	return '壹号金融为您提供全球交易品种、低交易成本、智能化跟单系统、全方位资金安全保障、随时随地，畅快交易！';
}

// 微信当前订单描述
function getWXCurrentDesWL () {
	return '壹号金融为您提供全球交易品种、低交易成本、智能化跟单系统、全方位资金安全保障、随时随地，畅快交易！';
}

// 微信历史订单描述
function getWXHistoricalDesWL () {
	return '壹号金融为您提供全球交易品种、低交易成本、智能化跟单系统、全方位资金安全保障、随时随地，畅快交易！';
}

function getActiveTitle() {
	return false
}

function getActiveContent() {
	return '<p class="active-tm" style="margin-bottom:12px;">活动日期：2018年2月27日至2018年3月2日</p>\
			<p>活动规则：</p>\
			<p>1.注册成为壹号金融客户；</p>\
			<p>2.每天下午3点，将在收件箱-公告中发送灯谜信息；</p>\
			<p>3.将猜出的灯谜信息输入到兑换码中兑换奖金，奖金金额1-10美金随机发放；</p>\
			<p>4.兑换码奖金为抗亏赠金，做够名义交易量即可转化；</p>\
			<p>5.如有问题，请详询在线客服或加客服微信：lisa866866</p>'
}

// 关于我们内容
function getAboutUSHTMLWL () {
	return '<div class="bd">\
			<p>目前，壹号金融已经支持全球20个交易所的近8000个品种，所有品种通过单一交易账户便可访问。</p><br/>\
			<p>壹号金融团队在金融领域拥有多年从业经验并掌握大量行业资源，在创立之初就确立了“为大众用户提供最优惠、性价比最高的交易服务”的宗旨，并一直坚定地奉行这一宗旨，致力于在股票、期货、外汇、贵金属及其他各类市场中寻求最优秀的流动性。</p><br/>\
			<p>壹号金融团队在计算机网络技术方面亦颇有建树，在交易系统的构建过程中充分考虑了稳定性、时效性、易用性等多方面因素，力求为投资者提供极致的交易体验。</p><br/>\
			<p>壹号金融的使命是让全球每一个人，无论处于何等收入水平，都能够以简易、安全、快捷的方式参与投资全球金融市场。</p><br/>\
			</div>';
;
}

// 默认头像
function getDefaultIconWL() {
	// 这个链接有wl   之后应该去掉  因为在之后的版本中  firstbroker不是白标
	return 'https://t-firstbroker.firstbkr.com/img/firstbroker/firstbrk_avatar.png';
}

// 是否显示下载链接
function getIfShowDLinkWL () {
	return false;
}

// 是否显示官微二维码
function getIfShowWXCodeWL () {
	return false;
}

// 官方微信-个人中心
function getWeiXinWL () {
	return 'firstbroker';
}

// 官方网站-个人中心
function getWebsiteWL () {
	return '';
}

// 白标标识
function getWXWL() {
	return 'firstbroker';
}

// 移动支付页面说明
function getMobilePayTextWL() {
	return '壹号金融通过多家三方支付公司合作，确保您的账户与资金安全。'  ;
}

// 最低入金金额
function getMinDepositWL() {
	return 10;
}

// 获取客服电话
function getSPhone() {
	return "4009992553";
}

// 登录页面链接
function getLoginWL () {
	return './login.html';
}

// 使用的交易UI
function getTradeUI () {
	return './pro-trading.html?';
}

// 计算点差是否除pip
function getDividePip() {
	return true;
}

// 获取资讯相关nav配置
function getNewsNavList() {
	return ['news', 'calendar']; //, 'market'
}

// 财经日历是否需要time参数
function getNewsHasTime() {
	return true
}

// 是否允许删除品种（专业自选页面）
function getAllowDelete() {
	return true;
}

// 是否允许修改订单 (二元交易UI不允许修改订单)
function getAllowModify () {
	return true;
}

// 是否允许搜索品种
function getAllowSearch () {
	return true;
}

// 是否提供切换UI的功能
function getHasSwitchTradingUi() {
	return true;
}

// 开平仓是否有二次确认
function getConfirmOrder() {
	return true;
}

// 默认交易 UI
function getDefaultTradingUI() {
	// 专业交易
	return 4;
	// 极速交易
	// return 6;
}

// 是否有输入兑换码功能
function getRedemption() {
	return true;
}

// 是否显示微信分享入口
function getShowWeixinShare() {
	return true;
}

// 是否使用新的分享流程
function getUseNewShare () {
	return true;
}

// 白标商家名称
function getWLName () {
	return '壹号金融';
}


//配置appid
function getWXAppid () {
	return 'wx7c747e7e240e09e2'
}

// 新闻列表配置 
//return {param}
// 0：代表默认; 
// 2：可以查看详情;
function getNewsGroup() {
	return 0;
}

// 是否使用显示授权
function getUserInfoWX () {
	return true;
}

// 是否使用新用户首页引导
function getUseNewHomeGuide() {
	return true;
}

// 是否使用新用户交易引导
function getUseNewTradeGuide () {
	return true;
}

// 是否使用新用户寸头引导
function getUseNewProListGuide () {
	return true;
}

function getUseNewFollowGuide () {
	return false;
}

// 是否使用新用户引导 目前只有option.html用
function getUseNewGuide () {
	return false;
}

// 新用户引导 - 官微二维码
function getNewGuideQRCode () {
	return '../img/firstbroker/firstbroker_gw_qrcode.jpg';
}

// 注册赠金
function getRegBonus() {
	return 5;
}

// 受邀注册赠金
function getInviteRegBonus () {
	return 5;
}

//默认交易量, 使用可用保证金的10%算
function getDefaultVolume() {
	return .1;
}

// 默认昵称前缀, 要带一个空格
function getDefaultNicknamePrefix () {
	return '壹号金融_';
}

// 官微 profile 页面 ID
function getWXIDWL () {
	return 'MzA5NTMzMjU5NA==';
}

// 最低出金金额
function getMinWithdrawWL() {
	return 100;
}

// 急速交易默认品种
function getDefaultRapidSymbols() {
	return ['XTIUSD.MICRO', 'XAUUSD.MICRO', 'EURUSD.MICRO', 'GBPUSD.MICRO']; //'XAGUSD.MICRO'
}

//是否显示在线客服
function showServicePel() {
	return true;
}

//是否显示客服电话
function showServicePhone() {
	return true;
}

// 是否有使用帮助
function getHelpLink () {
	return true;
}

// pc支付页面
function getPayUrlWL() {
	return 'https://p.firstbkr.com';
}

//安卓分享前缀
function getAndroidSharePrefixUrl() {
	return 'https://t.firstbkr.com';
}

//正式环境
// function getFormalEnvironmentUrl() {
// 	return 'https://api.firstbkr.com';
// }

//生产服
function getProduClothedUrl() {
	return 'https://api.firstbkr.com';
}

//非微信同步头像前缀
function getAndroidAvatarUrl() {
	return 'https://static.firstbkr.com/'
}

//本地(其他)头像前缀
function getNativePlaceUrl() {
	return 'https://static.firstbkr.com/';
}

//获取价格（group  v1）
// function getGroupPriceUrl() {
// 	return 'https://price.firstbkr.com/v1/price/current';
// }

//获取价格(v2)
function getPriceUrl() {
	return 'https://price.firstbkr.com/v2/price/current';
}

//蜡烛图url
function getCandleUrl() {
	return 'https://price.firstbkr.com/v3/price/candle';
}

//获取Symbols
function getSymbolUrl() {
	return 'https://price.firstbkr.com/v2/symbol/snapshot?'
}

//stomp 报价Url
function getRtpriceSompUrl() {
	return 'wss://rtprice.firstbkr.com:61615/stomp';
}

//微信分享配置
function getCredentialUrl() {
	return 'https://api.firstbkr.com/v1/weixin/share/package/';
}

//微信PersonalInfoUrl
// function getPersonalInfoUrl() {
// 	return 'https://weixin.firstbkr.com/api/user/info?openid=';
// }

//微信分享成功
function getIfyShareBehaviorUrl() {
	return 'https://t.firstbkr.com/s/weixin/share_counter';
}

// 微信授权 weixinUrlFirst
function getWeixinUrlFirst() {
	return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+getWXAppid ()+'&redirect_uri=https%3a%2f%2fapi.firstbkr.com%2fv1%2fweixin%2fauthorization%2fcallback%2f';
}

//百度统计代码
function getBaiduCodeScript() {
	return '';
	//return '<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "//hm.baidu.com/hm.js?a8ffcb5e37d87812824192f2af23e6ee";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();</script>';
}

//高风险揭示协议
function getRiskMsg() {
	return '<p>尊敬的壹号金融客户:</p>\
	<p class="first">壹号金融交易平台的电子交易业务是一种潜在收益和潜在风险较高的投资业务,对投资者的风险承受能力、理解风险程度、风险控制能力以及投资经验有较高的要求。</p>\
	<p>1. 交易客户有义务保管好交易账号、密码，避免泄露，因保管不善导致交易账号、密码泄露而引起的风险由交易客户自行承担。</p>\
	<p>2. 交易客户应亲自进行交易活动，切勿委托任何机构或个人进行代理交易活动，因信任他人而产生的风险由交易客户自行承担。</p>\
	<p>3. 任何保证获利、零风险等宣传均属虚假承诺，因轻信此类信息产生的风险由交易客户自行承担。</p>\
	<p>4. 交易客户根据相关市场信息理性判断、自主决策，并自行承担交易后果。</p>\
	<p>5. 交易客户参与交易前，应当掌握市场基本知识、相关业务规则，充分了解交易风险，掌握必要的风险防范和化解技巧。</p>\
	<p>6. 交易客户参与交易前，应当结合自身的家庭情况、收入状况、投资目的及知识结构等因素，合理评估自身的产品认知能力与风险承受能力，理性选择合适的投资方式、投资品种、投资时机、投资金额，请勿盲目投资。</p>\
	<p class="first">我方保证遵守以上承诺，如违反上述承诺或有违规行为，给交易市场或相关方造成损失的，我方愿意承担法律责任及相应的经济赔偿责任。兹确认，本申请与承诺中的相关资料和信息为我方自愿填写，我方的上述资料和信息合法、合规、真实、有效。</p>';
}


//风险提示内容
function getRiskMessageHTMLWL() {
	var company = getWLName();
	return '<div class="bd">\
	<p>尊敬的'+ company +'客户：</p><br>\
	<p>'+ company +'的电子交易业务是一种潜在收益和潜在风险较高的投资业务,对投资者的风险承受能力、理解风险程度、风险控制能力以及投资经验有较高的要求。</p><br>\
	<p></p><br>\
	<p>一、郑重提示 </p><br>\
	<p>电子交易业务具有高风险性，在做交易决定之前，请根据自身家庭、财务等具体情况慎重考虑以下问题： </p><br>\
	<p>1.交易资金来源：是否全部身家投入，养老钱、看病钱投入，子女教育资金投入，抵押贷款或其他借款投入？ </p><br>\
	<p>2.一旦投入资金发生部分或全部亏损，会有怎样的后果和影响？ </p><br>\
	<p>3.是真正对电子交易有充分的认知后决定交易，还是仅凭市场传言而盲目投资？ </p><br>\
	<p>4.是否了解开发自己作为'+ company +'客户的公司或个人？ </p><br>\
	<p>5.是否存在以下高风险行为：</p><br>\
	<p>1）是否委托其他单位和个人“代理操盘、合作分成”等？ </p><br>\
	<p>2）在设置密码时是否使用如连续数字、重复数字、出生日期以及其他容易破解的"傻瓜密码"？ </p><br>\
	<p>6.风险提示： </p><br>\
	<p>1）交易客户有义务保管好交易账号、密码，避免泄露，因保管不善导致交易账号、密码泄露而引起的风险由交易客户自行承担。 </p><br>\
	<p>2）交易客户应亲自进行交易活动，切勿委托任何机构或个人进行代理交易活动，因信任他人而产生的风险由交易客户自行承担。 </p><br>\
	<p>3）任何保证获利、零风险等宣传均属虚假承诺，因轻信此类信息产生的风险由交易客户自行承担。 </p><br>\
	<p>4）交易客户根据相关市场信息理性判断、自主决策，并自行承担交易后果。 </p><br>\
	<p>5）交易客户参与交易前，应当掌握市场基本知识、相关业务规则，充分了解交易风险，掌握必要的风险防范和化解技巧。 </p><br>\
	<p>6）交易客户参与交易前，应当结合自身的家庭情况、收入状况、投资目的及知识结构等因素，合理评估自身的产品认知能力与风险承受能力，理性选择合适的投资方式、投资品种、投资时机、投资金额，请勿盲目投资。</p><br>\
	<p>7.免责声明：行评中所有新闻、研究、分析、价格或其它数据只作一般市场评论，操作建议仅供参考。营业部将不会承担任何有可能因直接或间接使用或依靠上述数据而导致的损失或损害。</p><br>\
	<p></p><br>\
	<p>二、相关风险揭示 </p><br>\
	<p>1.政策风险 </p><br>\
	<p>国家法律、法规、政策以及规章的变化，紧急措施的出台，相关监管部门监管措施的实施等原因，均可能会对交易客户的投资产生影响，交易客户必须承担由此导致的损失。 </p><br>\
	<p>2.不可抗力风险 </p><br>\
	<p>任何因'+ company +'交易平台不能够控制的原因，包括地震、水灾、火灾、暴动、罢工、战争、政府管制、国际或国内的禁止或限制以及停电、技术故障、电子故障等其他无法预测和防范的不可抗力事件，都有可能会对交易客户的交易产生影响，交易客户承担由此导致的一切损失。 </p><br>\
	<p>3.技术风险 </p><br>\
	<p>因特网是全球公开网络，数据在因特网传输的途径是不完全确定的，由于互联网数据传输存在被网络黑客和计算机病毒攻击的可能，有关通讯服务及软、硬件服务稳定性方面的风险等原因，买卖指令及行情等信息可能会出现中断、停顿、延迟以及数据错误等异常情况，交易客户必须承担由此导致的一切损失。 </p><br>\
	<p>4.价格波动风险 </p><br>\
	<p>业务涉及现货商品的价格受多种因素的影响（包括但不限于国际经济形势、美元汇率、相关市场走势、政治局势、自然因素等），这些因素对现货价格的影响机制非常复杂，交易客户在实际操作中难以全面把握，因而存在出现投资失误的可能性，如果不能有效控制风险，则可能遭受较大的损失，交易客户必须承担由此导致的一切损失。 </p><br>\
	<p>5.交易风险 </p><br>\
	<p>1）交易客户需要了解现货及现货电子交易业务具有低准备金和高杠杆比例的投资特点， 可能导致快速的盈利或亏损。若建仓的方向与行情的波动相反，会造成较大的亏损，根据亏损的程度，交易客户必须有条件满足随时追加准备金的要求，否则其持仓将会被强行平仓，交易客户必须承担由此造成的全部损失。 </p><br>\
	<p>2）交易客户在交易系统内，通过网络终端（电脑及手机）所提交的市价单一经成交， 即不可撤销，交易客户必须接受这种方式可能带来的风险。 </p><br>\
	<p>3）行情报价以国际市场价格为基础，综合国内市场价格及中国人民银行美元兑人民币基准汇率，连续报出现货的人民币买价及卖价，其价格可能会与其他途径的报价有微弱的差距，并不能保证其交易价格与其它市场保持完全的一致性。 交易报价应以实盘系统显示为准，行情分析软件显示的价格仅供参考分析使用，不得视为交易报价。 </p><br>\
	<p></p><br>\
	<p>三、特别提示 </p><br>\
	<p>1.交易客户在参与投资之前务必详尽的了解投资的基本知识和相关风险以及'+ company +'易平台有关业务规则等，以依法合规地从事现货及现货电子交易业务。 </p><br>\
	<p>2.交易客户在开通交易之前，请配合开展投资者适当性管理工作，完整、如实地提供开户所需要的信息，不得采取弄虚作假等手段，否则，平台可以拒绝为其开通交易服务。 </p><br>\
	<p>3.本风险提示书（以下简称“提示书”）旨在向投资者充分揭示投资风险,并且帮助投资者评估和确定自身的风险承受能力。本警示书披露了交易过程中可能发生的各种风险因素，但是鉴于市场的多变和复杂，本警示书所示风险仅为列举性质，未能穷尽一切与现货电子交易业务有关的风险因素。 </p><br>\
	<p>4.鉴于投资风险的存在，在注册成为'+ company +'交易平台用户及进行交易前，投资者应该仔细阅读本警示书，并确定自己已经充分理解有关交易的性质、规则；并依据自身的投资经验、目标、财务状况、承担风险能力等自行决定是否参与该交易。 </p><br>\
	<p>5.用户在进行注册程序过程中点击“同意”按钮，即视为用户对现货电子交易业务的风险已有了充分的认知与了解。 </p><br>\
	<p>6.我们诚挚的希望和建议交易客户，从风险承受能力等自身实际情况出发，审慎地决定是否参与此市场的现货商品投资，合理的配置自己的金融资产。 </p><br>\
	<p>7.再次提示：投资有风险，入市须谨慎！</p><br>\
	<p>我方保证遵守以上承诺，如违反上述承诺或有违规行为，给交易市场或相关方造成损失的，我方愿意承担法律责任及相应的经济赔偿责任。兹确认，本申请与承诺中的相关资料和信息为我方自愿填写，我方的上述资料和信息合法、合规、真实、有效。</p><br>\
	</div>';
}

//客户协议内容
function getClientAgreementHTMLWL() {
	var company = getWLName();
	return '<div class="bd">\
	<p>本协议为我们北京' + company + '科技有限公司（以下称“我司”）与您（以下称“客户”或“您”）之间签订的协议。</p><br/>\
	<p>该客户协议连同我司的商业条款（以下称“协议”）描述的条款和条件适用于以客户名义在我司开具的账户（总称“账户”），旨在说明客户进行外汇现货交易以及包括外汇，金属，商品，指数以及上市股票在内的差价合约（CFD）交易（总称为“交易”），以及说明客户登录我司网站，交易平台，行使账户服务权利和得到我司的行政支持等。所有交易都要依照本协议的条款和条件进行，若有其他任何经我司主管或官员以书面方式正式授权的额外条款也应加以遵守和执行。</p><br/>\
	<p>您确定已经了解进行现货外汇和差价合约交易的条件，并接受这些条件。同时，在开户之前请仔细阅读该协议并确认您同意所有开户条款和条件。</p><br/>\
	<p>合格账户</p><br/>\
	<p>部分我司账户和服务仅提供给客户，供其达到我们开具账户的资格。如果我们决定您未能具备相关资格，那么我们将在经过慎重考虑后随时有权在不提前通知您的情况下，将您的所有余额和头寸转到一具备资格的新账户中。您的账户将以该新账户的条款为准。</p><br/>\
	<p>我们有权（在不损害该协议其他任何条款下的权利的基础上）终止一切账户活动并采取如下措施：</p><br/>\
	<p>1）如果您还未开展任何交易，账户中的余额将全额返还到您的初始账户。信用卡退款需要10日，方可退回到您的账户。</p><br/>\
	<p>2）如果在此期间您已经开始交易，那么我们将按照当天的收盘价格关闭您持有的任何一份未平仓合约，并将交易的获利或损失记录在您的账户中。余额显示在您的账户中：</p><br/>\
	<p>A）如果账户里的余额与初始存款持平或减少，该笔款项将退回到您的初始账户中，或者</p><br/>\
	<p>B）如果账户里的余额较初始存款有所增加，该笔存款将退还（如A）所示）。剩余部分将由我司的法律部门进行处理。</p><br/>\
	<p>状态披露</p><br/>\
	<p>部分客户或是银行，投资部门或其他受监管的金融机构的官员，高管，雇员或与其有紧密联系的家庭成员，您在开户的时候必须告知我们。如果您没有通知我们，而我们后来发现您是属于这种情况的客户，根据条例9.3，我们有权在经过审慎思考后关闭您的账户以及或账户的所有交易。</p><br/>\
	<p>我们提供“仅执行”服务，不提供与交易相关的建议。对于交易的所有风险，均由您自行承担。</p><br/>\
	<p>请特别注意风险警告提示，风险警告提示描述外汇现货和差价合约交易的主要风险，但是不能包括其全部的交易风险。</p><br/>\
	<p>我司要求您提供投资交易历史及经验方面的信息，以便为您评估外汇现货和差价合约交易的合理性。如果您不提供的话，我司将无法为您进行合理评估。</p><br/>\
	<p>您保证提供给我司的信息是真实可靠的，其中包括您提供给我司的文件和其他信息。如果信息有变，请您以书面形式告知我司。文件副本如果是通过电邮，电传等电子传输方式提供给我司，意味着您保证该种传输方式提供的文件是忠实于原文件的。如果违反该保证，则意味着您默认允许我司有权关闭所有未平仓交易，并根据9.3条款关闭账户。</p><br/>\
	<p>我司和客户之间达成的协议如下：</p><br/>\
	<p>1.协议范围和定义</p><br/>\
	<p>1.1“该协议”指我司商业条款，客户协议以及附件为一体的文件，包括但不仅限于风险警告提示，适用于特定交易的条款术语以及包括适用于不同交易平台的止损订单在内的附件。</p><br/>\
	<p>1.2我司可以根据条款15.2修改该协议。</p><br/>\
	<p>2.账户</p><br/>\
	<p>2.1客户特此指示我司以其名义在我司账簿上建立账户。客户承认并接受，除非双方以书面形式另有约定，否则账户将以美元形式存在。</p><br/>\
	<p>2.2客户代表，保证并承诺仅为自己，并不代表其他人或实体进行操作，所有交易将仅代表客户自己的利益。</p><br/>\
	<p>2.3客户是唯一被授权或允许能够进入账户进行交易的个人或实体。若客户指定了代理，那么客户在此承认他将对所有交易以及或代理的不作为负全责。我司或其合伙人，董事，主管，经理，代理或雇员，不论是否在代理的授权范围内，将不对该行为或不作为负责。</p><br/>\
	<p>2.4若客户多于一人，所有这些人将共同并各自对该协议中的客户义务负责。在这种情况下（除非我司与客户之间另有书面协议）被授权进行或结束交易的客户或实体指的是所指人中的第一个。从账户中取款（根据条款5.1）要求有客户认可的所有人的签名确认。</p><br/>\
	<p>3.交易</p><br/>\
	<p>3.1您将是我司交易平台的一名使用者。您可以通过交易平台或其他我司制定的标准和有效地通知客户的移动平台形式进行交易。客户进行的所有交易均由客户自己负全责，承担所有风险和花销，并受该协议中的条款的约束，我们保留适时修改的权利。</p><br/>\
	<p>3.2我司不保证会以特定的价格执行客户的交易或所有交易，但会做出最大的努力来执行。我们可能在经过审慎思考后并在没有通知您的情况下拒绝您的交易请求，尤其是如果我们有理由相信您的交易将会违反任何我们我司设置的账户信用或交易限制，或者是该交易将违反该协议中适用于我司，客户，账户或交易的任何条款和条例。</p><br/>\
	<p>3.3客户在此做出以下承诺：(i)我司将进入交易过程，并起着委托人的角色；(ii)我司不会对客户提供建议，咨询或中间服务；(iii)我司将按客户意愿，部分或全部，以合适的方式（无论抵消或是其它方式）进行交易；(iv)除非其达到适用于我司或账户的法律和条款规定的程度，否则该协议中我司和客户不产生任何代理或受托关系。</p><br/>\
	<p>3.4如果客户在交易日未关闭外汇或差价合约交易，我司将自动将其交易展期交割至下个起息日，而相关货币对产生的利率差异，交易方向和账户产生的任何存储金或其他费用均将做出相应调整。根据条款7.1.1，将会给客户就其展期交割发送一个交易确认。若账户中的资金达不到利率调整的金额，那么我们将有权关闭之前的未平仓交易或根据条款4.3电话通知您追加保证金。</p><br/>\
	<p>3.5正常情况下，我司给出卖价和买价。对于现货外汇交易来讲，这些价格来自于银行间外汇市场，对于差价合约交易来说，这些价格来自于市场上证券，商品以及其他产品交易的价格。较低的卖价和较高的买价之间的差距就是“点差”。对于有些交易来讲，点差会随时波动。我司有权在不通知客户的情况下改变点差。</p><br/>\
	<p>3.6我司的报价是由我司经过审慎斟酌之后订立的。客户只能够按照我司的当前定价进行交易。在报价之后，客户接受价格并进行交易时，价格可能随时发生变化。请参见以下条款12.2.2和12.2.3。</p><br/>\
	<p>3.7我司通过慎重的考虑，在给出通知后可能向您提供“市场执行”服务。因此您所有的交易将按照“市场价格”执行，而不会按照您要求在屏幕上所显示的价格执行。在价格波动剧烈或交易量庞大时，您的交易可能被延误并将按照次好价格执行。止损/限价单也可能受此影响。</p><br/>\
	<p>3.8客户进行的交易设有最大限制，由我司经过深思熟虑后设置，我司将通过交易平台给出通知告示。</p><br/>\
	<p>3.9我们根据您或由您授权的个人给出的指示，要求和通知（不管是否用书面或其它方式）进行活动。</p><br/>\
	<p>3.10我们的报价可能会遇到错误。在不损害我们或您在普通法律下的权利的情况下，我们或您（无论我们确认与否）都不应受交易时你我均知晓的错误价格的误导。</p><br/>\
	<p>3.11无论何时因何种原因，您无法与我们联系，我们将不对其构成的损失，伤害或产生的费用负责，除非是因我方的错误和延迟造成。</p><br/>\
	<p>3.12已到期的差价合约是无法滚动到下一个合约月份。您承认熟悉差价合约的到期日期和时间是您的责任。如果您没有在最后一个交易日（期货到期通知）之前或当天关闭即将到期的差价合约，一旦我们获得即将到期的差价合约的结算价，我们将自动关闭您持有的差价合约订单。</p><br/>\
	<p>3.13即将到期的差价合约的结算价，将会是(a)由相关的交易所计算得出的相关标的市场的最后交易价格或关闭前的价格或适用的官方报价或价格；(b)当这类型到期的差价合约被关闭时所产生的任何差价。</p><br/>\
	<p>3.14当某个特定的到期差价合约以结算价关闭时，差价的详情将由(a)您的账户类型；以及(b)根据要求提出的标准合约规格来决定。您承认，熟悉期货到期通知以及当我们关闭您的交易时所产生的任何差价是您的责任。</p><br/>\
	<p>3.15为了在我司交易平台保持足够的资格，您同意您将不会在我们的平台上进行任何与我们对剥头皮定义相关的交易。我司把剥头皮定义为利用互联网延迟、因技术问题或其它条件导致的价格延迟、或是买卖订单几乎在同时进场而赚取利润的一种交易策略。剥头皮被视为严重违反我们的条款和条件，因此，我司可能有绝对的酌情权关闭、替换、撤销任何交易或是立即关闭账户。</p><br/>\
	<p>4.保证金要求</p><br/>\
	<p>4.1要在账户里进行交易，客户必须确保账户里面有足够的保证金，保证金数额由我司经过深思熟虑之后确定。客户有责任确保每笔交易时刻都能够满足保证金要求。任何时候如果账户出现保证金不足的情况，我司可能会向客户发出通知（“追加保证金通知”）或是视情况需要，在不另行通知的情况下关闭所有未平仓合约。通常情况下，客户不会收到追加保证金的电话，但是我们保留这样做的权利。</p><br/>\
	<p>4.2当账户处于开放状态时，客户存入账户的第一笔保证金存款将不得少于我司规定并通知客户的最小金额。该笔存款可以通过银行转账，信用卡付款或双方商定的其他方式进行。该笔存款以及之后存入的保证金，当前未平仓合约和已平仓合约所产生的盈利和亏损，日常展期交割产生的利息，佣金等都可以看作是该账户中交易的凭证。</p><br/>\
	<p>4.3我司可能在经过深思熟虑之后改变最小保证金要求，或给客户追加保证金电话，要求客户存入相继的保证金。在接到我司的要求之后，客户应存入保证金到对应的账户里。</p><br/>\
	<p>4.4请注意，我们不接受任何第三方支付。同样，我们也不会把您账户的资金付给任何第三方。</p><br/>\
	<p>4.5如果客户未能及时存入保证金，入金或其他交易产生的费用，我司可能会在未通知您的情况下关闭所有未平仓合约。</p><br/>\
	<p>5.客户取款以及关闭账户</p><br/>\
	<p>5.1客户可以要求我司允许从账户中取款。计算取款金额时，我司将考虑被要求取款账户的余额以及该客户名下其它账户是否有赤字，减去所有账户的交易信用额度（由我司提供，仅用于交易）。为了避免疑问，如果一个账户余额为正，其它任何一个账户有赤字，那么客户可以取款的额度将为余额为正的账户减去该客户其它账户的总赤字。所有取款必须提出书面申请，用我方接受的格式。在不损害该协议我司权益的情况下，我司应当在收到客户书面取款指示的7个营业日内，扣除任何银行和其它转账费用后，转移超出的金额（如果有的话，我司视情况而定有权全权处理）。为了避免嫌疑，我司所做的任何转账都受到以下相关法律法规约束：(i)包括但不仅限于反洗钱法，税务部门的扣税要求以及外汇部门控制外币转出限制的相关法律和规定；(ii)客户出具我司要求的全部确认文件。</p><br/>\
	<p>5.2如果客户希望取走多余的金额（如以上5.1解释）并关闭账户，客户必须通知我司。我司依据指示做出转账后（如有任何的），我司将根据条款第11条关闭该账户。任何保留下来弥补亏空的金额将被分配到出现赤字的账户里。</p><br/>\
	<p>6.费用和佣金</p><br/>\
	<p>6.1在您参与任何交易之前，我们会跟您就佣金和费用的金额达成共识，并列在报表上。佣金和费用可能会在未通知您的情况下发生改变。</p><br/>\
	<p>7.报告</p><br/>\
	<p>7.1我们将以邮件方式和通过交易平台发送给您有关账户和交易的如下报告：</p><br/>\
	<p>7.1.1每个工作日的报表列出了之前的交易明细（包括价值和汇率），将在不迟于下一个工作日内发给客户。</p><br/>\
	<p>7.1.2每个月的账户报表包括客户进行的所有交易的详情，未平仓合约以及存入或取出的金额，同时也包括任何贮存管理费详情，余额和报表日期。</p><br/>\
	<p>7.2除非您在收到日报表后的2个工作日内提出异议，否则日报表将被视为最终单据，可用做任何用途。</p><br/>\
	<p>8.赔偿</p><br/>\
	<p>8.1我司或其合作伙伴，董事，主管，雇员或代理商均不对与该协议或交易有直接或间接关系的损失或债务负责，除非是因我司，其合作伙伴，董事，主管，雇员或代理商的玩忽职守或蓄意误导所致。</p><br/>\
	<p>8.2客户需对一切的理赔、损失、责任、毁坏、花费（包括合理的律师费用）承担赔偿责任，并承认我司，我司合作伙伴，董事，主管，雇员，代理商，继承人以及指定人（总称“赔偿人”）不承担任何责任。这些情况包括：对因客户失职而导致的以上任意损失以及该协议中与之相关的所有责任，和/或该协议下我司对客户执行的所有权利负责。</p><br/>\
	<p>8.3客户承认并同意任何给出的有关账户的口头信息未经证实，是不完全的，客户相信此信息的话，得自己负全责。我司对其提供的报价或交易平台或其他方式提供的反映市场真实情况的信息不做任何明示或暗示的保证。另外，我司不对交易平台以及/或与此有关的内容，包括但不限于出于商业目的或其它，作任何保证。如果出现因我司的错误或电脑或系统操作不当引起的报价错误（客户已经知道或本应清楚），我司将不对此导致的客户账户余额错误负责。我司保留对此做出合适的修改或调整的权利。任何因该错误报价引起的争议将在该错误发生之时该类产品的合理市场价值的基础上得到解决。</p><br/>\
	<p>8.4我司不对任何由客户直接或间接引起的超出我司控制之外的，任何性质的损失，破坏或花销包括但不仅限于任何因技术原因（例如，但不仅限于对电脑系统造成的损害，或因电脑设备或软件管路不当而导致部分或全部数据或记录延迟，损失，错误或省略）导致我司无法进行交易或进行不当的交易负责，除非该错误由我司蓄意或玩忽职守而造成。</p><br/>\
	<p>9.违约事件</p><br/>\
	<p>9.1若出现以下9.1(a)或9.1(d)至(j)中所列的违约事件，我司将按照10.1条款执行其权利。若条款9.1(b)或9.1(c)(“破产违约”),情况出现，那么我司将执行条款10.2.</p><br/>\
	<p>客户(i)未能在款项到期支付时付款（包括但不仅限于，对追加保证金通知要求做出的支付）或者(ii)在我司向客户做出不作为通知之后2个工作日内仍未遵守该协议的条款或交易；或</p><br/>\
	<p>客户开始自愿诉讼或其他程序，以根据任何破产、无偿债能力、监管、监督或类似法律（包括如果破产，可能是适用于客户的任何公司或其他法律），寻求或计划对客户或客户债务进行清算、重组、安排或和解、冻结或延期偿付，或其他类似救济，或寻求客户或客户资产的任何实质部分任命托管人、接管人、清算人、监护人、管理人、破产管理主任或其他类似官员（均称为“破产管理主任”），或寻求为客户或客户资产的任何实质部分任命破产管理主任，或</p><br/>\
	<p>针对客户开始非自愿诉讼或其他程序，以根据任何破产、无偿债能力、监管、监督或类似法律（包括如果破产，可能是适用于客户的任何公司或其他法律），寻求或计划对客户或客户债务进行清算、重组、安排或和解、冻结或延期偿付，或其他类似救济，或寻求客户或客户资产的任何实质部分任命破产管理主任，或</p><br/>\
	<p>客户去世，心智变得不健全，无法如期偿还债务，或按照破产法和无偿还能力法定义的属于破产或不具备偿还能力的情况，或到期时无法偿还债务，或不能在证明其该等债务已经到期应付的协议或文件宣布该等债务到期应付的任何时候支付，或为执行、查封或扣押，或他项权利所有人占有客户的所有或任何部分财产、企业或资产（无形和有形资产），开始与本业务条款有关的任何诉讼、起诉或其他法律程序（以下简称为“法律程序”）或</p><br/>\
	<p>客户在该协议条款下作出或给予或视为作出或给予的任何陈述或保证被证实为其作出或给予或被视为作出或给予时不真实、有误或其重大方面有令人误解的信息，或</p><br/>\
	<p>客户提供给我司的所有信息以及/或文件实质上应该是真实，准确和完整的，所有文件复印件均是原件的副本；或</p><br/>\
	<p>我司认为为防止被认为是或可能违反任何法律、适用规则、或市场惯例的良好标准所必需的或值得的；或</p><br/>\
	<p>我司认为出于自身保护；或</p><br/>\
	<p>我司认为对于我司采取的保护或任何行动所必须的或值得的，或本公司认为可能对客户履行其在本协议条款下的任何义务有重大不利影响的事情发生；或</p><br/>\
	<p>任何与客户以及我司或我司合伙人有关的其他协议描述下的违约事件。</p><br/>\
	<p>9.2一旦发生违约事件或我司在经过深思熟虑之后认为客户不会执行（或我司有理由相信客户不具备这样的能力或将来不会）对我司承诺的义务，我司有权在不通知客户的情况下做出如下动作：</p><br/>\
	<p>（a）为支付、减少或消除本公司在客户的任何合约、仓位或承认项下的损失或责任，冲销、更换或撤销任何交易，买入、卖出、借出或借入或签订任何其他交易，或在我司自行认为必要或适当的时间，亦本公司自行认为必须或适当的方式，采取或禁止采取的其他行动；并/或</p><br/>\
	<p>（b）将当时未清偿的任何或所有交易视为已被客户拒付，在这种情况下，我司在该等交易项下的义务应被取消和终止。</p><br/>\
	<p>9.3在不损害条款9.2的情况下，除破产违约意外的默认情况发生，如果在该账户下进行的任何交易是在非公开信息的基础上进行，受市场信息或数据以及其他任何我司认为与市场滥用有关的行为或其它不合适行为发生，我司有权自行决定关闭，替换或撤销任何交易或关闭账户。</p><br/>\
	<p>市场滥用包括由同一人士或不同人士同时在同一个价格或附近建立相同数量的买入和卖出订单的交易，除非交易是在符合相关交易平台规定的合法途径下进行的（例如交叉交易）。</p><br/>\
	<p>10.违约终止</p><br/>\
	<p>10.1告示终止</p><br/>\
	<p>在不损害条款9.2的情况下，根据条款10.2，若发生任何违约事件，我司将会通知客户一个具体的“清算日”，并根据条款10.3的规定进行清算。</p><br/>\
	<p>10.2.自动终止</p><br/>\
	<p>除非我司有另外指示，否则针对任何破产违约发生的日期将自动被视为清算日（称为“自动终止”），在这种情况下，我司将无须告知客户并执行条款10.3。</p><br/>\
	<p>10.3.清算数目的计算</p><br/>\
	<p>一旦清算日被确定:</p><br/>\
	<p>(a)我司和客户必须在清算日前后对任何一项交易继续支付，并通过结算的方式（例如支付，抵消或其它）履行清算数额的义务。</p><br/>\
	<p>(b)我司应就本条款[10.3(a)]有关的交易（在清算日或合理时间内）尽快决定合理折现，因根据本协议终止相关交易在的总成本、损失或，可能产生的盈利，应以账户基础货币（以下称“基础货币”）表示，（同时，如适当，包括任何交易损失，融资成本，或不重复计算下，因终止、清算、获得、执行或重新建立对冲或相关交易头寸而产生的成本，损失，或可能产生的收益）；以及，</p><br/>\
	<p> (c)我司将每笔损失和花销如上定义为正值，将每笔收益定义为负值，将所有数目相加得到一个正值或负值，以基础货币计价（“清算数目”）。</p><br/>\
	<p>10.4支付者</p><br/>\
	<p>如果按照条款10.3得出的清算数目为正数，那么是客户应该支付给我司；如果是负数，那么我司将支付给客户。当这笔数目被清算出来后，我司应尽快通知客户该笔款项的额度以及支付者是谁。</p><br/>\
	<p>10.5其他交易</p><br/>\
	<p>当终止和清算根据条款10.3发生时，我司有权自行决定，根据条款10.3的规定进行终止或清算其他任何未平仓的交易。</p><br/>\
	<p>10.6付款</p><br/>\
	<p>根据条款10.3规定，清算数目将以基础货币形式在交易日收盘时进行支付（可以按要求转化成其他货币，转换产生的费用由客户承担，（如果可行）将从客户的支付款项里扣除）。任何在结算之日未进行结算的清算数额将被视为未支付款项，将会产生利息。利息将以日累计，并由客户支付。</p><br/>\
	<p>10.7基础货币</p><br/>\
	<p>在计算清算数目时，我司可能将其转换成以其它基础货币为主，汇率按照计算当日为准。</p><br/>\
	<p>10.8付款</p><br/>\
	<p>除非清算日已经发生，或已有效被确认，否则在与客户有关的违约事件已经发生并持续着的情况下，我司将没有义务做出任何交易下的任何支付或交付。</p><br/>\
	<p>10.9额外权利</p><br/>\
	<p>我司在该条款下的权利不受我司具有的其他权利（协议，法律运作或其它）的限制和排斥，与其成互补关系。</p><br/>\
	<p>10.10净额结算的运用</p><br/>\
	<p>自该协议生效之日起，条款10适用于我司与客户之间的每一笔交易。</p><br/>\
	<p>10.11平仓</p><br/>\
	<p>除非以书面形式另有规定，如果我司为了关闭与客户之间已存在的交易，那么该项交易产生的双方各自的义务则在第二项交易开始之时自动终止，除了在平仓时出现相关的清算数额</p><br/>\
	<p>11.终止告示</p><br/>\
	<p>11.1受任何使用法律或法规的监管，任一方可以通过书面通知的形式终止该协议（以及我司与客户之间的关系）。</p><br/>\
	<p>11.2如果客户拒绝遵守或执行该协议下的任何规定或客户不具备偿还能力或发生其它违约事件，我司将有权自行决定在任何时候根据9.2条款或条款10终止该协议。</p><br/>\
	<p>11.3一旦终止该协议，所有客户给我司的应付款项应立即执行，包括但不仅限于：</p><br/>\
	<p>（a）所有未支付的费用，以及</p><br/>\
	<p>（b）任何在关闭交易或结算过程中产生的损失或费用，或由我司平仓而产生的未支付义务，包括但不仅限于实施条款9.2和/或条款10的权利。</p><br/>\
	<p>11.4终止不得影响当时仍受本协议条款管辖的未实现权力和义务与交易，以及我司和客户就该等交易同意的特殊条款，直至所有义务获完全履行为止。</p><br/>\
	<p>12.规定条款</p><br/>\
	<p>12.1客户资金</p><br/>\
	<p>(a)我们将您定义为零售客户，因此，根据条款12.1(b)和12.1(c)，我们需要将一笔等同于您的总净值（如平台里显示）的款项放在客户资金账号里。我们将根据客户资金安全规定在许可的客户银行账户持有您的资金，与我们的资金分离开。该资金可能与其他客户的资金一起放在客户账户里。这意味着，当银行持有的客户银行账户发生违约时，这个公共账户的资金池的任何差额将按比例由您和其它客户分摊。</p><br/>\
	<p>(b)每个工作日我们需对客户银行账户和我们自己账户的资金进行结算，任何款项需要支付到您的账户或从您的账户中扣除，将在隔个工作日进行。我们可能频繁做出这种结算和汇款，从而来保护我们或是您的利益。</p><br/>\
	<p>(c)如果您没有持有任何订单，在过去6年里未进行过任何交易，且我们无法联系您，那么您同意我们可能终止将您的资金视为客户资金，并从客户资金账户里转走。该资金仍属于您，同时基于此条款，我们将保留所有从客户资金银行账户中的余额记录，以便日后您想要求公布余额做准备。</p><br/>\
	<p>(d)根据条款12.1(a)，12.1(b)或是12.1(c)，我们将不会支付您客户资金所产生的利息。</p><br/>\
	<p>12.2订单执行</p><br/>\
	<p>12.2.1条款12.2规定我司为客户订单提供的最佳的执行方式。我司将努力为客户提供具有竞争力及高品质的执行能力。</p><br/>\
	<p>12.2.2我们提供给客户的，客户选择进行交易的，进入到交易平台里面的报价均来源于一批我司认可的独立的信息提供商。我司继续对不同的提供商给出的报价信息进行处理，并在经过确认之后输送到交易平台，根据市场行情调整价格向客户提供合适的点差。</p><br/>\
	<p>12.2.3交易平台上显示的价格和客户进行交易时的价格在条款12.2.2中有叙述到。这些报价与其他数据源或信息提供商提供的价格不同。</p><br/>\
	<p>12.2.4任何在美国东部标准时间4:00pm仍未平仓的外汇现货或差价合约现货交易将被进行展期交割，同时会对相关货币对的利率差异、交易方向以及其他费用做出调整。</p><br/>\
	<p>12.2.5资金流动性可能会影响订单执行。当客户建立大量订单时，可能会发生订单失衡或积压，因此需要更多的时间来执行订单。订单的数量和大小，当前报价和最近一次买卖的信息速度，以及系统容量受到限制均会造成订单被延迟执行。</p><br/>\
	<p>12.2.6我司通常会衡量执行订单的总体质量。</p><br/>\
	<p>12.3利益冲突</p><br/>\
	<p>12.3.1为了避免引起冲突，同时为了增强客户信心，我司执行利益冲突政策，包括程序和如下控制：</p><br/>\
	<p>（a）避免引起利益冲突，包括在必要时候拒绝执行行动或命令；以及</p><br/>\
	<p>（b）执行其商业行为，为了能最好的确保我司客户的利益；并对可能引起利益冲突的活动信息进行严格保密。</p><br/>\
	<p>12.3.2这些程序和控制包括确保客户订单能够更好的执行，尤其是与金融产品或资产分配相关的部分的行政和组织程序。同时专门为我司员工制定了报酬政策，以阻止任何交易产生的利益分配费用。我司员工不得在我司进行外汇现货和/或差价合约现货交易。</p><br/>\
	<p>12.3.3我司没有义务必须披露我司或我司合作伙伴或任何其他与我司有关的人在某项特定交易中具有的物质利益，或没有义务披露在某特定情况下可能存在的利益冲突，因我司有理由认为自己能够处理这些冲突，并相信能确保防止损害客户利益行为的发生。我司没有义务就得到的任何利益、佣金或报酬向客户做出解释。</p><br/>\
	<p>12.4数据保护</p><br/>\
	<p>（a）客户在此同意我司可以使用、储存或处理客户提供的与账户有关的个人信息，并同意在欧洲经济区以外传输客户信息。</p><br/>\
	<p>（b）客户同意我司将客户信息传递给我司集团内部的其他公司或其它有助于我司处理/分析信息的公司。如果客户不同意将个人信息用作这些用途，必须书面通知我司。</p><br/>\
	<p>（c）客户同意我司将其个人信息作市场和信息管理、市场调研或给集团内部其它公司或通过谨慎筛选后的其它机构之用，以更好的服务于客户。如果客户不希望自己的个人信息用作这些用途，必须书面通知我司。</p><br/>\
	<p>12.5赔偿计划</p><br/>\
	<p>如果客户是合格的索赔人，且我司不具备偿还债务能力，那么客户可以对我司提起法律诉讼。</p><br/>\
	<p>12.6投诉</p><br/>\
	<p>（a）客户可以在第一时间将投诉或异议告知我司，因为这样有助于我司更好地解决处理问题。</p><br/>\
	<p>（b）任何投诉或异议应该在第一时间反映给我司客服团队。如果您对我们的异议解决不满意，您可以写信给我司的法律部门。</p><br/>\
	<p>13.陈述和保证</p><br/>\
	<p>当客户参与交易，或每次建立订单，或给出任何指示时，客户向我司陈述并保证：</p><br/>\
	<p>(a)客户在签署这份协议时，已经阅读并理解风险警告提示，以及条款13中的陈述和保证；</p><br/>\
	<p>(b)客户提供给我司的信息和文件是真实，准确和完整的。若有任何变动，客户需立即通知我司；</p><br/>\
	<p>(c)客户被授权参与并执行该协议和以下所有交易；</p><br/>\
	<p>(d)参与该协议，建立订单，或执行交易或给出其他指示都不会违反适用于客户的法律、法规、条例、协议、义务、或政策；</p><br/>\
	<p>(e)客户了解并接受，他根据自己的投资目标和经验对交易负责，并对个人的纳税负责。</p><br/>\
	<p>(f)客户精神健全，并具有法律能力，通过我司提供的交易平台或账户将全权执行外汇现货以及差价合约现货交易；</p><br/>\
	<p>(g)客户（如果不是自然人）受其组织或公司团体的法律管辖，经其正式授权并合法存在；并正式通过了其组织文件和法律要求，可以能执行该协议或参与该交易；执行该协议的个人或给出与交易相关的指示亦需经过授权。</p><br/>\
	<p>(h)客户是账户里所有存款款项的唯一最终受益人，其他人不享有账户的任何利息。该客户承诺并接受，不得将账户里的资金或利益让渡给第三方；</p><br/>\
	<p>(i)所有存入账户的资金均来自合法渠道，与任何非法或罪犯活动无关；</p><br/>\
	<p>(j)客户已做好准备，并在经济上有能力承担进行外汇现货和差价合约交易产生的风险和损失。</p><br/>\
	<p>此外，如果客户违反了第13条款，我司有权利对该客户持有的任何头寸做出修改，不管是开仓或是早前平仓的，撤销以及在任何时间以当前市场价格平掉任何一个或所有头寸。</p><br/>\
	<p>14.因特网，软件和电脑的使用</p><br/>\
	<p>您理解并承诺以下条款：</p><br/>\
	<p>(a)通常情况下因特网都是可以信任的，但是技术问题和其他情况可能导致您无法登录交易平台。</p><br/>\
	<p>(b)使用因特网，用户有可能遭遇因特网结构以及其他与因特网有关的设备问题。</p><br/>\
	<p>(c)您对在自己私人电脑里面的所有未经授权的密码使用以及信息使用保护方法之外的方法负责。</p><br/>\
	<p>(d)交易平台的登录密码是秘密的，属于您私人所有，不得外泄。您自己对密码的使用和保存负全责，包括但不仅限于，有责任保护其不受损害，不得将密码外泄他人，不论是出于佣金或不作为目的，以及/或不恰当的存储所致。</p><br/>\
	<p>(e)您在此同意并承诺，一旦有未经您授权的个体登入账户，以及/或任何破坏隐私以及违反交易平台安全的行为发生，应立即报告我司。</p><br/>\
	<p>(f)我司不对任何技术问题，系统故障或错乱，交通线路故障，设备或软件故障或不作为，系统登录问题，系统容量问题，因特网高容量交通需求，安全故障，未经授权登录以及其他电脑问题负责。</p><br/>\
	<p>(g)对您能够在任何时候任何地点都能登录并使用交易平台，或在任何地点交易平台能正常运行，或交易平台能一直能够提供不间断的无错误的服务，我司不作出任何陈述、保证或担保。</p><br/>\
	<p>(h)我司不对任何因其他用户使用您账户而产生的损失或损坏负责，无论您知情与否。</p><br/>\
	<p>(i)使用我司网址、交易平台以及我司提供的信息完全由您自己负责，您在此确认完全明白丛因特网接收的信息服务所带来的风险。</p><br/>\
	<p>(j)我司可能向您提供如移动止损和/或自动交易等软件设备。使用这种设备是有选择性的。您明白我司是不会建议或支持此自动交易软件，并且根据条款14（f）。</p><br/>\
	<p>(k)Cookies政策</p><br/>\
	<p>我司高度重视您的隐私，且我们致力于向您提供需要管理您的cookies相关的信息和工具。我们可能在您的设备安装我们网站以及交易平台的重要功能的cookies，禁用这些将阻止您访问我们的交易平台以及网站上其它重要部分。这些cookies有助于您更快地访问到您需要的信息，同时也允许我们能够调整我们的网站内容以满足您的需求。</p><br/>\
	<p>我们可能会使用cookies来帮助识别您的计算机，以追踪网站的使用率以及修改您的用户体验。建议您启用“接受cookies”以便您能享受到我们网站上所有的功能和服务。这么做也意味着您同意我们和第三方（基于以上目的）分享您的个人信息。我们可能会使用这些信息进行分析，以改善我们的产品和服务。此外，我司可能使用外部服务供应商来追踪我们网站的流量和使用情况。</p><br/>\
	<p>15.整体协议和修正</p><br/>\
	<p>15.1该协议和此处提及的任何文件构成该协议的整体，并取代任何所有之前的协议。</p><br/>\
	<p>15.2我司可以在通知您的情况下修改该协议（在某个特定期间修改部分协议）。为了不违反条款4，任何有关保证金比例或执行政策的修改则会立即执行。其他修改则在通知规定之日起生效，不得超过发送通知之日起的10个工作日。</p><br/>\
	<p>除非有我司授权个体的书面或电子形式的通知，否则不得修改该协议。</p><br/>\
	<p>16.分配</p><br/>\
	<p>我司可以根据该协议在提前通知您的情况下分配其权利和/或义务。您不可以分配权利和/或义务，除非得到我司事先的书面同意。</p><br/>\
	<p>17.条款可分割性</p><br/>\
	<p>如果该协议的任何条款或适用于交易，个人或情况的条款失效，变得不合法或不可执行，那么该协议的剩余条款将不受影响，仍然可以在法律范围内最大限度地被执行。</p><br/>\
	<p>18.通信</p><br/>\
	<p>本协议涉及的报告及任何通知都将不时发送至您提供给我司的地址或电邮地址。如果通过电邮、传真、手工投递或由交易平台发送通知，这些通知在发送时均被视为成功投递；如果通过邮寄信件，则被认为在三个工作日内成功投递。您发送的通信只有在我司成功接收到之后，才被视为成功投递。</p><br/>\
	<p>19.第三方权利</p><br/>\
	<p>对于非本协议一方的个人，本协议的所有条款都不会遵照执行。</p><br/>\
	<p>20.电话和电话录音</p><br/>\
	<p>20.1您了解并同意任何及所有您与我司之间的电话通话都可能根据适用法律和条例进行录音。</p><br/>\
	<p>20.2您理解我司将在一段时期内根据最新的文档保管政策保留这些录音。</p><br/>\
	<p>20.3我司强烈建议您保留与我司的所有通信记录包括时间、日期和您指令的性质。如果您与我司之间出现异议，这些细节将非常重要。</p><br/>\
	<p>21.法律和管辖权</p><br/>\
	<p>21.1该协议以及任何纠纷和索赔（包括非合同纠纷和索赔）应受法律管辖，并应根据法律诠释。</p><br/>\
	<p>21.2在此我司和您皆同意法院对本协议或交易所产生的任何纠纷或索赔具有非专属性管辖权，并且我司和您都服从法院的管辖，您需了解并同意我司能够在任何合适的管辖区向客户提出任何数额的赔偿。</p><br/>\
	</div>';
}