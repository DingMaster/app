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
	switch (app) {
		case 'com.guli.xz123':
			window.location.href = "../xz123/";
			break;
		
		default:
			/*获取加载地址*/
		window.location.href = "../bjh1/";
	}
	
		