const canvas = document.querySelector("canvas");
const colors = document.querySelectorAll(".color");

const ctx = canvas.getContext("2d"); //allows us to draw on the canvas

let isDrawing = false;
let brushWidth = 5;
let selectedColor = "#000";

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
})

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); // allows us to start a new line without connecting it to the previous one
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
}

const drawing = (e) => {
    if (!isDrawing) {
        return;
    }
    ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the x and y coordinates of the cursor
    ctx.stroke(); //filling the line with color
}

colors.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedColor = window.getComputedStyle(btn).getPropertyValue("color"); //sets the color that we are going to use
    })
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => { isDrawing = false; });