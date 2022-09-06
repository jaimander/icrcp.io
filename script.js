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

canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('click', handleMouseClic);
