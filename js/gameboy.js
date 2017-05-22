
var audio = new Audio('sounds/startup.mp3');

$(function() {
  $("#power-button").click(function() {
    if($(".power-light").hasClass("powerOn")) {
      location.reload();
    } else {
      $(".power-light").toggleClass("powerOn");
      $("#nintendo-screen").fadeIn(4000, function() {
      audio.play();
      });
      $("#nintendo-screen").delay(1000).fadeOut(3000);
      $("#logo-screen").delay(10000).fadeIn(3000);
      $("#logo-screen").fadeOut(3000, function() {

      });
      $("#play-screen").delay(17000).fadeIn(3000);

    }
  });

});
