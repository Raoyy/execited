window.onload = function(){
	var oAir = document.getElementsByClassName('aircart')[0];
	var oMarp = document.getElementById('marp');
	var oBee = document.getElementsByClassName('bee')[0];
	var aLi = oBee.getElementsByTagName('li');
	var oLength = aLi.length;
	var num = oLength;
	var over = document.getElementsByClassName('over')[0];
	var oContinue = over.getElementsByTagName('a')[0];
	document.onkeydown = function(air){
		switch(air.keyCode){
			case 38:  //上
				if(oAir.offsetTop >= oMarp.offsetTop - 15){
					oAir.style.top = oAir.offsetTop - 5 + 'px';
				}
				break;
			case 40:  //下
				if(oAir.offsetTop <= oMarp.offsetTop + oMarp.offsetHeight - oAir.offsetHeight - 20){
					oAir.style.top = oAir.offsetTop + 5 + 'px';
				}
				break;
			case 37:  //左
				if(oAir.offsetLeft >= 5){
					oAir.style.left = oAir.offsetLeft - 5 + 'px';
				}
				break;
			case 39:   //右
				if(oAir.offsetLeft <= oMarp.offsetWidth - oAir.offsetWidth - 5){
					oAir.style.left = oAir.offsetLeft + 5 + 'px';
				}
				break;
		}
		document.onkeyup = function(air){
			if(air.keyCode == 32){
				var oBullet = document.createElement('div');
				oBullet.style.width = '10px';
				oBullet.style.height = '20px';
				oBullet.style.background = 'url(img/zidan.gif)';
				oBullet.style.backgroundSize = '100% 100%';
				oBullet.style.position = 'absolute';
				oBullet.style.left = oMarp.offsetLeft + oAir.offsetLeft + 13 + 'px';
				oBullet.style.top = oAir.offsetTop + 'px';
				document.body.appendChild(oBullet);
				var timer = setInterval(function(){
					oBullet.style.top = oBullet.offsetTop - 2 + 'px';
					if(oBullet.offsetTop == 0){
						clearInterval(this.timer);
						oBullet.style.display = 'none';
					}
					var bullet_top = oBullet.offsetTop;
					for(var i = 0; i < oLength; i++){
						var bee_top = aLi[i].offsetTop + 36;
						var bee_left = aLi[i].offsetLeft + oMarp.offsetLeft;
						if(oBullet.offsetTop <= bee_top && oBullet.offsetLeft >= bee_left && oBullet.offsetLeft <= bee_left + 40){
							var oBoom = document.createElement('img');
							oBoom.style.width = '40px';
							oBoom.style.height = '36px';
							oBoom.style.position = 'absolute';
							oBoom.style.top = aLi[i].offsetTop + 'px';
							oBoom.style.left = aLi[i].offsetLeft + 'px';
							oBoom.src = 'img/boom1.gif';
							oMarp.appendChild(oBoom);
							setTimeout(function(){
								oBoom.style.display = 'none';
							},500);
							aLi[i].style.display = 'none';
							oBullet.style.display = 'none';
							num = num - 1;
							if(num == 0){
								over.style.display = 'block';
							}
							clearInterval(timer);
						}
					}
				},10);
			}
		}
		oContinue.onclick = function(){
			over.style.display = 'none';
			num = oLength;
			for(var j = 0; j < oLength; j++){
				aLi[j].style.display = 'block';
			}
		}
	}
}



