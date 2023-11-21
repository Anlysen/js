const num = 42 // integer
const float = 42.42 // float
const pow = 10e3
const big = 1_000_000
const negative = -10

//console.dir(Number)
// dir - показывае, что находится в консоле Number
// dir - раскрывает объект


// ====================


//console.log(Number.MAX_SAFE_INTEGER) // Показывает самое большое число, с которым мы можем работать
//console.log(Math.pow(2, 53) - 1)
//console.log(Number.MIN_SAFE_INTEGER)
//console.log(Number.MAX_VALUE)
//console.log(Number.MIN_VALUE)
//console.log(Number.POSITIVE_INFINITY) // Infinity - бесконечность
//console.log(Number.NEGATIVE_INFINITY) // -Infinity
//console.log(1 / 0) // Infinity
//console.log(Number.isFinite(Infinity)) // Спрашивает, бесконечно ли значение, false
// Если бесконечность, то мы получаем false, если обычное число то true
//console.log(23 / undefined) // NaN - Not a Number

//const weird = 23 / undefined
//console.log(Number.isNaN(weird)) // Проверяем, работаем ли мы с NaN | true
//console.log(Number.isNaN(12)) // false


// ====================


// Парсинг значений | приводим строку в число
const strInt = '42'
const strFloat = '42.42'

// console.log(Number(strInt))
// console.log(Number(strFloat))
//console.log(parseInt(strInt)) // Преобразует в integer
//console.log(parseFloat(strFloat)) // Преобразует в float
//console.log(+strInt, +strFloat) // Выводит два значения в одну строку


// ====================


//console.log(parseFloat((0.1 + 0.2).toFixed(10))) // toFixed - всегда возвращает строчку
// Добавляя + или parseFloat() между скобками впереди, мы делаем числовым значение

// Теперь такую же схему делаем через переменную
//const fixed = (0.1 + 0.2).toFixed(10)
//console.log(parseFloat(fixed))

//const mainNum = (5.8 + 2.1 * 2.3).toFixed(100)
//console.log(parseFloat(mainNum))


// ====================


// BigInt - данные, которые гарантировано вычисляет большие числа, вне зависимости от порядка числа
//console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n)
//console.log(-42n)
// (42.42n) - error, так делать нельзя
// Такой тип чисел используется без дробных чисел
//console.log(10n - 4) // error
//console.log(parseInt(10n) - 4) // Это правильное вычисление | 6
//console.log(10n - BigInt(4)) // 6n целочисленный тип
//console.log(5n / 2n) // 2n целочисленный тип
//console.log(5 / 2) // 2.5


// ====================


// Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))