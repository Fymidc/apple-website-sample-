$(".hamburger").on('click',function(){
   $("#div2").toggleClass("fade");
   $("#div1").toggleClass("cross1");
   $("#div3").toggleClass("cross3");
   $(".drpmenu").toggleClass("updown")
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

$("#camera").on('click',function(){
    $(".camera-slide-up").addClass("slide-up")
    $("#img2").addClass("img2")
    $("#img3").addClass("img3")
    $("#img4").addClass("img4")
    $("#img5").addClass("img5")

    $("#img1,#img2,#img3,#img4,#img5").css({"width":"30%","top":"10%","left":"5%"})
    $(".camera-section-header").addClass("cshslide")
    $(".camera-section-info").addClass("csislide")
    $(".camera-section-links").addClass("cslslide")
    $(".camera-section-button").addClass("csbslide")
})

$("#appleimg").click(function() {
    $("#firstpage").css({"z-index":"6"})
    $('html, body').animate({
      scrollTop: $("#firstpage").offset().top
    }, 1000);
    

  });


  $("#battery").on('click',function(){
    $(".battery-slide-up").addClass("bslide-up")

    $({countNum: $("#counter").text()}).animate({countNum: 30}, {
        duration: 2000,
        easing:'linear',
        step: function() {
          // What todo on every count
          $("#counter").text(Math.floor(this.countNum));
          
        },
        complete: function() {
            $("#counter").text(this.countNum)
          
        }
      });

      $({countNum: $("#counter2").text()}).animate({countNum: 100}, {
        duration: 2000,
        easing:'linear',
        step: function() {
          // What todo on every count
          $("#counter2").text(Math.floor(this.countNum));
          
        },
        complete: function() {
            $("#counter2").text(this.countNum)
          
        }
      });
      $(".battery-full").addClass("dol")
      $("#yatayimg").addClass("opacityy")
  })


