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
		$('<thead></thead>').prependTo('#manipur table').append($('#manipur table tr:first'));
		
		
		
		//$('tr:first td').wrapInner('<div />').find('div').unwrap().wrap('<th/>');
		//$("table").tablesorter(); 
		//$('table').DataTable();
		//$("table").tablesorter(); 
		//$("table").trigger("update"); 
	}, 1000);
	
 });


