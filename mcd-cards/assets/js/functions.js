
var public_spreadsheet_elections = 'https://docs.google.com/spreadsheets/d/1eJ6FhLAh6eNxx9KUX7n3tcmLHp2eGFelvYdflJW2_eA/pubhtml';

function init(){
Tabletop.init({
	key: public_spreadsheet_elections,
	callback: showInfo,
	simpleSheet: true 
});
}


window.addEventListener('DOMContentLoaded', init);







