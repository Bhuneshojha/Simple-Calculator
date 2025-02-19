document.getElementById('calculatorForm')!.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Cast the elements to the correct types
    let v = parseFloat((document.getElementById('value1') as HTMLInputElement).value);
    let operator = (document.getElementById('operator') as HTMLSelectElement).value;
    let v2 = parseFloat((document.getElementById('value2') as HTMLInputElement).value);
    
    // Define result with the correct type
    let result: string | number = 0;

    if (operator === "+") {
        result = v + v2;
    } else if (operator === "-") {
        result = v - v2;
    } else if (operator === "*") {
        result = v * v2;
    } else if (operator === "/") {
        if (v2 !== 0) {
            result = v / v2;
        } else {
            result = 'Error: Division by zero';
        }
    } else {
        result = 'Choose correct operator please';
    }

    // Display result in the 'result' element
    (document.getElementById('result') as HTMLElement).textContent = 'Result: ' + result;
});
