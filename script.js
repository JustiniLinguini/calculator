
function setHandlers(){
    const buttonSelector = document.querySelectorAll('.button-selector');
    const screen = document.querySelector('#screen');
    const equals = document.querySelector('#equals');
    let equalsPressed = false;
    buttonSelector.forEach((button) => {
        button.addEventListener('click' , ()=> {
            screen.textContent = screen.textContent + `${button.id}`;
            buttonString = buttonString + `${button.id}`;
            let sum = stackHandler(buttonString);
            console.log(buttonString, "input");

            if(sum != undefined){
                screen.textContent = sum + lastChar;
            }

        })
    });
    equals.addEventListener('click',() =>{
        let equalsSum = stackHandler(buttonString, true);
        console.log(buttonString, "string e");

        if(equalsSum != undefined){
            screen.textContent = equalsSum;
        }
    })

}

let buttonString = "";
let stack = [];

function stackHandler(str, equalsPressed = false){
    lastChar = str.charAt(str.length -1);
    let hasOperator = false;
    console.log(stack, 'stack');
    if(isOperator(lastChar) == true){
        hasOperator = true;
        if(str.length > 1){
            stack.push(str.slice(0,-1 ));
        }
        stack.push(lastChar);
        buttonString = "";
    }
    if(stack.length > 3){
        stack.pop();
        sum = sumStack(stack);
        stack = [];
        stack.push(sum);
        stack.push(lastChar);
        console.log('STACK = ' , stack)
        buttonString = "";
        return sum;
    }

    if(equalsPressed == true){
        console.log("i got pressed");
        stack.push(str);
        sum = sumStack(stack)
        stack = [];
        stack.shift();
        stack.push(sum)
        console.log(stack, "e")
        buttonString = "";
        equalsPressed = false;
        return sum;
    }
}

//takes an array with 3 items, items should include one operator and 2 operands
function sumStack(equation){

    if(equation.length == 3){
        let operand1 = parseInt(equation[0]);
        let operand2 = parseInt(equation[2]);
        let operator = equation[1];

        if(operator == "+"){
            return operand1 + operand2;
        }
        if(operator == "-"){
            return operand1 - operand2;
        }
        if(operator == "*"){
            return operand1 * operand2;
        }
        if(operator == "/"){
            return operand1 / operand2;
        }
        else{
            return "invalid operator";
        }
    }
}

function isOperator(char){

    return char == "+" || char == "-" || char == "*" || char == "/";
}

function inputHandler(str){
    
}
setHandlers();