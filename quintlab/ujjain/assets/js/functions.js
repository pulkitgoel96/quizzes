$(document).ready(function() {
    animation_flag = 0;
    $(".popup-btn").click(function() {
        $(".info-popup").show();
        // $(".info-popup").css({ "top": $(this).offset().top });
        // $(".info-popup h2").html($(this).attr("data-heading"));
        $(".info-popup figcaption").html($(this).attr("data-heading"));
        $(".info-popup p").html($(this).attr("data-text"));
        $(".info-popup img").attr("src",$(this).attr("data-img"));

        /*
        if (animation_flag == 0) {
            animation_flag = 1;
            $(".super-man-icon").removeClass("move_reset");
            $(".super-man-icon").addClass("move");
            setTimeout(function() {
                $(".super-man-icon").addClass("move_reset");
                setTimeout(function() {
                    $(".super-man-icon").removeClass("move");
                    animation_flag = 0;
                }, 10)
            }, 1600)
        }*/
    });

    $(".close-icon").click(function() {
        $(".info-popup").hide();
    });

    // Document Click
    $(document).mouseup(function (e){
        var container = $(".info-popup");
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.hide();
        }
        //$(".points").removeClass("active");
    });

    // var swipe_audioElement_click;
    // swipe_audioElement_click = document.createElement('audio');
    // swipe_audioElement_click.setAttribute('src', 'assets/media/super-man-sound.mp3');

    // $(".popup-btn").click(function() {
    //     swipe_audioElement_click.play();
    // });
});