// Дан массив с числами.
let arr = [1, -6, 4, 0, 9, -5, 16];

// Создайте новый массив, состоящий только из отрицательных чисел.
let negativeNums = arr.filter(el => el < 0);

console.log(negativeNums);


// Создайте новый массив, состоящий только из четных чисел.
let EvenNums = arr.filter(el => el % 2 === 0 && el !== 0);

console.log(EvenNums);


// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.
let amountOfNeg = arr.filter(el => el < 0 ).length;

console.log(amountOfNeg);


// Дан массив с числами.

let arr2 = [1, -6, 4, 0, 9, -5, 16];


// Оставьте в нем только положительные числа. 
// Затем извлеките квадратный корень из этих чисел.
let sqrt = arr2.filter(el => el > 0).map(el => Math.sqrt(el));

console.log(sqrt);


// Дан массив из разных типов данных.
let arr3 = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)
let isNan = arr3.map(el => typeof el === 'number' ? el : -1);

console.log(isNan);


// Дан массив из массивов. Вложенные массивы хранят в себе данные 
// о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных 
// пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует
//вложенные массивы в строки.
let str = [
  ['Максим', 'Грибов', true],
  ['Антон', 'Куликов', true],
  ['Светлана', 'Иванова', false],
  ['Ольга', 'Петрова', true],
  ['Сидр', 'Сидоров', false]
   ];

// 1 вариант
let arr_active = str.filter((el) => el[2] === true).map(el => el.toString());

console.log(arr_active);   

// 2 вариант 

let arr_active2 = str.filter((el) => el[2] === true).map(el => `${el[0]} ${el[1]}`);

console.log(arr_active2);  












