/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
 рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

/*

function Car(model, vurobnuk, year, maxspeed, vEngine) {
    this.model = model;
    this.vurobnuk = vurobnuk;
    this.year = year;
    this.maxspeed = maxspeed;
    this.vEngine = vEngine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let addCar = new Car('lanos', 'Ukraine', 2007, 180, 1.6)

addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(10);
addCar.drive();
addCar.changeYear(2010)
addCar.info();
addCar.addDriver('Oleg');
console.log(addCar);
*/


/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
 об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

/*
class Car {
    constructor(model, vurobnuk, year, maxspeed, vEngine) {
        this.model = model;
        this.vurobnuk = vurobnuk;
        this.year = year;
        this.maxspeed = maxspeed;
        this.vEngine = vEngine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let addCar = new Car('lanos', 'Ukraine', 2007, 180, 1.6)
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(10);
addCar.drive();
addCar.changeYear(2010)
addCar.info();
addCar.addDriver('Oleg')
console.log(addCar)

*/

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом./*
class Popelushka {
*/
/*
class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

const popelushkaArray = [
    new Popelushka('Anna', 21, 36),
    new Popelushka('Olga', 23, 34),
    new Popelushka('Svitlana', 24, 38),
    new Popelushka('Ganna', 25, 36),
    new Popelushka('Maria', 26, 35),
    new Popelushka('Lesia', 27, 37),
    new Popelushka('Iruna', 28, 38),
    new Popelushka('Ivanka', 31, 39),
    new Popelushka('Marta', 36, 36),
    new Popelushka('Katya', 38, 40),
];

class Princ {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}

const prince = new Princ('Pince', 31, 34);


const Para = (popelushkaArray, prince) => {
    for (const item of popelushkaArray) {
        if (item.footsize === prince.findShose) {
            return `попелюшка - ${item.name}`
        }
    }
};*/
/*console.log(popelushkaArray);
console.log(prince);
console.log(Para(popelushkaArray, prince));*/


/*Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

const popelushka = popelushkaArray.find((item) => item.footsize === prince.findShose);
console.log(popelushka);
