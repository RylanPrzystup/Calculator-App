//global varibles
let firstNum='';//string
let operator='';//string
let newNum= true; //boolean


//addNumber funtionn

function addNumber(num){
    let display= document.getElementById('display');
    console.log(display)

    if(newNum)
    {
        display.value = num;
        newNum=false 
    }

    else{
        display.value += num
    }
}

//functional addOperator

function addOperator(op){
    let display= document.getElementById('display');
    firstNum= display.value; // scope is global
    operator= op; // scope is global
    newNum=true; // scope is global
}

//function caculate

function calculate(){
    let display= document.getElementById('display');
    let result;
    let num1 = Number(firstNum);
    let num2= Number(display.value);
    if(operator === '+'){
        result = num1 + num2
    }
    else if(operator === '-'){
        result = num1 - num2
    }
    else if (operator === '*'){
        result = num1 * num2;
    }
    else if (operator === '/'){
        result = num1 / num2
    }
    else{
        return;
    }

    display.value = result;
    firstNum = '';
    operator = '';
    newNum= true;
}

//funcation clearDisplay
function clearDisplay(){
    document.getElementById('display').value='';
    firstNum='';
    operator='';
    newNum= true;
}