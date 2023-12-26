//const now = new Date()

//const start = new Date(1000 * 60 *60 * 24 * 365)

//const date = new Date(2011, 0, 4, 12, 42, 12)

// console.log(now.getFullYear()) // Получаем год
// console.log(now.getMonth()) // Получаем месяц
// console.log(now.getDate()) // Получаем день
// console.log(now.getHours()) // Получаем часы
// console.log(now.getMinutes()) // Получаем минуты

// now.setFullYear(2055)

//console.log(now.toDateString()) // Tue Dec 26 2023
//console.log(now.toTimeString()) // 17:46:23 GMT+0300 (Москва, стандартное время)
//console.log(now.toLocaleDateString()) // 26.12.2023 дата
//console.log(now.toLocaleTimeString()) // 17:49:29 время


// ===========

const now = Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

output.textContent = new Date()
