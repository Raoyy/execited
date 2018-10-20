 window.onload = function(){
	function init(level) {  
	    var html = [], i = 0;  
	    for (var y = 0; y < 3; y++)  
	        for (var x = 0; x < 5; x++) {  
	            var top = y * 100;  
	            var left = x * 100;  
	            html.push('<p " id="' + i + '" class="' + i  
	                + '" style="left:' + left + 'px;top:' + top + 'px;background-position:-'  
	                + left + 'px -' + top + 'px;"></p>');  
	            i++;
	        }
	    document.getElementById('move').innerHTML = html.join('');
	    this.boxs = document.getElementById('move').getElementsByTagName('p');  
        this.blank = this.boxs.length - 1;  
        this.hardNum = level; 
        rndBox(this);
        move(this.boxs);
	}
	function rndBox(){
        var count = 0;
        while (count < this.hardNum) {  
            var d = parseInt(Math.random() * 4);  
            var posB = this.blank * 1;  
            var yB = parseInt(posB / 5);  
            var xB = parseInt(posB % 5);  
            var cls = -1;  
            if (d == 0 && yB != 0) {  
                cls = posB - 5;  
            }  
            else if (d == 1 && xB != 4) {  
                cls = posB + 1;  
            }  
            else if (d == 2 && yB != 2) {  
                cls = posB + 5;  
            }  
            else if (d == 3 && xB != 0) {  
                cls = posB - 1;  
            }  
            if (cls != -1) {  
                swapTwo(getByClass(this.blank), getByClass(cls));  
                this.blank = cls;  
                count++;  
            }  
        }  
        getByClass(this.blank).style.display = "none";  
    }
	 
	init(5);
	rndBox();
	document.getElementById("hard").onchange = function () {  
        init(this.value);
        rndBox();
   	}

//	移动
	function move(currBox) {  
        var pos = currBox.className * 1;  
        var y = parseInt(pos / 5);  
        var x = parseInt(pos % 5);  
        var posB = this.blank * 1;  
        var yB = parseInt(posB / 5);  
        var xB = parseInt(posB % 5); 
        alert('111');
        if (Math.abs(x - xB) + Math.abs(y - yB) == 1) {  
            swapTwo(currBox, getByClass(posB));
            blank = pos;  
        }  
        if (check()) {  
            getByClass(this.blank).style.display = "block";  
            alert("哇，你真棒！");  
        }  
    }
//	检查是否完成
	function check() {  
        for (var i = 0; i < this.boxs.length; i++) {  
            if (this.boxs[i].className != this.boxs[i].id) return false;  
        }  
        return true;  
    }
//	根据className获取对象
	function getByClass(cls) {  
        for (var i = 0; i < this.boxs.length; i++) {  
            if (this.boxs[i].className == cls) return this.boxs[i];  
        }  
        return null;  
    }
//	交换两个方格
	function swapTwo(boxA, boxB) {  
        var left = boxA.style.left;  
        var top = boxA.style.top;  
        var cls = boxA.className;  
        boxA.style.top = boxB.style.top;  
        boxA.style.left = boxB.style.left;  
        boxA.className = boxB.className;  
        boxB.style.top = top;  
        boxB.style.left = left;  
        boxB.className = cls;  
    }  
}