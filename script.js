//🎯 Part 1: Mastering JavaScript Basics

const userForm = document.querySelector('.user-form');
const responseParagraph = document.querySelector('.response');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name === '' || name.length < 2 || !isNaN(name)) {
        responseParagraph.textContent = 'Please enter a valid name.';
        return;
    }
    responseParagraph.textContent = `Hello, ${name}! Welcome to the JavaScript basics tutorial.`;
});

//❤️ Part 2: JavaScript Functions — The Heart of Reusability

function greetUser(name) {
    if (name === '' || name.length < 2 || !isNaN(name)) {
        return 'Please enter a valid name.';
    }
    return `Hello, ${name}! Welcome to the JavaScript basics tutorial.`;
}

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    responseParagraph.textContent = greetUser(name);
});
greetUser('Alice'); // Example usage

const calculatorForm = document.querySelector('.calculator');

const calcResponse = document.querySelector('.calc-response');

function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Division by zero error';
        default:
            return 'Invalid operation';
    }
}

calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseFloat(calculatorForm['calc-input'].value);
    const num2 = parseFloat(calculatorForm['calc-input2'].value);
    const operation = calculatorForm['calc-operation'].value;
    const result = calculate(operation, num1, num2);
    calcResponse.textContent = `Result: ${result}`;
});


// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!


//function that loops and updates count
function loopFunction(iterations, loop_response) {
    for (let i = 0; i < iterations; i++) {
        setInterval(() => {
            loop_response.textContent = i++;
            return i;
        }, 1000);
        break;
    }

}

const loop_form = document.querySelector('.loop-form');
const loop_response = document.querySelector('.loop-response');

loop_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const loop_header = document.querySelector('.loop-header');
    const iterations = parseInt(loop_form['loop-count'].value);
    if(isNaN(iterations) || iterations <= 0){
        loop_response.textContent = 'Please enter a valid positive number for iterations.';
        return;
    }
    loop_header.textContent = 'Looping...';
    loopFunction(iterations, loop_response);

});


//🌐 Part 4: Mastering the DOM with JavaScript


const backgroundArea = document.querySelector('.background-area');
const bgResponse = document.querySelector('.bg-response');

function changeBackgroundColor(colorForm) {
    if (colorForm === '') {
        bgResponse.textContent = 'Please choose a color.';
        return;
    }
    document.body.style.backgroundColor = colorForm;
    bgResponse.textContent = `Background color changed to ${colorForm}`;
}

backgroundArea.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const colorForm = document.querySelector(".bg-color").value.trim();
    changeBackgroundColor(colorForm);
});
