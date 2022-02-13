/*- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
/*
let oneL = 'hello world';
let twoL = 'lorem ipsum';
let threeL = 'javascript is cool';
console.log(oneL.length);
console.log(twoL.length);
console.log(threeL.length);
*/

/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
/*

let oneU = 'hello world';
let twoU = 'lorem ipsum';
let threeU = 'javascript is cool';
console.log(oneU.toUpperCase());
console.log(twoU.toUpperCase());
console.log(threeU.toUpperCase());
*/

/*- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
/*

let oneL = 'HELLO WORLD';
let twoL = 'LOREM IPSUM';
let threeL = 'JAVASCRIPT IS COOL';
console.log(oneL.toLowerCase());
console.log(twoL.toLowerCase());
console.log(threeL.toLowerCase());
*/

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/

/*let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());*/


/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/

/*let str = 'Каждый охотник желает знать';
let stringToArray = (str) => {
    return str.split(' ');
}
let arr = stringToArray(str);
console.log(arr);
document.write(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/


/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/
/*
let delete_characters = (str, lenght) => {
    return str.substr(0, lenght);
};
let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

let insert_dash = (str) => {
    let splitJoinUpper = str.split(' ').join('-').toUpperCase();
    return splitJoinUpper;
}
let str = "HTML JavaScript PHP";
document.write(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

/*- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.*/


/*
- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.*/
