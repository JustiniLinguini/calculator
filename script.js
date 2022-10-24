let display = "";
let operator = "";
let operand = "";


function setHandlers(){
    const buttonSelector = document.querySelectorAll('.button-selector');
    const screen = document.querySelector('#screen');
    const equals = document.querySelector('#equals');
    const backspace = document.querySelector('#backspace');

    buttonSelector.forEach((button) => {
        button.addEventListener('click' , () => {
            calc(button.id);
            screen.textContent = `operand: ${operand} operator:${operator} display: ${display}`;
        })
    });

    equals.addEventListener('click', () => { 

        if(operator != "" && operand != "" && display != ""){
            let result = eval(operand, operator, display)
            operand = result;
            operator = "";
            display = "";
            lastChar = "";
            screen.textContent = `operand: ${operand} operator:${operator} display: ${display}`;
        } else {
            screen.textContent = `operand: ${operand} operator:${operator} display: ${display}`;
        }
    });

    backspace.addEventListener('click', () => {
        display = display.slice(0, -1);
        screen.textContent = `operand: ${operand} operator:${operator} display: ${display}`;
        lastChar = display.charAt(display.length-1);
    })
}


isOperator = char => char == "+" || char == "-" || char == "*" || char == "/";

calc = (buttonId) => { 
    if(buttonId != 'backspace'){
        display += buttonId;
    }
    lastChar = display.charAt(display.length-1);

    if(isOperator(lastChar) == true && operator != ""){
        let result = eval(operand, operator, display)
        operand = result;
        operator = lastChar;
        display = "";
        lastChar = "";
    }

    if(isOperator(lastChar) == true){
        if(operand == ""){
            operand = display.slice(0, -1);
        }
        operator = lastChar;
        display = "";
        lastChar = "";
        
    }
 
}

eval = (operand, operator, display) => {

    if(operator == "+"){
        return parseInt(operand) + parseInt(display);
    }

    if(operator == "-"){
        return parseInt(operand) - parseInt(display);
    }

    if(operator == "*"){
        return parseInt(operand) * parseInt(display);
    }

    if(operator == "/"){
        return parseInt(operand) / parseInt(display);
    } else {
        return "INVALID OPERATOR";
    }

}

setHandlers();