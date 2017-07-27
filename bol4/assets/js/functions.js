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
			$('body').addClass('iOsFixed');
			
	});
	
	$('.modal__close').click(function(){
		$('#embedModal').removeClass('modal--active');
		$('.modal__content').removeClass('modal__content--active');
		$('body').removeClass('iOsFixed');
	});
	
});




$(document).ready(function() {
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
	  
	  	$('.carouselSlider').slick({
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
	    
	}, 3000);
})
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
  });
});


//SlugType_1
$(document).ready(function() {
  var collectionSlug = 'bol-video'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,5);
    var elements = stories.map(function(story) {
      return '<li><figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure></li>'
    });
    elements.forEach(function(element) {
      $('#SlugType_1').append(element);
    });
  });
});

//SlugType_2
$(document).ready(function() {
  var collectionSlug = 'bol-ugc'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,5);
    var elements = stories.map(function(story) {
      return '<li><figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure></li>'
    });
    elements.forEach(function(element) {
      $('#SlugType_2').append(element);
    });
  });
});

//SlugType_3
$(document).ready(function() {
  var collectionSlug = 'bol-feature'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,5);
    var elements = stories.map(function(story) {
      return '<li><figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure></li>'
    });
    elements.forEach(function(element) {
      $('#SlugType_3').append(element);
    });
  });
});

