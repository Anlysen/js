// 2 способа обьявления функции

// 1 - Function Declaration
//function greet (name) {
//    console.log('Hello - ', name)
//}
/*
Если первую функцию выполняем, то она будет
работать если даже ее вызвать, а потом обьявить
или наоборот 
*/

// 2 - Function Expression
//const greet2 = function (name) {
//    console.log('Hola - ', name)
//}
/*
Во втором случае мы не можем функцию сначала
вызвать, а потом объявить, выдаст ошибку
*/

//greet('Andrew Show') // В скобках пишем содержание переменной name
//greet2('Andrea Show')

//console.log(typeof greet) // Тип - функция
//console.dir(greet.toString()) // dir - позволяет посмотреть, какие методы есть у функции
// А добавляя функцию toString() мы получаем написание самой функции


// ====================


// setInterval, setTimeout
//setTimeout(greet, 1500) // В скобках передаем другую функцию, указав ее мы ставим 1500(это полторы секунды)
// И через полторы секунды в консоли появится значение функции

// setTimeout(function () { // Это ананимная функция
//     greet('Andrew Show Production')
// }, 1500)

//setInterval(function () { // Эта функция выполняется каждый интервал
//    console.log(22) // Каждые 2 секунды мы будем получать суммировано число 22
//}, 2000)

// setInterval(function () {
//         console.log(Math.random()) // Каждые 5 секунды будет выдавать рондомное число
//     }, 5000)

//let counter = 0
//let interval = setInterval(function () {
//    if (counter === 5) { // Если достигает 5 повторений, мы останавливаем функцию
//clearInterval(interval) // Останавливаем интервал
//    } else {
//        console.log(++counter)
//    }
//}, 1000)


// ====================


// Arrow Function
//function greet (name) {
//    console.log('Hello - ', name)
//}

// Эти функции абсолютно равны

// Стрелочная функция
//const arrow = (name, maney) => {
//    console.log('Hello - ', name, maney)
//}
//arrow('I`m here, what`s wrong dude? I have $', 1000)

// Стрелочный вариант
const arrow2 = (name) => console.log('Hey - '
, name)

//arrow2('Stop playing with me mate!!! I have $', 1000)

function pow(num, exp) { // Функция, которая возводит в квадрат число
    return Math.pow(num, exp)
}
//console.log(pow(2, 3))

// Стрелочный вариант в одну строчку
//const pow2 = (num, exp) => Math.pow(num, exp) // Если функция в одну строчку, то {} и retern можно не писать
//console.log(pow2(2, 3))


// ====================


// Default Parameters
const sum = (a, b) => a + b // Функция, которая прибавляет a + b
//console.log(sum(40, 2)) // 42
//console.log(sum(40)) // NaN - не указав второе число в скобках, получается неизвестное число undefind

const sum2 = (a = 40, b = a / 2) => a + b // a=40, b=40/2=20->(b=20), (a+b)40+20 = 60
//console.log(sum2(40, 2))
//console.log(sum2())

//function sumAll(... numbers) {
//    console.log(numbers) // numbers - это уже массив, который содержит в себе 1, 2, 3, 4, 5
//} // ... - это оператор rest, который ложит данные в массив, который укажем в этих скобках
//console.log(sumAll(1, 2, 3, 4, 5, 6, 7))

// function sumAll(... numbers) {
//     let res = 0 // Результат получим 0
//     for (let num of numbers) {
//         res += num
//     } // Цикл по массиву
//     return res
// }
// console.log(sumAll(1, 2, 3, 4, 5)) // 15

// Еще один вариант, продвинутый
function sumAll(... numbers) {
    return numbers.reduce((acc, cur) => (acc += // Принимаем стрелочную функцию, принтмаем acc - аккумулятор и cur - текущее значение
cur), 0) // По умолчанию равняется 0
}
console.log(sumAll(1, 2, 3, 4, 5)) // 15


// ====================


// Closures - замыкание