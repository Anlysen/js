// Преобразование объекта в json и из json

// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car) // Преобразовывает в json формат
// const parsed = JSON.parse(json) // Преобразовывает обратно в js из json

// console.log(json)
// console.log(parsed)

let list = document.querySelector('#list') // Получение элементов из дом дерево, для получения ID, ставим #
// Фильтрация пользователей
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => { // Функция, отслеживающая клики
    const value = event.target.value.toLowerCase() // Показывает текущее состояние input
const filteredUsers = USERS.filter(user => 
    user.name.toLowerCase().includes(value)
    )
    render(filteredUsers)
})


async function start() {
    list.innerHTML = 'Loading ...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users') // Метод, по которому мы передаем url в качестве параметра, по которому мы будем делать get запрос
        const data = await resp.json() // Метод, который приводит ответ сервера к формату json
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}


// Вывод списка пользователей
function render(users = []) {
    if (users.length === 0) {
        list.innerHTML = 'No matched users!'    
    } else {
        const html = users.map(toHTML).join('') // Автоматически каждый пользователь будет попадать в функцию toHTML и превращаться в код html
        list.innerHTML = html
    }
}


// Как выглядит каждый из элементов
function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>
    `
} // Метод для того, что-бы каждый элемент массива привести к строчке

start()