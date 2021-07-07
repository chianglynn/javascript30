const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue >= 360 ? hue = 0 : hue++;
    ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ? direction = !direction : '';
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
['mouseup', 'mouseout'].forEach(el => canvas.addEventListener(el, () => isDrawing = false));
canvas.addEventListener('mousemove', draw);