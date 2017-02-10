$(document).ready(function() {
  var sections = [
	  {state: 'punjab', id:2666}, 
	  {state: 'uttar-pradesh', id:2665}, 
	  {state: 'uttarakhand', id:2667}, 
	  {state: 'goa', id:2668}, 
	  {state: 'manipur', id:2669}
  ];

  sections.forEach(function(section) {
    $.getJSON('https://thequint.com/api/v1/stories?limit=5&section-id=' + section.id, function(res) {
      var stories = res.stories;
      var elements = stories.map(function(story) { return '<div class="story-list"><div class="story-item"><figure><img src="http://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg" /><figcaption><a href="http://thequint.com/' + story.slug + '" target="blank">' + story.headline + '</a></figcaption></figure></div></div>'});
      elements.forEach(function(element) {
        var id = '#' + section.state + '-election-stories';
        $(id).append(element);
      });
    });
  });
});

//auto=format&rect=0,0,2348,1321&q=35&w=270&fm=pjpg

//https://www.thequint.com/api/v1/stories








$(document).ready(function(){
    $('#tabs div.tab-content').hide();
	
	$('#tabs .tab').append('<div class="loading"></div>');
	
    //$('#tabs div.tab-content:first').show();
   // $('#tabs ul li:first').addClass('active');
	
	setTimeout(function(){
		$("#tabs ul li.active a.tab-nav").click();
	}, 400);
 
    $('#tabs ul li a.tab-nav').click(function(){
		//e.preventDefault();

		//$('.chart-content').highcharts().reflow();
		$('.tab-content').removeClass('active');


		$('.loading').show();
		setTimeout(function(){
			$('.loading').hide();
		}, 400);

        $('#tabs ul li').removeClass('active');
        $(this).parent().addClass('active');
        var currentTab = $(this).attr('href');
        $('#tabs div.tab-content').hide();
        $(currentTab).show();
        return false;
    });
   
});





$(document).ready(function(){
	$('#custom_tab_1.inner-tab .tabcontent').hide();
	$('#custom_tab_1.inner-tab .tabcontent.open').show();
	
	
	$('#tab_1').click(function(){
		$('#custom_tab_1 ul li a').removeClass('is-active');
		$(this).addClass('is-active');
		
		$('#custom_tab_1.inner-tab .tabcontent#tab_cont_1').show();
		$('#custom_tab_1.inner-tab .tabcontent#tab_cont_2').hide();
	});
	
	$('#tab_2').click(function(){
		$('#custom_tab_1 ul li a').removeClass('is-active');
		$(this).addClass('is-active');
		
		$('#custom_tab_1.inner-tab .tabcontent#tab_cont_1').hide();
		$('#custom_tab_1.inner-tab .tabcontent#tab_cont_2').show();
	});
	
});



$("document").ready( function() {
	setTimeout(function(){
 		$('<thead></thead>').prependTo('#punjab-criminal table').append($('#punjab-criminal table tr:first'));
		$('<thead></thead>').prependTo('#data_1 table').append($('#data_1 table tr:first'));
		$('<thead></thead>').prependTo('#up table').append($('#up table tr:first'));
		$('<thead></thead>').prependTo('#uk table').append($('#uk table tr:first'));
		$('<thead></thead>').prependTo('#goa table').append($('#goa table tr:first'));
		$('<thead></thead>').prependTo('#goa-criminal table').append($('#goa-criminal table tr:first'));
		$('<thead></thead>').prependTo('#manipur table').append($('#manipur table tr:first'));
		
		
		
		//$('tr:first td').wrapInner('<div />').find('div').unwrap().wrap('<th/>');
		//$("table").tablesorter(); 
		//$('table').DataTable();
		//$("table").tablesorter(); 
		//$("table").trigger("update"); 
	}, 1000);
	
 });



$("document").ready( function() {
//Punjab
	
var $rows_punjab_1 = $('#punjab table tr');
$('#punjab_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_punjab_1.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#punjab table').hide();
	  $('#punjab_btn_search').hide();
    }else{
	  $('#punjab_btn_search').show(); 
    }
});
	
$('#punjab_btn_search').click(function(){
	$('#punjab table').show();	
});
	

//Punjab criminal
var $rows_punjab_2 = $('#punjab-criminal table tr');
$('#punjab-criminal_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_punjab_2.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#punjab-criminal table').hide();
	  $('#punjab-criminal_btn_search').hide();
    }else{
	  $('#punjab-criminal_btn_search').show(); 
    }
});
	
$('#punjab-criminal_btn_search').click(function(){
	$('#punjab-criminal table').show();	
});
	
	
// UP
	
var $rows_up_1 = $('#up table tr');
$('#up_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_up_1.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#up table').hide();
	  $('#up_btn_search').hide();
    }else{
	  $('#up_btn_search').show(); 
    }
});
	
$('#up_btn_search').click(function(){
	$('#up table').show();	
});
	
//UK
var $rows_uk_1 = $('#manipur table tr');
$('#uk_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_uk_1.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#uk table').hide();
	  $('#uk_btn_search').hide();
    }else{
	  $('#uk_btn_search').show(); 
    }
});
	
$('#uk_btn_search').click(function(){
	$('#uk table').show();	
});
	
// Goa	
var $rows_goa_1 = $('#goa table tr');
$('#goa_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_goa_1.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#goa table').hide();
	  $('#goa_btn_search').hide();
    }else{
	  $('#goa_btn_search').show(); 
    }
});
	
$('#goa_btn_search').click(function(){
	$('#goa table').show();	
});
	
	
//Goa criminal
var $rows_goa_2 = $('#goa-criminal table tr');
$('#goa-criminal_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_goa_2.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#goa-criminal table').hide();
	  $('#goa-criminal_btn_search').hide();
    }else{
	  $('#goa-criminal_btn_search').show(); 
    }
});
	
$('#goa-criminal_btn_search').click(function(){
	$('#goa-criminal table').show();	
});	

//Manipur
var $rows_manipur_1 = $('#manipur table tr');
$('#manipur_search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows_manipur_1.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
	
	if($(this).val() == ''){
      $('#manipur table').hide();
	  $('#manipur_btn_search').hide();
    }else{
	  $('#manipur_btn_search').show(); 
    }
});
	
$('#manipur_btn_search').click(function(){
	$('#manipur table').show();	
});


	
});	
