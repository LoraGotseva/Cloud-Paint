const canvas = document.querySelector("canvas");
const saveImg = document.querySelector(".download-button");
const ctx = canvas.getContext("2d");
let selectedColor = "#000";

const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = selectedColor;
};

window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setCanvasBackground();
});

const saveCanvas = () => {
    Swal.fire({
        title: "Save Image",
        html: `
            <p>Select the format:</p>
            <select id="imageFormat" class="swal2-select">
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>    
                <option value="bmp">BMP</option>
            </select>
        `,
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        preConfirm: () => {
            const imageFormat = document.getElementById("imageFormat").value;
            const dataURL = canvas.toDataURL(`image/${imageFormat}`);
            const link = document.createElement("a");
            link.download = `canvas_image.${imageFormat}`;
            link.href = dataURL;
            link.click();
        }
    });
};

document.querySelector(".download-button").addEventListener("click", saveCanvas);

canvas.addEventListener("click", () => {
    const downloadLinks = document.querySelectorAll(".download-link");
    downloadLinks.forEach(link => link.remove());
});
