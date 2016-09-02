/**
 * Created by Jarrel on 6/9/2016.
 */
$(window).scroll(function () {
    var wScroll = $(this).scrollTop(); 
    
    $(".LogoPage").css({
        "transform": "translate(0px," + wScroll /3 +"%)"
    });
    $(".startingT").css({
        "transform": "translate(0px," + wScroll /1.5 +"%)"
    });
    $(".finishedT").css({
        "transform": "translate(0px," + wScroll /2 +"%)"
    });
    $(".myContent").css({
        "transform": "translate(0px," + wScroll /7 +"%)"
    });
    $("#arrowSelect").css({
        "transform": "translate(0px," + wScroll /7 +"%)"
    });

    if(wScroll >= $('.bug-pic').offset().top -($(window).height() /0.2)){
        console.log('hi');
        console.log(wScroll);
        $('.bug-pic .row').each(function (i){
            setTimeout(function () {
                $('.bug-pic .row').eq(i).addClass('is-showing');

            }, 150 * (i+1));
        });
    }

});