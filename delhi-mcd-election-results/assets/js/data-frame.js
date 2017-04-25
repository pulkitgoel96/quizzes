
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1eJ6FhLAh6eNxx9KUX7n3tcmLHp2eGFelvYdflJW2_eA/pubhtml';

	
function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}



window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {	
document.getElementById("data_north").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].northparty,] + "</td>" 
	+ "<td>" + [ data[0].northseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].northparty,] + "</td>" 
	+ "<td>" + [ data[1].northseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].northparty,] + "</td>" 
	+ "<td>" + [ data[2].northseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].northparty,] + "</td>" 
	+ "<td>" + [ data[3].northseats,] + "</td>"  
	+ "</tr>";
	
	
	document.getElementById("data_south").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].punjabparty,] + "</td>" 
	+ "<td>" + [ data[0].punjabseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].punjabparty,] + "</td>" 
	+ "<td>" + [ data[1].punjabseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].punjabparty,] + "</td>" 
	+ "<td>" + [ data[2].punjabseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].punjabparty,] + "</td>" 
	+ "<td>" + [ data[3].punjabseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_east").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].ukparty,] + "</td>" 
	+ "<td>" + [ data[0].ukseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].ukparty,] + "</td>" 
	+ "<td>" + [ data[1].ukseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].ukparty,] + "</td>" 
	+ "<td>" + [ data[2].ukseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].ukparty,] + "</td>" 
	+ "<td>" + [ data[3].ukseats,] + "</td>"  
	+ "</tr>";
	
	document.getElementById("data_overall").innerHTML = 
	"<tr>" 
	+ "<td>" + [ data[0].goaparty,] + "</td>" 
	+ "<td>" + [ data[0].goaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[1].goaparty,] + "</td>" 
	+ "<td>" + [ data[1].goaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[2].goaparty,] + "</td>" 
	+ "<td>" + [ data[2].goaseats,] + "</td>"  
	+ "</tr>"

	+"<tr>" 
	+ "<td>" + [ data[3].goaparty,] + "</td>" 
	+ "<td>" + [ data[3].goaseats,] + "</td>"  
	+ "</tr>";
	
}






