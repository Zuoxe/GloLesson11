const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const button = document.querySelector("#btn");
const input = document.querySelector("#text");
const square = document.querySelector('#square');
const circle = document.querySelector("#circle");


const logger = function (event) {
    rangeSpan.textContent = event.target.value;
}

button.addEventListener("click", function () {
    square.style.backgroundColor = input.value;
})
range.addEventListener("input", function () {
    circle.style.width = range.value + "%";
    circle.style.height = range.value + "%";

})
range.addEventListener("change", logger)
range.addEventListener("input", logger)
