
$('.show-image-btn').on('click', function() {
    // действия, которые будут выполнены при наступлении события...



    let image = $(this).parent().find("img.showed-image");
    if(image.hasClass("showed-image-active"))
    {
        image.removeClass("showed-image-active");
        $(this).removeClass("show-image-btn-active");
    }
    else{
     image.addClass("showed-image-active");
        $(this).addClass("show-image-btn-active");
    }
});

$('.collapsible-image').on('mouseleave', function() {

    $(this).parent().find(".show-image-btn").removeClass("show-image-btn-active");

    let image = $(this).find("img.showed-image");
    image.removeClass("showed-image-active");
});


function minImage(i_path){
    //var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');


    $('#magnify > img').load(function () {

        $('#magnify > img').css({
            width: ($(window).width())*0.5,
            maxHeight: 600,
        });

        $('#magnify').css({
            width: ($(window).width())*0.7,
            left: ($(window).width() - $('#magnify').find("img").outerWidth())/2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').find("img").outerHeight())/2,
            display: 'block'
        });
        //$('#magnify').css('display', 'block');

    });
}

$(function(){
    $('.minimized').click(function(event) {

        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');


        $('#magnify > img').load(function () {

            $('#magnify > img').css({
                width: ($(window).width())*0.7,
            });

            $('#magnify').css({
                width: ($(window).width())*0.7,
                left: ($(window).width() - $('#magnify').find("img").outerWidth())/2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                top: ($(window).height() - $('#magnify').find("img").outerHeight())/2
            });

        });


        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});