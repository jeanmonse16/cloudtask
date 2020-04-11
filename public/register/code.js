$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll',function(){
        if($(window).scrollTop()>altura){
            $('.menu').addClass('menu_fijo');
        }
        else {
            $('.menu').removeClass('menu_fijo');
        } 
    })
});