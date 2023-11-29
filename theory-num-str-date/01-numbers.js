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
//console.log(Math.E)
//console.log(Math.PI)

//console.log(Math.sqrt(25)) // 5
//console.log(Math.pow(2, 3)) // Возводим в степень | 8
//console.log(Math.abs(-40)) // Если стоит -40, результат будет 40
//console.log(Math.max(2, 5, 42, 199, 0)) // Передаем неограниченое число значений и получвем максимальное значение из них 199
//console.log(Math.min(2, 5, 42, 199, 0)) // Получаем минимальное число из списка 0


// ====================


//const myNum = 4.2
//console.log(Math.floor(myNum)) // Если мы во floor() передаем дробное число, мы всегда округляем его в меньшую сторону
// От 4.9 получаем 4
//console.log(Math.ceil(myNum)) // ceil() - округляет до целочисленного значения в большую сторону
// От 4.9 получаем 5
//console.log(Math.round(myNum)) // round() - округляет до ближайшего целочисленного значения
// Если будет число 4.2, выдаст 4, если 4.9, выдаст 5
//console.log(Math.trunc(myNum)) // trunc() - всегда возвращает только целую часть числа
// От 4.9 получаем 4, 9 отсекает
//console.log(Math.random()) // random() - возвращает случайное значение в диапазоне от 0 до 1


// ====================


// Пример random()
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} // Что бы получить челочисленое число, оборачиваем в Math.floor()

const num1 = getRandomNumber(10, 100)
console.log(num1)