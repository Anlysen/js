<<<<<<< HEAD
// const now = new Date() // Результат строчка даты и времени
// const start = new Date(1000 * 60 * 60 * 24 *
//     365) // Секунда * минуту * час * сутки * дни

// const date = new Date(2011, 0, 4, 12, 42, 12) // Передаем год, месяц, день, час, минута, секунды
// //console.log(date)

// console.log(now.getFullYear())
// console.log(now.getMouth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// now.getFullYear(2055)

// console.log(now)
//

console.log(now.toDateString())
=======
//console.log(new Date()) // Результат строчка даты и времени
//const start = new Date(1000 * 60 * 60 * 24 *
//    365) // Секунда * минуту * час * сутки * дни

//const date = new Date(2011, 0, 4, 12, 42, 12) // Передаем год, месяц, день, час, минута, секунды
//console.log(date)


// ====================


// Выводит текущее время
// let nowTime = new Date() // Создаем переменную с датой
// console.log(nowTime.getFullYear()) // Выводим текущий год
// console.log(nowTime.getMonth())
// console.log(nowTime.getDate())
// console.log(nowTime.getHours())
// console.log(nowTime.getMinutes())

// console.log(nowTime.toDateString())
// console.log(nowTime.toTimeString())
// console.log(nowTime.toLocaleDateString())
// console.log(nowTime.toLocaleDateString())


// ====================


// Приложение с датой
const now = new Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

output.textContent = new Date()

setInterval(() => {
    output.textContent = new Date()
}, 1000)

>>>>>>> e1e5d57a20d127ac11423b2fe84b613babc7372a
