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

const drawCircle = (e) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    fillColor.checked ? ctx.fill() : ctx.stroke();
}

const drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY); // start point of first line
    ctx.lineTo(e.offsetX, e.offsetY); // creating first line of triangle; becomes new starting point
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // second line(bottom)
    ctx.closePath() //third line
    fillColor.checked ? ctx.fill() : ctx.stroke();
}

const drawLine = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY); // start point of line
    ctx.lineTo(e.offsetX, e.offsetY); // creating line
    ctx.stroke();
}

const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath(); // allows us to start a new line without connecting it to the previous one
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    // copying canvas data & passing as snapshot value, this avoids dragging the image
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

const drawing = (e) => {
    if (!isDrawing) {
        return;
    } 
    // adding copied canvas data onto this canvas
    ctx.putImageData(snapshot, 0, 0);

    if(selectedTool === "brush"){
        ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the x and y coordinates of the cursor
        ctx.stroke(); //filling the line with color
    } else if(selectedTool === "rectangle"){
        drawRect(e);
    } else if(selectedTool === "circle"){
        drawCircle(e);
    } else if(selectedTool === "triangle"){
        drawTriangle(e);
    } else if(selectedTool === "line"){
        drawLine(e);
    }
}

colors.forEach(btn => {
    btn.addEventListener("click", () => {
        // removing selected class from the previous option and adding on current clicked option
        document.querySelector(".options .selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = window.getComputedStyle(btn).getPropertyValue("color"); //sets the color that we are going to use
        console.log(btn.id);
    })
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => { isDrawing = false; });