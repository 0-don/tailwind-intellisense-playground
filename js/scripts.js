var i = 0;
var txt = "Hey, I'm Karl...";
var speed = 100;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

let changeImageBool = true;

async function changeImage() {
  if (changeImageBool) {
    changeImageBool = false;
    const images = [
      "crepe/Crepe3.png",
      "crepe/Crepe2.png",
      "crepe/Crepe1.png",
      "crepe/Crepe0.png",
    ];
    for (let img of images) {
      document.querySelector("#imgClickAndChange").src = img;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

document.querySelector("#imgClickAndChange").onclick = changeImage;

typewriter();
