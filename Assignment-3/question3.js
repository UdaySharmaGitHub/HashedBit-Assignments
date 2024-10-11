/*
Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/
let str = 'INDIA';
let stringArray = str.split('');
let removedchar = stringArray.splice(3,0,'O','N','E','S');
let joinString = stringArray.join('');
console.log(joinString);
