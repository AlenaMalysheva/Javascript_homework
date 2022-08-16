// task №1
// Write a 'for' loop that prints numbers
// from 100 to 130 to the console.

for (let i = 100 ; i <= 130 ; i++) {
    console.log(i);
}


// task №2
// Write a 'for' loop that prints numbers from 
// 196 to 110 to the console in increments of 3.

for (let i = 196 ; i >= 110 ; i -=3) {
    console.log(i);
}


// task №3
// Write a 'for' loop that prints odd numbers 
// from 45 to 35 to the console.

for (let i = 45 ; i >= 35 ; i--) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// task №4
// The program has two variables n and m with a numeric value each.
// Write a loop that counts the sum of even numbers and odd numbers 
// from n to m. Print the sums to the console (first the sum of even
// numbers, and then the sum of odd numbers).

let getSum = (n,m) => {
    let sumEvenNums = 0;
    let sumOddNums = 0;
    for (let i = n; i <=m ; i++) {
        if (i % 2 === 0) {
            sumEvenNums += i;
        } else {
            sumOddNums += i;
        }
    }
    console.log(sumEvenNums);
    console.log(sumOddNums);
}

(getSum(5,13));


// task №5
// The program is given a variable n.
// Write a program that counts the sum of 
// numbers from 1 to n using a loop and prints
// it to the console.

let getSum2 = n => {
    for (let i = 1 ; i <= n ; i++) {
        console.log(i);
    }
}
getSum2(7);
getSum2(15);