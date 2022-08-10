//№1 Write a function that accepts a string as an argument and returns its length.

//function declaration
function getLength (string) {
    return string.length
}
console.log(getLength('hello, world'));

// arrow function 
let getLength2 = (string) => string.length;
console.log(getLength2('hello, world'));


// №2 Write a function that accepts two arguments (degree base and degree itself)
// and returns the number to the specified degree. The default degree value should be 2.

//function declaration
function getExp (baseNum , powerNum = 2) {
    return baseNum ** powerNum
}
console.log(getExp(2,3));
console.log(getExp(2));

// arrow function 
let getExp2 = (baseNum , powerNum) => baseNum ** powerNum ;
console.log(getExp2(2,3));
console.log(getExp(2));



// #3 Write a function that accepts two arguments with a numeric value and returns max.

// function declaration with conditional operator "if"
function getMax (num1,num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(getMax(34,87));

// arrow function with conditional operator "if"
let getMax2 = (num1,num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(getMax(34,87));

// function declaration with Math.max
function getMax3 (num1,num2) {
   return Math.max(num1,num2)
}
console.log(getMax3(34,87));

// arrow function with Math.max
let getMax4 = (num1,num2) => Math.max (num1,num2);
console.log(getMax4(34,87));


// №4 Write a function that takes three numbers as arguments
// and prints the numbers sorted in descending order to the console.
// Use a conditional operator.

// function declaration with conditional operator "if"
function getSortNums (num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            console.log(num1,num2,num3);
        } else {
            console.log(num1,num3,num2); 
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            console.log(num2,num1,num3);  
        }else {
            console.log(num2,num3,num1);   
        }
    } else {
        if (num1 > num2) {
            console.log(num3,num1,num2);   
        } else {
            console.log(num3,num2,num1);    
        }
    }
}

getSortNums(8,16,63);
getSortNums(87,8,16);
getSortNums(80,13,4);


// arrow function with conditional operator "if"
let getSortNums3 = (num1,num2,num3) => {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            console.log(num1,num2,num3);
        } else {
            console.log(num1,num3,num2); 
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            console.log(num2,num1,num3);  
        }else {
            console.log(num2,num3,num1);   
        }
    } else {
        if (num1 > num2) {
            console.log(num3,num1,num2);   
        } else {
            console.log(num3,num2,num1);    
        }
    }
}

getSortNums3 (8,16,63);
getSortNums3 (87,8,16);
getSortNums3 (80,13,4);



// №5 Write a function that takes five numbers as arguments 
// and prints the largest of them to the console. Use a conditional operator.

// function declaration with conditional operator "if"
function maxOffive (num1,num2,num3,num4,num5) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    } else max = num1
    if (num3 > max) {
        max = num3;
    } else max = num2
    if (num4 > max) {
        max = num4;
    } else max = num3
    if (num5 > max) {
        max = num5;
    } else max = num4 
    return max
}
console.log(maxOffive(6,9,15,33,56));


// function declaration with Math.max
function maxOfFive(a, b, c, d, e){
    return Math.max (a,b,c,d,e)
}
console.log(maxOfFive(5,9,100,29,50));

// arrow function with Math.max
let maxOfFive2 = (a, b, c, d, e) => Math.max (a,b,c,d,e);
console.log(maxOfFive2(5,9,100,29,50));


