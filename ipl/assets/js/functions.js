$(document).ready(function() {
	$('.slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
	  dots: true,
      autoplaySpeed: 2000,
    });
	
	$('.slider-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            //centerMode: true,
            variableWidth: true
          }
        }
      ]
    });
});