/*--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

/*let str = ['one', 'two', 'three', 'four', 'five'];
let num = [41, 42, 43, 44, 45];
let strNumBoo = [true, false, 76, 54, 'person'];
console.log(str);
console.log(num);
console.log(strNumBoo);*/


/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
/* let arr = [];
 arr[0] = 'name';
 arr[1] = 'color';
 arr[2] = 'number';
 arr[3] = 'status';
 console.log(arr);*/

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
/* for (let i = 0; i < 10; i++) {
     document.write(`<div>random text</div>`);
 }

 for (let i = 0; i < 10; i++) {
     document.write(`<div>${i} text with index</div>`);
 }

 let j =0;
 while(j<20){
     document.write(`<h1>random text while</h1>`);
     j++;
 }

 let g =0;
 while(g<20){
     document.write(`<h1>${g} random text while index</h1>`);
     g++;
 }*/


/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
/*let numArr = [1,2,3,4,5,6,7,8,9,10];
for (i = 0; i < numArr.length; i++) {
    console.log(numArr[i])
}
*/
/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/* let strArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
 for (i = 0; i < strArr.length; i++) {
    console.log(strArr[i])
}*/
/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
/*let anyArr = [true, false, 14, 11, 665, 19, 'name', 'index', 'number', 'foto'];
for (i = 0; i < anyArr.length; i++) {
    console.log(anyArr[i])
}*/
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/
/*let arrBoo = [true, false, 14, 11, 665, 19, 'name', 'index', 'number', 'foto'];
for (i = 0; i < arrBoo.length; i++) {
    if (typeof arrBoo[i] === 'boolean') {
        console.log(arrBoo[i]);
    }
}*/
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/

/*let arrNum = [true, false, 14, 11, 665, 19, 'name', 'index', 'number', 'foto'];
for (i = 0; i < arrNum.length; i++) {
    if (typeof arrNum[i] === 'number') {
        console.log(arrNum[i]);
    }
}*/
/*- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/
/*let arrStr = [true, false, 14, 11, 665, 19, 'name', 'index', 'number', 'foto'];
for (i = 0; i < arrStr.length; i++) {
    if (typeof arrStr[i] === 'string') {
        console.log(arrStr[i]);
    }
}*/


/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
 Вивести в консоль всі його елементи в циклі.*/
/*let arr = [];
arr[0] = true;
arr[1] = false;
arr[2] = 14;
arr[3] = 11;
arr[4] = 665;
arr[5] = 19;
arr[6] = 'name';
arr[7] = 'index';
arr[8] = 'number';
arr[9] = 'foto';
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*for (let i = 0; i < 10; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}*/
/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}*/
/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
/*for (let i = 0; i < 100; i+=2) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}*/
/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
/*for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}*/
/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}




