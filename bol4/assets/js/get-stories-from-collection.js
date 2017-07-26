var sketches_host = 'https://www.thequint.com'; //change to 'https://www.thequint.com' on production
var collection_slug = 'bol-text'; //change to the actual collection slug
//var imageHost = "http://qt-staging-01.imgix.net"; //For Staging
var imageHost = "http://quintype-01.imgix.net"; //For production

$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/collections/bol-text', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'}).map(function(item) { return item.story });
	  
    $('#story_0').append(Story_0_Markup(stories[0]));
    $('#story_1').append(Story_1_Markup(stories[1]));
	  
	// Slider 1  
//	$('#story_2').append(Story_2_Markup(stories[2]));
//	$('#story_3').append(Story_3_Markup(stories[3]));
//    $('#story_4').append(Story_4_Markup(stories[4]));
//	$('#story_5').append(Story_5_Markup(stories[5]));
//	$('#story_6').append(Story_6_Markup(stories[6]));
	
	// Slider 2
//	$('#story_7').append(Story_7_Markup(stories[7]));
//	$('#story_8').append(Story_8_Markup(stories[8]));
//	$('#story_9').append(Story_9_Markup(stories[9]));
//	$('#story_10').append(Story_10_Markup(stories[10]));
//	$('#story_11').append(Story_11_Markup(stories[11]));
	  
    $('#story_2').append(Story_2_Markup(stories[12]));
	  
    //$('#story_13').append(Story_13_Markup(stories[13]));
  })
})



var Story_0_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg" /></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_1_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg" /></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}


// Slider 1

/*var Story_2_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_3_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_4_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_5_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_6_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}*/

// Slider 2

/*var Story_7_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_8_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_9_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_10_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_11_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="slider-img"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}*/

// End Slider 2



var Story_2_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}
// Image Seetings


var imageSource = function(s3key, width, height) {
  return `${imageHost}/${s3key}?auto=format&amp;q=60&amp;w=${width || 672}&amp;${height ? 'h='+height : ''}&amp;fm=pjpg`
}

// img src="http://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg"








