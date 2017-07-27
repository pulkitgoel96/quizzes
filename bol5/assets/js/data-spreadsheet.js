var public_spreadsheet_bol = 'https://docs.google.com/spreadsheets/d/1RXrD0xaXWW-I6mVwd806oNkr0zpKDyBEKwtobgB3YaQ/pubhtml';
	
function init(){
Tabletop.init({
	key: public_spreadsheet_bol,
	callback: showInfo,
	simpleSheet: true 
});
}


window.addEventListener('DOMContentLoaded', init);
function showInfo(data) {
	
	document.getElementById("data-1").innerHTML = "<p>" +[data[0].Boletho,] +"</p>";
	
	document.getElementById("data-2").innerHTML = 
		"<p>" +[data[0].Factoid,] +"</p>" +
	    "<p>" +[data[1].Factoid,] +"</p>" +
	    "<p>" +[data[2].Factoid,] +"</p>";

	document.getElementById("data-3").innerHTML =
		"<p>" +[data[0].Khulkebol,] +"</p>" +
		"<p>" +[data[1].Khulkebol,] +"</p>" +
		"<p>" +[data[2].Khulkebol,] +"</p>" +
		"<p>" +[data[3].Khulkebol,] +"</p>";
	
	//document.getElementById("data-4").innerHTML = "<div>" +[data[0].section4,] +"</div>";
	
	//document.getElementById("data-5").innerHTML = "<div>" +[data[0].section5,] +"</div>";


}



