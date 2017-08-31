


$(document).ready(function(){
    $(".share-ico").click(function(e){
      $(".social-ico").slideToggle(400);
      return false;
   });
   $("body").click(function(){
      $(".social-ico").slideUp();
   });
	
	// nnnnn
	
	
	$('#DefultOption').click(function(){

		$('.blank-recipe').removeClass('is-hide');
		$('.data-recipe').removeClass('is-show');
	})
	
	$('.data-option').click(function(){
		$('.app-container').hide();
		$('.detail-wrapper').addClass('is-slide');
	
		if($(this).index()==0)//left button
			{
				$(".detail-content p").html(recipe_data[recipe_index].Intro_1);
				$(".method").html(recipe_data[recipe_index].Steps_1);
				$(".frame-video iframe").attr('src', recipe_data[recipe_index].Video_1);
				$(".rcp-name").html(recipe_data[recipe_index].Item_1);
				
			}
		else if($(this).index()==2)//right button
			{
				$(".detail-content p").html(recipe_data[recipe_index].Intro_2);
				$(".method").html(recipe_data[recipe_index].Steps_2);
				$(".frame-video iframe").attr('src', recipe_data[recipe_index].Video_2);
				$(".rcp-name").html(recipe_data[recipe_index].Item_2);
			}
		
		
	})
	
	
	$('.back-top').click(function(){
		$('.app-container').show();
		$('.detail-wrapper').removeClass('is-slide');
		$(".frame-video iframe").attr('src','');
	})
	
	
});