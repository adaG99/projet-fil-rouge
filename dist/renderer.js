"use strict";
function performDivision() {
    const numeratorInput = document.getElementById('numerator');
    const denominatorInput = document.getElementById('denominator');
    const numerator = parseFloat(numeratorInput.value);
    const denominator = parseFloat(denominatorInput.value);
    const resultElement = document.getElementById('result');
    if (denominator === 0) {
        resultElement.innerText = 'Error: Cannot divide by zero';
    }
    else {
        const result = numerator / denominator;
        resultElement.innerText = `Result: ${result}`;
    }
}
