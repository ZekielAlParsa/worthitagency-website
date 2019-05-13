$(document).ready(function () {
	
	var viewportHeight = $("body").innerHeight();
	var base = parseInt(viewportHeight, 10) / 100;
	
	var taille = parseInt(base, 10) * 20;
	var taille2 = parseInt(base, 10) * 40;
    var taille3 = parseInt(base, 10) * 45;
    var taille4  = parseInt(base, 10) * 60;

	console.log(viewportHeight,base,taille, taille2, taille3)

	$(window).scroll(function () {
		if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= taille) {
			$(".one").attr('id', 'previous');
			$(".two").attr('id', 'next');
			$(".three").removeAttr('id', 'next');
            $(".four").removeAttr('id', 'next');
		}
		if ($(document).scrollTop() > taille && $(document).scrollTop() <= taille2) {
			$(".one").attr('id', 'previous');
			$(".two").removeAttr('id', 'next');
			$(".three").attr('id', 'next');
            $(".four").removeAttr('id', 'next');
		}
		if ($(document).scrollTop() > taille2 && $(document).scrollTop() <= taille3 ){
			$(".one").removeAttr('id', 'previous');
			$(".two").attr('id', 'previous');
			$(".three").attr('id', 'next');
            $(".four").removeAttr('id', 'next');
		}
        if ($(document).scrollTop() > taille3 && $(document).scrollTop() <= taille4 ){
			$(".one").removeAttr('id', 'previous');
			$(".two").attr('id', 'previous');
			$(".three").removeAttr('id', 'next');
            $(".four").attr('id', 'next');
		}
        if ($(document).scrollTop() > taille4 && $(document).scrollTop() <= $("body").innerHeight()) {
			$(".one").removeAttr('id', 'previous');
			$(".two").removeAttr('id', 'previous');
			$(".three").attr('id', 'previous');
            $(".four").attr('id', 'next');
		}
	});

});