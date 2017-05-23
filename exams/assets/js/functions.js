


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('showTime').innerHTML =
    //h + ":" + m + ":" + s;
		h + ":" + m ;
	document.getElementById('textTime').innerHTML =
    //h + ":" + m + ":" + s;
		h + ":" + m ;
    var t = setTimeout(startTime, 500);
	
	
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



$(document).ready(function(){
    $(".social-back").click(function(e){
      $(".social-icons").slideToggle(400);
      return false;
   });
   $("body").click(function(){
      $(".social-icons").slideUp();
   });
}); 

$(document).ready(function() {
	
    $('.credits').click(function() {
        $('.creditsModal').show().addClass('zoomIn');
    });

    $('.modalClose').click(function() {
        $('.creditsModal').fadeOut();
    });
	
	
});


// Step 2

counts = {};

        function format_number(text){ 
            return text.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        };
        
        function magic_number(element_name, value) {
            var elem = $(element_name);
            var current = counts[element_name] || 0;
            $({count: current}).animate({count: value}, {
                                        duration: 500,
                                        step: function() {
                                            elem.text(format_number(String(parseInt(this.count))));
                                        }});
            							counts[element_name] = value;
        };

        function update() {
            var jqxhr = $.getJSON("number.php?jsonp=?", function(data) {
								
                               // magic_number("#number1", data[0]['n1']);
								
                       });
        };

        setInterval(update, 3000);
        update();



// step 2

$(document).ready(function(){	
	
	// Onload random value
	var random = Math.floor(Math.random() * $('.data ul li').length);
    $('.data ul li').show().eq(random).addClass('is-show');
	
	// Onload var of sender and msg
	var sender_dp = $('.data ul li.is-show').find('.dp').html();
	var sender_name = $('.data ul li.is-show').find('h3').html();
	var sender_msg = $('.data ul li.is-show').find('.full-msg').html();
	
	//Onload change sender name and msg
	$('.profile .profile-img').html(sender_dp);
	$('.profile-name h2').html(sender_name);
	$('.wap-body').html(sender_msg);
	
	
	
	$(".cursor_face").click(function(){
		
		$('.counter').addClass('flash');
		
		setTimeout(function () {
			$('.counter').removeClass('flash');
		}, 800);
		
		
		$('.data ul li').removeClass('is-show');
		//Function for random value
		var random = Math.floor(Math.random() * $('.data ul li').length);
    	$('.data ul li').show().eq(random).addClass('is-show');
		
		//Var of sender and msg
		var sender_dp = $('.data ul li.is-show').find('.dp').html();
		var sender_name = $('.data ul li.is-show').find('h3').html();
		var sender_msg = $('.data ul li.is-show').find('.full-msg').html();
		
		
		$(this).addClass("frame");
		
		//Onclick add frame animation
		setTimeout(function () {
			$('.cursor_face').removeClass('frame');
		}, 400);
	
		//Play the crack sound
		face_audio.play();
		
		
		//Onclick add crack
		$('.wap-screen').addClass('crack');
		var crackClasses = ['crack1', 'crack2', 'crack3'];
		classIndex = Math.floor(Math.random() * crackClasses.length);
		$('.wap-screen').addClass(crackClasses[classIndex]);
		
		
		
		setTimeout(function () {
			//Onclick add animation
			$('.mid-container').addClass('toggle-screen');
		}, 1500);
		
		
		setTimeout(function () {
			//Onclick remove the sender and msg
			$('.profile .profile-img').html('');
			$('.profile-name h2').html('');
			$('.wap-body').html('');
		}, 2000);
		
		setTimeout(function () {
			
			//Onclick remove animation and crack screen
			$('.mid-container').removeClass('toggle-screen');
			$('.wap-screen').removeClass('crack');
			$('.wap-screen').removeClass('crack1');
			$('.wap-screen').removeClass('crack2');
			$('.wap-screen').removeClass('crack3');
			
			// Onclick change sender name and msg
			$('.profile .profile-img').html(sender_dp);
			$('.profile-name h2').html(sender_name);
			$('.wap-body').html(sender_msg);
			
		}, 2200);
		
	});
	
});


$(document).ready(function(){
	$('#number1').html($('#previous_counter').html());	
	var count =  parseInt($('#previous_counter').text()); 
   
   
	$(".cursor_face").click(function(){
		
		setTimeout(function(){ 
			jQuery('.pow').show();
		}, 200);
		
		var jqxhr = $.getJSON("ajax.php?count="+count, function(data) {
			count = parseInt(count) + 1;
			$('#number1').html(data.count);	
			
		});
		//face_audio.play();
	});
});



