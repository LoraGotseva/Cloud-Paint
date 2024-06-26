const drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY); // start point of first line
    ctx.lineTo(e.offsetX, e.offsetY); // creating first line of triangle; becomes new starting point
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // second line(bottom)
    ctx.closePath() //third line
    fillColor.checked ? ctx.fill() : ctx.stroke();
}