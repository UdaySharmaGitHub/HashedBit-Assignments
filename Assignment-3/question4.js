/*
 Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
*/
let str = 'Hi my name is Uday Sharma';
let vowelCount = 0 , consonantCount = 0;
for(let i in str){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
        vowelCount++;
    }
    else if(str[i]!=' '){
        consonantCount++;
    }
}
console.log(`Number of Vowel ${vowelCount} and number of Consonant ${consonantCount}`);