//banner
export default{
	date(time){
		var date= new Date(time);
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var date=date.getDate();
	
		if(month<10){
			month='0'+month;
		}
		if(date<10){
			date='0'+date;
		}
		return year+'-'+month+'-'+date;
	},
	dialog(info){
		$(".fixed-info").addClass("active").children(".info").html(info);
		setTimeout(function(){
			$(".fixed-info").removeClass("active");
		},1000);
	},
	week(index){
		switch(index){
			case 0:
				return '周一';
			case 1:
				return '周二';
			case 2:
				return '周三';
			case 3:
				return '周四';
			case 4:
				return '周五';
			case 5:
				return '周六';
			case 6:
				return '周日';
		}
	},
	loading(status){
		if (status) {
			$(".loading_box").addClass('active');
		}else{
			$(".loading_box").removeClass('active');
		}
	},
	time(time){
		var oTime=new Date();
		oTime.setTime(time);
		var oHour=oTime.getHours();
		var oMin=oTime.getMinutes();
		if(oHour<10){
			oHour='0'+oHour;
		}
		if(oMin<10){
			oMin='0'+oMin;
		}
		return oHour+':'+oMin;
	},
	GetRequest() {  
	   	var url = window.location.search; //获取url中"?"符后的字串  
	   	var theRequest = new Object();  
	   	if (url.indexOf("?") != -1) {  
	     	var str = url.substr(1);  
	      	strs = str.split("&");  
	     	for(var i = 0; i < strs.length; i ++) {  
	        	theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);  
	      	}  
	   }    
	   return theRequest;  
	},
	getnow(){           //获取当前时间函数
	    var d = new Date();
	    var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
	    return str;
	},
	toDate(str){          //时间比较函数前处理
	    var sd=str.split("-");
	    return new Date(sd[0],sd[1],sd[2]).getTime();
	},
	timeFormatters(value) {         //时间转换函数
       	var value=String(value);
      
        var t = new Date(parseInt(value.replace("/Date(", "").replace(")/", "").split( "+")[0]));
        var mouth=t.getMonth()+1;
       	var daye=t.getDate();
        
       	if(mouth<10){
        	mouth="0"+mouth.toString();
       	}
       	if(daye<10){
        	daye="0"+daye.toString();
       	}
        return t.getFullYear() + "年" + mouth + "月" + daye+"日";//+ " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
   	},
   	setCookie(name,value){ 
        var Days = 30; 
        var exp = new Date(); 
        exp.setTime(exp.getTime() + Days*24*60*60*1000); 
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
    },
	getCookie(name){   //读取cookies 
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
     
        if(arr=document.cookie.match(reg)){
     
            return unescape(arr[2]); 
        }
        else {
            return null;
        }
    },
	delCookie(name){   //删除cookies 
        var exp = new Date(); 
        exp.setTime(exp.getTime() - 1); 
        var cval=this.getCookie(name); 
        if(cval!=null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString(); 
        }
   	}
}


