// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте скрипт при x, що дорівнює 1, 0, -3

let x = +prompt('number');
console.log(x);

if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої
// четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('can you say me time');

if (time >= 1 && time <= 15) {
    console.log('one');
} else if (time >= 16 && time <= 30) {
    console.log('two');
} else if (time >= 31 && time <= 45) {
    console.log('three');
} else if (time >= 46 && time <= 59) {
    console.log('four');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

 let day = +prompt( 'crazy day?');

if (day >= 1 && day <= 10) {
    console.log("firstDecade");
}else if (day >= 11 && day <= 20) {
    console.log("secondDecade")
}else if (day >= 21 && day <= 31) {
    console.log("threeDecade");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
//     дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість
//     плану на день, назву дня англійською).

let plan = prompt('Have you some plans today?')

switch (plan) {
    case "1" :
        console.log('Monday');
        break;
    case "2":
        console.log('Tuesday');
        break;
    case "3":
        console.log('Wednesday');
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log( "Sunday");
        break;
    default :
        console.log("What are you doing?");
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


let first = 1;
let second = 10;

if (first > second) {
    console.log(first);
} else if (second > first) {
    console.log(second);
} else if (first === second) {
    console.log(first);
}

// console.log(Math.max(1,10))

// - є змінна p, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній p значення "default"  якщо значення змінної p являється
// falsy (хибноподыбне, тобто кастується до false)

let p = prompt('') || 'default';
console.log(p);
let p1 = null || 'default';
console.log(p1);
let p2 = undefined || 'default';
console.log(p2);
let p3 = 0 || 'default';
console.log(p3);


