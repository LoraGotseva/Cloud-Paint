const clear = () => {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
};

clearBtn.addEventListener("click", clear);