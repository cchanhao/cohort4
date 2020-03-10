import functions from './functions.js';
import calcFunction from './calculator.js';
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let result = document.getElementById("result");

add.addEventListener("click", function () {
    //    console.log("add");
    result.value = calcFunction.addNumbers(num1.value, num2.value);

});
subtract.addEventListener("click", function () {
    //    console.log("test subtract");
    result.value = calcFunction.subtractNumbers(num1.value, num2.value);
});

multiply.addEventListener("click", function () {
    // console.log("test multiply");
    result.value = calcFunction.multiplyNumbers(num1.value, num2.value);
});

divide.addEventListener("click", function () {
    //      console.log("test divide");
    result.value = calcFunction.divideNumbers(num1.value, num2.value);
});

