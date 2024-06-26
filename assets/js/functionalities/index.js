const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d"), //allows us to draw on the canvas
colors = document.querySelectorAll(".color"),
toolBtns = document.querySelectorAll(".tool"),
fillColor = document.querySelector("#fill-color");

let prevMouseX, prevMouseY, snapshot, 
isDrawing = false,
selectedTool = "brush",
selectedColor = "#000",
brushWidth = 5;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCanvasBackground();
})

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
        drawBrush(e);
    } else if(selectedTool === "eraser"){
        erase(e);    
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
        //console.log(btn.id);
    })
})

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        //console.log(selectedTool);
    });
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => { isDrawing = false; });