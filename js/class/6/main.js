/*- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/
/*

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let name = (string, symbol) => {
     let newArr = [];
     if (string.includes(symbol)) {
         let a = string.split(symbol)
         a.forEach((item) => {
             if (item) newArr.push(item);
         })
         console.log(newArr.join(' '))
     }
 }
 name(n1, '.');
 name(n2, '-');
 name(n3, '_');
*/


/*- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.*/

/*let random = (length, num) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
};
let result = random(3, 100);
console.log(result);*/


/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
 Відсортувати його за допомоги sort*/
/*
console.log(result.sort((a, b) => a - b));*/


/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
 відфільтрувати  його за допомоги filter, залишивши тільки парні числа*/

/*console.log(result.filter(value => value % 2 === 0))*/


/*- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.*/
/*
console.log(result.map(value => value.toString()));*/

/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
    або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]*/
/*

let nums = [11, 21, 3];
let sortNums = (arr, direction) => {
    if (direction === 'asc') return arr.sort((a, b) => a - b);
    if (direction === 'desc') return arr.sort((a, b) => b - a);
}
console.log(sortNums(nums, 'asc'));
*/


/*- є масив*/
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
/*-- відсортувати його за спаданням за monthDuration*/

/*coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration
});
console.log(coursesAndDurationArray);*/


/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

/*let filter = coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
});
console.log(filter);*/
