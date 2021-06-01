//<![CDATA[
	$(function(){
		$('#nav').mouseenter(function(){
			$('.gnb>ul>li>ul').stop().slideDown();
			$('.nav_shadow').stop().slideDown();
		});
		$('#nav').mouseleave(function(){
			$('.gnb>ul>li>ul').stop().slideUp();
			$('.nav_shadow').stop().slideUp();
		});

		$('.u_after').click(function(){
			var status = $('.engsub').css('display');
			if(status=='none'){
				$('.engsub').addClass('on');
			}else{
				$('.engsub').removeClass('on');
			}
		})
		$('.fixed_l ul li a').mouseenter(function(){
			$(this).children('span').addClass('on');
		})
		$('.fixed_l ul li a').mouseleave(function(){
			$('.fixed_l ul li a span').removeClass('on');
		})
		
		$(window).scroll(function(){
			var sct = $(this).scrollTop();
			//console.log(sct);
			if(sct > 50){
				$('#nav').addClass('on');
			}else{
				$('#nav').removeClass('on');
			}
		});
		
		
		
		var visual = $('.mainbg li');
		var tbox = $('.maintxt li');
		var button = $('.btnbox .btn');
		var pause = $('.btnbox .pause');
		var total = $('.mainbg li').length;
		var i = 0;
		var k = 0;
		var id;
		// var copy1 = $('.mainbg li').clone();
		// $('.mainbg').append(copy1);
		
		visual.css('display','none');
		visual.eq(0).css('display','block');
		tbox.css('display','none');
		tbox.eq(0).css('display','block');
		
		button.eq(0).addClass('on');
		
		button.click(function(){
			i = $(this).index();
			console.log(i)
			
			button.removeClass('on');
			button.eq(i).addClass('on');
			
			move();
			
			return false;
		});
		
		function move(){
			if(k == i)return;
			
			var cuimg = visual.eq(k);
			var neimg = visual.eq(i);
			var cutxt = tbox.eq(k);
			var netxt = tbox.eq(i);
			
			cuimg.fadeOut(700);
			neimg.fadeIn(700);
			cutxt.fadeOut(700);
			netxt.fadeIn(700);
			k = i;
		}
		
		timer();
		function timer(){
			id = setInterval(function(){
				i = k + 1;
				if(i == total){i = 0};
				
				button.removeClass('on');
				button.eq(i).addClass('on');
				move();
			},3000);
		}
		pause.click(function(){
			if($(this).hasClass('on') == false){
				$(this).addClass('on');
				clearInterval(id);
			}else{
				$(this).removeClass('on');
				timer();
			}
			
		});
		
		
		
		
		
		
		
		
	});
//]]>