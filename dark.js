var modeToggle = document.querySelector("img")
var modeToggleBody = document.querySelector(".body")

function myFunction() {
modeToggleBody.classList.toggle("dark");
}

modeToggle.addEventListener('click', myFunction)