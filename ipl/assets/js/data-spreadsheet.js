
//var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1nBGRxoVGYj5Z-HT5tJrbLMQ9yyfKntTh1MatrAyWddE/pubhtml';

var public_spreadsheet_ipl = 'https://docs.google.com/spreadsheets/d/1wLwC_zUfumowCc19Nhtpn1XregUsEfAVmGB1zze_bG4/pubhtml';

	
function init(){
Tabletop.init({
	key: public_spreadsheet_ipl,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("best_batsman").innerHTML = 
//	"<tr>" 
//	+ "<td>" + [ data[0].upparty,] + "</td>" 
//	+ "<td>" + [ data[0].upseats,] + "</td>"  
//	+ "</tr>"
//
//	+"<tr>" 
//	+ "<td>" + [ data[1].upparty,] + "</td>" 
//	+ "<td>" + [ data[1].upseats,] + "</td>"  
//	+ "</tr>"
//
//	+"<tr>" 
//	+ "<td>" + [ data[2].upparty,] + "</td>" 
//	+ "<td>" + [ data[2].upseats,] + "</td>"  
//	+ "</tr>"
//
//	+"<tr>" 
//	+ "<td>" + [ data[3].upparty,] + "</td>" 
//	+ "<td>" + [ data[3].upseats,] + "</td>"  
//	+ "</tr>"; 
	
	"<figure>"
	+ "<img src='https://thequint.herokuapp.com/ipl/data/" + [ data[0].bestbatsman,] + ".jpg'>"
	+ "<figcaption>" + [ data[0].bestbatsman,] + "</figcaption>"
	"</figure>"
	
console.log(data);
}







