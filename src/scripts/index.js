// import "regenerator-runtime"; /* for async await transpile */
// import "../styles/main.css";

console.log("Hello Coders! :)");

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
