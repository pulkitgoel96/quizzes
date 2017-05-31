$(document).ready(function(){
    $(".check-btn").click(function(){
        $(".step-01").hide();
        $(".step-02").show();
        $(".source-content").show();
        $(this).parent().hide();
    });

    $(".check-btn").click(function(){
        $(".step-first").hide();
        $(".step-second").show();

        $(".is-error").hide();
        $(".overlay").hide();
        $(".msg-wrong").hide();
        $(".msg-right").hide();
    });

    // Step 01
    $(document).one('click',".step-01 .points", function(){
        $(".is-show").hide();
        $(this).children(".is-show").show();
        $(".points").removeClass("active");
        $(this).addClass("active");

        $(".msg-right").fadeIn();
        $(".overlay").show();
    });

    $(".try-btn, .step-01 .close").click(function(){
        location.reload();
    });

    // Step 02
    $(document).on('click',".step-02 .points", function(){
        $(".is-show").hide();
        $(this).children(".is-show").show();
        $(".points").removeClass("active");
        $(this).addClass("active");
        adjust_iframe_height();
    });

    $(document).on('click',".close", function(){
        $(".is-show").hide();
        $(".points").removeClass("active");
        //e.preventDefault();
    });

    // Document Click
    $(document).mouseup(function (e){
        var container = $(".pop-show");
        if (!container.is(e.target)
            && container.has(e.target).length === 0)
        {
            container.hide();
        }
        $(".points").removeClass("active");
    });
});