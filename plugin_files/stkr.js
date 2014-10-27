$.fn.stkr = function(options){
	var $sticky = $(this);
	var originalPosition = $(this).css('position');

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
		horizontal: false,
		toggleVisibility: false,
		toggleFade: false
	}, options);
	
	$(function(){
		if (settings.toggleVisibility){
			return $sticky.css({visibility: 'hidden'});
		}else{
			return $sticky;
		}
		if (settings.toggleFade){
			return $sticky.css({opacity: 0});
		}else{
			return $sticky;
		}
	});

	var checkStickSettings = function(){
		if (settings.stickyPosition=='top-left'){
			if (settings.toggleFade){
				return $sticky.css({
				position: 'fixed',
				top: 20, 
				left: 20,
				opacity: 1
				});
			};
			if (settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				top: 20, 
				left: 20,
				visibility: 'visible',
				});
			};
			if(!settings.toggleFade && !settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				top: 20, 
				left: 20
				});
			};
		}else if(settings.stickyPosition=='top-right'){
			if (settings.toggleFade){
				return $sticky.css({
				position: 'fixed',
				top: 20, 
				right: 20,
				opacity: 1
				});
			};
			if (settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				top: 20, 
				right: 20,
				visibility: 'visible',
				});
			};
			if(!settings.toggleFade && !settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				top: 20, 
				right: 20
				});
			};
		}else if(settings.stickyPosition=='bottom-right'){
			if (settings.toggleFade){
				return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				right: 20,
				opacity: 1
				});
			};
			if (settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				right: 20,
				visibility: 'visible',
				});
			};
			if(!settings.toggleFade && !settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				right: 20
				});
			};
		}else if (settings.stickyPosition=='bottom-left'){
			if (settings.toggleFade){
				return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				left: 20,
				opacity: 1
				});
			};
			if (settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				left: 20,
				visibility: 'visible',
				});
			};
			if(!settings.toggleFade && !settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				bottom: 20, 
				left: 20
				});
			};
		}else{
			if (settings.toggleFade){
				return $sticky.css({
					position: 'fixed',
					top: settings.top,
					left: settings.left,
					bottom: settings.bottom,
					right: settings.right,
					opacity: 1
				});
			};
			if (settings.toggleVisibility){
				return $sticky.css({
					position: 'fixed',
					top: settings.top,
					left: settings.left,
					bottom: settings.bottom,
					right: settings.right,
					visibility: 'visible'
				});
			};
			if(!settings.toggleFade && !settings.toggleVisibility){
				return $sticky.css({
				position: 'fixed',
				top: settings.top,
				left: settings.left,
				bottom: settings.bottom,
				right: settings.right
				});
			}
		};
	};
	
	var checkUnstickSettings = function(){
		if (settings.toggleFade){
			if (!originalPosition){
				return $sticky.css({opacity: 0, position:'static'});
			}else{
				return $sticky.css({opacity: 0, position: originalPosition});
			}
		};
		if (settings.toggleVisibility){
			if (!originalPosition){
				return $sticky.css({visibility: 'hidden', position:'static'});
			}else{
				return $sticky.css({visibility: 'hidden', position: originalPosition});
			}
		};
		if(!settings.toggleFade && !settings.toggleVisibility){
			if (!originalPosition){
				return $sticky.css({position:'static'});
			}else{
				return $sticky.css({position: originalPosition});
			}						
		}
	};

	$(document).scroll(function(){
		var x = $(settings.startSticky).position();
		if (!settings.horizontal){
			var y = $(document).scrollTop();
			if (!settings.endSticky){
				if (y > (x.top-settings.offsetStick)) {
					checkStickSettings();
				}
			}else{
				var z = $(settings.endSticky).position();
				if (y < (x.top-settings.offsetStick)){
					checkUnstickSettings();
				}else if (y > (x.top-settings.offsetStick) && y < (z.top+settings.offsetUnstick)) {
						checkStickSettings();
				}else{
					checkUnstickSettings();
				}
			}
		}else{
			var y = $(document).scrollLeft();
			if (!settings.endSticky){
				if (y > (x.left-settings.offsetStick)) {
					checkStickSettings();
				}else{
					checkUnstickSettings();
				}
			}else{
				var z = $(settings.endSticky).position();
				if (y > (x.left-settings.offsetStick) && y < (z.left-settings.offsetUnstick)) {
					checkStickSettings();
				}else{
					checkUnstickSettings();
				}
			}
		}
	});	
};