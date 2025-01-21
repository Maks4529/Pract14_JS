// 1. Даний рядок тексту. Вивести його задом наперед

let str1 = "Qwerty";
let strRevers = str1.split('').reverse().join('');
console.log(strRevers);

// 2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину

const toRoundNumber = function(num){
    return Math.trunc(num);
}

console.log(toRoundNumber(23.1234567)) ;

// 3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)

const userName = prompt("Введіть Ваше ім'я");
alert(userName.toUpperCase());

// 4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021-22-09” і повертає її у вигляді “22.09.2021”

function date(date){
    const newDate = date.split('')
    for (let i = 0; i < newDate.length; i++){
        if (newDate[i] === '-'){
            newDate[i] = ':';
        }
    }

    return newDate.join('');
}

console.log(date('2021-22-09'));

// 5. Написати функцію, яка приймає два рядки, написані у різному регістрі та порівнює їх незалежно від регістру.
// isEqual(‘pApA’, ‘papa’)  //true
// isEqual(‘qwerty’, ‘QWErty’)  //true
// isEqual(‘aaa’, ‘EEE’) //false

function isEqual(str1, str2){
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(isEqual("HelLo world", "HELLO WORLD"));

// *6. Написати функцію, яка викидає помилку під час роботи і перевірити роботу функції, викликавши її у блоці try-catch