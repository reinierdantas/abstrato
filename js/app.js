//Slider call 
$('.slide >:first').addClass('activate');
function rotateSlide(){
    var activeSlide = $('.slide > .activate'),
        nextSlide = activeSlide.next();
    if(nextSlide.length == 0){
        nextSlide = $('.slide >:first');
    }
    activeSlide.removeClass('activate');
    nextSlide.addClass('activate');
}
setInterval(rotateSlide,2000);

// Menu active - close
$('.nav-barIcon').click(function(){
    $('.mobilemenu').addClass('active');
});
$('.mobileclose').click(function(){
    $('.mobilemenu').removeClass('active');
});

$('.nav-barIcon').click(function(){
    $('.containerCard').addClass('actived');
});

$('.mobileclose').click(function(){
    $('.containerCard').removeClass('actived');
});