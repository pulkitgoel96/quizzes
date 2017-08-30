var public_spreadsheet = 'https://docs.google.com/spreadsheets/d/1lY0gfXBXPTZBp1-6cwoamEpyMn73p30fB7fZ8yQiTwM/pubhtml';
var recipe_data;
var recipe_index;

function init(){
Tabletop.init({
	key: public_spreadsheet,
	callback: showInfo,
	simpleSheet: true 
});
}

window.addEventListener('DOMContentLoaded', init);
function showInfo(data) {
	
	
	recipe_data = data;
	
	console.log(recipe_data);
	for (var i=0; i<recipe_data.length; i++)
		{
			
			$("#colorselector").append("<option value="+i+">"+recipe_data[i].Category_Name+"</option>");
		}
	
	 $('#colorselector').on('change', function() {
		 
       //     $('.recipe').hide();
		 
		 //$(".recipe .sub-headline").html(recipe_data[this.value].Item_title)
	
		 $('.data-recipe').addClass('is-show');
		 $('.blank-recipe').addClass('is-hide')
		 $(".data-option:nth-child(1)").html(recipe_data[this.value].Item_1);
		  $(".data-option:nth-child(3)").html(recipe_data[this.value].Item_2);
            console.log(this.value);
		 recipe_index =this.value;
			
        });
}




