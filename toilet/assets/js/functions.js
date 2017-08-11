// step 1


counts = {};

        function format_number(text){ 
            return text.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        };
        
        function magic_number(element_name, value) {
            var elem = $(element_name);
            var current = counts[element_name] || 0;
            $({count: current}).animate({count: value}, {
                                        duration: 500,
                                        step: function() {
                                            elem.text(format_number(String(parseInt(this.count))));
                                        }});
            							counts[element_name] = value;
        };

        function update() {
            var jqxhr = $.getJSON("number.php?jsonp=?", function(data) {
								
                               // magic_number("#number1", data[0]['n1']);
								
                       });
        };

        setInterval(update, 3000);
        update();


// step 3

$(document).ready(function(){
	$('#number1').html($('#previous_counter').html());	
	var count =  parseInt($('#previous_counter').text()); 
   
   
	$(".cursor_face").click(function(){
		
		setTimeout(function(){ 
			jQuery('.pow').show();
		}, 200);
		
		var jqxhr = $.getJSON("ajax.php?count="+count, function(data) {
			count = parseInt(count) + 1;
			$('#number1').html(data.count);	
			setTimeout(function(){ 
				jQuery('.pow').fadeOut();
			}, 500);
		});
		face_audio.play();
	});
});





$(window).load(function(){
	
	$(".placeholder").each(function(){
	var n = $(this),
    i = $(this).find(".img-small"),
    o = i.attr("title"),
    r = new Image;
		
	
r.src = i.attr("src"), r.onload = function() {
   
};
var s = new Image;
		
		console.log(i.attr("data-large"));	
s.src = i.attr("data-large"), s.onload = function() {
	
	
    s.classList.add("loaded"), s.classList.add("img-large"), s.setAttribute("alt", o), s.setAttribute("title", o)
}, n.append(s)
});
})



