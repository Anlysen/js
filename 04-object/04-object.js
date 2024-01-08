const person = {
    name: 'Andrew',
    age: 30,
    isYoutuber: true,
    languages:['ru', 'en', 'ua'],
    address: {
        city: 'Bataysk',
        street: 'Rechnaya',
    },
    'complex key': 'complex value', // Ключи из нескольких слов, вводятся с кавычками
    ['key_' + 21 * 2]: 'complex value',
    greet() { // Создает собственный контекст
        console.log('Greet from person')
    },
    arrow: () => { // Создает собственный контекст
        console.log('Person Arrow')
    },
    info() {
        console.log(this) // this - это тот же объект, в контексте которого мы работаем
        console.log('Person name', this.name)
    },
}

// console.log(person.address)
// const addressKey = 'address'
// console.log(person.addressKey)
// console.log(person['complex key'])

// person.age++ // Добавление объекта
// person.languages.push('de') // Добавляем язык в массив

// console.log(person.languages)

// person.address = undefined // Удаление содержимого
// console.log(person)
//delete person.address // Удаление самого элемента
//console.log(person)

// Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Jo'

// const {age, name: firstName = 'Test', languages} = person // Такой же результат, как и выше

// console.log(languages, age, name)

