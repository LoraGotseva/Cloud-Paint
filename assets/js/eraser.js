const toolBtns = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (document.querySelector(".options .active") !== null) {
            document.querySelector(".options .active").classList.remove("active");
          }
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});

