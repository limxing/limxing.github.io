$(function(){
	$('.bottom li a img').hover(function(e) {
    	$(this).css('opacity','0.5').siblings().css('opacity','1');
    },function(){
		$('.bottom li a img').css('opacity','1');
	});
	
	$('.btn01').click(function(e) {
        $('.btn01 p').slideToggle(500);
    });
	$('.btn02').click(function(e) {
        $('.btn02 p').slideToggle(500);
    });
	
	var myLi;
	var num;
	$('.w-btn li').hover(function(e) {
        $(this).addClass('current').siblings().removeClass('current');
    },function(){
		$('.w-btn li').eq(0).addClass('current').siblings().removeClass('current');
		num = myLi;
		$('.w-btn li').eq(num).addClass('current').siblings().removeClass('current');
	}).click(function(e) {
        num = $(this).index();
		myLi = num;
		$('.tab>li').eq(num).show().siblings().hide();
    });
	
	$('.vi li a').hover(function(e) {
    	$(this).children('span').stop().animate({'top':'0'},500);
    },function(){
		$(this).children('span').stop().animate({'top':'-142px'},500);
	});
	//bann
	$('.bann').append($('.bann li:first').clone(true));
	var loopIndex= 0;
	var timer01 = null;
	var mytimer = function(){
		loopIndex++;
		if(loopIndex > 13){
			loopIndex = 1;
			$('.bann').css('left','0')
		};
		var moveLeft = -873 * loopIndex;
		$('.bann').stop().animate({'left':moveLeft + 'px'},300);
	};
	timer01 = setInterval(mytimer,2000);
	$('.banBox,.b-left,.b-right').hover(function(e) {
		clearInterval(timer01);
	},function(){
		clearInterval(timer01);
		timer01 = setInterval(mytimer,2000);
	});
	$('.b-right').click(function(e) {
		loopIndex++;
		if(loopIndex > 13){
			loopIndex = 1;
			$('.bann').css('left','0')
		};
		var moveLeft = -873 * loopIndex;
		$('.bann').stop().animate({'left':moveLeft + 'px'},300);
	});
	$('.b-left').click(function(e) {
		loopIndex--;
		if(loopIndex < 0){
			loopIndex = 10;
			$('.bann').css('left','-11349px')
		};
		var moveLeft = -873 * loopIndex;
		$('.bann').stop().animate({'left':moveLeft + 'px'},300);
	});
	//phone
	$('.theme').append($('.theme li:first').clone(true));
	var loop = 0;
	var timer02 = null;
	var mytimer02 = function(){
		loop++;
		if(loop > 12){
			loop = 1;
			$('.theme').css('left','0')
		};
		var moveLeft = -197 * loop;
		$('.theme').stop().animate({'left':moveLeft + 'px'},300);
	};
	timer02 = setInterval(mytimer02,2000);
	$('.pinmu,.p-left,.p-right').hover(function(e) {
		clearInterval(timer02);
	},function(){
		clearInterval(timer02);
		timer02 = setInterval(mytimer02,2000);
	});
	$('.p-right').click(function(e) {
		loop++;
		if(loop > 12){
			loop = 1;
			$('.theme').css('left','0')
		};
		var moveLeft = -197 * loop;
		$('.theme').stop().animate({'left':moveLeft + 'px'},300);
	});
	$('.p-left').click(function(e) {
		loop--;
		if(loop < 0){
			loop = 11;
			$('.theme').css('left','-2364px')
		};
		var moveLeft = -197 * loop;
		$('.theme').stop().animate({'left':moveLeft + 'px'},300);
	});
	//网页
	$('.wangye').append($('.wangye li:first').clone(true));
	var timer03 = null;
	var loop01 = 0;
	var mytimer03 = function(){
		loop01++;
		if(loop01 > 10){
			loop01 = 1;
			$('.wangye').css('left','0');
		}
		var moveLeft = -885 * loop01;
		$('.wangye').stop().animate({'left':moveLeft + 'px'},300);
	}
	timer03 = setInterval(mytimer03,2000);
	$('.cpinmu,.c-left,.c-right').hover(function(e) {
		clearInterval(timer03);
	},function(){
		clearInterval(timer03);
		timer03 = setInterval(mytimer03,2000);
	});
	$('.c-right').click(function(e) {
		loop01++;
		if(loop01 > 10){
			loop01 = 1;
			$('.wangye').css('left','0')
		};
		var moveLeft = -885 * loop01;
		$('.wangye').stop().animate({'left':moveLeft + 'px'},300);
	});
	$('.c-left').click(function(e) {
		loop01--;
		if(loop01 < 0){
			loop01 = 9;
			$('.wangye').css('left','-15045px')
		};
		var moveLeft = -885 * loop01;
		$('.wangye').stop().animate({'left':moveLeft + 'px'},300);
	});
	
	//滚动条事件
	$('.nav-in ul .n01').click(function(e) {
		var jump = $('.introduce').offset().top;
		$('body,html').stop().animate({'scrollTop': jump +'px'},300);
    });
	$('.nav-in ul .n02').click(function(e) {
		var jump = $('.sKill').offset().top;
		$('body,html').stop().animate({'scrollTop': jump +'px'},300);
    });
	$('.nav-in ul .n03').click(function(e) {
		var jump = $('.work').offset().top;
		$('body,html').stop().animate({'scrollTop': jump +'px'},300);
    });
	$('.nav-in ul .n04').click(function(e) {
		var jump = $('.contact').offset().top;
		$('body,html').stop().animate({'scrollTop': jump +'px'},300);
    });
	//火箭
	$(window).scroll(function(e) {
            if($(window).scrollTop() > $(window).height()){
				$('.rocket').show();
			}else{
				$('.rocket').hide();
			}
        });
		$('.rocket').click(function(e) {
            $('html,body').animate({'scrollTop':'0'},500)
        });
		
	/*$('.wangye li').click(function(e) {
        $('.wangye').hide();
    });*/
})