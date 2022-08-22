// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
function createDivMemberOfFamily(member) {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('member');

    const name = document.createElement('p');
    name.innerText = member.name;
    memberDiv.appendChild(name);

    const surname = document.createElement('p');
    surname.innerText = member.surname;
    memberDiv.appendChild(surname);

    const age = document.createElement('p');
    age.innerText = member.age;
    memberDiv.appendChild(age);

    const info = document.createElement('p');
    info.innerText = member.info;
    memberDiv.appendChild(info);

    const photo = document.createElement('img');
    photo.src = member.photo;
    photo.classList.add(`member-photo`)

    memberDiv.appendChild(photo);
    return memberDiv;
}

function initMembersInTemplate() {
    const membersWrapperList = document.createElement('div');
    membersWrapperList.classList.add('members-wrapper-list');
    for (let i=0; i<simpsons.length; i++) {
        const  member = createDivMemberOfFamily(simpsons[i]);
        membersWrapperList.appendChild(member);
    }
    document.body.appendChild(membersWrapperList)
}
initMembersInTemplate();


//
//
// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
function createDivCourse(course) {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    const title = document.createElement('div');
    title.innerText = course.title;
    courseDiv.appendChild(title);

    const monthDuration = document.createElement('div');
    monthDuration.innerText = course.monthDuration;
    courseDiv.appendChild(monthDuration);

    const hourDuration = document.createElement('div');
    hourDuration.innerText = course.hourDuration;
    courseDiv.appendChild(hourDuration);

    const modules = document.createElement('ul');
    modules.classList.add('modules-list');
    for (let i=0; i < course.modules.length; i++) {
        const moduleItem = document.createElement('li');
        moduleItem.innerText = course.modules[i];
        modules.appendChild(moduleItem);
    }
    courseDiv.appendChild(modules);

    return courseDiv;
}

function initCoursesInTemplate() {
    const coursesWrapperList = document.createElement('div');
    coursesWrapperList.classList.add('courses-wrapper-list');
    for (let i=0; i<coursesArray.length; i++) {
        const  course = createDivCourse(coursesArray[i]);
        coursesWrapperList.appendChild(course);
    }
    document.body.appendChild(coursesWrapperList)
}
initCoursesInTemplate();
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------


//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function createBlockElement(courses) {

    const coursesAndDurationArray = document.createElement(`div`);
    coursesAndDurationArray.classList.add(`wrapper`);

    for (let i = 0; i < courses.length; i++) {
        const courseItem = document.createElement('div');
        courseItem.innerText = `Title: ${courses[i].title}. MonthDuration : ${courses[i].monthDuration}`;
        coursesAndDurationArray.appendChild(courseItem);
    }
    document.body.appendChild(coursesAndDurationArray);
}
createBlockElement(coursesAndDurationArray)



//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divElement = document.createElement(`div`);
divElement.classList.add(`wrap`);
divElement.classList.add(`collapse`);
divElement.classList.add(`alpha`);
divElement.classList.add(`beta`);
document.body.appendChild(divElement);
let clone = divElement.cloneNode(true);
document.body.appendChild(clone);

let textElement = document.createElement(`h3`);
textElement.classList.add(`text`);
textElement.innerText = `abracadabra`;
divElement.appendChild(textElement);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

const nowMenu = ['Main', 'Products', 'About us', 'Contacts'];
// nowMenu[0] = Main
// nowMenu[1] = Products
const ulElementMenu = document.querySelector(`.menu`);

for (let i = 0; i < nowMenu.length; i++) {
    const menuItem = document.createElement(`li`)
    menuItem.innerText = nowMenu[i]
    ulElementMenu.appendChild(menuItem);
}

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const itemWrapper = document.createElement(`div`);
    itemWrapper.classList.add(`item`);

    const itemHeading = document.createElement(`h1`);
    itemHeading.classList.add(`heading`);
    itemHeading.innerText = coursesAndDurationArray[i].title;

    itemWrapper.appendChild(itemHeading);

    const itemDescription = document.createElement(`p`);
    itemDescription.classList.add(`description`);
    itemDescription.innerText = coursesAndDurationArray[i].monthDuration;

    itemWrapper.appendChild(itemDescription);

    document.body.appendChild(itemWrapper);

}

// -----------
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


const randomDiv = document.createElement(`div`);
randomDiv.setAttribute(`id`, `text`);
randomDiv.innerText = `text which will be hide by click toggle button`;
document.body.appendChild(randomDiv);

const randomButton = document.createElement(`button`);
randomButton.setAttribute(`id`, `toggle-button`);
randomButton.innerText = `toggle button`;
document.body.appendChild(randomButton);

const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', () => {
    const divWithRandomText = document.getElementById('text');
    if (divWithRandomText.style.display === 'none') {
        divWithRandomText.style.display = 'block'
    } else {
        divWithRandomText.style.display = 'none'
    }
});


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

const ageInput = document.createElement(`input`);
ageInput.setAttribute(`id`, `age-input`);
document.body.appendChild(ageInput);

const getAgeButton = document.createElement(`button`);
getAgeButton.setAttribute(`id`, `get-age-button`);
getAgeButton.innerText = `get age of user`;
document.body.appendChild(getAgeButton)

getAgeButton.addEventListener('click', () => {
    const age = document.getElementById('age-input').value;
    if(!age) {
        alert('Type your age')
        return;
    }
    if(+age > 18) {
        alert('18+')
    } else {
        alert("Not adult")
    }
    // switch (age) {
    //     case '18':
    //         alert('18+');
    //         break;
    //     case +age < 18:
    //         alert('Not adult');
    //         break;
    //
    // }
})

// Додаткове не зробив, бо не надто розумію як. + з часом трохи біда.


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)