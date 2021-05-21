// NOTE: eventCountDownDate is a global variable defined in index.html. This is done intentionally
//   to make new event updates mostly a single-file edit rather than a multi-file edit.
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = eventCountDownDate - now;
  var countdownHeader = "Show starts in..."
  var endText = '<a href="http://twitch.loneronline.com">View the show on Twitch!</a>';

  // Quality of life variables.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var millis = Math.floor(distance % (1000 * 60) / 10) - (seconds * 100);

  var countdownTarget = document.getElementById("countdown");
  if (countdownTarget !== null) {
    if (distance < 0) {
      clearInterval(x);
      countdownTarget.innerHTML = endText;
    } else {
      countdownTarget.innerHTML = countdownHeader + "<br />" + days + "d " + hours + "h "
      + minutes + "m " + seconds + "." + millis + "s ";
    }
  }
}, 16);