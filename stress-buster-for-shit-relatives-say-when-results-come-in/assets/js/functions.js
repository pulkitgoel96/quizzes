$(document).ready(function() {
	
    $('.credits').click(function() {
        $('.creditsModal').show().addClass('zoomIn');
    });

    $('.modalClose').click(function() {
        $('.creditsModal').fadeOut();
    });
	
	
});