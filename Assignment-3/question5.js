 /*
  Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.
 */
const correctFn = (str,wrongWord,correctWord)=>{
    let newStr = str.replace(wrongWord,correctWord);
    return newStr;
}
console.log(correctFn('Hi my name is Uday','Uday','Uday Sharma'));
