canvas.addEventListener('click', function(event) {

    if (document.querySelector('.tool.active').id === 'text') {

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const input = document.createElement('input');
    input.type = 'text';
    input.style.position = 'absolute';
    input.style.left = `${event.clientX}px`;
    input.style.top = `${event.clientY}px`;
    input.style.outline = 'none';
    input.style.border = 'none';
    document.body.appendChild(input);

    input.focus();

    input.addEventListener('blur', function() {
        const text = input.value;
        ctx.font = '16px Arial';
        ctx.fillStyle = selectedColor;
        ctx.fillText(text, x, y);
        document.body.removeChild(input);
    });
    
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            input.blur();
        }
    });
}
});
