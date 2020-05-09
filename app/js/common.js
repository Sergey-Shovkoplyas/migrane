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

	// ------------------------------ how --------------------

	$('.how__slider').slick({
		slidesToShow: 1,
		infinite: false,
		fade: true
	});

	// ------------------------------ why --------------------

	$('.why__slider').slick({
		slidesToShow: 1,
		infinite: false,
		dots: true
	});

	$('.why__neuros-item').on('click', function() {
			$(this).addClass('active');
			$('.why__neuros-item').not($(this)).removeClass('active');
			let num = +$(this).attr('data-num') - 1;
			let text = $('.why__neuros-text')[num];
			$('.why__neuros-text').not(text).removeClass('active');
			$(text).addClass('active');
	});

	// ------------------------------ what --------------------

	$('.what__halp-slider').slick({
		slidesToShow: 3,
		infinite: false,
		centerMode: true,
		variableWidth: true
	});

	// ------------------------------ promo__popup --------------------

	$('.promo__consultation').on('click', function() {
		$('.promo__papup-owerlay').fadeIn();
	});

	$('.promo__papup-close').on('click', function() {
		$('.promo__papup-owerlay').fadeOut();
	});

	// ------------------------------ test__papup --------------------

	$('.test-info').on('click', function() {
		$('.test__papup-owerlay').fadeIn();
	});

	$('.test__papup-close').on('click', function() {
		$('.test__papup-owerlay').fadeOut();
	});

});