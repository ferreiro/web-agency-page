var header = $('.header'),
	homeSection = $('.home'),
	text = $('.homeHeadline'),
	subtext = $('.homeSubheadline'),
	margin = 1;

 
	$(window).scroll( function() {
		var scroll = window.scrollY;
		var opacity = 2 - ((scroll) / 100 + 0.3);

		// console.log(opacity);

		if ((scroll >= 0) && (scroll <= homeSection.height() - 80)) {
			margin += 3;
			header.removeClass('headerFixed');
			text.css({
				"opacity": opacity, 
				"margin-top": margin
			});
			subtext.css({
				"opacity": opacity + 0.5, 
				"margin-top": margin
			}); 
		} else {
			header.addClass('headerFixed'); 
			text.css({
				"margin-top": margin - 3
			});
			subtext.css({
				"margin-top": margin - 3
			}); 
		}
	});  

	$(window).resize(function() {
		//
	});
