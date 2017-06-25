'use strict';
$(function() {
    
    var slideCount = $(".single-slide").length;
    var slideShow = $(".slide-show");
    var slideWidth = ("width", 100 / slideCount);
    var slideIndex = 0;
    
    
    slideShow.css("width", slideCount * 100 + "%");
    console.log(slideCount);
    console.log(slideWidth);
    
    $(".single-slide").css("width", slideWidth);
    
    $(".single-slide").each(function(index) {
        $(this).css({"width": slideWidth + "%", "margin-left": slideWidth * index + "%"});
    });
    
    function slide(newSlideIndex) {
        if (newSlideIndex >= slideCount || newSlideIndex < 0) {
            return;
        } 
        
        var marginLeft = (newSlideIndex * (-100)) + "%";
        
        slideShow.animate({"margin-left": marginLeft}, 800);
            slideIndex = newSlideIndex;

    };
    
    $(".next-slide").click(function(){
        var newSlideIndex = slideIndex + 1;
        
        slide(slideIndex+1);

    });
    
    $(".prev-slide").click(function(){
        var newSlideIndex = slideIndex - 1;
        
        slide(slideIndex-1);
    });
    
});