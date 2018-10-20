$(function() {
	var canvas = $('#canvas')[0];
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	var ctx = canvas.getContext('2d');
	
	// resize调整窗口大小时，重新调整元素
	$(window).on('resize', function() {
		canvas.width = $(window).width();
		canvas.height = $(window).height();
		ctx.fillStyle = '#000';        //填充canvas背景色为黑色
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	});

	// init 初始化时，设置背景色
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	// objects
	var listFire = [];
	var listFirework = [];
	var fireNumber = 10;        //烟花数
	var center = { x: canvas.width / 2, y: canvas.height / 2 };
	var range = 100;                   //烟花爆炸最大半径
	for (var i = 0; i < fireNumber; i++) {
		var fire = {
			x: Math.random() * range / 2 - range / 4 + center.x,    //烟花起始位置x
			y: Math.random() * range * 2 + canvas.height,           //烟花起始位置y   
			size: Math.random() + 0.5,    //烟花爆炸前大小
			fill: '#fd1',                 //爆炸前颜色
			vx: Math.random() - 0.5,        //烟花发射反向x
			vy: -(Math.random() + 4),		//烟花发射方向y
			ax: Math.random() * 0.02 - 0.01,    //发射方向偏移量
			far: Math.random() * range + (center.y - range)    //烟花爆炸高度
		};
		fire.base = {
			x: fire.x,
			y: fire.y,
			vx: fire.vx
		};
		//
		listFire.push(fire);
	}

	function randColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var color = 'rgb($r, $g, $b)';
		color = color.replace('$r', r);
		color = color.replace('$g', g);
		color = color.replace('$b', b);
		return color;
	}

	(function loop() {
		requestAnimationFrame(loop);
		update();
		draw();
	})();
	console.log(randColor());

	function update() {
		for (var i = 0; i < listFire.length; i++) {
			var fire = listFire[i];
			//
			if (fire.y <= fire.far) {    
				// case add firework  当烟花高度达到爆炸高度
				var color = randColor();
				for (var i = 0; i < fireNumber * 5; i++) {   //爆炸焰火数： fireNumber * 5
					var firework = {
						x: fire.x,     //记录烟花到达爆炸高度的位置
						y: fire.y,
						size: Math.random() + 1.5,    //烟花爆炸后大小
						fill: color,                 //随机焰火颜色
						vx: Math.random() * 5 - 2.5,
						vy: Math.random() * -5 + 1.5,   //焰火爆炸发射方向
						ay: 0.05,     //焰火Y轴偏移
						alpha: 1,
						life: Math.round(Math.random() * range / 2) + range / 2    
					};
					firework.base = {
						life: firework.life,
						size: firework.size
					};
					listFirework.push(firework);
				}
				// reset重置烟花初始位置
				fire.y = fire.base.y;
				fire.x = fire.base.x;
				fire.vx = fire.base.vx;
				fire.ax = Math.random() * 0.02 - 0.01;
			}
			//
			fire.x += fire.vx;   //计算下一次烟花出现的位置
			fire.y += fire.vy;
			fire.vx += fire.ax;
		}
		for (var i = listFirework.length - 1; i >= 0; i--) {    //计算烟花爆炸图像
			var firework = listFirework[i];
			if (firework) {
				firework.x += firework.vx;
				firework.y += firework.vy;
				firework.vy += firework.ay;
				firework.alpha = firework.life / firework.base.life;  //  焰火透明度 = 焰火生命  / 焰火基础生命
				firework.size = firework.alpha * firework.base.size;  //  焰火大小 = 焰火透明度 * 焰火基础大小
				firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;  // 当焰火生命大于60% ，透明度为1
				//
				firework.life--;  //焰火生命值减少
				if (firework.life <= 0) {   //焰火生命值小于等于0，  删除焰火
					listFirework.splice(i, 1);
				}
			}
		}
	}

	function draw() {
		// clear
		ctx.globalCompositeOperation = 'source-over';
		ctx.globalAlpha = 0.18;
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);   //全屏清黑

		// re-draw
		ctx.globalCompositeOperation = 'screen';
		ctx.globalAlpha = 1;
		for (var i = 0; i < listFire.length; i++) {      //发射动画
			var fire = listFire[i];
			ctx.beginPath();
			ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = fire.fill;
			ctx.fill();
		}

		for (var i = 0; i < listFirework.length; i++) {    //爆炸动画
			var firework = listFirework[i];
			ctx.globalAlpha = firework.alpha;
			ctx.beginPath();
			ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = firework.fill;
			ctx.fill();
		}
	}
})