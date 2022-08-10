// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a = 'hello world';
console.log(a.length);

let b = 'lorem ipsum';
console.log(b.length);

let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(a.toUpperCase().toLowerCase());
console.log(b.toUpperCase().toLowerCase());
console.log(c.toUpperCase().toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '

console.log(str.substring(1, 13));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const numbersToString = numbers.map((number) => number.toString());
console.log(numbersToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesDurationMoreThanFive = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(coursesDurationMoreThanFive);




//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// {
//     cardSuit: 'spade';
//         value: 'ace', // '6'-'10', '','jack','queen','king','joker'
//     color:'red', // ,'black'
// }
//
// // 'diamond', 'heart', 'clubs';
//
// //



const cardsConfiguration = [
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 'jack' },
    { value: 'queen' },
    { value: 'king' },
    { value: 'ace' },
    { value: 'joker', joker: true },
];
const koloda = [];
cardsConfiguration.forEach((cardConfiguration) => {
    if (cardConfiguration.joker) {
        const joker1 = {
            value: cardConfiguration.value,
            color: 'black',
        };
        const joker2 = {
            value: cardConfiguration.value,
            color: 'red',
        };
        koloda.push(joker1, joker2);
    } else {
        const card1 = {
            value: cardConfiguration.value,
            cardSuit: 'spade',
            color: 'black',
        };
        const card2 = {
            value: cardConfiguration.value,
            cardSuit: 'diamond',
            color: 'red',
        };
        const card3 = {
            value: cardConfiguration.value,
            cardSuit: 'heart',
            color: 'red',
        };
        const card4 = {
            value: cardConfiguration.value,
            cardSuit: 'clubs',
            color: 'black',
        };
        koloda.push(card1, card2, card3, card4);
    }
});
console.log(koloda);

// - знайти піковий туз
let clubsAce = koloda.find(card => card.value === 'ace' && card.cardSuit === 'clubs');
console.log(clubsAce);

// описати колоду карт-

// - всі шістки

let allCardsSix = koloda.filter(card => card.value === 6);
console.log(allCardsSix);
// - всі червоні карти

let allRedsCard = koloda.filter(card => card.color === "red");
console.log(allRedsCard);

// - всі буби

let allDiamondCard = koloda.filter(card => card.cardSuit === "diamond");
console.log(allDiamondCard);

// - всі трефи від 9 та більше

let allSpadeCards = koloda.filter(card => card.cardSuit === 'spade' && (card.value > 9 || typeof card.value === "string"));

console.log(allSpadeCards);






// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


const sortedKolodaBySuit = koloda.reduce((sortedKoloda, currentCart) => {
    switch (currentCart.cardSuit) {
        case 'spade':
            sortedKoloda.spades.push(currentCart);
            break;
        case 'diamond':
            sortedKoloda.diamonds.push(currentCart);
            break;
        case 'heart':
            sortedKoloda.hearts.push(currentCart);
            break
        case 'clubs':
            sortedKoloda.clubs.push(currentCart);
            break;
    }
    return sortedKoloda;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(sortedKolodaBySuit);