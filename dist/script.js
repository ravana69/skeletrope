const myInterval = setInterval(enterFrame, 80); //40
var ang = 0;
var speed = 0;

function enterFrame() {
  ang = ang + speed;
  if (ang > 360) ang = ang - 360;
  $("*").css("--ang", ang);
}

var currentMousePos = { x: -1, y: -1 };

$(document).mousemove(function(event) {
  currentMousePos.x = event.pageX;
  //currentMousePos.y = event.pageY;
  w = document.documentElement.clientWidth / 2;
  speed = ((currentMousePos.x - w)/10);
});