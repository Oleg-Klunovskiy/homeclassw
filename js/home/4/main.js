//Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a1 = 'hello';
let a2 = 'owu';
let a3 = 'com';
let a4 = 'ua';
let a5 = 1;
let a6 = 10;
let a7 = -999;
let a8 = 123;
let a9 = 3.14;
let a10 = 2.7;
let a11 = 16;
let a12 = true;
let a13 = false;
// Переприсвоїти кожній змінній з завдання значення на довільне.
a1 = 'foorfefre';
a2 = '432432fff';
a4 = 4934;
a5 = 'gkk11l';
a6 = false;
a8 = true;
a9 = 94;
a10 = 5 + 17;
a11 = 8 / 2;
a12 = 10 * 4;
a13 = 42;
//Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a12, a13);
alert(a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13);
document.write(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a12, a13);
//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person.
let first = 'firstName';
let midle = 'middleName';
let last = 'lastName';
let person = [first, midle, last];
console.log(person);
//За допомогою 3х різних prompt() отримати 3 слова які
//являються вашими Імям, По-Батькові та роками.


prompt(person[0]);
prompt(person[1]);
prompt(person[2]);

let age = 'age ';
prompt(age);


//Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let hello = 'Вітаю';
let u = 'тобі';
first = 'Oleg';
midle = 'Igorovuch';
last = 'Klunovskiy';
age = 28;
console.log(first, midle, last, hello, u, age);
//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
console.log(5 < 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(5 == 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(123 < '123');
console.log(123 == '123');
//Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
{
    let str = "20"; //string
    let a = 5; //number
    document.write(str + a + "<br/>"); //"20"+5=205
    document.write(str - a + "<br/>"); //20-5=15
    document.write(str * "2" + "<br/>"); //20*2=40
    document.write(str / 2 + "<br/>"); //20/2=10
}
// Ваше завдання, зробити так, щоб файл відкривався без помилок .
{
    let a = 100;
    let b = 500;
    let c = "hello";
    let e = "okten";
    const x = 'constant value';
    {
        console.log(a);
        k = 'new value';
    }
    let f = 7;

    let result = 100 + 'y';

    console.log(result);

}
