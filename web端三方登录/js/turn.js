var body = document.getElementsByTagName("body")[0];
var logType = sessionStorage.getItem("logType");
var dataObj = getLinkData();
console.log("link参数:",dataObj);
if(dataObj.state == "QQzg888"){    //返回参数中含有state，则为第一次请求(QQ)
	var scriptCode = document.createElement("script");      //通过跨域请求完成第二步请求
	scriptCode.src = 'https://graph.qq.com/oauth2.0/token?grant_type=authorization_code'
					+'&client_id=1106531912&client_secret='+'gWhdwoOQmlDEgqPZ'
					+'&code='+dataObj.code;
	body.appendChild(scriptCode);
}
if(dataObj.state == "wechatzg888"){    //返回参数中含有state，则为第一次请求(weixin)
	var scriptCode = document.createElement("script");      //通过跨域请求完成第二步请求
	scriptCode.src = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxe5748488f0c944ee&secret=007c38ef3f15f2fd750cf62cd199b734'
	+'&code='+dataObj.code+'&grant_type=authorization_code'
	body.appendChild(scriptCode);
}

function callback(data){   //第2、3步请求回调函数
	console.log("callbackData:",data);
	if(data.access_token != undefined){   //若返回参数含有access_token则为第二部回调
		var scriptToken = document.createElement("script");   //通过access_token跨域请求openid
		if(logType == "qqLogin"){
			scriptToken.src = 'https://graph.qq.com/oauth2.0/me?access_token='+data.access_token;
		}
		if(logType == "wechartLogin"){  //微信第二次请求含有openid
			console.log("access_token:"+access_token);
		}
		body.appendChild(scriptToken);
	}
	if(data.openid != undefined){   //回调中含有openid，请求自己的接口，完成登录
		sessionStorage.setItem("openid",data.openid);
		var postData = {}
		if(sessionStorage.getItem("logType")=="qqLogin"){
			postData = {
				qqAccount:data.openid,
				returnUrl:"/admin/index.html"
			}
		}else{
			postData = {
				weChatAccount:data.openid,
				returnUrl:"/admin/index.html"
			}
		}
		$.ajax({
			type:"post",
			url:loginUrl,
			async:true,
			data:postData,
			dataType:"json",
			success:function(data){
				console.log(data);
			},
			error:function(err){
				console.log("err:",err);
			}
		});
	}
}
function getLinkData(){
	var dataObj = new Object();
	var linkData = location.search;//将页面参数值转为obj
	if(linkData.indexOf("?")==0) linkData = linkData.substring(1);    //若链接参数含有？则去除
	var dataArr = linkData.split("&");
	for(var i=0; i<dataArr.length; i++){
		var oArr = dataArr[i].split("=");
		dataObj[oArr[0]]=(oArr[1]);
	}
	return dataObj;
}