$(".hamburger").on('click',function(){
   $("#div2").toggleClass("fade");
   $("#div1").toggleClass("cross1");
   $("#div3").toggleClass("cross3");
})

$(".search-icon").on('click',function(){
    $(".search-icon").toggleClass("drpsearch");
    $(".search-bar-top").toggleClass("bardown");

    if($('#searchimg').hasClass('drpsearch')) {
        $('#searchimg').removeClass('drpsearch');
        $('#searchimg').attr('src', 'loupe.png');
    } else {
        $('#searchimg').addClass('drpsearch');
        $('#searchimg').attr('src', 'cancel.png');
    }
})

$("#learnmore").on('click',function(){
    $(this).addClass("learnMore");
    $('#containerimg').css({"width":"25%","height":"80%"})
    $("#containerh1").css({"display":"none"})
    $("#span1").css({"display":"none"})
    $(".landing-page-info").addClass("infoSlide")
    $(".after-learnmore-click").addClass("learn-more-slide")
})