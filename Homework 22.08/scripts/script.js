// Дан массив
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];


// // №1 Сформируйте новый массив с числами меньше 100.
// // Предложите два способа решения (цикл for и метод .forEach).

let getArr = arr => {
    let new_arr = [];
    for (let i = 0; i < arr.length ; i++) {
        if(arr[i] < 100) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr
}

console.log(getArr(array));

// // второй вриант с forEach

let new_arr2 = [];
array.forEach(element => {
    if (element < 100) {
       new_arr2.push(element);
    }
});
console.log(new_arr2);


// // №2 Сформируйте новый массив с числами, 
// // которые кратны 2.
// // Предложите два способа решения
// // (цикл for и метод .forEach).

let getArr2 = (arr) => {
    let arr_resalt = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] % 2 === 0) {
            arr_resalt.push(arr[i]);
        }
    }
    return arr_resalt
}

console.log(getArr2(array));

// второй вриант с forEach

let array_new = [];
array.forEach(element => {
    if (element % 2 === 0) {
        array_new.push(element);
    }
} 
);   

console.log(array_new);


// // №3 Сформируйте новый массив с числами, которые заканчиваются на 5.
// // Предложите два способа решения (цикл for и метод .forEach).

let updateArr = arr => {
    let changed_arr = [];
    for (let i = 0 ; i < arr.length ; i++) {
         if (arr[i] % 5 === 0 && arr[i] % 10 !== 0) {
            changed_arr.push(arr[i]);
        }
    }
    return changed_arr
}

console.log(updateArr(array));

// // второй вариант с forEach
let changed_arr = [];
array.forEach(el => {
    if (el % 5 === 0 && el % 10 !== 0) {
        changed_arr.push(el);
    }
})

console.log(changed_arr);


// // №4 Сформируйте массив, в котором числа больше 100 заменены на
// // строку '>100', а числа меньше 100 - на '<100'. 

let change_arr = arr => {
    let newArray = [];
    for (let i = 0; i < arr.length ; i++) {
        if ( arr[i] > 100) {
         arr[i] = '>100' ;
        } else {
          arr[i] = '<100' ;
        }
        newArray.push(arr[i])
    }
    return newArray
}

console.log(change_arr(array));

// // второй вариант с forEach

let newArray2 = [];
array.forEach(el => {
    if (el > 100) {
        el = '>100';
    } else {
        el = '<100';
    }
    newArray2.push(el)
});

console.log(newArray2);



