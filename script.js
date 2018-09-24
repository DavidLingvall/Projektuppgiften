var images = new Array();
images[0] = "bild1.jpg";
images[1] = "bild2.jpg";
images[2] = "bild3.jpg";
var i = 0;

function bytBild(){
  if (i < images.length) {
    document.getElementById("bildSpel").setAttribute("src", images[i]);
    i++;
  }
  else if (i == images.length) {
    i=0;
    document.getElementById("bildSpel").setAttribute("src", images[i]);
    i++;
  }
}
function  timer(){
  setInterval(bytBild, 2000);
}
