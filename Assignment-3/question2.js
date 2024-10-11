/*
Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.
*/

let str = 'I love my India';
let strArray = str.split(' ');
let reverseArray = strArray.reverse();
let reverseWord = reverseArray.join(' ');
console.log(reverseWord);
