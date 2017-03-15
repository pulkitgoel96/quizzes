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
    $.getJSON('https://www.thequint.com/api/v1/stories?limit=5&section-id=' + section.id, function(res) {
      var stories = res.stories;
      var elements = stories.map(function(story) { return '<div class="story-list"><div class="story-item"><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg" /><figcaption>' + story.headline + '</figcaption></figure></a></div></div>'});
      elements.forEach(function(element) {
        var id = '#' + section.state + '-election-stories';
        $(id).append(element);
      });
    });
  });
});



// For elections 2017

$(document).ready(function() {
  var sectionId = 2664;
  $.getJSON('https://www.thequint.com/api/v1/stories?section-id=' + sectionId + '&limit=5', function(res) {
    var stories = res.stories,
    elements = stories.map(function(story) { return '<div class="story-frame"><a href="http://www.thequint.com/' + story.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&rect=0,0,2348,1321&q=35&w=800&fm=pjpg" /><figcaption>' + story.headline + '</figcaption></figure></a></div>'});
    elements.forEach(function(element) {
      $('#election-stories').append(element);
    });
  });

  // for first story
  setTimeout(function(){
    var firsr_story = $('#election-stories .story-frame:first').html();
    $('#first-story').html(firsr_story);
    $('#election-stories').removeClass('load-slider');
  }, 6000);
});



// KEY EVENTS

$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/stories/45014eb9-50eb-4277-8fe7-e0192f47e8c5', function(res) {
    var lastStory = res.story;
    var cards = lastStory.cards;
    var cardsWithImages = cards.filter(function(card) {
      return card.metadata && card.metadata.attributes && card.metadata.attributes['liveblogimage'] && card.metadata.attributes['liveblogimage'][0] == "true"
    }).slice(0,10)
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
        return '<div class="story-list"><div class="story-item"><a href="http://thequint-web.staging.quintype.io/' + lastStory.slug + '" target="blank"><figure><img src="https://images.assettype.com/' + imageKey + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg" /><figcaption>' + titleElement.text + '</figcaption></figure></a></div></div>'
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
    {state: 'uttar-pradesh', id:"0b4fc2f1-b793-4353-bfbe-776c5272d108"},
    {state: 'punjab', id:"c6e8aa64-06fc-4b88-9bc4-1d8289506050"},
    {state: 'goa', id:"58241c7b-6da2-4a6b-aa77-0075869b6a83"},
    {state: 'uttarakhand', id:"9f5b9e8d-adde-4917-8e49-68072b3ef810"},
    {state: 'manipur', id:"45014eb9-50eb-4277-8fe7-e0192f47e8c5"}
  ];
  sections.forEach(function(section, index) {
    $.getJSON('https://www.thequint.com/api/v1/stories/' + section.id, function(res) {
      var liveBlog = res.story;
      var element = '<div class="list-content"><h3><span>LIVE</span><span>'+section.state+'</span></h3><p>'+ liveBlog.headline +'</p></div>';
      var id = '#' + section.state + '-live-blog';
      $(id).append(element)
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


  }, 6000);


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
  
  $('.stat-slider-3').slick({
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
  
  
  $('.stat-slider-1').slick({
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


//SOCIAL

$(document).ready(function () {
  $(".btn-share").click(function () {
    $(".share-icons").slideToggle(400);
  });
});


$(window).resize(function(){
  if (window.matchMedia('(max-width: 768px)').matches) {
    $(".btn-share").show();
    $(".share-icons").hide();
  } else {
    $(".btn-share").hide();
    $(".share-icons").show();
  }
});




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

