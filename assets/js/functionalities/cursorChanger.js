const elementIds = ["brush", "eraser", "text", "rectangle", "circle", "triangle", "line"];



elementIds.forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    document.body.classList.remove("brush-cursor");
    document.body.classList.remove("eraser-cursor");
    document.body.classList.remove("text-cursor");
  });
});

document.getElementById("brush").addEventListener("click", () => {
  document.body.classList.add("brush-cursor");
});

document.getElementById("eraser").addEventListener("click", () => {
  document.body.classList.add("eraser-cursor");
});

document.getElementById("text").addEventListener("click", () => {
  document.body.classList.add("text-cursor");
});

document.getElementById("rectangle").addEventListener("click", () => {
  document.body.classList.add("default-cursor");
});

document.getElementById("circle").addEventListener("click", () => {
  document.body.classList.add("default-cursor");
});

document.getElementById("triangle").addEventListener("click", () => {
  document.body.classList.add("default-cursor");
});

document.getElementById("line").addEventListener("click", () => {
  document.body.classList.add("default-cursor");
});