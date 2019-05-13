$(document).ready(function () {
	
	var viewportHeight = $("body").innerHeight();
	var base = parseInt(viewportHeight, 10) / 100;
	
	var taille = parseInt(base, 10) * 25;
	var taille2 = parseInt(base, 10) * 45;

	console.log(viewportHeight,base,taille, taille2)

	$(window).scroll(function () {
		if ($(document).scrollTop() >= 0 && $(document).scrollTop() <= taille) {
			$(".one").attr('id', 'previous');
			$(".two").attr('id', 'next');
			
		}

		
	});

});