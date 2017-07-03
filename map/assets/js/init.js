
	
	/* Map Initialization */
	if( $('#map_canvas').length > 0 ){	
		var settings = {
			zoom: 11,
			center: new google.maps.LatLng(28.536927, 77.266899),
			styles:[
				{
					"stylers": [
						{
							"hue": "#007fff"
						},
						{
							"saturation": 89
						}
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "administrative.country",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]};		
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Hello Friend!</strong></h4>'+
				'<div id="bodyContent">'+
				'<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			
			var companyPos = new google.maps.LatLng(28.536927, 77.266899);	
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				title:"Our Office",
				zIndex: 3});	
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});	
		}
		
	/*Slimscroll*/
	$('.nicescroll-bar').slimscroll({height:'100%',color: '#01c853',opacity:1,size:5});
	
	







