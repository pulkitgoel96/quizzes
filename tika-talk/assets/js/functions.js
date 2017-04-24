$(document).ready(function() {
	
	// start and end time
	
	$('.baby li').click(function(){
		$(this).find('.qa-box').show();
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
	
	
	$('#howPlay').click(function(){
		$('#startScreen').hide();
		$('#howplayScreen').show();
	});
	
	
	
	$('#start').click(function(){
		
	$('#howplayScreen').hide();
		
	$('#endScreen').delay(45000).fadeIn();
		
	$('#baby_1').delay(1000).fadeIn();
	$('#baby_1').delay(10000).fadeOut();
	
	$('#baby_2').delay(5000).fadeIn();
	$('#baby_2').delay(10000).fadeOut();
	
	$('#baby_3').delay(10000).fadeIn();
	$('#baby_3').delay(10000).fadeOut();
	
	$('#baby_4').delay(15000).fadeIn();
	$('#baby_4').delay(10000).fadeOut();
	
	$('#baby_5').delay(20000).fadeIn();
	$('#baby_5').delay(10000).fadeOut();
	
	$('#baby_6').delay(23000).fadeIn();
	$('#baby_6').delay(10000).fadeOut();
	
	$('#baby_7').delay(37000).fadeIn();
	$('#baby_7').delay(10000).fadeOut();
	
	$('#baby_8').delay(30000).fadeIn();
	$('#baby_8').delay(10000).fadeOut();
	
	$('#baby_9').delay(33000).fadeIn();
	$('#baby_9').delay(10000).fadeOut();
	
	$('#baby_10').delay(36000).fadeIn();
	$('#baby_10').delay(10000).fadeOut();
	
	$('#baby_11').delay(40000).adeIn();
	$('#baby_11').delay(10000).fadeOut();
	
	$('#baby_12').delay(43000).fadeIn();
	$('#baby_12').delay(10000).fadeOut();
		
		
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


