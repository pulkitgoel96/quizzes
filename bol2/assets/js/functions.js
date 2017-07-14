window.sr = ScrollReveal();
//sr.reveal('.col');
sr.reveal('.logo, .col,.header-container, .story-card, .video-story, .video-section-gfx, .bol-chr1, .border-box, .bol-chr2, .bol-frame-slider, .bol-gfx, .tel-bg, .factoid, .bol-chr3, .bol-gfx-2, .green-bg', { duration: 1000 });


$(document).ready(function() {
	// For First Caption show
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
	
	
});

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





//Story Seetings

$(document).ready(function() {
	setTimeout(function(){
		$("#sectionId-bol-stories li").each(function(i) {
    $(this).addClass("item" + (i+1))
   });
}, 1000);
	
});


	// Set story
$(document).ready(function() {
	setTimeout(function(){
		
		
		//Story 1
		
		var story_image_1 = $('.item1').find('.item-image').html();
		var story_caption_1 = $('.item1').find('.item-caption').html();
		var story_link_1 = $('.item1').find('.item-link').attr('href');
		
		$('#story_1').find('.story-image').html(story_image_1);
		$('#story_1').find('.story-caption').html(story_caption_1);
		$('#story_1').find('.story-link').attr('href', story_link_1);
		
		//Story 2
		
		var story_image_2 = $('.item2').find('.item-image').html();
		var story_caption_2 = $('.item2').find('.item-caption').html();
		var story_link_2 = $('.item2').find('.item-link').attr('href');
		
		$('#story_2').find('.story-image').html(story_image_2);
		$('#story_2').find('.story-caption').html(story_caption_2);
		$('#story_2').find('.story-link').attr('href', story_link_2);
		
		//Story 3
		
		var story_image_3 = $('.item3').find('.item-image').html();
		var story_caption_3 = $('.item3').find('.item-caption').html();
		var story_link_3 = $('.item3').find('.item-link').attr('href');
		
		$('#story_3').find('.story-image').html(story_image_3);
		$('#story_3').find('.story-caption').html(story_caption_3);
		$('#story_3').find('.story-link').attr('href', story_link_3);
		
		//Story 4
		
		var story_image_4 = $('.item4').find('.item-image').html();
		var story_caption_4 = $('.item4').find('.item-caption').html();
		var story_link_4 = $('.item4').find('.item-link').attr('href');
		
		$('#story_4').find('.story-image').html(story_image_4);
		$('#story_4').find('.story-caption').html(story_caption_4);
		$('#story_4').find('.story-link').attr('href', story_link_4);
		
		//Story 5
		
		var story_image_5 = $('.item5').find('.item-image').html();
		var story_caption_5 = $('.item5').find('.item-caption').html();
		var story_link_5 = $('.item5').find('.item-link').attr('href');
		
		$('#story_5').find('.story-image').html(story_image_5);
		$('#story_5').find('.story-caption').html(story_caption_5);
		$('#story_5').find('.story-link').attr('href', story_link_5);
		
		//Story 6
		
		var story_image_6 = $('.item6').find('.item-image').html();
		var story_caption_6 = $('.item6').find('.item-caption').html();
		var story_link_6 = $('.item6').find('.item-link').attr('href');
		
		$('#story_6').find('.story-image').html(story_image_6);
		$('#story_6').find('.story-caption').html(story_caption_6);
		$('#story_6').find('.story-link').attr('href', story_link_6);
		
		//Story 7
		
		var story_image_7 = $('.item7').find('.item-image').html();
		var story_caption_7 = $('.item7').find('.item-caption').html();
		var story_link_7 = $('.item7').find('.item-link').attr('href');
		
		$('#story_7').find('.story-image').html(story_image_7);
		$('#story_7').find('.story-caption').html(story_caption_7);
		$('#story_7').find('.story-link').attr('href', story_link_7);
		
		//Story 8
		
		var story_image_8 = $('.item8').find('.item-image').html();
		var story_caption_8 = $('.item8').find('.item-caption').html();
		var story_link_8 = $('.item8').find('.item-link').attr('href');
		
		$('#story_8').find('.story-image').html(story_image_8);
		$('#story_8').find('.story-caption').html(story_caption_8);
		$('#story_8').find('.story-link').attr('href', story_link_8);
		
		//Story 9
		
		var story_image_9 = $('.item9').find('.item-image').html();
		var story_caption_9 = $('.item9').find('.item-caption').html();
		var story_link_9 = $('.item9').find('.item-link').attr('href');
		
		$('#story_9').find('.story-image').html(story_image_9);
		$('#story_9').find('.story-caption').html(story_caption_9);
		$('#story_9').find('.story-link').attr('href', story_link_9);
		
		//Story 10
		
		var story_image_10 = $('.item10').find('.item-image').html();
		var story_caption_10 = $('.item10').find('.item-caption').html();
		var story_link_10 = $('.item10').find('.item-link').attr('href');
		
		$('#story_10').find('.story-image').html(story_image_10);
		$('#story_10').find('.story-caption').html(story_caption_10);
		$('#story_10').find('.story-link').attr('href', story_link_10);
		
		
	}, 1500);
});


// Sections Story

$(document).ready(function() {
  var sections = [
    //{state: 'slider', id:2728},
    {state: 'sectionId', id:2666}
    //{state: 'uttar-pradesh', id:2665},
    //{state: 'uttarakhand', id:2667},
    //{state: 'goa', id:2668},
    //{state: 'manipur', id:2669}
  ];

  sections.forEach(function(section) {
    $.getJSON('https://www.thequint.com/api/v1/stories?limit=10&section-id=' + section.id, function(res) {
      var stories = res.stories;
      var elements = stories.map(function(story) { return '<li><a class="item-link" href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><div class="item-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&amp;rect=0,0,2348,1321&amp;q=80&amp;w=672&amp;fm=pjpg" /></div><figcaption class="item-caption">' + story.headline + '</figcaption></figure></a></li>'});
      elements.forEach(function(element) {
        var id = '#' + section.state + '-bol-stories';
        $(id).append(element);
      });
    });
  });
});


//Videos' section
$(document).ready(function() {
  var collectionSlug = 'ipl-videos'; //Needs to be replaced.
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




//Single Story
$(document).ready(function() {
  $.getJSON('https://thequint-labs.quintype.io/api/v1/stories/9e3c5172-b3f1-4fcf-ac3d-08140013dda9', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,1)
    elements = cardsWithImages.map(function(card) {
      var imageKey;
      var titleElement;
      if(card.metadata){
        if(card && card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'][0]=="true" ){
          var imageElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'image'});
          titleElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'title'}) || {};  
          imageKey= (imageElement || {})["image-s3-key"];
        }
      }
      if(imageKey){
        return '<figure class="more-list"><a href="https://www.thequint.com/section/sports" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + imageKey + '?q=70&amp;w=800&amp;fm=pjpg" /></div><figcaption>' + titleElement.text + '</figcaption></a></figure>'
      }
    });
    elements.forEach(function(element) {
      if(element){
        $('#single-story').append(element);
      }
    });
  });
});
