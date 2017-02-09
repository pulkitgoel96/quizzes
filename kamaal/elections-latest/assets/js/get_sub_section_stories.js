$(document).ready(function() {
  var sections = [{state: 'punjab', id:2666}, {state: 'uttar-pradesh', id:2665}, {state: 'uttarakhand', id:2667}, {state: 'goa', id:2668}, {state: 'manipur', id:2669}]

  sections.forEach(function(section) {
    $.getJSON('https://thequint.quintype.io/api/v1/stories?limit=5&section-id=' + section.id, function(res) {
      var stories = res.stories;
      var elements = stories.map(function(story) { return '<p><a href="http://thequint.quintype.io/' + story.slug + '" target="blank">' + story.headline + '</a></p>'});
      elements.forEach(function(element) {
        var id = '#' + section.state + '-election-stories';
        $(id).append(element)
      })
    })
  })
})
