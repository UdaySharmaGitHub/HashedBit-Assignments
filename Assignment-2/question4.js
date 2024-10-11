/*
4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
*/
const sumOfProducts = (n1, n2) => {
    let sum = 0;
    while (n1 > 0 && n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
};

console.log(sumOfProducts(6, 34)); // 24
console.log(sumOfProducts(122, 81)); // 42
