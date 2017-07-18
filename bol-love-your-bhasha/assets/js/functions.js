window.sr = ScrollReveal();
//sr.reveal('.col');
sr.reveal('.logo, .col,.header-container, .story-card, .video-story, .video-section-gfx, .bol-chr1, .border-box, .bol-chr2, .bol-frame-slider, .bol-gfx, .tel-bg, .factoid, .bol-chr3, .bol-gfx-2, .green-bg', { duration: 1000 });


// Social 
    $(".social-back").click(function(e) {
        $(".social-icons").slideToggle(400);
        return false;
    });
    $("body").click(function() {
        $(".social-icons").slideUp();
    });




$(document).ready(function(){
	$('.slider-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
			variableWidth: true
            
          }
			
        }
		  
      ]
    });
	  
	  	$('.slider-3').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
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
})



// External Caption

$('.video-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log($(slick.$slides.get(currentSlide)).find('figcaption').text());
	$('.videoCaption').html($(slick.$slides.get(currentSlide)).find('figcaption').text());
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


$(document).ready(function() {
		$(document).on("click", '.trgtModal', function() {
			$('#embedModal').addClass('modal--active');
			$('.modal__content').addClass('modal__content--active');
			
	});
	
	$('.modal__close').click(function(){
		$('#embedModal').removeClass('modal--active');
		$('.modal__content').removeClass('modal__content--active');
	});
	
});



//Videos' section
$(document).ready(function() {
  var collectionSlug = 'bol-video'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,5);
    var elements = stories.map(function(story) {
      return '<div class="frame-item"><a href="http://www.thequint.com/' + story.slug + '" target="blank"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=80&w=800&fm=pjpg" /><figcaption>' + story.headline + '</figcaption></a></div>'
    });
    elements.forEach(function(element) {
      $('#videos-section-stories').append(element);
    })
  })
  
  
  
  setTimeout(function(){
	
	$('.videoCaption').html($('.video-slide .frame-item:first').find('figcaption').text());
	
	$('.video-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
	  dots: true,
      arrows: false,
      autoplaySpeed: 2000
    });	  	
	    
	}, 4000);
})

