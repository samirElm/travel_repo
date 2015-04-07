$(document).ready(function() {
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 100) {
      $(".navbar").css({
        "background": "rgba(200, 200, 200, 0.7)",
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
      });
    }
  });
});