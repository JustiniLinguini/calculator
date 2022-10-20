let str = "";

function setHandlers(){
    const buttonSelector = document.querySelectorAll('.button-selector');
    const screen = document.querySelector('#screen');
    const equals = document.querySelector('#equals');
    const errorArray = [];
    let i = 0;
    const handlerArray = []

    buttonSelector.forEach((button) => {
        button.addEventListener('click' , ()=> {
            screen.textContent = screen.textContent + `${button.id}`
            errorArray.push(button.id);
            str = str + button.id;
            errorHandler(errorArray, i);
            numArray = listHandler(handlerArray);
            console.log(numArray);
            //console.log(ordered(numArray), "order");
            console.log(str , "string");
            i++;

        })
    });

    equals.addEventListener('click', () => {
        const screen = document.querySelector('#screen');
        screen.textContent = sum(numArray);
    })

}

function errorHandler(numList,counter){

    const screen = document.querySelector('#screen');
    if(numList[0] == "+" || numList[0] == "-" || numList[0] == "*" || numList[0] == "/"){
        screen.textContent ='ERROR EXPRESSION STARTED WITH OPERATOR';
    }
    if(counter != 0){
        if(numList.length > 27){
            screen.textContent ='ERROR TOO MANY DIGITS';
        }
        if(numList[counter] == "/" && numList[counter] == numList[counter-1]){
            screen.textContent ='ERROR TWO OPERATORS IN A ROW';
        }
        if(numList[counter] == "+" && numList[counter] == numList[counter-1]){
            screen.textContent ='ERROR TWO OPERATORS IN A ROW';
        }
        if(numList[counter] == "-" && numList[counter] == numList[counter-1]){
            screen.textContent ='ERROR TWO OPERATORS IN A ROW';
        }
        if(numList[counter] == "*" && numList[counter] == numList[counter-1]){
            screen.textContent ='ERROR TWO OPERATORS IN A ROW';
        }
    }
}

function listHandler(numArray){

    if(str.charAt(str.length-1) == "+"){
        str = str.slice(0, -1);
        numArray.push(str)
        numArray.push("+")
        str = "";
    }
    if(str.charAt(str.length-1) == "-"){
        str = str.slice(0, -1);
        numArray.push(str)
        numArray.push("-")
        str = "";
    }
    if(str.charAt(str.length-1) == "/"){
        str = str.slice(0, -1);
        numArray.push(str)
        numArray.push("/")
        str = "";
    }
    if(str.charAt(str.length-1) == "*"){
        str = str.slice(0, -1);
        numArray.push(str)
        numArray.push("*")
        str = "";
    }

    return numArray;
}

function sum(numArray){
    let sum;
    let numHolder = [];
    numArray.push(str);

    for(let i = 0; i < numArray.length; i++){

        let firstOperand = parseInt(numArray[i]);
        let secondOperand = parseInt(numArray[i + 2]);
        let operator = numArray[i + 1];
    
        if(operator == "*"){
            sum = firstOperand * secondOperand;
            numHolder.push(sum)
        }
        if(operator == "/"){
            sum = firstOperand / secondOperand;
            numHolder.push(sum)
        } else {
            continue;
        }
    }
    for(let i = 0; i < numArray.length; i++){

        let firstOperand = parseInt(numArray[0]);
        let secondOperand = parseInt(numArray[2]);
        let operator = numArray[1];
    
        if(operator == "+"){
            sum = firstOperand + secondOperand;
            numHolder.push(sum)
            numArray.splice(3);
        }
        if(operator == "-"){
            sum = firstOperand - secondOperand;
            numHolder.push(sum)
            numArray.splice(3);

        } else {
            numArray.splice(3);
            continue;
        }
    }

    return numHolder;
    
}
setHandlers();