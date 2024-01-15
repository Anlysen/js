// const person = {
//     name: 'Andrew',
//     age: 30,
//     isYoutuber: true,
//     languages:['ru', 'en', 'ua'],
//     address: {
//         city: 'Bataysk',
//         street: 'Rechnaya',
//     },
//     'complex key': 'complex value', // Ключи из нескольких слов, вводятся с кавычками
//     ['key_' + 21 * 2]: 'complex value',
//     greet() { // Создает собственный контекст
//         console.log('Greet from person', this)
//     },
//     arrow: () => { // Создает собственный контекст
//         console.log('Person Arrow', this )
//     },
//     info() {
//         console.log(this) // this - это тот же объект, в контексте которого мы работаем
//         console.log('Person name', this.name)
//     },
// }



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

// for (let key in person) {
//     if (person.hasOwnProperty(key)) { // Такой метот позволяет снизить ошибку
//         console.log(person[key]) // Получаем все значения
//     }
// }


//console.dir(Object)




// =========


const company = {
    name: 'Amazon',
    experience: 30,
    sales: true,
    partners: ['Apple', 'Micrisoft', 'Facebook'],
    address: {
        country: 'USA',
        state: 'Colorado',
        city: 'Denver',
    },
    'complex key': 'complex value', // Создаем новые ключи
     ['key_' + 21 * 2]: 'computed value', // Создаем вычисляемые ключи
     greet() { // Создает собственный контекст
        
        console.log('Amazon Company', this) // Можнм создавать функции
     },
    arrow: () => { // Можно создавать стрелочные функции, но не создает собственный контекст
        console.log('Amazon Arrow', this) // Мы получаем глобальный объект window
    },
    info() { // Создает собственный контекст
        console.log(this)
        console.log('I`m working in', this.name)
    }
}

// window - глобальный объект, который вызывает различные окошки, которые доступны в браузере
// document - отвечает за документ
// navigation - можно делать различные переходы, смоьреть перемещение страницы


// console.log(company)
// company.greet() // Вызываем функцию
// company.arrow()
// company.info()

// console.log(company.address)
// const addressKey = 'address'
// console.log(company[addressKey])
// console.log(company['complex key'])

// company.experience++
// company.partners.push('American Airlines')

// console.log(company.partners)

// ===========


// Удаление ключей
// company.address = undefined // Удаление адреса
//delete company.address // Полное удаление адреса
//console.log(company)


// Получаем название компании, стаж и партнеры
// const experience = company.experience
// const name = company.name
// const partners = company.partners

// Сокращение примера, который выше
// const name = 'Tesla'
// const {experience, name: firstName = 'Google', partners} = company

// console.log(partners, experience, name)

//console.log(company) // Глобальный прототип
//console.log([1 + 2]) // Глобальный массив

// Итерация по ключам объекта
// for (let key in company) {
//     if (company.hasOwnProperty(key)) { // Получаем только собственные ключи объекта, выполняем дополнительную проверку
//     } // Такой метод позволякт снизить ошибку
//     // console.log(key) // В строковом формате получаем все ключи объекта
//     console.log(company[key])
// }


//console.dir(Object) // Глобальный класс, у которого есть методы, функции

// Object.keys(company).forEach((key) => {
//     console.log(company[key])
// })


// =========


const logger = {
    keys(withText = true) {
        if (withText) {
            console.log('Object keys:', Object.keys(this))
        } else {
            console.log(Object.keys(this))
        }
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })        
    },

}

//logger.keys() // Получим на выходе массив из keys и keysAndValues
//const bound = logger.keys.bind(company) // bind() - принимает несколько аргументов, напр. контекст, т.е. любой объект
// bind() возвращает новую функцию, но не вызывает ее
//bound(false) // Когда вызываем эту функцию, мы получаем ключи {a: 1}

// logger.keys.call(company, false) // call() - баиндит контекст, но сразу вызывает функцию
// logger.keys.apply(company, [false]) // apply() - делает то же, что и call(), но второй параметр всегда массив


// ========

class Companies {
    static isCompanies = true

    companyGreet() { // В company1 мы так же можем его вызывать
        console.log('Greet from Microsoft')
    }

    toString() {
        console.log('To string')
    }
}

class Company extends Companies {
    constructor (name, experience) {
        super() // Вызывает конструктор Companies
        this.name = name ?? 'Undefind name' // Если имя не передалось
        this.experience = experience ?? 'Undefind experience' // Если стаж не передали
        // В этом участке кода у нас абстракция
        }
        
        sayHello() {
            console.log('Hello from ', this.name)
    }
}

const company1 = new Company('Amazon', 30) // Здесь у нас идет реализация
const company2 = new Company('Microsoft', 40)

// company1.sayHello()
// company2.sayHello()

console.log(Companies.isCompanies)