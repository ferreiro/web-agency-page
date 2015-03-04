var header = $('.header'),
	homeSection = $('.home'),
	text = $('.homeHeadline'),
	subtext = $('.homeSubheadline'),
	scroll = window.scrollY;
 
	$(window).scroll( function() {
		var scroll = window.scrollY;
		var opacity = 2 - ((scroll) / 100 + 0.3);

		// console.log(opacity);

		if ((scroll >= 0) && (scroll <= homeSection.height() - 80)) {
			header.removeClass('headerFixed');
			text.css("opacity", opacity);
			subtext.css("opacity", opacity + 0.5);
		} else {
			header.addClass('headerFixed'); 
		}
	});  

	$(window).resize(function() {
		//
	});
