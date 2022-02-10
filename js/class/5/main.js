/*Всі функції повинні бути описані стрілочним типом!!!!
    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/
/*const numMin = (n1, n2, n3) => {
    if (n1 < n2 && n1 < n3) {
        console.log(n1);
    } else if (n2 < n1 && n2 < n3) {
        console.log(n2);
    } else {
        console.log(n3);
    }
}
numMin(20, 11, 77);*/
/*- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/
/*const numMax = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else {
        console.log(n3);
    }
}
numMax(20, 11, 77);*/

/*- створити функцію яка повертає найбільше число з масиву*/
/*let arr = [43, 11, 65];
const arrMax = (array) => {
    let max = array[0];
    for (const element of array) {
        if (element > max) {
            max = element
        }
    }
   return max
}
console.log(arrMax(arr));*/
/*- створити функцію яка повертає найменьше число з масиву*/
/*let arr = [43, 11, 65];
const arrMin = (array) => {
    let min = array[0];
    for (const element of array) {
        if (element < min) {
            max = element
        }
    }
    return min
}
console.log(arrMin(arr));*/
/*- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає
його. Приклад [1,2,10]->13*/
/*let arr = [1,2,3];
const elementSum = (array) => {
let sum = 0;
    for (const arrayElement of array){
        sum+=arrayElement;
    }
    return sum
}
console.log(elementSum((arr)))*/


/*- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
/*let arr = [1,2,3];
const ser = (array) => {
    let sum = 0;
    for (const arrayElement of array){
        sum+=arrayElement
    }
    return sum / array.length;
}
console.log(ser((arr)))*/
/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
    а виводить найбільше (Math використовувати заборонено);*/
/*const minMax =
    (...arg) => {
        let min = arg[0];
        let max = arg[0];
        for (const element of arg) {
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
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
та виводить його.*/
/*const randomArr = (length) => {
     let arrayEmpty = [];
     for (let i = 0; i < length; i++){
         arrayEmpty.push(Math.floor(Math.random()*10));
     }
 return arrayEmpty
 };
console.log(randomArr(12))*/
/*- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
    який характеризує кінцеве значення діапазону.*/
/*const randomLimit =
    (length, limit) => {
        let emptyArray = [];
        for (let i = 0; i < length; i++) {
            emptyArray.push(Math.round(Math.random() * limit));
        }
        return emptyArray;
    }
console.log(randomLimit(10, 100));*/
/*- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].*/
/*let arr = [1, 2, 3];

const reverse = (arr) => {

    for (i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;

}*/
