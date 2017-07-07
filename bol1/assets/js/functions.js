window.sr = ScrollReveal();
//sr.reveal('.col');
sr.reveal('.col,.header-container', { duration: 1000 });


$(document).ready(function() {
	$('.slider-1').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
			variableWidth: true
            
          }
        }
      ]
    });
	$('.slider-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
			variableWidth: true
            
          }
        }
      ]
    });
	
	$('.photo-gallery').slick({
	autoplay: true,
    draggable: true,
    arrows: true,
    dots: false,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
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

