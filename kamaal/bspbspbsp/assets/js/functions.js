


//$(document).scroll(function() {
//  var y = $(this).scrollTop();
//  if (y > 200) {
//    $('#topNav').show();
//  } else {
//    $('#topNav').hide();
//  }
//});








//$(document).ready(function () {
//    $(document).on("scroll", onScroll);
//    //smoothscroll
//    $('a[href^="#"]').on('click', function (e) {
//        e.preventDefault();
//        $(document).off("scroll");
//        
//        $('a').each(function () {
//            $(this).removeClass('active');
//        })
//        $(this).addClass('active');
//      
//        var target = this.hash,
//            menu = target;
//        $target = $(target);
//        $('html, body').stop().animate({
//            'scrollTop': $target.offset().top+2
//        }, 1500, 'easeInOutExpo', function () {
//            window.location.hash = target;
//            $(document).on("scroll", onScroll);
//        });
//    });
//});

//function onScroll(event){
//    var scrollPos = $(document).scrollTop();
//    $('#topNav a').each(function () {
//        var currLink = $(this);
//        var refElement = $(currLink.attr("href"));
//        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//            $('#topNav ul li a').removeClass("active");
//            currLink.addClass("active");
//        }
//        else{
//            currLink.removeClass("active");
//        }
//    });
//}




// Map functions


$(document).ready(function(){

    var satate_content = $('<div class="animated fadeIn"><div>');

		// Active show data

		var toggle_active_state_data = $('.states ul.first-set li:first').find('.state-data').html();
		var toggle_more_active_state_data = $('.states ul.more-states li:first').find('.state-data').html();

	
		$('.info-box').html(toggle_active_state_data);

	    $('.states ul li h4').append( '<em class="num" style="font-style:normal;"></em>' );
	
	
	
	$('.states ul li').click(function(){
		
		// Active state
		
		$('.states ul li').removeClass('is-active');
        $(this).addClass('is-active');
		
		var state_data = $(this).find('.state-data').html();
		var count_number = $(this).find('.state-data h4 span').text();
		
		var show_data = $(satate_content).html(state_data);
		
		 $('.info-box').html(show_data);
		 $('.info-box h4 span').hide();
		
		
		//$('.btn-more-state').text(count_number);
		
		$('.num').each(function () {
            $(this).prop('Counter',0).animate({
                //Counter: $(this).text()
                Counter: count_number
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
	
	});
	
	
	
	
  
	
	$('.states ul li').addClass('animated zoomIn');
	
	$('.btn-more-state').click(function(){
		$(this).toggleClass('btn-switch');
		$('.states').toggleClass('more');
		$('.info-box').html(toggle_more_active_state_data);


		if ($('.states').hasClass('more')) {
        $('#mapImg').attr('src', 'assets/images/map-more.png');
        $('.states ul li').removeClass('is-active');
		$('.states ul.more-states li:first').addClass('is-active');
		$('.info-box').html(toggle_more_active_show_data);


        
    } else  {
		$('#mapImg').attr('src', 'assets/images/map.png');
		$('.states ul li').removeClass('is-active');
		$('.states ul.first-set li:first').addClass('is-active');
		$('.info-box').html(toggle_active_state_data);
        
    }	
	});
});



$(document).ready(function() {
	var screen_height = $(window).height();
	var screen_width = $(window).width();
	
	$(".full-image-section").height(screen_height + 70);
	$(".full-image").height(screen_height + 70);
	$(".full-image img").height(screen_height + 70);
	
	if ($(window).width() < 960) {
			$(".full-image-section").height(screen_height + 70);
			$(".full-image").height(screen_height + 70);
		    $(".full-image img").height(screen_height + 70);
			
		}else{
			$(".full-image-section").height('');
			$(".full-image").height('');
			$(".full-image img").height('');
			
		}
	
	

})



$(document).ready(function(){
    $(".social-back").click(function(e){
      $(".social-icons").slideToggle(400);
      return false;
   });
   $("body").click(function(){
      $(".social-icons").slideUp();
   });
});
 
/*
		TOOLTIP
	*/

	$( function()
	{
		var targets = $( '[rel~=tooltip]' ),
			target	= false,
			tooltip = false,
			title	= false;

		targets.bind( 'mouseenter', function()
		{
			target	= $( this );
			tip		= target.attr( 'title' );
			tooltip	= $( '<div id="tooltip"></div>' );

			if( !tip || tip == '' )
				return false;

			target.removeAttr( 'title' );
			tooltip.css( 'opacity', 0 )
				   .html( tip )
				   .appendTo( 'body' );

			var init_tooltip = function()
			{
				if( $( window ).width() < tooltip.outerWidth() * 1.5 )
					tooltip.css( 'max-width', $( window ).width() / 2 );
				else
					tooltip.css( 'max-width', 340 );

				var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
					pos_top	 = target.offset().top - tooltip.outerHeight() - 20;

				if( pos_left < 0 )
				{
					pos_left = target.offset().left + target.outerWidth() / 2 - 20;
					tooltip.addClass( 'left' );
				}
				else
					tooltip.removeClass( 'left' );

				if( pos_left + tooltip.outerWidth() > $( window ).width() )
				{
					pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
					tooltip.addClass( 'right' );
				}
				else
					tooltip.removeClass( 'right' );

				if( pos_top < 0 )
				{
					var pos_top	 = target.offset().top + target.outerHeight();
					tooltip.addClass( 'top' );
				}
				else
					tooltip.removeClass( 'top' );

				tooltip.css( { left: pos_left, top: pos_top } )
					   .animate( { top: '+=10', opacity: 1 }, 50 );
			};

			init_tooltip();
			$( window ).resize( init_tooltip );

			var remove_tooltip = function()
			{
				tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
				{
					$( this ).remove();
				});

				target.attr( 'title', tip );
			};

			target.bind( 'mouseleave', remove_tooltip );
			tooltip.bind( 'click', remove_tooltip );
		});
	});




// @explanation
// define the pin once in the target scene, but
// don't attach animation within same scene; instead
// create a scene for every class and toggle them on or off
// depending on the offset value of the scroll.

// @info
// To see this pen with indicators make sure to uncomment the 
// lines containing .addIndicators()
//
// While this is a scroll example I've also included a CSS only
// version to understand how steps can work in CSS animations.

// global vars
var viewer       = document.querySelector('.viewer'),
    frame_count  = 9,
    offset_value = 100;

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky',
  duration: (frame_count * offset_value) + 'px',
  reverse: true
})
.setPin('#sticky')
//.addIndicators()
.addTo(controller);

// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky',
      offset: i * offset_value
    })
    .setClassToggle(viewer, 'frame' + i)
    //.addIndicators()
    .addTo(controller);
}


///2nd////

var viewer       = document.querySelector('.viewer1'),
    frame_count  = 9,
    offset_value = 100;

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky1',
  duration: (frame_count * offset_value) + 'px',
  reverse: true
})
.setPin('#sticky1')
//.addIndicators()
.addTo(controller);

// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky1',
      offset: i * offset_value
    })
    .setClassToggle(viewer, 'frame' + i)
    //.addIndicators()
    .addTo(controller);
}



