### Q1:- Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
***`Answer`***
- JavaScript: `let`, `const`, and `var` Scope Differences
- ***Overview***
- In JavaScript, the way you declare variables (let, const, and var) affects their scope and behavior. Each has its use case and scoping rules.

- This document explains the differences in scope between let, const, and var using a simple function.

`code Example`
```javascript
function scopeDemo() {
    if (true) {
        var varVariable = "I am a var variable";  // Function-scoped
        let letVariable = "I am a let variable";  // Block-scoped
        const constVariable = "I am a const variable";  // Block-scoped
    }

    console.log(varVariable);  // ✅ Accessible (function-scoped)
    // console.log(letVariable);  // ❌ Error: letVariable is not defined
    // console.log(constVariable);  // ❌ Error: constVariable is not defined
}

scopeDemo();
```
#### Scope Differences
***1. var (Function Scope)***
- ***Scope:*** Variables declared with var are scoped to the function in which they are declared, not the block.
- ***Hoisting:*** They are hoisted to the top of the function (initialized with undefined).
- ***Re-declaration:*** Allowed within the same scope.
`Example:` In the above code, varVariable is accessible outside the if block because it is function-scoped.

***2. let (Block Scope)***
- ***Scope:*** Variables declared with let are scoped to the block (e.g., inside an if, for loop).
- ***Hoisting:*** They are hoisted but not initialized (cannot be accessed before declaration).
- ***Re-declaration***: Not allowed within the same block scope.
`Example:`
letVariable is only available within the if block. Trying to access it outside results in an error.

***3. const (Block Scope and Immutable)***
- ***Scope:*** Same block scope behavior as let.
Hoisting: Similar to let, const is hoisted but not initialized.
- ***Immutability:*** The value assigned to a const variable cannot be re-assigned.
- ***Re-declaration:*** Not allowed within the same block scope.
`Example:`
constVariable is block-scoped, just like letVariable. Attempting to access it outside the if block results in an error.

#### JavaScript: let, const, and var Scope Differences

#### Summary Table

| **Keyword** | **Scope**        | **Hoisting**              | **Re-declaration** | **Re-assignment** |
|-------------|------------------|---------------------------|--------------------|-------------------|
| `var`       | Function         | Yes (initialized as `undefined`) | Yes            | Yes               |
| `let`       | Block            | Yes (uninitialized)       | No                 | Yes               |
| `const`     | Block            | Yes (uninitialized)       | No                 | No                |

#### Key Points
- **var**: Function-scoped, allows re-declaration, and hoisted with `undefined`.
- **let**: Block-scoped, cannot be re-declared in the same scope, and allows re-assignment.
- **const**: Block-scoped, immutable (no re-assignment), and cannot be re-declared.

Use **`let`** for variables expected to change, **`const`** for constants, and **`var`** only for legacy code or when function scope is explicitly required.

### Q2 Create an array called `fruits` that contains five different fruit names. Write a function that returns the **second fruit** in the array.
***`Answer `***
##### Code Example

```javascript
// Array of fruits
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Pineapple"];

// Function to return the second fruit
function getSecondFruit() {
    return fruits[1];  // Arrays are zero-indexed, so index 1 is the second element
}

// Calling the function
console.log(getSecondFruit());  // Output: Banana
```
`output`
```bash
Banana
```
#### Explanation
- ***Array Initialization:***
    - We declare an array named fruits and assign it five different fruit names as strings.
- ***Array Indexing:***
    - JavaScript arrays are zero-indexed. This means:
        - The first element is at index 0.
        - The second element is at index 1.
    - To retrieve the second fruit, we use fruits[1].
- ***Function Definition:***
    - The function getSecondFruit() accesses the array and returns the value at index 1 (the second element).
- ***Function Call and Output:***
    - When we call getSecondFruit(), it returns "Banana", the second fruit in the array.


### Q3 Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.
##### JavaScript: Using `push()` and `pop()` Methods
`Code Example`
```javascript
// Function to add and remove an element from an array
function modifyArray(arr) {
    arr.push("New Element");  // Adds a new element to the end of the array
    arr.pop();  // Removes the last element from the array
    return arr;  // Returns the modified array
}

// Example usage
const fruits = ["Apple", "Banana", "Cherry"];
console.log(modifyArray(fruits));  // Output: ["Apple", "Banana", "Cherry"]
```
`output`
```bash
["Apple", "Banana", "Cherry"]
```
##### Explanation
- ***Function Definition:***
The function modifyArray() takes an array (arr) as its argument.
- ***Adding an Element with push():***
The push() method adds an element to the end of the array.
In this example, "New Element" is added to the end of the given array.
- ***Removing an Element with pop():***
The pop() method removes the last element from the array.
In our case, since "New Element" was just added, it gets removed by pop().
- ***Returning the Modified Array:***
After adding and removing elements, the original array remains unchanged and is returned by the function.

### Q4 Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.
#### JavaScript: Using the `map()` Method to Square Numbers

`Code Example`
```javascript
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to return a new array with squared numbers
function squareNumbers(arr) {
    return arr.map(num => num * num);  // Squares each number using map()
}

// Example usage
console.log(squareNumbers(numbers));  // Output: [1, 4, 9, 16, 25]
```
`output`
```bash
[1, 4, 9, 16, 25]
```

#### Explanation
***Array Initialization:***
- We create an array called numbers containing integers [1, 2, 3, 4, 5].
***Function Definition:***
- The function squareNumbers() takes an array arr as an argument.
***Using the map() Method:***

- The map() method creates a new array by applying a function to each element in the original array.
- In this example, the function inside map() takes each number (num) and returns its square (num * num).
***Returning the New Array:***
- The new array containing the squared numbers is returned by squareNumbers().

### Q5 Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers
#### JavaScript: Filtering Odd Numbers using `filter()`
`Code Example`

```javascript
// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter out even numbers and return only odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);  // Keep only odd numbers
}

// Example usage
console.log(filterOddNumbers(numbers));  // Output: [1, 3, 5, 7, 9]
```
`output`
```bash
[1, 3, 5, 7, 9]
```

#### Explanation
***Array Initialization:***
- We create an array called numbers containing integers from 1 to 10.
***Function Definition:***
- The function filterOddNumbers() takes an array arr as its argument.
***Using the filter() Method:***
- The filter() method creates a new array by including only elements that meet a given condition.
- In this example, the function inside filter() checks if a number is odd using the condition num % 2 !== 0 (i.e., the remainder when divided by 2 is not 0).
***Returning the New Array:***
- The new array containing only odd numbers is returned by filterOddNumbers().

### Q6 Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

#### JavaScript: Using Objects and Accessing Properties
`Code Example`

```javascript
// Object representing a person
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

// Function to log a greeting message using person properties
function greetPerson(person) {
    console.log(
        `Hello, my name is ${person.name}. I am ${person.age} years old, and I work as a ${person.occupation}.`
    );
}

// Example usage
greetPerson(person);  
// Output: Hello, my name is John Doe. I am 30 years old, and I work as a Software Developer.
```
`output`
```bash
Hello, my name is John Doe. I am 30 years old, and I work as a Software Developer.
```

#### Explanation
***Object Initialization:***
- We create an object called person with three properties:
name: A string representing the person’s name.
age: A number representing the person’s age.
occupation: A string representing the person’s job title.
***Function Definition:***
- The function greetPerson() takes the person object as an argument.
- It uses template literals (backticks `) to construct a greeting message that includes the person’s name, age, and occupation.
***Logging the Message:***
- The message is logged to the console using console.log().

### Q7 Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).
#### JavaScript: Calculating the Area of a Rectangle using an Object

```javascript
// Function to calculate the area of a rectangle
function getRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}

// Example usage
const rectangle = { width: 10, height: 5 };
console.log(getRectangleArea(rectangle));  // Output: 50
```
`output`
```bash
50
```

### Q8 Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().
##### JavaScript: Extracting Object Keys using `Object.keys()`
```javascript
// Function to return an array of keys from an object
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Example usage
const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
    country: "USA"
};

console.log(getObjectKeys(person));  
// Output: ["name", "age", "occupation", "country"]
```
`output`
```bash
["name", "age", "occupation", "country"]
```

### Q9 Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
##### JavaScript: Merging Objects using `Object.assign()`

```javascript
// Function to merge two objects into one
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Example usage
const personInfo = { name: "Alice", age: 25 };
const jobInfo = { occupation: "Engineer", country: "USA" };

const mergedObject = mergeObjects(personInfo, jobInfo);
console.log(mergedObject);  
// Output: { name: "Alice", age: 25, occupation: "Engineer", country: "USA" }
```
`output`
```bash
{ name: "Alice", age: 25, occupation: "Engineer", country: "USA" }
```

### Q10 Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

```javascript
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum using reduce()
function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
}

// Example usage
console.log(sumArray(numbers));  // Output: 15
```
`output`
```bash
15
```