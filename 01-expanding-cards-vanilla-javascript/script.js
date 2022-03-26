const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("panel--active");
  });
}
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    if (!this.classList.contains("panel--active")) {
      removeActiveClasses();
    }
    this.classList.toggle("panel--active");
  });
});
