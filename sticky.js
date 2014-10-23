$.fn.stkr = function(options){

	// var z = $(unstick).position();
	var $sticky = $(this);

	// SET DEFAULTS AND ACCEPT OPTIONS
	var settings = $.extend({
		startSticky: 'body',
		endSticky: null,
		stickyPosition: 'top-left',
		top: null,
		left: null,
		bottom: null,
		right: null,
		offsetStick: 0,
		offsetUnstick: 0,
		horizontal: false
	}, options);

	// CHECK POSITION SETTINGS
	var checkSettings = function(){
		if (settings.stickyPosition=='top-left'){
			return $sticky.css({
				position: 'fixed',
				top: 20, 
				left: 20
			});
		}else if(settings.stickyPosition=='top-right'){
			return $sticky.css({
				position: 'fixed',
				top: 20, 
				right: 20
			});
		}else if(settings.stickyPosition=='bottom-right'){
			return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				right: 20
			});
			
		}else if (settings.stickyPosition=='bottom-left'){
			return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				left: 20
			});
		}else{
			return $sticky.css({
				position: 'fixed',
				top: settings.top,
				left: settings.left,
				bottom: settings.bottom,
				right: settings.right
			});
		};
	};

	// WHEN USER SCROLLS....
	$(document).scroll(function(){
		var x = $(settings.startSticky).position();
		// IF SETTINGS.HORIZONTAL == FALSE
		if (!settings.horizontal){
			var y = $(document).scrollTop();
			// IF NO UNSTICK POINT IS DETERMINED
			if (!settings.endSticky){
				if (y > (x.top+settings.offsetStick)) {
					checkSettings();
				}else{
					return $sticky.css({position:'initial'});
				}
			// IF AN UNSTICK POINT IS DETERMINED
			}else{
				var z = $(settings.endSticky).position();
				if (y > (x.top-settings.offsetStick) && y < (z.top-settings.offsetUnstick)) {
					checkSettings();
				}else{
					return $sticky.css({position:'initial'});
				}
			}
		// IF SETTINGS.HORIZONTAL == TRUE
		}else{
			var y = $(document).scrollLeft();
			// IF NO UNSTICK POINT IS DETERMINED
			if (!settings.endSticky){
				if (y > (x.left+settings.offsetStick)) {
					checkSettings();
				}else{
					return $sticky.css({position:'initial'});
				}
			// IF UNSTICK POINT IS DETERMINED
			}else{
				var z = $(settings.endSticky).position();
				if (y > (x.left-settings.offsetStick) && y < (z.left-settings.offsetUnstick)) {
					checkSettings();
				}else{
					return $sticky.css({position:'initial'});
				}
			}
		}

	});
	
};