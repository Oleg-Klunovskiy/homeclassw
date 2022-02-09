/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
/*let a = 7;
let b = 9;

function areaRectangle(a, b) {
    let sRectangle = a * b;
    return sRectangle;
}

console.log(areaRectangle(a, b))*/

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
/*function circleS(r) {
    let radius = r ** 2;
    let sCircle = 3.14 * radius;
    return sCircle;
}

console.log(circleS(8))*/
/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
/*function cylinderS(r, h) {
     let sCylinder = 2 * 3.14 * r * h;
     return sCylinder;
 }
 console.log(cylinderS(8,7))*/
/*- створити функцію яка приймає масив та виводить кожен його елемент*/
/* let array = [1,2,3,4,5];
 function dataArray (array) {
     for (let i = 0; i < array.length; i++) {
        document.write(array[i])
     }
}
console.log(dataArray(array))*/
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/
/* function dwP (text) {
     for (let i = 1; i <= 10; i++) {
        document.write(`<p>${i}  ${text}</p>`)
     }
 }
 dwP('any text')*/
/*- створити функцію яка створює ul з трьома елементами li.
 Текст li задати через аргумент всім однаковий*/
/* function createUl(txtli) {
     document.write(`<ul>`)
     document.write(`<li>${txtli}</li>`)
     document.write(`<li>${txtli}</li>`)
     document.write(`<li>${txtli}</li>`)
     document.write(`</ul>`)
 }
 createUl('Text');*/

/*- створити функцію яка створює ul з трьома елементами li.
 Текст li задати через аргумент всім однаковий.
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
/*function createUl(text, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${number}${text}</li>`);

    }
    document.write(`</ul>`)
}

createUl('some li', 3);*/

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
 та будує для них список*/

/*let anyArray = [true,false,'name',45, 'status',30];
 function primitivArr (array){
     document.write(`<ul>`)
         for (let i = 0; i < array.length; i++) {
             document.write(`<li>${array[i]}</li>`);
         }
     document.write(`</ul>`)
 }
 primitivArr(anyArray);*/

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
 та виводить їх в документ. ' +'Для кожного об'єкту окремий блок.*/
 let arr = [{id: 1, name: 'someName', age: 43}, {id: 2, name: 'someName2', age: 23}, {id: 3, name: 'someName3', age: 12}];
 function objArray(array) {
     for (const arrayElement of array) {
         document.write(`<div>${arrayElement.id}.${arrayElement.name} probably ${arrayElement.age}</div>`);
     }
 }
objArray(arr);