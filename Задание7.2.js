//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

const student = {
        name: "Petr",
        surname: "Ivanov",
        age: 20,
        city: "Moscow",
        course: 3
};

function fun1(str, obj) {
    console.log(str in obj)
}
fun1("name", student);