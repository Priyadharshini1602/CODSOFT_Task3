// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;
            
            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                display.textContent = '';
            } else if (value === '=') {
                if (firstOperand !== null && operator) {
                    const secondOperand = parseFloat(currentInput);
                    let result;
                    
                    switch (operator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                    }
                    
                    display.textContent = result;
                    currentInput = result;
                    operator = '';
                    firstOperand = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});