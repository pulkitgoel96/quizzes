// State election stories

$(document).ready(function() {
  var sections = [
    {state: 'slider', id:2728},
    {state: 'punjab', id:2666},
    {state: 'uttar-pradesh', id:2665},
    {state: 'uttarakhand', id:2667},
    {state: 'goa', id:2668},
    {state: 'manipur', id:2669}
  ];

  sections.forEach(function(section) {
    $.getJSON('https://thequint.com/api/v1/stories?limit=5&section-id=' + section.id, function(res) {
      var stories = res.stories;
      var elements = stories.map(function(story) { return '<div class="story-list"><div class="story-item"><a href="http://thequint.com/' + story.slug + '" target="blank"><figure><img src="http://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg" /><figcaption>' + story.headline + '</figcaption></figure></a></div></div>'});
      elements.forEach(function(element) {
        var id = '#' + section.state + '-election-stories';
        $(id).append(element);
      });
    });
  });
});



var sectionId = 2665;
var template = 'live-blog';
var fields = ['headline', 'cards', 'id', 'last-published-at', 'first-published-at', 'slug'];


// For elections 2017

$(document).ready(function() {
  $.getJSON('https://thequint.com/api/v1/stories?section-id=' + sectionId + '&limit=5', function(res) {
    var stories = res.stories,
        elements = stories.map(function(story) { return '<div class="story-frame"><a href="http://thequint.com/' + story.slug + '" target="blank"><figure><img src="http://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&rect=0,0,2348,1321&q=35&w=800&fm=pjpg" /><figcaption>' + story.headline + '</figcaption></figure></a></div>'});
    	elements.forEach(function(element) {
          $('#election-stories').append(element);
     });
});
	
// for first story
setTimeout(function(){
	var firsr_story = $('#election-stories .story-frame:first').html();
		$('#first-story').html(firsr_story);
		$('#election-stories').removeClass('load-slider');
	}, 4000);
});


// KEY EVENTS

$(document).ready(function() {
  $.getJSON('https://thequint-web.staging.quintype.io/api/v1/stories?section-id=' + 2664 + '&fields=' +fields.join(",") + '&limit=1&template=live-blog', function(res) {
    var stories = res.stories;
    var lastStory = stories[0] || {};
	  var cards = lastStory.cards.slice(0,10);
    elements = cards.map(function(card) {
      var imageKey;
		var titleElement;
      if(card.metadata){
	if(card && card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'][0]=="true"){
          var imageElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'image'});
		   titleElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'title'}) || {};  
	  imageKey= (imageElement || {})["image-s3-key"];
	}
		  console.log(titleElement);
      }
      if(imageKey){
	return '<div class="story-list"><div class="story-item"><a href="http://thequint-web.staging.quintype.io/' + lastStory.slug + '" target="blank"><figure><img src="http://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg" /><figcaption>' + titleElement.text + '</figcaption></figure></a></div></div>'
      }
    });
    elements.forEach(function(element) {
      if(element){
	$('#key-events').append(element);
      }
    });
  });
  setTimeout(function(){
    $('#election-stories').removeClass('load-slider');
  }, 4000);
});



//LIVE EVENTS

$(document).ready(function() {
  var sections = [
    {state: 'punjab', id:2666},
    {state: 'uttar-pradesh', id:2665},
    {state: 'uttarakhand', id:2667},
    {state: 'goa', id:2668},
    {state: 'manipur', id:2669}
  ];
  sections.forEach(function(section) {
    $.getJSON('https://sketches-uat.staging.quintype.com/api/v1/stories?limit=1&section-id=' + section.id + '&template=' +template + '&fields=' + fields.join(','), function(res) {
      var stories = res.stories.map(function(story) {
	var cardsWithStorySlug = story.cards.map(function(card) {return Object.assign({}, card, {storySlug: story.slug})})
	return Object.assign({}, story, {cards: cardsWithStorySlug})
      });
      var elements = stories.map(function(story) {
	return '<li class="list-item"><div class="list-content"><h3><span>LIVE</span><span>'+section.state+'</span></h3><p>'+ story.headline +'</p></div></li>'
      });
      elements.forEach(function(element) {
	console.log(element);
	$('ul#live-events').append(element)
      });
    });
  });
});




$(document).ready(function(){
  setTimeout(function(){
    $('.slider-1').slick({
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
	  

    $('.slider-3').slick({
      slidesToShow: 5,
      lazyLoad: 'ondemand',
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      //dots: true,
      responsive: [

	{
	  breakpoint: 601,
	  settings: {
            slidesToShow: 1,
            slidesToScroll: 1
	  }
	}

      ]
    });
	  
	 
    $('.slider-1').removeClass('load-slider');
    $('.slider-3').removeClass('load-slider');
	$('.slider-keyevents').removeClass('load-slider');
	  

  }, 4000);


  $('.slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [

      {
	breakpoint: 600,
	settings: {
	  arrows: false
	}
      }

    ]
  });
});




$(document).ready(function(){
  $('#tabs div.tab-content').hide();

  $('#tabs .tab').append('<div class="loading"></div>');

  //$('#tabs div.tab-content:first').show();
  // $('#tabs ul li:first').addClass('active');

  setTimeout(function(){
    $("#tabs ul li.active a.tab-nav").click();
  }, 400);

  $('#tabs ul li a.tab-nav').click(function(){
    //e.preventDefault();

    //$('.chart-content').highcharts().reflow();
    $('.tab-content').removeClass('active');


    $('.loading').show();
    setTimeout(function(){
      $('.loading').hide();
    }, 400);

    $('#tabs ul li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('#tabs div.tab-content').hide();
    $(currentTab).show();
    return false;
  });

});
