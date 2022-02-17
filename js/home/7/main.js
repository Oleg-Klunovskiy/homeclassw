/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
/*

function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

userArr = [
    new User(14, 'Oleg', 'Sr1', 'Sr1@mail.com', 0635544111),
    new User(21, 'Olia', 'Sr2', 'Sr2@mail.com', 0635544112),
    new User(35, 'Ivan', 'Sr3', 'Sr3@mail.com', 0635544113),
    new User(47, 'Andriy', 'Sr4', 'Sr4@mail.com', 0635544114),
    new User(52, 'Stepan', 'Sr5', 'Sr5@mail.com', 0635544115),
    new User(60, 'Stepan', 'Sr6', 'Sr6@mail.com', 0635544116),
    new User(77, 'Mariya', 'Sr7', 'Sr7@mail.com', 0635544117),
    new User(84, 'Slavik', 'Sr8', 'Sr8@mail.com', 0635544118
),
]
*/


/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

/*console.log(userArr.filter((item) => item.id % 2 == 0))*/


/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/


/*console.log(userArr.sort((a, b) => a.id - b.id));*/


/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
clientArr = [
    new Client(14, 'Oleg', 'Sr1', 'Sr1@mail.com', 0635544111, ['tovar1', 'tovar34', 'tovar65']),
    new Client(21, 'Olia', 'Sr2', 'Sr2@mail.com', 0635544112, ['tovar1', 'tovar34', 'tovar65', 'tovar932']),
    new Client(35, 'Ivan', 'Sr3', 'Sr3@mail.com', 0635544113, ['tovar1', 'tovar34']),
    new Client(47, 'Andriy', 'Sr4', 'Sr4@mail.com', 0635544114, ['tovar1', 'tovar34', 'tovar65', 'tovar932']),
    new Client(52, 'Stepan', 'Sr5', 'Sr5@mail.com', 0635544115, ['tovar1', 'tovar34', 'tovar65']),
    new Client(60, 'Stepan', 'Sr6', 'Sr6@mail.com', 0635544116, ['tovar1', 'tovar34']),
    new Client(77, 'Mariya', 'Sr7', 'Sr7@mail.com', 0635544117, ['tovar1', 'tovar34', 'tovar65', 'tovar932']),
    new Client(84, 'Slavik', 'Sr8', 'Sr8@mail.com', 0635544118, ['tovar1', 'tovar34', 'tovar65']),
]


/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

console.log(clientArr.sort((a, b) => a.order.length - b.order.length));
