var i = 0;
var txt = "Contact Karl!";
var speed = 100;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

typewriter();
