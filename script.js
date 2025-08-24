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


//subsection 1

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

//subsection 2

const secondResponse=document.querySelector(".second-response")
calculatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseFloat(calculatorForm['calc-input'].value);
    const num2 = parseFloat(calculatorForm['calc-input2'].value);
    const operation = calculatorForm['calc-operation'].value;
    const result = calculate(operation, num1, num2);
    calcResponse.textContent = `Result: ${result}`;
    compareValues(num1,num2)
});

function compareValues(num1,num2){
    if(!num1 &&! num2){
        secondResponse.innerHTML="Enter valid numbers"
        return;
    }else{
        if(num1>num2){
            secondResponse.innerHTML=`${num1} is greater than ${num2}`;
            return
        }else{
            secondResponse.innerHTML=`${num1} is not greater than ${num2} `;
        }
    }
}

// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!

//subsection1
names=["james","martin","Tom","Greenta"];
  for(let i=0; i<names.length; i++){
    console.log(names[0]);
  }

  //subsection2

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

//subsection 1

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

//subseection2

const addHeader=document.querySelector('.add-header')
const header=document.querySelector(".header");


function addHeaderContent(header){
    const data=document.createElement("nav")
    header.innerHTML="";
    data.innerHTML=`
    <h1>Home</h1>
    <ul>
    <li><a href="#section_one">Section One</a></li>
    <li><a href="#section_two">Section Two</a></li>
    <li><a href="#section_three">Section Three</a></li>
    <li><a href="#section_four">Section Four</a></li>
    </ul>`;
    header.appendChild(data);
    header.style.display="block";
}

addHeader.addEventListener("click",()=>{
    addHeaderContent(header);
    window.scrollTo({
  top: 0,
  behavior: "smooth"  // smooth scrolling
});

})

//subsection 3

const addForm=document.querySelector(".add-form");
function generateNewForm(addForm){
    addForm.innerHTML="";
     const createdForm=document.createElement("form");
     createdForm.innerHTML=`
     <form>
     <h2>Added form area through js injection<h2>
     <label for='name'>Your name</label>
     <input name='name' type='text' id='name' required/>
      <label for='image'>Image<label>
      <input name='image' type='file' id='image' required/>
      <button>Submit</button>
     </form>
          
     `
     addForm.appendChild(createdForm);
}

const formAddButton=document.querySelector(".generate-form")
formAddButton.addEventListener("click",(e)=>{
    generateNewForm(addForm);
})