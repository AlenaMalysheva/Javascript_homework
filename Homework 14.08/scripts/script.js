// Task №1
// Write a function that takes a name (string) as an argument and returns a message in the format:
// Dear NAME, welcome. Print the result to the console.
// Write a function in two formats (function declaration and arrow function).

// function declaration
function greeting (nameString) {
 return console.log(`Dear ${nameString}, welcome.`)
}

greeting('Alona');

// arrow function
let greeting_2 = nameString => console.log(`Dear ${nameString}, welcome.`)
greeting('Margo');

// Task №2
// Write a function that takes two values ​​as arguments: name and age. 
// If the passed age is less than 18, then the function returns a message
// in the format: Dear NAME, you are younger than 18. If the age is greater 
//than or equal to 18, then the function returns a message in the format: Dear NAME, you are adult.
//Write a function in two formats (function declaration and arrow function).

// function declaration
function checkAge (name , age) {
    if (age < 18) {
        return  `Dear ${name}, you are younger than 18.`
    } else {
        return `Dear ${name}, you are adult.`
    }
}

console.log(checkAge('Svetlana',10));
console.log(checkAge('Olga',25));
console.log(checkAge('Igor',18));

// arrow function
let checkAge_2 = (name , age) => {
    if (age < 18) {
        return  `Dear ${name}, you are younger than 18.`
    } else {
        return `Dear ${name}, you are adult.`
    }
}

console.log(checkAge('Evgeniy',17));
console.log(checkAge('Julia',39));
console.log(checkAge('Marina',18));

// get data using prompt
function getData() {
    let name1 = prompt ('input your name');
    let age = +prompt ('input your age');
    if (age < 18 ) {
        return (`Dear ${name1}, you are younger than 18.`)
    } else {
        return (`Dear ${name1}, you are adult.`)
    }
}

console.log(getData());


// Task №3
// Write a function that takes two numeric arguments and returns the result
// of their multiplication. The value of the second argument should be specified
// by default 2. Write the function in two formats (function declaration and arrow function).

// function declaration
function multiplyNums (num1,num2 = 2) {
    return num1 * num2 
}

console.log(multiplyNums(5,25));
console.log(multiplyNums(5));

// arrow function
let  multiplyNums2 = (num1,num2 = 2) => num1 * num2;
console.log(multiplyNums(10,17));
console.log(multiplyNums(30));


// Task №4
// Write a function that takes two numeric arguments and returns 
// the smaller value. Print the result to the console. Suggest two solutions.
// Write a function in two formats (function declaration and arrow function).

// function declaration
function minNum (number_1,number_2) {
    if (number_1 < number_2) {
        return console.log(number_1)
    } else {
        return console.log(number_2)
    }
}

minNum(15,25);
minNum(28,4);

// arrow function
let  minNum_2 = (number_1,number_2) => console.log(number_1);
minNum_2(5,25);
minNum_2(250,50);

// function declaration with Math
function minNam_3 (number_1,number_2) {
   console.log( Math.min(number_1,number_2));
}

minNam_3(20,80);
minNam_3(25,15);

// arrow function with Math
let minNam_4 = (number_1,number_2) => console.log(Math.min(number_1,number_2));
minNam_3(100,110);
minNam_3(450,45);