const multiplyAction = function (num1, num2) {
    return num1 * num2;
}

const divideAction = function (num1, num2) {
    return num1 / num2;
}

const addAction = function (num1, num2) {
    return num1 + num2;
}

const subtractAction = function (num1, num2) {
    return num1 - num2;
}

const operations = {
    multiply: multiplyAction,
    divide: divideAction,
    add: addAction, 
    subtract: subtractAction,
};

function calculate(num1, num2, action) {
    return action(num1, num2);
}


const number1 = 6;
const number2 = 3;
const selectedOperation = "subtract"; //multiply (*) divide (/) add (+)  (-)

console.log(calculate(number1, number2, operations[selectedOperation]));