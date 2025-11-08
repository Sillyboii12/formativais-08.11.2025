const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");

button.addEventListener('click', function calc(){
    let rad = input.value;
    let circ = 2 * Math.PI * rad;
    let area = rad**2 * Math.PI

    output.innerText = `Riņķa līnija ir ${circ.toFixed(2)} cm un riņķa laukums ir ${area.toFixed(2)} cm^2`;
});