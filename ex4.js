$(document).ready(function () {

    console.log('ready');


    $('.chapstickTip, .jarTip, .keysTip, .usbTip, .phoneTip').hide();


    $('img#chapstick').hover(function () { 
        
        $('.chapstickTip').show();
    }, function () { 
        $('.chapstickTip').hide();
    });


    $('img#jar').hover(function () { 

        $('.jarTip').show();
    }, function () { 
        $('.jarTip').hide();
    });


    $('img#keys').hover(function () { 

        $('.keysTip').show();
    }, function () { 
        $('.keysTip').hide();
    });


    $('img#usb').hover(function () { 

        $('.usbTip').show();
    }, function () { 
        $('.usbTip').hide();
    });

    
    $('img#phone').hover(function () { 
        
        
        $('.phoneTip').show();

    }, function () { 
        $('.phoneTip').hide();
    });
    

    $('#chapstick').click(function () {
        $(this).attr('src', 'images/chapstick.png').animate({
            opacity: 1
        });
            $('p#captionChapstick').css('visibility', 'visible');
    return false;
    });

    
    $('#jar').click(function () {
        $(this).attr('src', 'images/jar.png').animate({
            opacity: 1
        });
        $('p#captionJar').css('visibility', 'visible');
    return false;
    });

    
    $('#keys').click(function () {
        $(this).attr('src', 'images/keys.png').animate({
            opacity: 1
        });
        $('p#captionKeys').css('visibility', 'visible');
    return false;
    });

    
    $('#usb').click(function () {
        $(this).attr('src', 'images/usb.png').animate({
            opacity: 1
        });
        $('p#captionUsb').css('visibility', 'visible');
    return false;
    });

   
    $('#phone').click(function () {
        $(this).attr('src', 'images/phone.png').animate({
            opacity: 1
        });
        $('p#captionPhone').css('visibility', 'visible');
    return false;
    });


}); 