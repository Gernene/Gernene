$(document).ready(function() {

  hamburger = function(x) {
    x.classList.toggle('change');
    $('#nav nav').slideToggle();
  }

  $('.gallery-item').on('click', function() {
    var id = $(this).attr("id").replace("gallery-item-","");
    var galleryView = "#gallery-viewer-item-" + id;
    $('.gallery-viewer-item').hide();
    $('.gallery-viewer').show();
    $(galleryView).show();
  });

  $('.gallery-cross i').on('click', function() {
    $('.gallery-viewer').hide();
  });

});
