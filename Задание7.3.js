//Написать функцию, которая создает пустой объект, но без прототипа.

function func1() {
    return Object.create(null);
}

const obj = func1();
console.log(obj);
console.log(Object.getPrototypeOf(obj));
