window.onload = function(){
	var oPic_sideNav = document.getElementsByClassName('pic_sideNav')[0];
	var oClass1 = document.getElementsByClassName('class1')[0];
	var aLi1 = oClass1.getElementsByTagName('li');
	var oClass2 = document.getElementsByClassName('class2')[0];
	var aLi2 = oClass2.getElementsByTagName('li');
	var oA = oClass2.getElementsByClassName('down_load')[0];
	var oLength = aLi1.length;
	var oLength2 = aLi2.length;
	var timer1 = null;
	var timer2 = null;
	var i = 0;
	var x = 0;
	$('.pic_sideNav').hover(function(){
		clearInterval(timer1);
		clearInterval(timer2);
		i = 0;
		timer1 = setInterval(function(){
			for(var j = 0; j < oLength; j++){
				aLi1[j].className = '';
			}
			aLi1[i].className = 'show';
			if(i == oLength - 1){
				clearInterval(timer1);
				clearInterval(timer2);
				for(j = 0; j < oLength; j++){
					aLi1[j].className = '';
				}
				aLi2[0].className = 'show';
				function move2(){
					var j = 1;
					timer2 = setInterval(function(){
						for(var m = 0; m < oLength2; m++){
							aLi2[m].className = '';
						}
						aLi2[j].className = 'show';
						oA.style.display = 'block';
						if(j == oLength2 - 1){
							j = -1;
						}
						x = j;
						j++;
					},100);
				}
				move2();
			}
			i++;
		},100);
	},function(){
		clearInterval(timer1);
		clearInterval(timer2);
		if(i > 0){
			i = i - 1;
		}
		for(var m = 0; m < oLength2; m++){
			aLi2[m].className = '';
		}
		aLi1[i].className = 'show';
		timer1 = setInterval(function(){
			if(i > 0){
				i--;
			}
			for(var m = 0; m < oLength; m++){
				aLi1[m].className = '';
			}
			aLi1[i].className = 'show';
			setTimeout(function(){
				oA.style.display = 'none';
			},500);
			if(i == 0){
				clearInterval(timer1);
			}
		},100);
	});
}