var sketches_host = 'https://www.thequint.com'; //change to 'https://www.thequint.com' on production
var collection_slug = 'bol-text'; //change to the actual collection slug


$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/collections/bol-text', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'}).map(function(item) { return item.story });
	  
    $('#story_0').append(Story_0_Markup(stories[0]));
    $('#story_1').append(Story_1_Markup(stories[1]));
    $('#story_2').append(Story_2_Markup(stories[2]));
	$('#story_3').append(Story_3_Markup(stories[3]));
	$('#story_4').append(Story_4_Markup(stories[4]));
	$('#story_5').append(Story_5_Markup(stories[5]));
	$('#story_6').append(Story_6_Markup(stories[6]));
	$('#story_7').append(Story_7_Markup(stories[7]));
  })
})

// Section 1

var Story_0_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-sports"><a href="https://www.thequint.com/' + story.slug + '" target="blank"><figure><img class="card-bottom-color" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}

var Story_1_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-voices"><a href="https://www.thequint.com/' + story.slug + '"><figure><img class="" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}

var Story_2_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-voices"><a href="https://www.thequint.com/' + story.slug + '"><figure><img class="" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}

var Story_3_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-sports"><a href="https://www.thequint.com/' + story.slug + '" target="blank"><figure><img class="card-bottom-color" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}


// Section 2

var Story_4_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-sports"><a href="https://www.thequint.com/' + story.slug + '" target="blank"><figure><img class="card-bottom-color" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}

var Story_5_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-voices"><a href="https://www.thequint.com/' + story.slug + '"><figure><img class="" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}

var Story_6_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-voices"><a href="https://www.thequint.com/' + story.slug + '"><figure><img class="" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}

var Story_7_Markup = function(story) {
  return '<div class="card-elements"><a href="https://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content"><h3 class="card-elements__content--headline cooper-semi-bold">'+ story.headline +'</h3></div></a><div class="card-elements__image-container ctg-sports"><a href="https://www.thequint.com/' + story.slug + '" target="blank"><figure><img class="card-bottom-color" src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></figure></a></div><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div>'
}


// Section 3

$(document).ready(function() {
var collectionSlug = 'bol-video'; //Needs to be replaced.
  $.getJSON('https://www.thequint.com/api/v1/collections/' + collectionSlug, function(res) {
    var stories = res.items.filter(function(item) {
      return item.type == 'story'
    }).map(function(item) {
      return item.story
    })//.slice(0,5);
    var elements = stories.map(function(story) {
      return '<div class="story-card-small col-small ctg-hot-news no-thumb"><div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div></div></div>'
    });
    elements.forEach(function(element) {
      $('#others-section').append(element);
    })
	
  });
});







