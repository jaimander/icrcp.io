const canvas = document.querySelector('#drawingCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let counter = 0;


const handleMouseMove = (event) => {
  // console.log(counter);
  const x = event.clientX;
  const y = event.clientY;
  ctx.beginPath();
  ctx.arc(x, y, counter, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.strokeStyle = "#59bfff";
  counter += 0.3;

  // console.log(event);
};

const handleMouseClic = (event) => {
  counter = 0;
};

function handleStart(event) {
  event.preventDefault();
  var touches = event.changedTouches;

  for (var i=0; i<touches.length; i++) {
    ongoingTouches.push(touches[i]);
    var color = colorForTouch(touches[i]);
    ctx.fillStyle = color;
    ctx.fillRect(touches[i].pageX-2, touches[i].pageY-2, 4, 4);
  }
}

function handleMove(event) {
  event.preventDefault();
  var touches = event.changedTouches;

  ctx.lineWidth = 4;

  for (var i=0; i<touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ctx.closePath();
    ctx.stroke();
    ongoingTouches.splice(idx, 1, touches[i]);  // swap in the new touch record
  }
}

function handleEnd(event) {
  event.preventDefault();
  var touches = event.changedTouches;

  ctx.lineWidth = 4;

  for (var i=0; i<touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[i].pageX, ongoingTouches[i].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ongoingTouches.splice(i, 1);  // remove it; we're done
  }
}




canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('click', handleMouseClic);
canvas.addEventListener('touchmove', handleMove);
canvas.addEventListener("touchstart", handleStart, false);
canvas.addEventListener("touchend", handleEnd, false);
