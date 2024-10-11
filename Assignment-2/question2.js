/*
2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
*/
const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
};

console.log(calculate(10, 20, '+')); // 30
console.log(calculate(10, 20, '-')); // -10
console.log(calculate(10, 20, '*')); // 200
console.log(calculate(10, 20, '/')); // 0.5
    
