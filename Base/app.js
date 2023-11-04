// Шаблон
/* 
Типы данных в js
Переменные могут менятся
Константы не могут менятся
let num = 42
let firstName = 'Andrew' // Можно поменять string
const isProgrammer = true // Менять нельзя boolean

What can I do?
let $ = 'test'
let $num = 40
let _ = 44
let _num = 144
let num_ = 77
let first_class = 'Go' // Bad
let 40num = 50 // Bad
let myNun = 12 // Good
let num40 = 47 // Good
*/

// const isProgrammer = true
// let num = 42
// let firstName = 'Andrew'
//alert(firstName) // We can see what in this variable
// console.log('Test:', firstName, num, isProgrammer) // We can see variable
// console.log(num + 10) // Операторы не меняют значения
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num // Если нам нужно изменить значение переменной num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10) * 2 / 3 - 1
// console.log(num3)

//const fullName = firstName + ' Lysenko' // + это конкатенация
//const fullName = firstName + ' ' + ' Lysenko'
//console.log(fullName)


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
// const multiplyBtn = document.getElementById('multiply')
// const divideBtn = document.getElementById('divide')
let action = '+'

//console.log(resultElement.textContent)
//resultElement.textContent = 42 // Тут мы можем менять значение, которое выводится в браузере
// Приводим все к числу через функцию Number, так как тип данных string
//console.log(typeof sum) // Узнаем тип данных через typeof

// Делаем вычисление по кнопкам
plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

// multiplyBtn.onclick = function () {
//     action = '*'
// }

// divideBtn.onclick = function () {
//     action = '/'
// }


// Функция, которая автоматизирует код
function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red' // Описывает, каким цветом будет результат
    } else {
        resultElement.style.color = 'green' // Описывает, каким цветом будет результат
    }
    resultElement.textContent = result // Присваиваем значение суммы
}

// Вариант-1
function computeNumberWithAction(inp1, inp2, actionSymbal) { // Аналог функции submitBtn.onclick = function, которая ниже
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    if (actionSymbal == '+') {
        return num1 + num2 // Возвращаем значение через return
    }
    if (actionSymbal == '-') {
        return num1 - num2 // Возвращаем значение через return
    }
    // if (actionSymbal == '*') {
    //     return num1 * num2 // Возвращаем значение через return
    // }
    // if (actionSymbal == '/') {
    //     return num1 / num2 // Возвращаем значение через return
    // }
    // return actionSymbal == '+' ? num1 + num2 : num1 - num2 // Тернарное выражение
}

// Вариант-2
submitBtn.onclick = function () { // Тут будет выполняться функцианал кнопки submit
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result)
    // if (action == '+') { // Используем условные операторы if для сравнения
    //     const sum = Number(input1.value) + Number(input2.value) // Суммируется значение input1 и input2
    //     printResult(sum) // Сюда передаем значение sum, с которым работаем
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
}