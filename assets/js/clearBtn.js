const clearBtn = document.getElementsByClassName('clear-button')[0];

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
});