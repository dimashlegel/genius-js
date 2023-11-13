// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
// return age > 18 ? true : confirm('Батьки дозволили?')
// return age > 18 || confirm('Батьки дозволили?')
// if (age > 18) {
// 	return true;
// } else {
// 	return confirm('Батьки дозволили?');
// }
// }

// console.log(checkAge(2));


// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
// 	return a < b ? a : b;
// 	// if (a < b) {
// 	// return a;

// 	// }
// 	// return b;
// }
// console.log(min(1, 10));


// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

const ask = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
};

const sayYes = () => {
	alert("Ви погодились.");
};

const sayNo = () => {
	alert("Ви скасували виконання.");
};

ask("Ви згодні?",	sayYes,	sayNo);