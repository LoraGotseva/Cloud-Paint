const undo = () => {
    if (index <= 0) {
        setCanvasBackground();
    } else {
        index -= 1;
        restoreArray.pop();
        ctx.putImageData(restoreArray[index], 0, 0);
    }
};

undoBtn.addEventListener("click", undo);