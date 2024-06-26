const toolBtns = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");

toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // removing active class from the previous option and adding on current clicked option
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool);
    });
});