window.onload = function(){
	var aLi = document.getElementsByTagName('li');
	var oLength = aLi.length;
	var aPos = [];
	var zindex = 1;
	for(var i = 0 ; i < aLi.length ; i++){
		aPos[i] = {left : aLi[i].offsetLeft ,top : aLi[i].offsetTop};
	}
	for(i = 0; i < oLength; i++){
		aLi[i].style.position = 'absolute';
		aLi[i].style.left = aPos[i].left + 'px';
		aLi[i].style.top = aPos[i].top + 'px';
		aLi[i].index = i;
		aLi[i].style.margin = 0;
	}
	for(var i = 0; i < oLength; i++){
		drag(aLi[i]);
	}
	function drag(obj){
		var iNow = -1;
		obj.onmousedown = function(ev){
			oev = ev || event;
			obj.style.zIndex = 99;
			obj.style.zIndex = zindex++;
			iNow = -1;
			var x = oev.clientX - obj.offsetLeft;
			var y = oev.clientY - obj.offsetTop;
			document.onmousemove = function(ev){
				oev = ev || event;
				var distance = 999999999999;
				iNow = -1;
				obj.style.top = oev.clientY - y + 'px';
				obj.style.left = oev.clientX - x + 'px';
				for(var i = 0; i < oLength; i++){
					if(obj != aLi[i]){
						if(test(obj,aLi[i])){
							var a = obj.offsetLeft - aLi[i].offsetLeft;
							var b = obj.offsetTop - aLi[i].offsetTop;
							if(Math.sqrt(a*a+b*b)<distance){
								distance = Math.sqrt(a*a + b*b);
								iNow = i;
							}
						}
					}
				}
			}
			obj.onmouseup = function(ev){
				oev = ev || event;
				if(iNow != -1){
					animate(obj,aPos[aLi[iNow].index]);
					animate(aLi[iNow],aPos[obj.index]);
					var ind = aLi[iNow].index;
					aLi[iNow].index = obj.index;
					obj.index = ind;
					aLi[iNow].style.zIndex = zindex++;
					obj.style.zIndex = zindex++;
				}
				else{
					animate(obj,aPos[obj.index]);
				}
				document.onmousemove = null;
				document.onmouseup = null;
			}
			clearInterval(obj.timer);
			return false;
		}
	}
	function test(obj1,obj2){
		var l1 = obj1.offsetLeft;
		var t1 = obj1.offsetTop;
		var r1 = l1 + obj1.offsetWidth;
		var b1 = t1 + obj1.offsetHeight;
		
		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 = l2 + obj2.offsetWidth;
		var b2 = t2 + obj2.offsetHeight; 
		
		var l = l2 - obj1.offsetWidth;
		var t = t2 - obj1.offsetHeight;
		var r = r2 + obj1.offsetWidth;
		var b = b2 + obj1.offsetHeight;
		if(l1 > l && t1 > t && r1 < r && b1 < b){
			return true;
		}else{
			return false;
		}
	}
	function animate(obj,json,fn){
		clearInterval(obj.timer);
		var timer = null;
		obj.timer =  setInterval(function(){
			var finish = true;
			for(var k in json){
				if(k == 'opacity'){
					var ispeed = (json[k] - getStyle1(obj,k))*100/50;
				}else{
					var ispeed = (json[k] - getStyle(obj,k))/50;
				}
				if(ispeed <= 0){
					ispeed = Math.floor(ispeed);
				}else{
					ispeed = Math.ceil(ispeed);
				}
				if(k == 'opacity'){
					if(getStyle1(obj,k) != json[k]){
						finish = false;
						obj.style[k] = (getStyle1(obj,k)*100 + ispeed)/100;
					}
				}else{
					if(getStyle(obj,k) != json[k]){
						finish = false;
						obj.style[k] = getStyle(obj,k) + ispeed + 'px';
					}
				}
			}
			if(finish){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		},5);
	}
	//获取元素属性值（数字）
	function getStyle(obj,name){
		var value = obj.getCurrentType ? obj.getCurrentType[name] : getComputedStyle(obj)[name];
		return parseInt(value);
	}
	//获取元素属性（字符串）
	function getStyle1(obj,name){
		var value = obj.getCurrentType ? obj.getCurrentType[name] : getComputedStyle(obj)[name];
		return value;
	}
}
