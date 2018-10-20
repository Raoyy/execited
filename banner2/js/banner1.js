//banner1
$(function(){
	var oLength = $('.banner .btn li').length;
	var oWidth = $('.banner .banner_ul li').width();
	$('.banner .banner_ul').width(oWidth*oLength);
	var iNow = 0;
	var iNow2 = 0;
	var timer = null;
	var finish = true;
	$.ajax({
		type:"get",
		url:"ajax/banner.json",
		async:true,
		data:{},
		dataType:'json',
		success:function(obj){
			for(var i=0; i<$('.banner_ul img').length; i++){
				$('.banner_ul img').eq(i).attr('src',obj.arr[i].img);
			}
		}
	});
	$('.banner').hover(function(){
		$('.banner>a').stop().animate({'opacity':1},300);
	},function(){
		$('.banner>a').stop().animate({'opacity':0},300);
	});
	function move(){
		$('.banner .btn li').eq(iNow%oLength).addClass('now').siblings().removeClass();
		$('.banner .ban_bottom li').eq(iNow%oLength).addClass('show').siblings().removeClass();
		$('.banner .banner_ul').stop().animate({'left':-oWidth*iNow},500,function(){
			if(iNow == oLength){
				$('.banner .banner_ul li').eq(0).css({'position':'static'});
				$('.banner .banner_ul').css({'left':'0px'});
				iNow = 0;
			}
		});
	}
	function move2(){
		finish = false;
		var x = (iNow2 - iNow) > 0 ? 1 : -1;
		if(iNow2 == iNow){
			x = 0;
		}
		$('.banner .btn li').eq(iNow%oLength).addClass('now').siblings().removeClass();
		$('.banner .ban_bottom li').eq(iNow%oLength).addClass('show').siblings().removeClass();
		$('.banner .banner_ul li').eq(iNow%oLength).css({'position':'relative','left':oWidth*(iNow2 - iNow - x)});
		$('.banner .banner_ul').stop().animate({'left':-oWidth*(iNow2 - x)},500,function(){
			$('.banner .banner_ul li').eq(iNow%oLength).css({'position':'static'});
			$('.banner .banner_ul').css({'left':-oWidth*iNow});
			finish = true;
		});
	}
	$('.banner .btn li').click(function(){
		if(finish){
			iNow2 = iNow;
			iNow = $(this).index();
			move2();
		}
	});
	function autoPlay(){
		if(iNow == oLength - 1){
			$('.banner .banner_ul li').eq(0).css({'position':'relative','left':oWidth*oLength});
		}
		iNow++;
		move();
	}
	timer = setInterval(autoPlay,2000);
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,2000);
	});
});