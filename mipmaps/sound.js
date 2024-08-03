window.onload = function() {
  var context = new AudioContext();
}

var elements = document.getElementsByClassName("mcbutton");
if (elements.length > 0) {
  for (var i = 0; i < elements.length; i++) {
    var link = elements[i].getAttribute("href");
    elements[i].setAttribute("onclick", "clickSound(); setTimeout(function timeout() { window.location = '" + link + "'; }, 100);");
    elements[i].setAttribute("onmouseover", "hoverSound()");
    elements[i].removeAttribute("href");
    elements.all();
  }
}

function clickSound() {
  var clickSound = new Audio("../sounds/action.ogg");
  clickSound.play();
}

function hoverSound() {
  var hoverSound = new Audio("../sounds/focus.ogg");
  hoverSound.play();
}
