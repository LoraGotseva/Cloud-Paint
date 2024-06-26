const drawBrush = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY); //creating line according to the x and y coordinates of the cursor
    ctx.stroke(); //filling the line with color
}