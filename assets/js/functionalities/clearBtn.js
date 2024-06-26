const clearBtn = document.querySelector('.clear-button');

const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
}

clearBtn.addEventListener("click", clear);