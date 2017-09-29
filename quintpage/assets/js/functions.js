var sketches_host = 'https://www.thequint.com'; //change to 'https://www.thequint.com' on production
var collection_slug = 'trending'; //change to the actual collection slug


$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/collections/trending', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'}).map(function(item) { return item.story });
	  
    $('#story_0').append(Story_0_Markup(stories[0]));
    $('#story_1').append(Story_1_Markup(stories[1]));
    $('#story_2').append(Story_2_Markup(stories[2]));
	$('#story_3').append(Story_3_Markup(stories[3]));
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



//var collection_slug = 'bol-video'; //change to the actual collection slug


$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/collections/trending', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'}).map(function(item) { return item.story });
	  
 
	$('#story_4').append(Story_4_Markup(stories[4]));
	$('#story_5').append(Story_5_Markup(stories[5]));
	$('#story_6').append(Story_6_Markup(stories[6]));
	$('#story_7').append(Story_7_Markup(stories[7]));
  })
})


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
  $.getJSON('https://www.thequint.com/api/v1/collections/hot-news', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'}).map(function(item) { return item.story });
	  
 
	$('#story_8').append(Story_8_Markup(stories[0]));
	$('#story_9').append(Story_9_Markup(stories[1]));
	$('#story_10').append(Story_10_Markup(stories[2]));
	$('#story_11').append(Story_11_Markup(stories[3]));
	$('#story_12').append(Story_12_Markup(stories[4]));
	$('#story_13').append(Story_13_Markup(stories[5]));
	$('#story_14').append(Story_14_Markup(stories[6]));
	$('#story_15').append(Story_15_Markup(stories[7]));
	$('#story_16').append(Story_16_Markup(stories[8]));
	$('#story_17').append(Story_17_Markup(stories[9]));
	$('#story_18').append(Story_18_Markup(stories[10]));
	$('#story_19').append(Story_19_Markup(stories[11]));
	$('#story_20').append(Story_20_Markup(stories[12]));
	$('#story_21').append(Story_21_Markup(stories[13]));
	$('#story_22').append(Story_22_Markup(stories[14]));
	$('#story_23').append(Story_23_Markup(stories[15]));
	$('#story_24').append(Story_24_Markup(stories[16]));
	$('#story_25').append(Story_25_Markup(stories[17]));
	$('#story_26').append(Story_26_Markup(stories[18]));
  })
})

var Story_8_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_9_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_10_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_11_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_12_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_13_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_14_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_15_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_16_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_17_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_18_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_19_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_20_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_21_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_22_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_23_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_24_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_25_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}
var Story_26_Markup = function(story) {
  return '<div class="card-elements"><a href="http://www.thequint.com/' + story.slug + '" target="blank" class="card-elements__link"><div class="card-elements__content" data-reactid="273"><h3 class="card-elements__content--headline cooper-semi-bold">' + story.headline + '</h3></div></a><div class="card-elements__social-container"><span class="card-elements__social-container--icons"><a target="_blank" href="#"><i class="fa fa-facebook"></i></a><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></span></div>'
}

