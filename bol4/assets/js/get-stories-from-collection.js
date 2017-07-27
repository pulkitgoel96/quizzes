var sketches_host = 'https://www.thequint.com'; //change to 'https://www.thequint.com' on production
var collection_slug = 'bol-text'; //change to the actual collection slug
//var imageHost = "http://qt-staging-01.imgix.net"; //For Staging
var imageHost = "http://quintype-01.imgix.net"; //For production

$(document).ready(function() {
  $.getJSON('https://www.thequint.com/api/v1/collections/bol-text', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'}).map(function(item) { return item.story });
	  
    $('#story_0').append(Story_0_Markup(stories[0]));
    $('#story_1').append(Story_1_Markup(stories[1]));
    $('#story_2').append(Story_2_Markup(stories[2]));
	$('#story_3').append(Story_3_Markup(stories[3]));
  })
})



var Story_0_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg" /></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_1_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg" /></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}

var Story_2_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption><img class="ops" src="assets/images/caption-bg.png" alt=""><div class="caption-text">'+ story.headline +'</div></figcaption></a></figure>'
}


var Story_3_Markup = function(story) {
  return '<figure><a href="https://www.thequint.com/' + story.slug + '" target="blank"><div class="story-image"><img src="https://images.assettype.com/' + story['hero-image-s3-key'] + '?q=70&w=672&fm=pjpg"></div><figcaption>'+ story.headline +'</figcaption></a></figure>'
}











