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
       // showCancelButton: true,
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
