
var ques_array =[
	[0,"init"],
	[1,"ferry"],
  [2, "ferry2"],
  [3, "ferry"],
	  [4, "ferry"],
	  [5, "ferry"],
	  [6, "ferry"],
	  [7, "ferry"],
	  [8, "ferry"],
	  [9, "ferry"],
	  [10, "ferry"],
	  
];
	
function is_touch_device() {
 return 'ontouchstart' in window // works on most browsers
     || 'onmsgesturechange' in window; // works on ie10
};	
	
var cur_ques =0;	

var formWrap = document.getElementById('fs-form-wrap');

[].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
    new SelectFx(el, {
        stickyPlaceholder: false,
        onChange: function(val) {
            document.querySelector('span.cs-placeholder').style.backgroundColor = val;
        }
    });
});

new FForm(formWrap, {
    onReview: function() {
        classie.add(document.body, 'overview'); // for demo purposes only
    }
});




soundManager.setup({
    // path to directory containing SM2 SWF
    url: 'soundmanager/swf/'
});

threeSixtyPlayer.config.scaleFont = (navigator.userAgent.match(/msie/i) ? false : true);
threeSixtyPlayer.config.showHMSTime = true;

// enable some spectrum stuffs

threeSixtyPlayer.config.useWaveformData = true;
threeSixtyPlayer.config.useEQData = true;

// enable this in SM2 as well, as needed

if (threeSixtyPlayer.config.useWaveformData) {
    soundManager.flash9Options.useWaveformData = true;
}
if (threeSixtyPlayer.config.useEQData) {
    soundManager.flash9Options.useEQData = true;
}
if (threeSixtyPlayer.config.usePeakData) {
    soundManager.flash9Options.usePeakData = true;
}

if (threeSixtyPlayer.config.useWaveformData || threeSixtyPlayer.flash9Options.useEQData || threeSixtyPlayer.flash9Options.usePeakData) {
    // even if HTML5 supports MP3, prefer flash so the visualization features can be used.
    soundManager.preferFlash = true;
}

// favicon is expensive CPU-wise, but can be used.
if (window.location.href.match(/hifi/i)) {
    threeSixtyPlayer.config.useFavIcon = true;
}

if (window.location.href.match(/html5/i)) {
    // for testing IE 9, etc.
    soundManager.useHTML5Audio = true;
}
soundManager.onready(function() {
    // SM2 is ready to go!

});

function play_sound() {

	console.log("play");
    soundManager.createSound({
        id: 'mySound',
        url: 'assets/sounds/'+ques_array[cur_ques][1]+'.mp3',
        autoLoad: true,
        autoPlay: false,
        onload: function() {
            soundManager.play('mySound');
            //    alert('The sound '+this.id+' loaded!');
        },
        volume: 50
    });
}
	
	 // For BTN Amination
    $(function() {  
		
		if (is_touch_device()) {
    // add code here
    }
		else
			{
		

	  $('.btn-6')
	    .on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
				$(this).find('span.overlay-color').css({top:relY, left:relX})
	    })
	    .on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
	      		relX = e.pageX - parentOffset.left,
	      		relY = e.pageY - parentOffset.top;
	    	$(this).find('span.overlay-color').css({top:relY, left:relX})
	    });
			}
	  $('[href=#]').click(function(){return false});
	});
	
	$(".show-date").html($(".fs-current").attr("data-year"));
			$(".fs-title h1").html($(".fs-current").attr("data-hint"));
	
	
	var swipe_audioElement;
  swipe_audioElement= document.createElement('audio');
  swipe_audioElement.setAttribute('src', 'assets/sounds/pop.mp3');
	
	$("#start-btn").click(function(){
		$(".container").addClass("show");
		$("#first-screen").addClass("hidden");
		  swipe_audioElement.play();

		setTimeout(function(){
			$(".map-2").addClass("show");
			
		},2000)
	});
	
	$("#refresh-btn").click(function(){
		
		location.reload();
	})
	
	// sound
	if (is_touch_device()) {
    // add code here
    }
	else
		{
	$(".quiz-option").mouseenter(function(){
        
		
        
  var swipe_audioElement_click;
  swipe_audioElement_click = document.createElement('audio');
  swipe_audioElement_click.setAttribute('src', 'assets/sounds/pop.mp3');
  swipe_audioElement_click.play();
        
        
    });
			
			}
	
	function image_pos()
    {
    $(".map-1 img").css({"top":-1*($(".map-1 img").height() - $(".map-1").height())});    
    }
    
    $(window).load(function(){
        image_pos();
    })
    
    $(window).resize(function(){
        image_pos();
    })
	

$(window).load(function(){
	$('.loading-app').hide();
	$('#start-btn').show();
})	