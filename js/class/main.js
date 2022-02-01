//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// // Скласти результат цих чисел в змінній result
// let arr = [1, 88, 7, 6, 32, 2, 4, 57, 12, 19];
//
// //console.log(arr);
//
// let sum = arr[0] + arr[1] + arr[2];
// console.log(sum);
// //let arr2 = [];
// //arr2[0]=Math.floor(Math.random()*100);
// //console.log(arr2);
// //2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book1 = {
//     name: 'random name1',
//     pages: 'random page1',
//     ganre: 'random ganre1',
// }
//
// let book2 = {
//     name: 'random name1',
//     pages: 'random page1',
//     ganre: 'random ganre1',
//     authors: {
//         name: 'fjj',
//         age: 23,
//         address: {
//             geo: 424
//         }
//     }
// //4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// // Вивести кожну книгу як окремий об'єкт
//     let boo = [
//         {
//             name: 'random name1',
//             pages: 'random page1',
//             ganre: 'random ganre1'
//         },
//         {
//             name: 'random name1',
//             pages: 'random page1',
//             ganre: 'random ganre1',
//             authors: {
//                 name: 'fjj',
//                 age: 23,
//                 address: {
//                     geo: 424
//                 }
//             }
//
//     ]
//console.log(boo[1]);

    //5. Напишіть код, який вираховує площу прямокутника висотою 23см.
//(змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
    let height = 23;
    let width = 10;
    let s = height*width;
    console.log(s);
//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC)
// та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = Math.PI*Math.pow(dC/2,2)*heightC;
console.log(v);
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
//        (число, ступінь) або оператор зведення в ступінь **).

let n =3;
let m=4;
let k =Math.sqrt(m**2+n**2);
console.log(k);