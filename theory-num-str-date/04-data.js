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

let mode = 'full' // Сюда вставляем тот формат, который необходимо показать, время, дата или и то и другое
const now = Date()
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
    return function() {
        mode = name
        update() // Эта функция позволяет ускорить загрузку
    }
}

fullBtn.onclick = bindMode('full') // Работа кнопки, нажимая на которую мы увидим то, что выбрали

dateBtn.onclick = bindMode('date') // Работа кнопки, нажимая на которую мы увидим то, что выбрали

timeBtn.onclick = bindMode('time') // Работа кнопки, нажимая на которую мы увидим то, что выбрали



setInterval(update, 1000)
update() // Вызываем функцию до ее объявления

function update() {
    output.textContent = format(mode) // В эту функцию помещяем формат, куда мы поместили дату и время, что бы не дублировать строчки
}

// Pure Function
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time' :
            return now.toLocaleTimeString() // Если равен времени
        case 'date' :
            return now.toLocaleDateString() // Если равен дате
        case 'full' :
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString() // Если равен full, возвращает сначала дату, время
        default: return now.toLocaleTimeString() // Если ничему не равен, по дефолту возвращает toLocaleTimeString()
    }
}
