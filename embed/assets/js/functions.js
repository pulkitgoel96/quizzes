
// For Image

$(document).ready(function() {
	
	$('#showImage').attr('src', 'data/img-1.jpg');
	$('#bttnImg').click(function(){
		$(this).toggleClass('btn-switch');
		$('.for-image').toggleClass('more');
		
		if ($('.for-image').hasClass('more')) {
        $('#showImage').attr('src', 'data/img-2.jpg');

		} else  {
			$('#showImage').attr('src', 'data/img-1.jpg');
		}	
	});
	
});


// For Video

$(document).ready(function() {
	
	var video_url_1 = 'https://www.youtube.com/embed/7XmA3VOfrkM?ecver=1';
	var video_url_2 = 'https://www.youtube.com/embed/oS4LsIn762k?ecver=1';
	
	$('#showVideo').attr('src', video_url_1);
	
	
	$('#bttnVideo').click(function(){
		$(this).toggleClass('btn-switch');
		$('.for-video').toggleClass('more');
		
		if ($('.for-video').hasClass('more')) {
        $('#showVideo').attr('src', video_url_2);
        
		} else  {
			$('#showVideo').attr('src', video_url_1);
		}	
	});
});