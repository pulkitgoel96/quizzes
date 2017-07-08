$(document).on('ready', function() {

    // WOW Animations
    var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    // Gallery Slider
	$(".horizontal--slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
	});

    // Cuctom Arrows
    $('.arrow--prev').click(function(){
      $('.horizontal--slider').slick('slickPrev');
    })

    $('.arrow--next').click(function(){
      $('.horizontal--slider').slick('slickNext');
    })

    // Maps
	$('.map-container').click(function(){
        $(this).find('iframe').addClass('clicked');
    })
    .mouseleave(function(){
        $(this).find('iframe').removeClass('clicked');
    });

    setTimeout(function(){
        $(".embed-content.None").empty();
        $(".embed-content.none").empty();
    }, 3000);

    // Footer
    $('.credits').click(function() {
        $('.creditsModal').show().addClass('zoomIn');
    });

    $('.modalClose').click(function() {
        $('.creditsModal').fadeOut();
    });

    // Body Background Fixed
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

    // Quotes Animation
    runslide();
    function runslide() {
        $('.quote--first').fadeIn(1500).delay(3500).fadeOut(1500, function() {
            $('.quote--second').fadeIn(1500).delay(3500).fadeOut(1500, function() {
                $('.quote--third').fadeIn(1500).delay(3500).fadeOut(1500, function() {
                    $('.quote--forth').fadeIn(1500).delay(3500).fadeOut(1500, function() {
                    runslide();
                    });
                });
            });
        });
    }
});

// Nav Page Scroll 
$(document).ready(function() { 
    $('a[href*=#]').each(function() {  
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')   && location.hostname == this.hostname   && this.hash.replace(/#/, '')) {   
            var $targetId = $(this.hash),
                $targetAnchor = $('[name=' + this.hash.slice(1) + ']');   
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;    
            if ($target) {     
                var targetOffset = $target.offset().top;     
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');      
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, 1000);      
                    return false;     
                });   
            }  
        } 
    });
});