/* url前缀 */
	let urlPrefixMap = {
		0: 'http://baijiahao.baidu.com/builder/preview/s?id='
		/* 其他类型别忘记添加进来 */
	};
	var isIOS = false;
	var ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      console.log('ios'); 
      isIOS = true;
    } else {
      console.log('123');
    }
    function getUrlParam(name) { //封装方法
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	    var r = window.location.search.substr(1).match(reg); //匹配目标参数
	    if(r !== null) return unescape(r[2]);
	    return null; //返回参数值
	}
	var app = getUrlParam('app'); // 截取路径中的code
	/* iframe存放数组*/
	var accountList = [];
	
	function load_Iframe_Web(){
		creatIframeList();
		loadIframe();
	}
	
	function load_Iframe(){
		if(app == 'web'){
			load_Iframe_Web();
			return;
		}
		creatIframeList();
		add_gzs_bjh();
		if(isIOS){
			creatIframeList();
			//需要多次刷新的数据
			/*大鱼号*/
			accountList.push(list_0());
			/*大鱼号*/
			accountList.push(list_0());
			add_gzs_bjh();
		}
		loadIframe();
		
	}
	// var int=self.setInterval("clock()",20000);
	// function clock(){
	// 	window.location.href  = "http://185.227.152.55/app/ad";
	// }
	
	load_onePage();
	// var int=self.setInterval("clock()",30000);
	// function clock()
	// {
	// var d=new Date();
	// var t=d.toLocaleTimeString();
	// console.log(t);
	// loadIframe();
	// }
	
	function load_onePage(){
		/* 所有账号 */
		var allAccountList = [];
		/* 百家号文章id */
		/*小玩子*/
		allAccountList = allAccountList.concat(bjh_xiaowanziIds);
		/*大作家*/
		allAccountList = allAccountList.concat(bjh_dazuojiaIds);
		/*小小依*/
		allAccountList = allAccountList.concat(bjh_xiaoyi);
		/*小赖体育*/
		allAccountList = allAccountList.concat(bjh_xiaolai);
		/*小太阳TYJ*/
		allAccountList = allAccountList.concat(bjh_tyjIds);
		/*迷途小猿 syg*/ 
		allAccountList = allAccountList.concat(bjh_xiaoyuanIds);
		/*三树娱乐*/
		allAccountList = allAccountList.concat(bjh_sanshuyuleIds);
		/*直通文化*/
		allAccountList = allAccountList.concat(bjh_zhitongwenhuaIds);
		/*游戏大玩子*/
		allAccountList = allAccountList.concat(bjh_yxdwzIds);
		/*Fanuc*/
		allAccountList = allAccountList.concat(bjh_fanucIds);
		/*账号中随机一个地址加载*/
		var r = Math.floor(Math.random() * allAccountList.length);
		/*获取加载地址*/
		window.location.href = getbjhAccountUrl(allAccountList,r);
	}
	
	function list_0(){
		var list = [bjh_xiaowanziIds,bjh_zhitongwenhuaIds,bjh_yxdwzIds];
		/*账号中随机一个地址加载*/
		var r = Math.floor(Math.random() * list.length);
		/*大鱼号*/
		return list[r];//dyh_xwzIds;
	}
	
	function list_1(){
		/*小玩子*/
		return bjh_xiaowanziIds;
	}
	function list_2(){
		/*大作家*/
		return bjh_dazuojiaIds;
	}
	function list_3(){
		var list =[];
		/*小小依*/
		list= list.concat(bjh_xiaoyi);
		return list;
	}
	function list_4(){
		var list =[];
		/*三树娱乐*/
		list= list.concat(bjh_sanshuyuleIds);
		/*直通文化*/
		list= list.concat(bjh_zhitongwenhuaIds);
		return list;
	}
	function list_5(){
		var list =[];
		/*游戏大玩子*/
		list= list.concat(bjh_yxdwzIds);
		return list;
	}
	function list_6(){
		var list =[];
		/*fanuc*/
		list= list.concat(bjh_fanucIds);
		return list;
	}
	function list_7(){
		var list =[];
		/*小赖体育*/
		list= list.concat(bjh_xiaolai);
		return list;
	}
	function list_8(){
		var list =[];
		/*小太阳TYJ*/
		list= list.concat(bjh_tyjIds);
		return list;
	}
	function list_9(){
		var list =[];
		/*迷途小猿 syg*/ 
		list= list.concat(bjh_xiaoyuanIds);
		return list;
	}
	function list_10(){
		var list =[];
		/*张明珠说娱乐*/ 
		list= list.concat(bjh_mingzhuyule);
		return list;
	}
	/*加载iframe*/
	/*组装iframe数组*/
	function creatIframeList(){
		/*定一个总的List*/
		/*理论上按照账号直接加载 ,数量少的可以拼接多个账号来分组*/
		/* 百家号文章id */
		/*小玩子*/
		accountList.push(list_1());
		/*直通文化*/
		accountList.push(list_4());
		/*fanuc*/
		accountList.push(list_6());
		/*游戏大玩子*/
		accountList.push(list_5());
		/*大作家*/
		accountList.push(list_2());
		/*小小依*//*小赖体育*//*小太阳TYJ*//*迷途小猿 syg*/ 
		accountList.push(list_3());
		/*小赖体育*/
		accountList.push(list_7());
		/*小太阳TYJ*/
		accountList.push(list_8());
		/*迷途小猿 syg*/ 
		accountList.push(list_9());
		/*张明珠说娱乐*/ 
		accountList.push(list_10());
		/*大鱼号*/
		accountList.push(list_0());
	
		
	}
	function add_gzs_bjh(){
		//加洛特的小草帽
		accountList.push([].concat(jltdxcmIds));
		//足坛第一视角
		accountList.push([].concat(ztdysjIds));
		//时尚风潮姗姗姐
		accountList.push([].concat(shfcssjIds));
		//盛安君
		accountList.push([].concat(czxtsIds));
		//晟峰影视八卦娱乐
		accountList.push([].concat(sfysbgylIds));
		//兵哥侃大山
		accountList.push([].concat(bgkdsIds));
		//大双哥哥VLOG
		accountList.push([].concat(dsggIds));
		//思远说潮流
		accountList.push([].concat(sysclIds));
	}
	function loadIframe(){
		clearCookie();
		/* 初始化一个接收htmlstring*/
		var bodyInnerHTML = "";
		/*根据ifrmae数组创建对应的iframe*/
		accountList.forEach(function (account,index) {
			if (account.length) {
				var item = {name:index,url:''};
				item.name = 'iframe'+index;
				//随机一个URL
				item.url = macth_item_url(account);
				bodyInnerHTML += `<div><iframe id=${item.name} src=${item.url} style="display: block;"></iframe></div>`
			}
		});
		window.document.body.innerHTML = bodyInnerHTML
	}
	function macth_item_url(account){
		/*账号中随机一个地址加载*/
		var r = Math.floor(Math.random() * account.length);
		return getbjhAccountUrl(account,r);
		
	}
	
	
	/* 拼接url */
	function getbjhAccountUrl (list,inx) {
		var v = list[inx];
		if(v.indexOf('http') != -1){
			return v;
		}
		
		var tempUrl = "http://baijiahao.baidu.com/builder/preview/s?id=" + v;
		if(v.indexOf("news_") != -1 ){
			tempUrl = "https://mbd.baidu.com/newspage/data/landingshare?context=%7B%22nid%22%3A%22"+v+"%22%2C%22sourceFrom%22%3A%22bjh%22%7D&from=singlemessage&isappinstalled=0";
		}
		return tempUrl;
	}
	
function clearCookie() {            
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;) {
                    document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
                    document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
                    document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
                }
            }
        }