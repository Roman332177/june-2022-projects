// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині



    let autos = [
        {
            mersedes: "germany",
            clas: "s",
            prise: "dofiga",
        },
        {
            mersedes: "china",
            clas: "aknjk",
            prise: "dofiga1",

        },
        {
            mersedes: "polsha",
            clas: "tyu",
            prise: "dofiga2",

        },
        {
            mersedes: "ukraine",
            clas: "ss",
            prise: "dofigaaaa",

        },
        {
            mersedes: "cheze",
            clas: "lb",
            prise: "dofiga3",

        },
        {
            mersedes: "germany7",
            clas: "sllb",
            prise: "dofiga4",

        },
        {
            mersedes: "germany6",
            clas: "kblbs",
            prise: "dofigahjvl",

        },
        {
            mersedes: "germany9",
            clas: "why",
            prise: "dofigaMalo",

        },
        {
            mersedes: "germany0",
            clas: "whynot",
            prise: "dofigaMaloorjf",

        },
        {
            mersedes: "germany10",
            clas: "idontknow",
            prise: "gaa",

        },

    ];

for (const auto of autos) {
    document.write(`<div>sho tut pusaty??</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i <= 9; i++) {
    // console.log(autos[i]);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let h1Blocks = 1;
while (h1Blocks <= 20) {
    document.write(`<h1>test text</h1>`);
    h1Blocks++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let h1BlocksWithIndex = 1;
while (h1BlocksWithIndex <= 20) {
    document.write(`<h1>test text with index: ${h1BlocksWithIndex}</h1>`);
    h1BlocksWithIndex++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:



let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

let liItems = [];
for (let i = 0; i < listOfItems.length; i++) {
    liItems.push(`<li>${listOfItems[i]}</li>`);
    console.log(liItems);
}
document.write(`<ul>${liItems.join('')}</ul>`)

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

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

for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}

for (const user of users) {
    if (!user.status) {
        console.log(user,"usersWithStatusFalse")
    }
}

for (const user of users) {
    if (user.age > 30) {
        console.log(user,"userWithAge>30")
    }
}

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(`<div>
                        <h3>${product.title} - ${product.price}</h3>
                        <img src="${product.image}">
                    </div>`);
}

