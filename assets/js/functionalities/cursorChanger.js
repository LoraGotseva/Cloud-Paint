const elementIds = ["brush", "eraser", "text", "rectangle", "circle", "triangle", "line"];

elementIds.forEach((id) => {
  const element = document.getElementById(id);
  element.addEventListener("click", () => {
    document.body.classList.remove("brush-cursor", "eraser-cursor", "text-cursor", "default-cursor");
    
    if (id === "brush") {
      document.body.classList.add("brush-cursor");
    } else if (id === "eraser") {
      document.body.classList.add("eraser-cursor");
    } else if (id === "text") {
      document.body.classList.add("text-cursor");
    } else {
      document.body.classList.add("default-cursor");
    }
  });
});
