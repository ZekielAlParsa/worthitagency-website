$(document).ready(function () {
	
	var viewportHeight = $("body").innerHeight();
	var base = parseInt(viewportHeight, 10) / 100;
	
	var taille = parseInt(base, 10) * 25;
	var taille2 = parseInt(base, 10) * 45;

	$(window).scroll(function () {
		if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= taille) {
			$(".one").attr('id', 'previous');
			$(".two").attr('id', 'next');
			$(".three").removeAttr('id', 'next');
		}
		if ($(document).scrollTop() > taille && $(document).scrollTop() <= taille2) {
			$(".one").attr('id', 'previous');
			$(".two").removeAttr('id', 'next');
			$(".three").attr('id', 'next');
		}
		if ($(document).scrollTop() > taille2 && $(document).scrollTop() <= $("body").innerHeight()) {
			$(".one").removeAttr('id', 'previous');
			$(".two").attr('id', 'previous');
			$(".three").attr('id', 'next');
		}
	});

});