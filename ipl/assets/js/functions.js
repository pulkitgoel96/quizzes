
// Sections stories
$(document).ready(function() {
  var sections = [
  // {ipl: 'videos', id:2666},
  // {ipl: 'nishant', id:1031},
  {ipl: 'top', id:2790}
  ];

  sections.forEach(function(section) {
    $.getJSON('https://www.thequint.com/api/v1/stories?limit=3&section-id=' + section.id, function(res) {
      var stories = res.stories;
      var elements = stories.map(function(story) { return '<li><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><div class="news-pic"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&rect=0,0,2348,1321&q=35&w=800&fm=pjpg" /></div><figcaption><span>' + story.headline + '</span></figcaption></figure></a></li>'});
      elements.forEach(function(element) {
        var id = '#' + section.ipl + '-section-stories';
        $(id).append(element);
      });
    });
  });
});

//Nishant's Dugout
$(document).ready(function() {
  var collectionSlug = 'hot-news'; //temporary slug. Needs to be changed.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,3);
    var elements = stories.map(function(story) {
      return '<li><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><div class="news-pic"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&rect=0,0,2348,1321&q=35&w=800&fm=pjpg" /></div><figcaption><span>' + story.headline + '</span></figcaption></figure></a></li>'
    });
    elements.forEach(function(element) {
      $('#nishant-section-stories').append(element);
    })
  })
})

//Videos' section
$(document).ready(function() {
  var collectionSlug = 'hot-news'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    }).slice(0,3);
    var elements = stories.map(function(story) {
      return '<li><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><div class="news-pic"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&rect=0,0,2348,1321&q=35&w=800&fm=pjpg" /></div><figcaption><span>' + story.headline + '</span></figcaption></figure></a></li>'
    });
    elements.forEach(function(element) {
      $('#videos-section-stories').append(element);
    })
  })
})

//QUINT's MVP
$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/stories/2a97e847-be14-4f8f-8c45-8fb10791ee3e', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,5)
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
        return '<figure><a href="http://www.thequint.com/' + lastStory.slug + '" target="blank"><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=70&amp;w=800&amp;fm=pjpg" /><figcaption><h4><span>QUINT’s MVP</span></h4><h2>'+ titleElement.text +'</h2><p>' + imageElement.title + '</p></figcaption></a></figure>'
      }
    });
    elements.forEach(function(element) {
      if(element){
        $('#key-events-1').append(element);
      }
    });
  });
});



//Arun’s Dugout
$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/stories/2a97e847-be14-4f8f-8c45-8fb10791ee3e', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,5)
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
        return '<div class="more-list"><figure><a href="http://www.thequint.com/' + lastStory.slug + '" target="blank"><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=70&amp;w=800&amp;fm=pjpg" /><figcaption>' + titleElement.text + '</figcaption></a></figure></div>'
      }
    });
    elements.forEach(function(element) {
      if(element){
        $('#key-events-2').append(element);
      }
    });
  });
});

//Sideline Sightings
$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/stories/2a97e847-be14-4f8f-8c45-8fb10791ee3e', function(res) {
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
        return '<li><a href="http://www.thequint.com/' + lastStory.slug + '" target="blank"><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=70&amp;w=800&amp;fm=pjpg" /><figure><figcaption><div class="caption"><span><h5>Katrina Kaif</h5>' + titleElement.text + '</span></figcaption></div></figure></a></li'
      }
    });
    elements.forEach(function(element) {
      if(element){
        $('#key-events-3').append(element);
      }
    });
  });
});

// Others
$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/stories/2a97e847-be14-4f8f-8c45-8fb10791ee3e', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,5)
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
        return '<div class="more-list"><figure><a href="http://www.thequint.com/' + lastStory.slug + '" target="blank"><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=70&amp;w=800&amp;fm=pjpg" /><figcaption><span>' + titleElement.text + '</span></figcaption></a></figure></div>'
      }
    });
    elements.forEach(function(element) {
      if(element){
        $('#key-events-4').append(element);
      }
    });
  });
});



$(document).ready(function() {
	setTimeout(function(){
	
	// Slider 1
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
            variableWidth: true
          }
        }
      ]
    });
		$('.ad-slider-2').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
          }
        }
      ]
    });
	$('.slider-3').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
          }
        }
      ]
    });
	
	$('.slider-1').removeClass('load-slider');
	$('.slider-2').removeClass('load-slider');
	$('.ad-slider-2').removeClass('load-slider');
	$('.slider-3').removeClass('load-slider');
	
	}, 4000);
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