const drawLine = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY); // start point of line
    ctx.lineTo(e.offsetX, e.offsetY); // creating line
    ctx.stroke();
}