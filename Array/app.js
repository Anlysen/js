/* ======== Theory Array

const array = [1, 2, 3, 5, 20, 42, 111]
// const arrayString = ['a', 'b', 'c', null]
// const array = new Array(1, 2, 3)

// console.log(array.length) // length - получаем длинну
console.log(array[0]) // Получаем один из элементов
console.log(array[array.length - 1]) // array[6 - 1], получаем последний элемент массива
array[0] = 'Hello, world!'
console.log(array)
array[array.length] = 'break'
*/

// Hello, Andrew!
// Isses

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// Выводим список заметок
// const notes = ['Записать блок про массивы', 'Рассказать теорию объектов']

// function render() {
//     //for (let i = 0; i < notes.length; i++) {
//     //    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i])) // Элемент объекта списка
//     //}
//     /*
//         Создаем новый индекс (переменную) и присваиваем ему 0,
//         так, как все индексы массива начинаются с 0.
//         Затем делаем итерацию до тех пор, пока i будет меньше чем
//         массив notes[], и затем указывает оператор ++ для i,
//         чтобы увеличивалось значение на единицу.
//     */

//         // Еще один вариант синтаксиса
//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }
//render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) { // Если строка ввода равна 0 (не имеет колличество символов)
//         return // Пустой строку отправлять в список не будет
//     }
//     //listElement.innerHTML =
// // Кусок кода ниже делает список элементов, которые мы вводим в строку
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
//     inputElement.value = ''
// }


// Функция - получить шаблон заметки
// function getNoteTemplate(title) {
//     return `
//     <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//         >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//     `
// }


// ======== Object theory
// const person = {
//     firstName: 'Andrew',
//     lastName: 'Lysenko',
//     year: 1993,
//     hasWife: true,
//     languages: ['ru', 'en', 'ua'],
//     getFullName: function() {
//         console.log(person.firstName + ' ' + person.lastName)
//     },
// }
// console.log(person.year)
// console.log(person['languages'])
// const key = 'hasWife'
// console.log(person[key])
// person.getFullName() // Выдает полное имя

const notes = [
    {
    title: 'Записать блок про массивы',
    completed: false, // Меняет состояние в строке в зависимисти от буливого значения
    },
    {
        title: 'Рассказать теорию объекта',
        completed: true, // Меняет состояние в строке в зависимисти от буливого значения
    },
]

function render() {
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i)) // Элемент объекта списка
    }
}
render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) { // Если строка ввода равна 0 (не имеет колличество символов)
        return // Пустой строку отправлять в список не будет
    }

    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote) // Функция push() функция массива, которая добавляет новый элемент массива в конец списка
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.index.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            console.log('remove', index)
        }
        render()
    }
}

// Если note.completed = true, доавляем класс text-decoration-line-through
// Если note.completed = false, добавляем пустую строчку
// Строчка 132

function getNoteTemplate(note, index) { // note - обьект, title - его свойство, формируется строчка для элемента
    return `
    <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'
            }" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type-"remove"
                data-index="${index}">&times;</span>
            </span>
        </li>
    `
}
