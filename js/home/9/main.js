/*Все робити за допомоги js.
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/

let div = document.createElement('div');

div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

div.style.background = 'grey';
div.style.color = 'red';
div.style.fontSize = '20px';

document.body.appendChild(div);

document.body.appendChild(div.cloneNode(true));

/*- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.*/

let company = ['Main', 'Products', 'About us', 'Contacts'];

for (const element of company) {
    let li = document.createElement('li')
    let h2 = document.createElement('h2')
    h2.innerText = `${element}`
    li.append(h2);

    let liMenu = document.getElementsByClassName('menu')[0];
    liMenu.append(li);

}

company.forEach(el => {

})

/*- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

/*for (const element of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.innerText = `${element.title} ${element.monthDuration}`;
    document.body.append(divElement);
