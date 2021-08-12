$(document).ready(function() {

	// Mostrar/ocultar Nav web/móvil
	$('#toggle-menu').click(function() {
	$(this).next().slideToggle();
	})

	$(window).on("resize", function (e) {
    
    if ($(window).width() >= 790) {

        $('#nav').show();
    }
    else
    {
    	 $('#nav').hide();
    }
	});

	//Botón hacia arriba
	$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('a.scroll-top').fadeIn('slow');
    } else {
        $('a.scroll-top').fadeOut('slow');
    }
	});
	$('a.scroll-top').click(function(event) {
	    event.preventDefault();
	    $('html, body').animate({scrollTop: 0}, 600);
	});
});