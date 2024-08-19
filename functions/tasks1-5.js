/* Задание №1
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
Массив может содержать не только числа, но и, например, знаки, null и так далее.*/

const arr = [1, 2, 3, 4, 5, 321, null, undefined, 32.2, true, 10, 0, 0, 0, 'string']
let odd = []
let even = []
let zero = []
let unrel = [] // нерелеватные данные, не относящие к чётным или нечётным (null, undefined и т.д.)

for (i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero.push(i)
    } else if (arr[i] % 2 == 0) {
      even.push(i)
    } else if (arr[i] % 2 != 0) {
      odd.push(i)
    }} else {
    unrel.push(i)
  }
}
console.log(`Чётных элементов: ${even.length}`)
console.log(`Нечётных элементов: ${odd.length}`)
console.log(`Нулей: ${zero.length}`)
console.log(`Нерелевантных данных: ${unrel.length}`)


/* Задание №2
Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
а затем определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1. */

function getSimplicity(inputNumber) {
   let isPrime = true;
   let result;

   if (1 < inputNumber <= 1000) {
       for (let i = 2; i < inputNumber; i++) {
           if (inputNumber % i === 0) {
               isPrime = false;
           }
       }
       result = isPrime ? `Число ${inputNumber} - простое число` : `Число ${inputNumber} - составное число`;
   } else if (inputNumber > 1000) {
       result = 'Неверные данные';
   }
   return result;
}

console.log(getSimplicity(7)) // вводим число для проверки в этой строчке, внутри круглых скобок

/* Задание №3 
Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function getSum(firstNumber) {
 return function(secondNumber) {
   return firstNumber + secondNumber
 }};

const count = getSum(1);
const result = count(2);

console.log(`Сумма чисел равна: ${result}`)


/* Задание №4 
Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. 
Используйте setInterval.Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).*/

function printNumbers (firstNumber, secondNumber) {
	let start = firstNumber;
	let timerId = setInterval(function(){
		console.log(start)
		if (start == secondNumber) {
			clearTimeout(timerId)
		}
		start++
	}, 1000);
}

printNumbers(Number(prompt('Введите первое число')), Number(prompt('Введите второе число')))

/* Задание №5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.*/

const getPow = (x, n) => {
  let result = x**n
  return result;
} 
console.log(getPow(5, 2)) // в этой строчке подставляем числа для проверки