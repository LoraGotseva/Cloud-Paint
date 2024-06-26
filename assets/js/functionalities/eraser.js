const erase = (e) => {
    ctx.strokeStyle = "#fff";
    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke(); 
}