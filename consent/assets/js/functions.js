
$(document).ready(function(){
	$('#startScreen').click(function(){
		$(this).fadeOut();
		$('#questionContainer').show();
	});
	
	
	$('.next-item li').click(function(){
		var $next = $('#questionContainer .quiz-item.is-show').removeClass('is-show').next('#questionContainer .quiz-item')
			if ($next.length) {
			$next.addClass('is-show'); 
		}
		
	});
	
	$('.quiz-ans ul li').click(function(){
		var point_val = $('.points').text();
		var this_val = $(this).find('span').text();
		var total_val = parseInt(point_val) + parseInt(this_val);
		$('.points').text(total_val);
	});
	
	$('.last-item li').click(function(){
		$('#questionContainer').hide();
		$('#answerContainer').show();


	if($(".points").text() <= 20 ){
		
       	$('.ans-1').addClass('is-result');

      } else if($(".points").text() > 20 && $(".points").text() <= 40){ 
		  $('.ans-2').addClass('is-result');
       

      } else if($(".points").text() > 40 && $(".points").text() <= 60){
		  $('.ans-3').addClass('is-result');
        

      } else if($(".points").text() > 60 && $(".points").text() <= 80){
		  $('.ans-4').addClass('is-result');
      

      }else if($(".points").text() > 80 && $(".points").text() <= 100){
		  $('.ans-5').addClass('is-result');
       
      }	
	});
	
});


