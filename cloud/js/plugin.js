/*global console, $*/
$(document).ready(function () {
    "use strict";
    $("body").load(function () {
        $("body").fadeIn(2000);

    });


    $(".go-up .fa-angle-double-up").click(function () {
        $("html, body").animate({
            scrollTop: $(".top-content").offset().top
        }, 2000);
    });


    var previousScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > previousScroll) {
            // downscroll code
            $(".navbar").hide(500);
     

        } else {
            // upscroll code
            $(".navbar").show(1000);
       

        }
        previousScroll = scroll;
    });

    $(function () {
        "use strict";
        (function animatedown() {
            $("#doo").animate({
                paddingTop: "15px"
            }, 900, function () {
                $(this).animate({
                    paddingTop: "0px"
                }, 1300, function () {
                    animatedown()
                });
            });
        })();
         $(window).scroll(function() {
        if ($(this).scrollTop() > 1000){
            $(".go-up .fa-angle-double-up").fadeIn(2000);
        } else {$(".go-up .fa-angle-double-up").fadeOut(2000);
               }
    });
    
        $(".main-header button").click(function () {
            $("html, body").animate({
                scrollTop: $(".social").offset().top
            }, 1700);
        });
    });
    $(window).load(function () {
        $("body").hide();
        $("body").fadeIn(3000);
    });

    // show  color option on select gear //

     $(".tools_box .fa-close").click(function(){
         $(".tools_box .tools_container").slideToggle(500);
           $(".tools_box .tools_btn").show(1000);
     });
        $(".tools_box .tools_btn").click(function(){
    $(".tools_box .tools_container").slideToggle(500); 
   $(this).hide();
    });
    
       $(".tools_box .tools_container .colors button").click(function(){
        $("link[href*=theme]").attr("href","css/"+$(this).val());
          $(".tools_box .tools_container").slideToggle(500);
            $(".tools_box .tools_btn").show(1000);
    });
     
   
     
    $(".tools_box .tools_container .reach  #b1").click(function () { $("html, body").animate({ scrollTop: $(".top-content").offset().top }, 1000);  $(".tools_box .tools_container").slideToggle(500);  $(".tools_box .tools_btn").show(1000);   });
    
    $(".tools_box .tools_container .reach  #b2").click(function () { $("html, body").animate({ scrollTop: $(".awesome").offset().top }, 1000);  $(".tools_box .tools_container").slideToggle(500); $(".tools_box .tools_btn").show(1000);  });
  
    $(".tools_box .tools_container .reach  #b3").click(function () { $("html, body").animate({ scrollTop: $(".contact-us").offset().top }, 1000);  $(".tools_box .tools_container").slideToggle(500); $(".tools_box .tools_btn").show(1000);  });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});