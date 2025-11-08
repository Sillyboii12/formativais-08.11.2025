// console.log("js loaded");

const button = document.getElementById("button");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const chose = document.getElementById("chose");
const output = document.getElementById("output");

button.addEventListener('click', function calc(){
    // console.log("button click works");

    let rez = 0
    let num1 = input1.value;
    let num2 = input2.value;
    let option = chose.value;

    if (option == "Reiz"){
        rez = num1 * num2;
        output.innerText = `${num1} * ${num2} = ${rez.toFixed(2)}`;
    } else {
        rez = num1 / num2;
        output.innerText = `${num1} / ${num2} = ${rez.toFixed(2)}`;

    }
});
