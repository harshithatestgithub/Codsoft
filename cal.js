let expression = ''; 
function appendToScreen(value) {
    if (value === '=') {
        calculate();
        return;
    }
    if (value === 'C') {
        clearScreen();
        return;
    }
    expression += value;
    document.getElementById('screen').innerText = expression;
}

function clearScreen() {
    expression = '';
    document.getElementById('screen').innerText = '0';
}

function calculate() {
    try {
        const result = eval(expression); 
        document.getElementById('screen').innerText = result;
        expression = result.toString(); 
    } catch (error) {
        document.getElementById('screen').innerText = 'Error';
        expression = ''; 
    }
}
