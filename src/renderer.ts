    function performDivision(): void {
        const numeratorInput = document.getElementById('numerator') as HTMLInputElement;
        const denominatorInput = document.getElementById('denominator') as HTMLInputElement;
        const numerator = parseFloat(numeratorInput.value);
        const denominator = parseFloat(denominatorInput.value);
    const resultElement = document.getElementById('result') as HTMLParagraphElement;
    if (denominator === 0) {
    resultElement.innerText = 'Error: Cannot divide by zero';
    } else {
    const result = numerator / denominator;
    resultElement.innerText = `Result: ${result}`;
    }
    }