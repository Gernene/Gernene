$(document).ready(function() {

  hamburger = function(x) {
    x.classList.toggle('change');
    $('#nav nav').slideToggle();
  }

  $('.gallery-art .gallery-item').on('click', function() {
    var id = $(this).attr("class").replace(" gallery-item", "").replace("gallery-", "");
    var galleryView = ".gallery-viewer-item-" + id;
    $('.gallery-viewer-item').hide();
    $('.gallery-viewer').addClass("active");
    $(galleryView).show();
  });

  $('.gallery-cross').on('click', function() {
    $('.gallery-viewer').removeClass("active");
  });

  $('#contact h2').on('click', function() {
    $(this).closest('div').find('.list-item-cont').slideToggle();
    $(this).find('div').toggleClass('active');
  });

  $('#contact-submit').on('click', function() {
    if(!$("#contact-name").val() || !$("#contact-email").val() || !$("#contact-message").val()) {
      $("#contact-error").show();
      $("#contact-success").hide();
    }
    else {
      $("#contact-error").hide();
      $("#contact-success").show();
      $("#contact-name").val("");
      $("#contact-email").val("");
      $("#contact-message").val("");
    }
    window.scrollTo(0, 0);
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
