const buttonToggle = document.querySelector(".toggle");
buttonToggle.addEventListener("click", toggleClass);
const buttonToggle2 = document.querySelector(".toggle2");
buttonToggle2.addEventListener("click", toggleClass2);

function toggleClass() {
  document.getElementById("stylesheet").setAttribute("href", "styledark.css");
}

function toggleClass2() {
  document.getElementById("stylesheet").setAttribute("href", "style.css");
}
