/* Задание:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой. :) */


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
