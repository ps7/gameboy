$(function() {

  $(".wrapper").click(function() {
    if($(".power-light").hasClass("powerOn")) {
      location.reload();
    } else {
      $(".power-light").toggleClass("powerOn");
      $("#nintendo-screen").fadeIn(5000);
      $("#nintendo-screen").fadeOut(3000);
      $("#logo-screen").delay(10000).fadeIn(3000);
      $("#logo-screen").fadeOut(3000);
      $("#play-screen").delay(17000).fadeIn(3000);
    }
  });

});
