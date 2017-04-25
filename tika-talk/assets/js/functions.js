$(document).ready(function() {

	
	
	// start and end time
	
	$('.baby li').click(function(){
		$(this).find('.qa-box').show();
		$(this).attr('data-ischecked','true');
	});
	
	
	$('.qa-box span').click(function(){
		$(this).closest('li').hide();
	});
	
	var pointPlus = 0;
	
	$('.qa-box .true-ans').click(function(){
		
		pointPlus += 1;
    	$("#pointPlus").text(pointPlus);
		$(".resultPlus").text(pointPlus);
		
	});
	
	var pointMinus = 0;
	
	$('.qa-box .false-ans').click(function(){
		pointMinus += 1;
    	$("#pointMinus").text(pointMinus);
		$(".resultMinus").text(pointMinus);
		
	});
	
	// your function
	function errorAdd(el){
		if($(el).attr('data-ischecked') == 'false') {
			pointMinus += 1;
    		$("#pointMinus").text(pointMinus);
			$(".resultMinus").text(pointMinus);	
		}
	}
	
	$('#howPlay').click(function(){
		$('#startScreen').hide();
		$('#howplayScreen').show();
	});
	
	
	
	$('#start').click(function(){
		
	$('#howplayScreen').hide();
		
	$('#endScreen').delay(52000).fadeIn();
		
	$('#baby_1').delay(1000).fadeIn();
	$.when($('#baby_1').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_2').delay(5000).fadeIn();
	$.when($('#baby_2').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_3').delay(10000).fadeIn();
	$.when($('#baby_3').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_4').delay(15000).fadeIn();
	$.when($('#baby_4').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_5').delay(20000).fadeIn();
	$.when($('#baby_5').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_6').delay(23000).fadeIn();
	$.when($('#baby_6').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_7').delay(37000).fadeIn();
	$.when($('#baby_7').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_8').delay(30000).fadeIn();
	$.when($('#baby_8').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_9').delay(33000).fadeIn();
	$.when($('#baby_9').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_10').delay(36000).fadeIn();
	$.when($('#baby_10').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_11').delay(40000).fadeIn();
	$.when($('#baby_11').delay(10000).fadeOut()).done(errorAdd);
	
	$('#baby_12').delay(43000).fadeIn();
	$.when($('#baby_12').delay(10000).fadeOut()).done(errorAdd);
		
		
	//$('#babyId').delay(10000).fadeOut();

		
		
		
	});	
	
	
	
	$('#nextgameOver').click(function(){
		$('#endScreen').hide();
		$('#gameOver').show();
	});
	
	
	$('.true-ans').attr('onclick', 'PlaySound_2()');
	
	$('.false-ans').attr('onclick', 'PlaySound_1()');
	
});

	i = 45;
function onTimer() {
  document.getElementById('counter').innerHTML = i;
  i--;
  if (i < 0) {
  }
  else {
    setTimeout(onTimer, 1000);
  }
}


function PlaySound_2() {
	var sound = document.getElementById("audio_2");
	sound.play();
}

function PlaySound_1() {
	var sound = document.getElementById("audio_1");
	sound.play();
}


