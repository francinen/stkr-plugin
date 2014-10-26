$(function(){
		
	// $(document).scroll(function(){
	// 	var y = $(this).scrollTop();
	// 	var x = $('.sticky').position();
	// 	var z = $('.unstick').position();
	// 	if (y > (x.top)) {
	// 		$('.sticky').addClass('fixed').css({'top':0, 'left':0});
	// 	}
	// 	else{
	// 		$('.sticky').removeClass('fixed');
	// 	}
	// });
	$(document).scroll(function(){
		var y = $(this).scrollTop();
		var x = $('#sticky').parent().position();
		var z = $('#unstick').position();
		if (y > (x.top) && y < (z.top)) {
			$('#sticky').addClass('fixed').css({'top':20, 'left':20});
		}
		else{
			$('#sticky').removeClass('fixed');
		}
	});
	// $(document).scroll(function(){
	// 	var y = $(this).scrollTop();
	// 	var x = $('#target').position();
	// 	var z = $('#target-2').position();
	// 	var w = $('#target-3').position();
	// 	if (y > (x.top) && y > (z.top) && y > (w.top)) {
	// 		$('nav').addClass('fixed').css({'bottom': 0, 'left':0});
	// 	}else{
	// 		$('nav').removeClass('fixed');
	// 	}
	// });
	// $(document).scroll(function(){
	// 	var y = $(this).scrollTop();
	// 	var x = $('#target-3').position();
	// 	var z = $('#target-4').position();
	// 	if (y > (x.top) && y < (z.top)) {
	// 		$('.bullshit').addClass('fixed').css({'top':0,'left':0});
	// 	}else{
	// 		$('.bullshit').removeClass('fixed');
	// 	}
	// });
});


