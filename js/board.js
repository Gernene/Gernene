document.addEventListener("DOMContentLoaded", yall);

$(document).ready(function() {
    var indexes = [];
    var slideshowIds = $('.board').map(function() {
        return this.id; 
    });

    $(".board-x").on("click", function() {
	$(".board").removeClass("slides");
    });

    $(".board-arrow").on("click", function() {
        var slideshow = $(this).closest(".board");
        var slideshowId = slideshow.attr("id");
        var arrIndex = $.inArray(slideshowId, slideshowIds);
        var index = indexes[arrIndex];
        var slideCount = slideshow.find(".board-fig").length;
        
        if ($(this).hasClass("board-arrow-l")) {
            if (index <= 0) indexes[arrIndex] = slideCount - 1;
            else indexes[arrIndex]--;
        }
        else {
            if (index >= slideCount - 1) indexes[arrIndex] = 0;
            else indexes[arrIndex]++;
        }
        showSlide(slideshow, indexes[arrIndex]);
    });

    $(document).keydown(function(e) {
	var slideshow = $(".board.slides"); 
        var slideshowId = slideshow.attr("id");
        var arrIndex = $.inArray(slideshowId, slideshowIds);
        var index = indexes[arrIndex];
        var slideCount = slideshow.find(".board-fig").length;
        
	switch(e.which) {
            case 37: // left
	        if (index <= 0) indexes[arrIndex] = slideCount - 1;
                else indexes[arrIndex]--;
                showSlide(slideshow, indexes[arrIndex]);
            break;

            case 39: // right
	        if (index >= slideCount - 1) indexes[arrIndex] = 0;
                else indexes[arrIndex]++;
		showSlide(slideshow, indexes[arrIndex]);
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    $(".board-fig").on("click", function() {
        var slideshow = $(this).closest(".board");
        var slideshowId = slideshow.attr("id");
        var arrIndex = $.inArray(slideshowId, slideshowIds);
        var index = $(this).index();
        indexes[arrIndex] = index;
        $(".board-fig").removeClass("selected");
        $(this).addClass("selected");
	$(".board").addClass("slides");
    });
});

function showSlide(slideshow, index) {
    slideshow.find(".board-fig").removeClass("selected");
    slideshow.find(".board-fig").eq(index).addClass("selected");
}
