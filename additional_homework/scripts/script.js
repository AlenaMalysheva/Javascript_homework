// В программе объявлены три переменные a, b и c, в которые записаны числовые значения.
// Определите максимальное значение и выведите его в консоль.
// Методом max пользоваться нельзя.
// Пример значений переменных:
// let a = 32
// let b = 5
// let c = 14
// Пример результата:32

let maxNum = (a,b,c) => {
    let max = 0;
    if (a > b  && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}

console.log(maxNum(74,18,10));
console.log(maxNum(5,20,14));
console.log(maxNum(30,7,100));


//В программе определены две переменные со строковым значением word_1 и word_2.
// Напишите программу таким образом,чтобы в консоль
// выводилась строка наибольшей длины. (свойство length)
// Пример значений переменных:
// let word_1 = "машина"
// let word_2 = "стол"
// Пример результата:"машина"

let maxStr = (word_1,word_2) => {
    if (word_1.length > word_2.length) {
        console.log(word_1);
    } else {
        console.log(word_2);
    }
}

maxStr('Hello, world','Welcome');
maxStr('Hello','I have done my homework');


// В программе объявлены две переменные — temp и weather. 
// Объявите переменную activity и присвойте ей значение по следующему правилу:
// если значение переменной temp больше либо равно 25,
// a переменная weather имеет значение "clear",
// тогда значение переменной activity должно быть "golf";
// если значение переменной temp от 10 до 24, 
// a переменная weather имеет значение "clear",
// тогда значение переменной activity должно быть "bowling";
// в ином случае значение переменной activity должно быть "hiking".
// Пример значений переменных:
// let temp = 25
// let weather = "clear"
// Пример результата:"golf"

let getValue = (temp,weather) => {
   let activity = '';
   if (temp >= 25 && weather === 'clear'){
     activity = 'golf';
   } else if (temp >= 10 && temp <=24 && weather === 'clear') {
    activity = 'bowling';
   } else {
    activity = 'hiking'
   }
   return activity
}

console.log(getValue(27,'clear'));
console.log(getValue(12,'clear'));
console.log(getValue(24,'clear'));
console.log(getValue(5,'clear'));