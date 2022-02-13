/*Всі функції повинні бути описані стрілочним типом!!!!
    - створити функцію яка обчислює та повертає площу прямокутника*/
/*const sRectangle = (a, b) => {
    return a * b;
}
console.log(sRectangle(3, 8));*/

/*- створити функцію яка обчислює та повертає площу кола*/
/*
const areaCircle = (r) => {
    let radius = r ** 2;
    return 3.14 * radius;
}
console.log(areaCircle(8));
*/


/*- створити функцію яка обчислює та повертає площу циліндру*/
/*const areaCylinder = (r, h) => {
    return 2 * 3.14 * r * h;
}
console.log(areaCylinder(3, 8));*/


/*- створити функцію яка приймає масив та виводить кожен його елемент*/
/*let arr = [1,2,3];

 const dataArr =  (array) => {
     for (let i = 0; i < arr.length; i++) {
        console.log(array[i]);
     }
 }
 dataArr(arr);*/


/*- створити функцію яка  створює параграф з текстом. Текст задати через аргумент*/
/*const dataP =  (text) => {
    document.write(`<p>${text}</p>`);
}
dataP('gregre')*/

/*- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
/* const ulLi = (arg) => {
     document.write(`<ul>`);
     document.write(`<li>${arg}</li>`);
     document.write(`<li>${arg}</li>`);
     document.write(`<li>${arg}</li>`);
     document.write(`</ul>`);
 }
ulLi('kvfdlk');*/

/*- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
/*const liTxtNum = (text, num) => {
     document.write(`<ul>`)
     for (let i = 0; i < num; i++) {
         document.write(`<li>${text}</li>`);
     }
     document.write(`</ul>`)
 }
liTxtNum('text',8);*/


/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
/*let array = [true,false, 247, 'name'];

 const prim = (arr) => {
     document.write(`<ol>`)
         for (let i = 0; i < arr.length; i++) {
             document.write(`<li>${arr[i]}</li>`);
         }
     document.write(`</ol>`)
 }
 prim(array);*/


/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
 Для кожного об'єкту окремий блок.*/
/*let arr = [{id: 1, name: 'name1', age: 23}, {id: 2, name: 'name2', age: 34}, {id: 3, name: 'name3', age: 45}];

const objArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<p>${arrayElement.id}. ${arrayElement.name} ${arrayElement.age}</p>`);
    }
}

