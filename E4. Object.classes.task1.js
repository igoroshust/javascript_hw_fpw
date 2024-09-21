/* Задание №1 
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

const person = {
  city: "Moscow",
};

const student = Object.create(person);
student.name = 'Igor'
student.surname = 'Oshust'
student.ownCity = "Tchita"

function returnArgs(obj) {
  for (let key in obj){
  if (student.hasOwnProperty(key)){ 
    console.log(`Ключ: '${key}', значение: '${student[key]}'`)
  } 
}
}

returnArgs(student);


/* Задание №2 
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/


const student = {
  name: 'Igor',
  surname: 'Oshust',
  age: 27,
}

const str = 'name' // строка для проверки

function returnArgs(){
  if (student.hasOwnProperty(str)){
    console.log(true)
    return true;
  } else {
    console.log(false)
    return false;
  }
}

returnArgs(student, str);


/* Задание №3 
Написать функцию, которая создает пустой объект, но без прототипа. */

let str = '';
console.log(`Тип данных до вызова функции: ${typeof str}`)

function objectCreate(){
  let str = new Object();
  console.log(`Тип данных после вызова функции: ${typeof str}`)
  return str
}

objectCreate(str);


/* Задание №4
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой. :) */

function Electro(name){
  this.name = name
}

Electro.prototype.turnOff = function(status){
  console.log(`Статус: прибор выключен`)
}

Electro.prototype.turnOn = function(status){
  console.log(`Статус: прибор включен`)
}

function ElectroGear(name, model, status, power){
  this.name = name,
  this.model = model,
  this.status = status,
  this.power = power
}

ElectroGear.prototype = new Electro()

ElectroGear.prototype.getName = function(name){
  console.log(`Имя: ${name}`)
}

ElectroGear.prototype.getModel = function(model){
  console.log(`Модель: ${model}`)
}

const gear_1 = new ElectroGear('gear_1', 'd32');
const gear_2 = new ElectroGear();
const gear_3 = new Electro();

gear_1.getName('Bosch')
gear_1.getModel('d32')
gear_1.turnOff()

// gear_2.turnOn('DeWalt')
// gear_3.turnOff()


/* Задание №5
Переписать консольное приложение из задания №4 на классы.*/

class Electro {
  constructor(name){
    this.name = name;
    this.hasName = true;
  }

  getTurnOnInfo(){
    console.log(`Прибор ${this.label} включен`)
  }

  getTurnOffInfo(){
    console.log(`Прибор ${this.label} выключен`)
  }
}

class Child extends Electro {
  constructor(isTurn, label, name, made){
    super(name);
    this.isTurn = isTurn;
    this.made = made;
    this.label = isTurn ? label : label;
  }

  getStatus(){
    if (this.isTurn){
      return super.getTurnOnInfo()
    } else {
      return super.getTurnOffInfo()
    }
  }
}

const gear_1 = new Child(true, 'DeWalt');
const gear_2 = new Child(false, 'Bosch');
gear_1.getStatus()
gear_2.getStatus()
