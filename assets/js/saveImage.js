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

document.querySelector(".upload-button").addEventListener("click",  function() {
    let canvas = document.getElementById("drawing-canvas");
    // console.log(canvas.toDataURL())
    fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: canvas.toDataURL()
    })
    .then(async response => {    
        let json = await response.json();
        window.location.href = json.url;
        // if (response.status === 401) {
        // }
    })
    .catch(error => {
        console.log('error');
        // window.location.href = '/';
    })
});