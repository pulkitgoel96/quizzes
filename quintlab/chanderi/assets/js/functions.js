$(document).ready(function() {
    
    // Jama Masjid
    $("#jama_masjid").click(function() {
        if ($(window).width() < 1024) {    
            $("#jama_masjid_text").fadeIn();
            $("#jama_masjid_close").fadeIn();
        }
        else {
            $("#jama_masjid_text").addClass("circleEffect");
            $("#jama_masjid_close").addClass("circleEffect");
        }

        $('html, body').animate({
            scrollTop:$('#jama_masjid_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#jama_masjid_close").click(function() {
        if ($(window).width() < 1024) { 
            $("#jama_masjid_text").fadeOut();
            $(this).fadeOut();
        }
        else {
            $("#jama_masjid_text").removeClass("circleEffect");
            $("#jama_masjid_close").removeClass("circleEffect");
        }
    });

    // Chanderi Saris
    $("#Chanderi_sari").click(function() {
        if ($(window).width() < 1024) {    
            $("#chanderi_sari_text").fadeIn();
            $("#chanderi_sari_close").fadeIn();
        }
        else {
            $("#chanderi_sari_text").addClass("circleEffect");
            $("#chanderi_sari_close").addClass("circleEffect");
        }

        $('html, body').animate({
            scrollTop:$('#chanderi_sari_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#chanderi_sari_close").click(function() {

        if ($(window).width() < 1024) { 
            $("#chanderi_sari_text").fadeOut();
            $(this).fadeOut();
        }
        else {
            $("#chanderi_sari_text").removeClass("circleEffect");
            $("#chanderi_sari_close").removeClass("circleEffect");
        }
    });

    //A Centre of Jainism
    $("#a_centre_of_jainism").click(function() {
        if ($(window).width() < 1024) {    
            $("#a_centre_of_text").fadeIn();
            $("#a_centre_of_close").fadeIn();
        }
        else {
            $("#a_centre_of_text").addClass("circleEffect");
            $("#a_centre_of_close").addClass("circleEffect");
        }

        $('html, body').animate({
            scrollTop:$('#a_centre_of_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#a_centre_of_close").click(function() {
        if ($(window).width() < 1024) { 
            $("#a_centre_of_text").fadeOut();
            $(this).fadeOut();
        }
        else {
            $("#a_centre_of_text").removeClass("circleEffect");
            $("#a_centre_of_close").removeClass("circleEffect");
        }
    });

    // Chanderi Fort
    $("#chanderi_fort").click(function() {
        if ($(window).width() < 1024) {    
            $("#chanderi_fort_text").fadeIn();
            $("#chanderi_fort_close").fadeIn();
        }
        else {
            $("#chanderi_fort_text").addClass("circleEffect");
            $("#chanderi_fort_close").addClass("circleEffect");
        }

        $('html, body').animate({
            scrollTop:$('#chanderi_fort_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#chanderi_fort_close").click(function() {
        if ($(window).width() < 1024) { 
            $("#chanderi_fort_text").fadeOut();
            $(this).fadeOut();
        }
        else {
            $("#chanderi_fort_text").removeClass("circleEffect");
            $("#chanderi_fort_close").removeClass("circleEffect");
        }        
    });

    // A City of
    $("#a_city_of").click(function() {
        if ($(window).width() < 1024) {    
            $("#a_city_of_text").fadeIn();
            $("#a_city_of_close").fadeIn();
        }
        else {
            $("#a_city_of_text").addClass("circleEffect");
            $("#a_city_of_close").addClass("circleEffect");
        }        

        $('html, body').animate({
            scrollTop:$('#a_city_of_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#a_city_of_close").click(function() {
        if ($(window).width() < 1024) { 
            $("#a_city_of_text").fadeOut();
            $(this).fadeOut();
        }
        else {
            $("#a_city_of_text").removeClass("circleEffect");
            $("#a_city_of_close").removeClass("circleEffect");
        }
    });



    // Document Click
    $('body').click(function(evt){

        if(evt.target.id == "jama_masjid_text" || evt.target.id == "jama_masjid"){} 
            
        else if($(evt.target).closest('#jama_masjid_text').length || $(evt.target).closest('#jama_masjid').length){}
                       
        else {
            if ($(window).width() < 1024) {    
                $("#jama_masjid_text").fadeOut();
                $("#jama_masjid_close").fadeOut();
            }
            else {
                $("#jama_masjid_text").removeClass("circleEffect");
                $("#jama_masjid_close").removeClass("circleEffect");
            }
        }

        if(evt.target.id == "chanderi_sari_text" || evt.target.id == "Chanderi_sari"){}
            //console.log("yes")
        else if($(evt.target).closest('#chanderi_sari_text').length || $(evt.target).closest('#Chanderi_sari').length){}
            //console.log("yes")             
        else {
            if ($(window).width() < 1024) {    
                $("#chanderi_sari_text").fadeOut();
                $("#chanderi_sari_close").fadeOut();
            }
            else {
                $("#chanderi_sari_text").removeClass("circleEffect");
                $("#chanderi_sari_close").removeClass("circleEffect");
            }
        }

        if(evt.target.id == "a_centre_of_text" || evt.target.id == "a_centre_of_jainism"){}
            //console.log("yes")
        else if($(evt.target).closest('#a_centre_of_text').length || $(evt.target).closest('#a_centre_of_jainism').length){}
            //console.log("yes")  
        else {
            if ($(window).width() < 1024) {    
                $("#a_centre_of_text").fadeOut();
                $("#a_centre_of_close").fadeOut();
            }
            else {
                $("#a_centre_of_text").removeClass("circleEffect");
                $("#a_centre_of_close").removeClass("circleEffect");
            }
        }

        if(evt.target.id == "chanderi_fort_text" || evt.target.id == "chanderi_fort") {}
            //console.log("yes")
        else if($(evt.target).closest('#chanderi_fort_text').length || $(evt.target).closest('#chanderi_fort').length){}
            //console.log("yes")    
        else {
            if ($(window).width() < 1024) {    
                $("#chanderi_fort_text").fadeOut();
                $("#chanderi_fort_close").fadeOut();
            }
            else {
                $("#chanderi_fort_text").removeClass("circleEffect");
                $("#chanderi_fort_close").removeClass("circleEffect");
            }
        }

        if(evt.target.id == "a_city_of_text" || evt.target.id == "a_city_of"){}
            //console.log("yes")
        else if($(evt.target).closest('#a_city_of_text').length || $(evt.target).closest('#a_city_of').length){}
            //console.log("yes")  
        else {
            if ($(window).width() < 1024) {    
                $("#a_city_of_text").fadeOut();
                $("#a_city_of_close").fadeOut();
            }
            else {
                $("#a_city_of_text").removeClass("circleEffect");
                $("#a_city_of_close").removeClass("circleEffect");
            }
        }

      //Do processing of click event here for every element except with id menu_content

    });
});