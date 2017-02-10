
// Function for append table 

$(document).ready(function(){
	var tableContent = $('.table-content').html();
	var tableContent_1 = $('.table-content-1').html();
	$('.box-info').html(tableContent);
	$('.election-data').html(tableContent_1);
});



var sectionId = 2665;
var template = 'live-blog';
var fields = ['headline', 'cards', 'id', 'last-published-at', 'first-published-at', 'slug', ]

$(document).ready(function() {
  $.getJSON('https://thequint.com/api/v1/stories?section-id=' + sectionId + '&limit=5', function(res) {
    var stories = res.stories,
        elements = stories.map(function(story) { return '<div class="story-frame"><figure><img src="http://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&rect=0,0,1920,1080&q=35&w=120&fm=pjpg" /><figcaption><a href="http://thequint.com/' + story.slug + '" target="blank">' + story.headline + '</a></figcaption></figure></div>'});
    elements.forEach(function(element) {
          $('#election-stories').append(element);
        });
  });
});



//Get Key events
$(document).ready(function() {
  $.getJSON('https://thequint.com/api/v1/stories?section-id=' + sectionId + '&template=' +template + '&fields=' + fields.join(','), function(res) {
    var stories = res.stories.map(function(story) {
      var cardsWithStorySlug = story.cards.map(function(card) {return Object.assign({}, card, {storySlug: story.slug})})
      return Object.assign({}, story, {cards: cardsWithStorySlug})
    });
    var cards = stories.reduce(function(acc, story) { return acc.concat(story.cards) }, []);
    var keyEvents = cards.filter(function(card) { 
      if (card.metadata.attributes) {
        return card.metadata.attributes['key-event']
      } else {
        return false
      }}).sort(function(a,b) {
        if (a['card-updated-at'] < b['card-updated-at']) {return -1}
        else {return 1}
      });
    var elements = keyEvents.map(function(card) {
      var storyElement = card['story-elements'].find(function(storyElement) { return storyElement.type == 'title'})
      return '<a href="/'+ card.storySlug +'" target="blank"><p>' + storyElement.text + '</p></a>'
    })
    elements.forEach(function(element) {
      $('#key-events').append(element)
    })
  })  
})