$(document).ready(function() {
    animation_flag = 0;
    $(".organ-btn").click(function() {
        $(".info-popup").show();
        $(".info-popup").css({ "top": $(this).offset().top });
        $(".info-popup h2").html($(this).attr("data-heading"));
        $(".info-popup p").html($(this).attr("data-text"));

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
        }
    });

    $(".close-icon").click(function() {
        $(".info-popup").hide();
    });
    var swipe_audioElement_click;
    swipe_audioElement_click = document.createElement('audio');
    swipe_audioElement_click.setAttribute('src', 'assets/media/super-man-sound.mp3');

    $(".organ-btn").click(function() {
        swipe_audioElement_click.play();
    });
});