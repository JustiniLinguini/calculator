let display = "";
let operator = "";
let operand = "";


setHandlers = () => {
    const buttonSelector = document.querySelectorAll('.button-selector');
    const equals = document.querySelector('#equals');
    const backspace = document.querySelector('#backspace');

    buttonSelector.forEach((button) => {
        button.addEventListener('click' , () => {
            calc(button.id);
            screenRefresh();
        })
    });

    equals.addEventListener('click', () => { 

        if(operator != "" && operand != "" && display != ""){
            evalAndClear();
            screenRefresh();
        } else {
            screenRefresh();
        }
    });

    backspace.addEventListener('click', () => {
        display = display.slice(0, -1);
        lastChar = display.charAt(display.length-1);
        screenRefresh();
    })
}

calc = (buttonId) => { 
    if(buttonId != 'backspace'){
        display += buttonId;
    }
    lastChar = display.charAt(display.length-1);

    if(isOperator(lastChar) == true && operator != ""){
        evalAndClear();
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

screenRefresh = () =>{
    const screen = document.querySelector('#screen');
    screen.textContent = `operand: ${operand} operator:${operator} display: ${display}`;
}

evalAndClear = () =>{
    let result = eval(operand, operator, display)
    operand = result;
    operator = "";
    display = "";
    lastChar = "";
}

isOperator = char => char == "+" || char == "-" || char == "*" || char == "/";


setHandlers();