// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sumArea(a, b) {
    let area = a * b;
    return area;
}

let area = sumArea(2, 4);
console.log(area);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    let areaOne = (3.14 * r) * 2;
    return areaOne;
}

let areaOne = circleArea(10);
console.log(areaOne);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(h, r) {
    return 2 * 3.14 * h * r;
    ;
}

let areaTwo = cylinderArea(2, 4);
console.log(areaTwo);

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function allMassiv(array) {
    for (const item of array) {
        console.log(item);
    }
}

allMassiv(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf(some_text) {
    document.write(`<p>${some_text}</p>`);
}

paragraf("i");
paragraf("wont");
paragraf("sleep");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function writer(text) {
//     document.write(`<ul>${
//     for ( let i = 0; i < 3; i++; ) {
//       document.write (`<li>${text;}</li>`)
//     }
//     }</ul>`);
// }

function writer(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
}

writer("jgbwejfg");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function testOne(text, liCount) {
    let liItems = '';
    for (let i = 0; i < liCount; i++) {
        liItems+=`<li>${text}</li>`
    }
    document.write(
        `<ul>
      ${liItems}
      </ul>`);
    }

testOne("text", 3);
testOne("kj.h;h", 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitiveElements = [1, "dksjb", true];

function massiv(array) {
    let liItems = '';
    for (let i = 0; i < array.length; i++) {
        liItems+=`<li>${array[i]}</li>`
    }
    // console.log(liItems);
    document.write(
        `<ul>
      ${liItems}
      </ul>`);
}

massiv(primitiveElements);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ
// . Для кожного об'єкту окремий блок.

let olxUsers = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

function writeOlxUsersInDocument(users) {
    for (const user of users) {
        document.write(`<div>${JSON.stringify(user)}</div>`)
    }
}

writeOlxUsersInDocument(olxUsers);

// - створити функцію яка повертає найменьше число з масиву
let number = [900,1,2,67,2,700,10,-90,21,-82];

function numberMin(array) {
    return Math.min(...array);
    // let num = array[0];
    // for (let i = 0; i < array.length; i++) {
    //     if (num > array[i]){
    //         num = array[i];
    //     };
    //
    // }
    // document.write(num);
    // return num;
}

console.log(numberMin(number));

function numberMax(array) {
    return Math.max (...array)
}

console.log(numberMax(number));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nomer = [1, 2, 3, 4, 5, 6, 7, 8];

let nomer = [1, 2, 3];

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // sum += numbers[i]
        sum = sum + numbers[i];
    }
    return sum;
}

console.log(sumOfNumbers(nomer));
