/*- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/

/*function abc(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b
    } else {
        return c
    }

}

console.log(abc(4,66,20))*/

/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/
/*function abc(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }

}
console.log(abc(4,66,20))*/
/*- створити функцію яка повертає найбільше число з масиву*/
/*let arr = [54, 734, 124, 222, 7676, 234];

function maxArr(array){
    let max = 0;
    for (const aElement of array) {
        if (max < aElement) max = aElement

    }
    return  max;
}

let res = (maxArr(arr));
console.log(res);*/

/*- створити функцію яка повертає найменьше число з масиву*/
/*let arr = [54, 734, 124, 222, 7676, 234];

function maxArr(array){
    let max = array[0];
    for (const aElement of array) {
        if (max > aElement) max = aElement

    }
    return  max;
}

let res = (maxArr(arr));
console.log(res);*/
/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13*/
/* arr = [1, 2, 10];

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

arraySum(arr)*/

/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/


/*let arr = [1, 2, 7];

function midle(array) {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;

    }
    return sum / array.length;
}

console.log(midle(arr))*/


/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
(Math використовувати заборонено);*/
/*function minMax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("Максимальне число: ", max);
    return min;
}

document.write('Мінімальне число: ' + minMax(543, 42, 11, 76, 35232))*/

/*- створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.*/
/*function randomArr (length) {
     let arrayEmpty = [];
     for (let i = 0; i < length; i++){
         arrayEmpty.push(Math.floor(Math.random()*10));
     }
 return arrayEmpty
 };

console.log(randomArr(10))*/


/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
 який характеризує кінцеве значення діапазону.*/
/*function randomLimit(length,limit) {
     let emptyArray = [];
     for (let i = 0; i < length; i++) {
         emptyArray.push(Math.round(Math.random() * limit));
     }
     return emptyArray;
 }
console.log(randomLimit(10,100));*/


/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/
let arr = [1, 2, 3];

function reverse(arr) {

    for (i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;

}




