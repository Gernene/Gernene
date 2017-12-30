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

  //Cache reference to window and animation items
  var $animation_elements = $('.animation-element');
  var $window = $(window);

  $window.on('scroll resize', check_if_in_view);

  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //Check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

});
