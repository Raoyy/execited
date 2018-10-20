window.onload = function(){
	function Magnifier(obj1,obj2,mouse,times){ //显示图区域，放大后区域，鼠标跟随div，放大区域的大小倍数
		var oMouse_div = document.getElementsByClassName(mouse)[0];
		var x = oMouse_div.offsetWidth / 2;
		var y = oMouse_div.offsetHeight / 2;
		var oDiv1 = document.getElementsByClassName(obj1)[0];
		var oDiv2 = document.getElementsByClassName(obj2)[0];
		var div1_l = getOffsetLeft(oDiv1);
		var div1_r = div1_l + oDiv1.offsetWidth;
		var t = 0;
		var div1_t = getOffsetTop(oDiv1);
		var div1_b = div1_t + oDiv1.offsetHeight;
		var k = oDiv1.offsetWidth / oMouse_div.offsetWidth;
		var k2 = oDiv1.offsetHeight / oMouse_div.offsetHeight;
		oDiv2.style.width = x*times + 'px';   //为放大区域范围赋值
		oDiv2.style.height = y*times + 'px';
		oDiv2.style.backgroundSize = oDiv2.offsetWidth*k + 'px' +' '+  oDiv2.offsetHeight*k2 + 'px'; //为放大区域背景大小赋值
		oDiv2.style.display = 'none';
		oMouse_div.style.display = 'none';
		function getOffsetLeft(obj){    //获取元素到屏幕的left值
		    var tmp = obj.offsetLeft;
		    var val = obj.offsetParent;
		    while(val != null){
			    tmp += val.offsetLeft;
			    val = val.offsetParent;
		    }
			return tmp;
		}
		function getOffsetTop(obj){    //获取元素到屏幕的top值
		    var tmp = obj.offsetTop;
		    var val = obj.offsetParent;
		    while(val != null){
			    tmp += val.offsetTop;
			    val = val.offsetParent;
		    }
			return tmp;
		}
		window.onscroll = function(){   //获取屏幕滚动的距离
			t = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
		}
		document.onmousemove = function(ev){
			var oev = ev || event;
			var mouse_x = oev.clientX;
			var mouse_y = oev.clientY + t;//鼠标y值+屏幕滚动值，以补正屏幕滚动时带来的y值偏差
			if(mouse_x < div1_l + x){  //当鼠标div到达显示图区域最左边时，鼠标div不再继续向左
				oMouse_div.style.left = div1_l + 'px';
				if(mouse_y < div1_t + y){
					oMouse_div.style.top = div1_t + 'px';
				}else if(mouse_y > div1_b - y){
					oMouse_div.style.top = div1_b - 2*y + 'px';
				}else{
					oMouse_div.style.top = mouse_y - y + 'px';
				}
			}else if(mouse_x > div1_r - x){ //当鼠标div到达显示图区域最右边时，鼠标div不再继续向右
				oMouse_div.style.left = div1_r - 2*x + 'px';
				if(mouse_y < div1_t + y){
					oMouse_div.style.top = div1_t + 'px';
				}else if(mouse_y > div1_b - y){
					oMouse_div.style.top = div1_b - 2*y + 'px';
				}else{
					oMouse_div.style.top = mouse_y - y + 'px';
				}
			}else if(mouse_y < div1_t + y){  //当鼠标div到达显示图区域最上边时，鼠标div不再继续向上
				oMouse_div.style.top = div1_t + 'px';
				oMouse_div.style.left = mouse_x - x + 'px';
			}else if(mouse_y > div1_b - y){  //当鼠标div到达显示图区域最下边时，鼠标div不再继续向下
				oMouse_div.style.top = div1_b - 2*y + 'px';
				oMouse_div.style.left = mouse_x - x + 'px';
			}else{  //否则，鼠标div跟随鼠标移动
				oMouse_div.style.left = mouse_x - x + 'px';
				oMouse_div.style.top = mouse_y - y + 'px';
			}
			//如果鼠标移除显示图区域，则隐藏鼠标跟随div和放大区域
			if(mouse_x > div1_l && mouse_x < div1_r && mouse_y > div1_t && mouse_y < div1_b){
				oDiv2.style.display = 'block';
				oMouse_div.style.display = 'block';
			}else{
				oDiv2.style.display = 'none';
				oMouse_div.style.display = 'none';
			}
			//为放大区域的背景图定位
			oDiv2.style.backgroundPositionX = '-' + (getOffsetLeft(oMouse_div)-div1_l)/oDiv1.offsetWidth*oDiv2.offsetWidth*k + 'px';
			oDiv2.style.backgroundPositionY = '-' + (getOffsetTop(oMouse_div)-div1_t)/oDiv1.offsetHeight*oDiv2.offsetHeight*k2 + 'px';
		}
	}
	Magnifier('div1','div2','mouse',10);
}