var public_spreadsheet_contact = 'https://docs.google.com/spreadsheets/d/1X0D60W0Zwrs2bXqZSsGiVbBBdazNCMrIWN9JUwYCSYo/pubhtml';
	
function init(){
	Tabletop.init({
		key: public_spreadsheet_contact,
		callback: showInfo,
		simpleSheet: true 
	});
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

var _html_list = "";
for(var index = 0; index < data.length; index++) {
_html_list +=  "<li>"
					+ "<div class='contact-list'>"
						+ "<figure>"
							+ "<div class='contact-img'><img src="+'data/contact/'+[data[index].Image,]+'.jpg'+"></div>"
							+ "<figcaption>"
								+ "<div class='gallery--caption'>"
									+ "<h1 class='label-1'>" +[data[index].Name,] +"</h1>"
									//+ "<h2 class='label-2'>" +[data[0].Age,] +"</h2>"
									+ "<h3 class='label-2'>" +[data[index].Date,] +"</h3>"
									+ "<h3 class='label-3'>" +[data[index].Location,] +"</h3>"
									+ "<h3 class='label-4'>" +[data[index].CaseStatus,] +"</h3>"
									+ "<h3 class='label-5'>" +[data[index].WhatHappened,] +"</h3>"
									+ "<span class='more-btn'>Read More</span>"
									+ "<div class='contact-video'><div class='embed-content'><iframe src='https://www.youtube.com/embed/"+[data[index].Video,]+"?ecver=1' frameborder='0' allowfullscreen></iframe></div></div>"
								+ "</div>"
							+ "</figcaption>"
						+ "</figure>"
					+"</div>"
				+"</li>";
}

document.getElementById("allContact").innerHTML = _html_list;
}

