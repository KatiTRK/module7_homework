//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.

const student = function(info){
    info={
        name: "Petr",
        surname: "Ivanov",
        age: 20,
        city: "Moscow",
        course: 3
    }
    for (let key in info) {
        console.log(key + ': ' + info[key]);
    }
}
student();