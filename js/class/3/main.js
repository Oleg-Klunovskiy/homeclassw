/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    1. перебрати його циклом while*/
/*let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i = 0;
while (i<arr.length) {
    console.log(arr[i]);
    i++
}*/
/*2. перебрати його циклом for*/
/*let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (i = 0; i< arr.length; i++) {
    console.log(arr)
}*/
/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/


let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length - 1;
while (i <= 0 ) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--

}


/*4. перебрати циклом for та вивести  числа тільки з непарним індексом*/


/*let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}*/


/*5. перебрати циклом while та вивести  числа тільки парні  значення*/

/*
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = arr.length-1;
while (i>=0) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }

    i--
}
*/


/*6. перебрати циклом for та вивести  числа тільки парні  значення*/
/*
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {

        console.log('не парний : ' + i + ' ');
    }


}
*/


/*7. замінити кожне число кратне 3 на слово "okten"*/
/*let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
        console.log(arr);

    }
}
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}*/
/*8. вивести масив в зворотньому порядку.*/
/*
let arrRev = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = arrRev.length - 1; i >= 0; i--) {
    console.log(arrRev[i]);
}
*/

/*9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/
