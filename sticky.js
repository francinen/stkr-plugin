// If no #unstick declared
// If only one sticky
// If multiple stickies
// Simultaneous stickies?

$.fn.sticky = function(){

	var $sticky = $(this);
	var unstick = document.getElementById('unstick');

	$(document).scroll(function(){
		var y = $(document).scrollTop();
		var x = $sticky.parent().position();
		if (unstick==null){
			if (y > (x.top)) {
			return $sticky.addClass('fixed').css({'top':20, 'left':20});
			}else{
				return $sticky.removeClass('fixed');
			}
		}else{
			var z = $(unstick).position();
			if (y > (x.top) && y < (z.top)) {
				return $sticky.addClass('fixed').css({'top':20, 'left':20});
			}else {
				return $sticky.removeClass('fixed');
			}
		}
	});
	
};