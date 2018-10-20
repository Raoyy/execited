window.onload = function(){
//拖拽
function drag(obj){
	var zindex = 0;
	obj.onmouseover = function(){
		obj.style.cursor = 'pointer';
	}
	obj.onmousedown = function(ev){
		oev = ev || event;
		obj.style.zIndex = 99;
		var x = oev.clientX - obj.offsetLeft;
		var y = oev.clientY - obj.offsetTop;
		document.onmousemove = function(ev){
			oev = ev || event;
			obj.style.top = oev.clientY - y + 'px';
			obj.style.left = oev.clientX - x + 'px';
		}
		return false;
	}
	obj.onmouseup = function(ev){
		oev = ev || event;
		document.onmousemove = null;
		obj.style.zIndex = zindex;
	}
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
//通过类名获取元素
function getClass(parent,name){
	var arr = [];
	var aTag = parent.getElementsByTagName('*');
	for(var i = 0; i < aTag.length; i++){
		if(aTag[i].className == name){
			arr.push(aTag[i]);
		}
	}
	return arr;
}
//animate
function animate(obj,json,time,fn){
clearInterval(timer);
timer =  setInterval(function(){
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
			if(getStyle(obj,k) != json[k]){
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
			clearInterval(timer);
			if(fn){
				fn();
			}
		}
	},time);
}



}
