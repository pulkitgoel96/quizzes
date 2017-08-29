$(document).ready(function() {
    
    // Jama Masjid
    $("#jama_masjid").click(function() {
        $("#jama_masjid_text").addClass("circleEffect");
        $("#jama_masjid_close").addClass("circleEffect");

        $('html, body').animate({
            scrollTop:$('#jama_masjid_text').position().top - 80
        }, 'slow');
    });

    $("#jama_masjid_close").click(function() {
        $("#jama_masjid_text").removeClass("circleEffect");
        $("#jama_masjid_close").removeClass("circleEffect");
    });

    // Chanderi Saris
    $("#Chanderi_sari").click(function() {
        $("#chanderi_sari_text").addClass("circleEffect");
        $("#chanderi_sari_close").addClass("circleEffect");
        
        $('html, body').animate({
            scrollTop:$('#chanderi_sari_text').position().top - 80
        }, 'slow');
    });

    $("#chanderi_sari_close").click(function() {
        $("#chanderi_sari_text").removeClass("circleEffect");
        $("#chanderi_sari_close").removeClass("circleEffect");
    });

    //A Centre of Jainism
    $("#a_centre_of_jainism").click(function() {
        $("#a_centre_of_text").addClass("circleEffect");
        $("#a_centre_of_close").addClass("circleEffect");

        $('html, body').animate({
            scrollTop:$('#a_centre_of_text').position().top - 80
        }, 'slow');
    });

    $("#a_centre_of_close").click(function() {
        $("#a_centre_of_text").removeClass("circleEffect");
        $("#a_centre_of_close").removeClass("circleEffect");
    });

    // Chanderi Fort
    $("#chanderi_fort").click(function() {
        $("#chanderi_fort_text").addClass("circleEffect");
        $("#chanderi_fort_close").addClass("circleEffect");

        $('html, body').animate({
            scrollTop:$('#chanderi_fort_text').position().top - 80
        }, 'slow');
    });

    $("#chanderi_fort_close").click(function() {
        $("#chanderi_fort_text").removeClass("circleEffect");
        $("#chanderi_fort_close").removeClass("circleEffect");
    });

    // A City of
    $("#a_city_of").click(function() {
        $("#a_city_of_text").addClass("circleEffect");
        $("#a_city_of_close").addClass("circleEffect");

        $('html, body').animate({
            scrollTop:$('#a_city_of_text').position().top - 80
        }, 'slow');
    });

    $("#a_city_of_close").click(function() {
        $("#a_city_of_text").removeClass("circleEffect");
        $("#a_city_of_close").removeClass("circleEffect");
    });

    // Document Click
    $('body').click(function(evt){

        if(evt.target.id == "jama_masjid_text" || evt.target.id == "jama_masjid"){} 
            //console.log("yes")
        else if($(evt.target).closest('#jama_masjid_text').length || $(evt.target).closest('#jama_masjid').length){}
            //console.log("yes")             
        else {
            $("#jama_masjid_text").removeClass("circleEffect");
            $("#jama_masjid_close").removeClass("circleEffect");
        }

        if(evt.target.id == "chanderi_sari_text" || evt.target.id == "Chanderi_sari"){}
            //console.log("yes")
        else if($(evt.target).closest('#chanderi_sari_text').length || $(evt.target).closest('#Chanderi_sari').length){}
            //console.log("yes")             
        else {
            $("#chanderi_sari_text").removeClass("circleEffect");
            $("#chanderi_sari_close").removeClass("circleEffect");
        }

        if(evt.target.id == "a_centre_of_text" || evt.target.id == "a_centre_of_jainism"){}
            //console.log("yes")
        else if($(evt.target).closest('#a_centre_of_text').length || $(evt.target).closest('#a_centre_of_jainism').length){}
            //console.log("yes")  
        else {
            $("#a_centre_of_text").removeClass("circleEffect");
            $("#a_centre_of_close").removeClass("circleEffect");
        }

        if(evt.target.id == "chanderi_fort_text" || evt.target.id == "chanderi_fort") {}
            //console.log("yes")
        else if($(evt.target).closest('#chanderi_fort_text').length || $(evt.target).closest('#chanderi_fort').length){}
            //console.log("yes")    
        else {
            $("#chanderi_fort_text").removeClass("circleEffect");
            $("#chanderi_fort_close").removeClass("circleEffect");
        }

        if(evt.target.id == "a_city_of_text" || evt.target.id == "a_city_of"){}
            //console.log("yes")
        else if($(evt.target).closest('#a_city_of_text').length || $(evt.target).closest('#a_city_of').length){}
            //console.log("yes")  
        else {
            $("#a_city_of_text").removeClass("circleEffect");
            $("#a_city_of_close").removeClass("circleEffect");
        }

      //Do processing of click event here for every element except with id menu_content

    });
});