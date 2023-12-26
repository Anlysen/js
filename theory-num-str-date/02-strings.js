const firstName = 'Andrew'
const age = 30

function getAge() {
    return age
}

//const old = 'Hello, my name is ' + name // Старый вариант
//const output = `Hello, my name is ${name} and
//my age is ${getAge() > 18 ? 'Can drive' : 'Can`t drive'}`
// Апострофы выполняют такую же функцию, что и обычные кавычки
// Такие кавычки (апострофы) позволяют переносится на новую строку
//console.log(output)


// ====================


// const church = 'christian'
// const work = 'programmer'


// function storyTell() {
//     return work
// }

// const story = `I am a ${church} and I work a ${storyTell()}`
// console.log(story)

console.log(firstName.length) // length - можем узнать сколько символов в строке
console.log(firstName)
console.log(firstName.toUpperCase()) // Меняет строчку в верхний регистр
console.log(firstName.toLowerCase()) // Меняет строчку в нижний регистр
console.log(firstName.charAt(0)) // Проверяет какой символ находится на указываемом индексе
console.log(firstName.indexOf('r')) // На какой позиции находится нужный символ | мы получаем индекс символа
console.log(firstName.toLowerCase().startsWith('andr')) // Пулучаем булиан значение true или false, проверяет правильность набора строки
console.log(firstName.endsWith('rew')) // Проверяет на что заканчивается строчка
console.log(firstName.repeat(3)) // Повторяет строчку столько раз, сколько указывается в строчке

const password = '   my password   ' // Если клиент написал пробелы

console.log(password.trim()) // Уберает пробелы