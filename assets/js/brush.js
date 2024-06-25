const canvas = document.querySelector("canvas");
const colors = document.querySelectorAll(".color");

const ctx = canvas.getContext("2d"); //allows us to draw on the canvas

let prevMouseX, prevMouseY, snapshot; 
let isDrawing = false;
let brushWidth = 5;
let selectedColor = "#000";
let selectedTool = "brush";

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
})

const drawRect = (e) => {
    if(!fillColor.checked) {
        return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
    }
    ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath(); // allows us to start a new line without connecting it to the previous one
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

const drawing = (e) => {
    if(!isDrawing) {
        return;
    } 
    ctx.putImageData(snapshot, 0, 0);

    if(selectedTool === "brush"){
        ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the x and y coordinates of the cursor
        ctx.stroke(); //filling the line with color
    } else if(selectedTool === "rectangle"){
        drawRect(e);
    }
}

colors.forEach(btn => {
    btn.addEventListener("click", () => {
       selectedColor = window.getComputedStyle(btn).getPropertyValue("color"); //sets the color that we are going to use
    })
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => { isDrawing = false; });