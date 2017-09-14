var public_spreadsheet_bol = 'https://docs.google.com/spreadsheets/d/1U0lzu5bm8YL2BVbiLfApbZTgKSo90ShbiHu6w4J06DU/pubhtml';



var speed = 0.5;
var level = 1;
var tile_number = 2;
var count = 0;
var pos_arr = [-100, -500];
var score = 0;
var news_data;
var random_array=[];
var news_count=0;
var lives=3;
var isMobile=0;




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function create_news() {
	var left = Math.floor((Math.random() * (window.innerWidth - 300)) + 1);
		
	$("#news-list").append("<li data-news="+news_data[random_array[news_count]].data+" style='left:" + left + "px'><figure><img src="+news_data[random_array[news_count]].Image +"><figcaption><h1>" + news_data[random_array[news_count]].News + "</h1><h2>Data-" + news_data[random_array[news_count]].data + "</h2></figcaption></figure></li>");
	news_count++
}

function update_score() {
	$("#score").html("Score :"+ score);
}
function update_lives()
{
	$("#lives").html("Lives :"+ lives);
	if(lives==0)
		{
			alert("game over");
		}
}

function update_news(i) {
	var left = Math.floor((Math.random() * (window.innerWidth - 300)) + 1);
	
	$("#news-list li").eq(i).html("<figure><img src="+news_data[random_array[news_count]].Image +"><figcaption><h1>" + news_data[random_array[news_count]].News + "</h1><h2>Data-" + news_data[random_array[news_count]].data + "</h2></figcaption></figure>");
	$("#news-list li").eq(i).css("left", left)
	$("#news-list li").eq(i).attr("data-news",  news_data[random_array[news_count]].data )
	//button_click_handler();
	news_count++
}



function button_click_handler()
{
$("#ravana-heads li").click(function () {

	var head_id = $(this)

	$("#news-list li").each(function () {
		console.log($(this).attr("data-news") +"|"+ head_id.attr("data-head"));
		if ($(this).attr("data-news") == head_id.attr("data-head")) {
			pos_arr[$(this).index()] = -300;
			$(this).css("transform", "translate3d(1px," + pos_arr[$(this).index()] + "px,0)");
			update_news($(this).index());
			score = score + 10;
				update_score();
		}
	});


	//alert(head_id.data("head"));
})

	
}


function init() {
	Tabletop.init({
		key: public_spreadsheet_bol,
		callback: showInfo,
		simpleSheet: true
	});
	
	if(window.innerWidth<960)
		{
			init_mobile();
		}
}

function init_mobile()
{
	isMobile =1;
}




window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

	news_data = data;
	
	
	for (var i=0;i<news_data.length;i++)
		{
		random_array.push(i);	
		}
	
	random_array=shuffle(random_array);
	console.log(random_array);
	
	
	for (var i = 0; i < tile_number; i++) {
		create_news();
	}
	button_click_handler();
	update_score();
	update_lives();
	


	function news_loop() {

		level = level + 0.001;
		count = count + 1;



		for (var i = 0; i < pos_arr.length; i++) {
			pos_arr[i] = pos_arr[i] + speed * level;
			if (pos_arr[i] > window.innerHeight) {
				pos_arr[i] = -300;
				update_news(i);
				lives=lives-1
				update_lives();
				console.log("yes");
				
			}

		}

		$("#news-list li").each(function (index) {
			$(this).css("transform", "translate3d(1px," + pos_arr[index] + "px,0)");
		})

		requestAnimationFrame(news_loop);
	}
	requestAnimationFrame(news_loop);


}