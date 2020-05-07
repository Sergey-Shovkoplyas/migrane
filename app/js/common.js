$( document ).ready(function() {

	// ------------------------------ header-menu --------------------

	$('.header__nav-btn').on('click', function () {
		$('.header__nav-btn .nav-btn').toggleClass('active');
		$('.header__nav').slideToggle();
	});

	// ------------------------------ migrane-fiatures --------------------

	$('.migrane-fiatures__phase').on('click', function() {
		let $subList = $(this).next('.migrane-fiatures__descr');

		$(this).toggleClass('active');
		$subList.slideToggle();
		$('.migrane-fiatures__descr').not($subList).slideUp();
		$('.migrane-fiatures__phase').not($(this)).removeClass('active');

	});

	// popap

	let $fiaturesPopap = $('.migrane-fiatures__papap');
	let $fiaturesPopapClose = $('.migrane-fiatures__papap-close');

	$('.migrane-fiatures__img').on('click', function(e) {
		$( $fiaturesPopap ).fadeIn();
		if (e.target===$fiaturesPopapClose[0]) {
			$( $fiaturesPopap ).fadeOut();
		}
	});

	// ------------------------------ migrane-reason --------------------

	$('.migrane-reason__slider').slick({
		dots: true,
		variableWidth: true,
		slidesToShow: 1,
		infinite: false
	});

});