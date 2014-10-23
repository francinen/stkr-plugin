// If no #unstick declared [X]
// If only one sticky [X]
// If multiple stickies
// If multiple stick points?
// Simultaneous stickies?
// Animate?
// offsets

$.fn.stkr = function(options){

	var $sticky = $(this);
	var unstick = document.getElementById('unstick');

	var settings = $.extend({
		stickPosition: 'top-left',
		top: null,
		left: null,
		bottom: null,
		right: null,
		offsetStick: 0,
		offsetUnstick: 0
	}, options);

	var checkSettings = function(){
		if (settings.stickPosition=='top-left'){
			return $sticky.addClass('fixed').css({
				top: 20, 
				left: 20
			});
		}else if(settings.stickPosition=='top-right'){
			return $sticky.addClass('fixed').css({
				top: 20, 
				right: 20
			});
		}else if(settings.stickPosition=='bottom-right'){
			return $sticky.addClass('fixed').css({
				bottom: 20, 
				right: 20
			});
			
		}else if (settings.stickPosition=='bottom-left'){
			return $sticky.addClass('fixed').css({
				bottom: 20, 
				left: 20
			});
		}else{
			return $sticky.addClass('fixed').css({
				top: settings.top,
				left: settings.left,
				bottom: settings.bottom,
				right: settings.right
			});
		}
	};

	$(document).scroll(function(){
		var y = $(document).scrollTop();
		var x = $('#sticky').position();
		if (unstick==null){
			if (y > (x.top+settings.offsetStick)) {
				checkSettings();
			}else{
				return $sticky.removeClass('fixed');
			}
		}else{
			var z = $(unstick).position();
			if (y > (x.top-settings.offsetStick) && y < (z.top-settings.offsetUnstick)) {
				checkSettings();
			}else{
				return $sticky.removeClass('fixed');
			}
		}
	});
	
};