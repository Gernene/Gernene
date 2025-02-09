$(document).ready(function() {
    var indexes = [];
    var slideshowIds = $('.slideshow').map(function() {
        indexes.push(0);
        $(this).find(".slideshow-dot").eq(0).addClass("selected");
        return this.id; 
    });

    $(".slideshow-arrow").on("click", function() {
        var slideshow = $(this).closest(".slideshow");
        var slideshowId = slideshow.attr("id");
        var arrIndex = $.inArray(slideshowId, slideshowIds);
        var index = indexes[arrIndex];
        var slideCount = slideshow.find(".slide").length;

        if ($(this).hasClass("slideshow-l")) {
            if (index <= 0) indexes[arrIndex] = slideCount - 1;
            else indexes[arrIndex]--;
        }
        else {
            if (index >= slideCount - 1) indexes[arrIndex] = 0;
            else indexes[arrIndex]++;
        }
        showSlide(slideshow, indexes[arrIndex]);
    });

    $(".slideshow-dot").on("click", function() {
        var slideshow = $(this).closest(".slideshow");
        var slideshowId = slideshow.attr("id");
        var arrIndex = $.inArray(slideshowId, slideshowIds);
        var slideshow = $(this).closest(".slideshow");
        var index = $(this).index();
        indexes[arrIndex] = index;
        $(".slideshow-dot").removeClass("selected");
        $(this).addClass("selected");
        slideshow.find(".slide").hide();
        slideshow.find(".slide:eq(" + index + ")").show();
    });

    $(".accordion-title").on("click", function() {
        var accordion = $(this).closest(".accordion");
        accordion.find(".accordion-content").slideToggle();
        accordion.find(".accordion-icon").toggleClass("expand");
    });

});

function showSlide(slideshow, index) {
    slideshow.find(".slide").hide();
    slideshow.find(".slide:eq(" + index + ")").show();
    slideshow.find(".slideshow-dot").removeClass("selected");
    slideshow.find(".slide:eq(" + index + ")").show();
    $(".slideshow-dot").removeClass("selected");
    slideshow.find(".slideshow-dot").eq(index).addClass("selected");
}
