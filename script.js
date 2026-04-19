document.addEventListener("DOMContentLoaded", () => {

const elements = document.querySelectorAll(".fade");

elements.forEach((el, i) => {
setTimeout(() => {
el.classList.add("show");
}, 150 + i * 150);
});

/* DARK MODE TOGGLE (with persistence) */
const toggle = document.getElementById("toggle");

if (localStorage.getItem("theme") === "light") {
document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
document.body.classList.toggle("light");

if (document.body.classList.contains("light")) {
localStorage.setItem("theme", "light");
} else {
localStorage.setItem("theme", "dark");
}
});

});
