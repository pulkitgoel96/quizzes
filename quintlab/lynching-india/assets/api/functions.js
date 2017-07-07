
$(document).ready(function() {
		$(document).on("click", '#allContact li', function() {
			
			$('#contactModal').addClass('modal--active');
			$('.modal__content').addClass('modal__content--active');
			
			var label_img = $(this).find('.contact-img').html();
			var label_video = $(this).find('.contact-video').html();
			var label_1 = $(this).find('.label-1').text();
			var label_2 = $(this).find('.label-2').text();
			var label_3 = $(this).find('.label-3').text();
			var label_4 = $(this).find('.label-4').text();
			var label_5 = $(this).find('.label-5').text();
			
			$('#contactModal').find('.modal__dialog--img').html(label_img);
			$('#contactModal').find('.modal__dialog--video').html(label_video);
			$('#contactModal').find('.modal-label-1').text(label_1);
			$('#contactModal').find('.modal-label-2').text(label_2);
			$('#contactModal').find('.modal-label-3').text(label_3);
			$('#contactModal').find('.modal-label-4').text(label_4);
			$('#contactModal').find('.modal-label-5').text(label_5);
			
	});
	
	$('.modal__close').click(function(){
		$('#contactModal').removeClass('modal--active');
		$('.modal__content').removeClass('modal__content--active');
		$('#contactModal').find('iframe').attr('src', '');
	});
	
	
	
	
	//var hideclass = $('#allContact li').find('h3').text();
	//$('#allContact li').addClass(hideclass);
	
	$('#allContact li').each(function(){
		var thisname = $(this).find('h3:firsr').text();
		$(this).addClass('thisname');
	});
	
	
});


//WhatsApp
$(document).ready(function() {
  $(document).on("click", '#btnWp', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var text = $(this).attr("data-text");
      var url = $(this).attr("data-link");
      var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
      var whatsapp_url = "whatsapp://send?text=" + message;
      window.location.href = whatsapp_url;
    } else {
      alert("Please use an Mobile Device to Share this Article");
    }
  });
});

