
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

function operate(a, b, operator) {
    if(operator === '+'){
        return sum(a, b);
    }
}

console.log(operate(1,3,'+'));
