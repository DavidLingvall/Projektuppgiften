var images = new Array();
images[0] = "bild1.jpg";
images[1] = "bild2.jpg";
images[2] = "bild3.jpg";
var i = 0;

function bytBild(){
  if (i < images.length) {
    $('#bildSpel').attr('src', images[i]);
    i++;
  }
  else if (i == images.length) {
    i=0;
    $('#bildSpel').attr('src', images[i]);
    i++;
  }
}
function timer(){
  //setInterval(bytBild, 2000);

}
$("#bildSpel").change(function(){
    var selected = $(this).val();
    var image = $("#bildSpel");
    image.fadeOut('fast', function () {
        image.attr('src', '/assets/images/mini/'+selected+'.png');
        image.fadeIn('fast');
    });
});
