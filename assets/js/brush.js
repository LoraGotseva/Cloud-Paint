const canvas = document.querySelector("canvas");
const colors = document.querySelectorAll(".color");

ctx = canvas.getContext("2d");

let isDrawing = false;
let brushWidth = 5;
let selectedColor = "#000";
window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

})

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); //create a new path to draw
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
}

const drawing = (e) => {
    if(!isDrawing) {
        return;
    }
    ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the x and y coordinates of the cursor
    ctx.stroke(); //filling line with color
}

colors.forEach(btn => {
    btn.addEventListener("click", () =>{
       selectedColor = window.getComputedStyle(btn).getPropertyValue("color");
    })
})

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => { isDrawing = false; });