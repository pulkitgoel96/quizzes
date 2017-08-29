$(document).ready(function() {
    
    // Jama Masjid
    $("#jama_masjid").click(function() {
        $("#jama_masjid_text").show();
        $("#jama_masjid_close").show();

        $('html, body').animate({
            scrollTop:$('#jama_masjid_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#jama_masjid_close").click(function() {
        $("#jama_masjid_text").hide();
        $(this).hide();
    });

    // Chanderi Saris
    $("#Chanderi_sari").click(function() {
        $("#chanderi_sari_text").show();
        $("#chanderi_sari_close").show();

        $('html, body').animate({
            scrollTop:$('#chanderi_sari_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#chanderi_sari_close").click(function() {
        $("#chanderi_sari_text").hide();
        $(this).hide();
    });

    //A Centre of Jainism
    $("#a_centre_of_jainism").click(function() {
        $("#a_centre_of_text").show();
        $("#a_centre_of_close").show();

        $('html, body').animate({
            scrollTop:$('#a_centre_of_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#a_centre_of_close").click(function() {
        $("#a_centre_of_text").hide();
        $(this).hide();
    });

    // Chanderi Fort
    $("#chanderi_fort").click(function() {
        $("#chanderi_fort_text").show();
        $("#chanderi_fort_close").show();

        $('html, body').animate({
            scrollTop:$('#chanderi_fort_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#chanderi_fort_close").click(function() {
        $("#chanderi_fort_text").hide();
        $(this).hide();       
    });

    // A City of
    $("#a_city_of").click(function() {
        $("#a_city_of_text").show();
        $("#a_city_of_close").show();        

        $('html, body').animate({
            scrollTop:$('#a_city_of_text').position().top - 80
        }, 'slow');
    });
    // Close
    $("#a_city_of_close").click(function() {
        $("#a_city_of_text").hide();
        $(this).hide();
    });



    // Document Click
    $('body').click(function(evt){

        if(evt.target.id == "jama_masjid_text" || evt.target.id == "jama_masjid"){} 
            
        else if($(evt.target).closest('#jama_masjid_text').length || $(evt.target).closest('#jama_masjid').length){}
                       
        else {
            $("#jama_masjid_text").hide();
            $("#jama_masjid_close").hide();
        }

        if(evt.target.id == "chanderi_sari_text" || evt.target.id == "Chanderi_sari"){}
            //console.log("yes")
        else if($(evt.target).closest('#chanderi_sari_text').length || $(evt.target).closest('#Chanderi_sari').length){}
            //console.log("yes")             
        else {
            $("#chanderi_sari_text").hide();
            $("#chanderi_sari_close").hide();
        }

        if(evt.target.id == "a_centre_of_text" || evt.target.id == "a_centre_of_jainism"){}
            //console.log("yes")
        else if($(evt.target).closest('#a_centre_of_text').length || $(evt.target).closest('#a_centre_of_jainism').length){}
            //console.log("yes")  
        else {
            $("#a_centre_of_text").hide();
            $("#a_centre_of_close").hide();
        }

        if(evt.target.id == "chanderi_fort_text" || evt.target.id == "chanderi_fort") {}
            //console.log("yes")
        else if($(evt.target).closest('#chanderi_fort_text').length || $(evt.target).closest('#chanderi_fort').length){}
            //console.log("yes")    
        else {
            $("#chanderi_fort_text").hide();
            $("#chanderi_fort_close").hide();
        }

        if(evt.target.id == "a_city_of_text" || evt.target.id == "a_city_of"){}
            //console.log("yes")
        else if($(evt.target).closest('#a_city_of_text').length || $(evt.target).closest('#a_city_of').length){}
            //console.log("yes")  
        else {
            $("#a_city_of_text").hide();
            $("#a_city_of_close").hide();
        }

      //Do processing of click event here for every element except with id menu_content

    });
});