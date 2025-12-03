let displayInput =document.getElementById("displayInput");
let displayOutput =document.getElementById("displayOutput");

let currentInput = "";
let lastOperator = "";

function appendNumber(number){
    if(currentInput === "0"){
        currentNumber = number;
    }
    else{
        currentInput += number;
    }
    displayOutput.innerText = "";
    updateOutput();
}

function appendDecimal(){
    if(!currentInput.includes(".")){
        currentInput += ".";
        updateOutput();
    }
}

function clearDisplay(){
    currentInput = "";
    displayInput.innerText = "0";
    displayOutput.innerText = "";
    updateOutput();
}

function deleteDisplay(){
    currentInput = currentInput.slice(0, -1);
    updateOutput();
}

function squareRoot(){
   let result = Math.sqrt(eval(currentInput));
   currentInput = result.toString();
   updateOutput();
}

function power(){
    let result = Math.pow(eval(currentInput),2);
    currentInput = result.toString();
    updateOutput();
}

function appendOperator(operator){
    if(currentInput === "") return;
    currentInput += operator;
    displayOutput.innerText = "";
    updateOutput();
}

function calculate(){
    displayOutput.innerText = currentInput;
    let result = eval(currentInput);
    currentInput = result.toString();
    updateOutput();
}

function updateOutput(){
    displayInput.innerText = currentInput || "0";
}