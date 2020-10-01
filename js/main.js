
var countDownDate = new Date("Oct 2, 2020 22:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var countdownHeader = "Show starts in..."
  var endText = '<a href="http://twitch.loneronline.com">View the show on Twitch!</a>';

  // Quality of life variables.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var millis = Math.floor(distance % (1000 * 60) / 10) - (seconds * 100);

  document.getElementById("countdown").innerHTML = countdownHeader + "<br />" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "." + millis + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = endText;
  }
}, 16);