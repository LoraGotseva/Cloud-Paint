const clearBtn = document.getElementsByClassName('clear-button')[0];

const erase = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
}

clearBtn.addEventListener("click",erase)
