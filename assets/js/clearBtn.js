const clearBtn = document.querySelector('.clear-button');

const erase = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground();
}

clearBtn.addEventListener("click",erase)
