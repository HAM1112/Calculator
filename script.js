const numbers = document.querySelectorAll('.number');
const operatorFromCalc = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');

const screenDisplayResult = document.getElementById('result-screen');
const screenDisplayInput =document.getElementById('input-screen');


const sum = (num1, num2) => {
    
    return num1 + num2 ;
}

const difference = (num1, num2) => {
    return num1 - num2;
}

const product = (num1 , num2) => {
    return num1 * num2;
}

const division = (num1 , num2) =>{
    return num1 / num2;
}


const calculator = {
    num1 : 0,
    num2 : 0,
    operator : null,
    result : 0
}





function operate(a, b, operator) {

    if(operator === '+'){
        return sum(a, b);
    }
    else if(operator === '-'){
        return difference(a, b);
    }
    else if(operator === '*'){
        return product(a, b);
    }
    else if(operator === '/'){
        return division(a, b);
    }
}

// console.log(oper


