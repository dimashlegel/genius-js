// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruits = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// let newFruits = [];
// for (let i = 0; i < fruits.length; i++) {
// 	const element = fruits[i];
// 	console.log(element.name);
// 	newFruits.push(element.name);
// }

// let newFruits = fruits.map(item => item.name);
// console.log(newFruits);



// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i < 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }


// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// 	console.log(`цифра ${i}!`);
// }
// let i = 0;
// while ( i < 5) {
// 	console.log(i);
// 	i++;
// }


// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let numb
// let enter = 0;
// while (enter <= 100) {
// 	enter = +prompt('Enter number > 100');
// 	if (!enter) break;	
// }

// -- 5 --
// Вирахуйте середній вік
// const girls = [{
// 		age: 23,
// 		name: "Оля"
// 	},
// 	{
// 		age: 29,
// 		name: "Аня"
// 	},
// 	{
// 		age: 10,
// 		name: "Юля"
// 	},
// 	{
// 		age: 20,
// 		name: "Катя"
// 	},
// ];

// let ages = girls.map(item => item.age);
// let result = girls.map(item => item.age).reduce((sum, item) => (sum + item))
// console.log(result / ages.length);