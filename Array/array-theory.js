//const names = ['Andrew', 'Alla', 'Vlad', 'Inna']

//names.push('Luisa') // Добавляет объект в конец списка массива
//names.unshift('Luisa') // Добавляет объект в начало списка массива
//names.shift() // shift - удаляет первый элемент массива

//const name = names.shift()
//const name = names.pop() // pop - забирает последний элемент массива, меняя сам массив

//console.log('Names: ', names, name) // Такая конструкция извлекает первый элемент

/*
Методы push и unshift отличаются скоростью работы.
push - работает быстрее, чем unshift.
unshift - добавляет первый элемент в массив, из-за
этого все элементы массива меняют свой индекс, в связи
с этим меньше скорость. Не имеет разницы если в массиве мало
объектов, но когда их тысячи, работа значительно
замедляется.
*/

//console.log(names.reverse()) // Все элементы массива идут в обратном порядке
// Мутирует и меняет массив, это не очень хорошо

//console.log(names.toReversed())
//const reversed = names.toReversed() // Возврвщает новый массив
//console.log(reversed)
// const letters = ['e', 'c', 'd', 'b', 'a']
///console.log(
//    letters.sort(function (a, b) { // sort - выставляет элементы в нужной последовательности, в данном случае в алфавитном порядке
//        return a.charCodeAt(0) - b.charCodeAt(0) // Цикл идет на возрастание, возвращает новый массив
//    })
//)
// console.log(letters.toSorted()) // toSorted - возвращает новый массив, а старый оставляет
// console.log(letters)

// const num = [9, 8, 7, 6, 5, 4]
// console.log(num)
// console.log(num.toSorted())

//console.log(names.splice(2, 2)) // Удаляем объект, первое значение это его индекс, второе число это сколько мы хотим удалить элементов
//console.log(names.toSpliced(0, 2)) // toSpliced - не меняет оригинальный массив
//console.log(names)

// Как найти элемент массива?
//const greatWoman = 'Alla'
//const index = names.indexOf(greatWoman) // Находим колличество элементов в массиве, показывает числом 1, если -1, то такого элемента нету в массиве
// console.log(index)
//const newNames = names.with(index, 'Alla the best girl!') // Здесь мы указываем, на какое значение поправить
// names[index] = 'Alla the best girl!' // Можем изменить элемент массива
// console.log(names[index]) // Находим само название элемента
// console.log(names) // Результат изменённого массива
// console.log(newNames) // Это значение показывает изменненным

// const capitalName = names.map(function (name) { // В этой функции мы работаем с трансформацией для работы с конкретно каждым элементом массива
     //const newName = name + ' я тебя хакнул! Покайся, грешник!'
     // Если не прописан return, то по умолчанию js проставляет и прописывает return undefined
     //return newName // Возвращаем результат функции "!", который мы указали выше
     //return name.toUpperCase() // Все элементы массива переведены в верхний регистр
//     return name.toLowerCase() // Все элементы массива переведены в нижний регистр
// })

// Изменяем определённый элемен массива
// const capitalName = names.map(function (name, index) {
//     if (index === 1) {
//         return 'Alla the best girl!'
//     }
// })

// console.log(capitalName)

// console.log(names.includes('Vlad')) // includes - спрашивает, есть ли такой элемент в массиве
// console.log(names.indexOf('Vlad')) // indexOf - возвращает индекс элемента массива
//console.log(names.indexOf('Vlad') !== -1 ) // Возвращает true или false

// const people = [
//      {name: 'Andrew', budget: 420},
//      {name: 'Alla', budget: 15100},
//      {name: 'Vlad', budget: 300},
//      {name: 'Inna', budget: 7520},
// ]

// console.log(people.indexOf({ name: 'Inna',
// budget: 7520 }))

// let findedPerson

 // Ищим конкретный элемент массива
// for (let person of people) {
//     if (person.budget === 7520) { // Идет обращение к полям
//         findedPerson = person // Переназначение
//     }
// }
//console.log(findedPerson) // На выходе мы получаем данные обьекта Inna

// const findedPerson = people.find(function (person) {
//     return person.budget === 7520 // Дает такой же результат, как и ниже
     // if (person.budget === 7520) {
     //     return true
     // }
// }) // Этот цикл дает такой же результат, что и цикл выше
// В этом цикле не нужно делать переназначение, мы просто выводим return true


//const finded = people.find((p) => p.budget === 7520) // В этой строке после => автоматически выставляется retern

// const finded = people.findIndex(function (person) {
//      return person.budget === 7520
// })
// console.log(people.with(finded, 42))


// Фильтрация орегенального массива
// Подсчитываем бюджет тех, у кого больше 5000
//let sumBudget = 0
//const filtered = people.filter(function (p) {
//     return p.budget > 5000 // Вернуть того, у кого бюджет больше 5000
//})
// console.log(people) // Указывая так мы не затрагеваем оригинальный массив
//console.log(filtered) // Возвращает те элементы, у кого бюджет больше 5000
//filtered.forEach(function (p) { // Делаем итерацию (перебор) массива
//     sumBudget += p.budget
//})

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people
//      .filter(byBudget)
//      .map(pickBudget)
//      .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget) // Массив показывает цифрами


// const string = 'Hello, how are you?'
// const reversed = string
// .split('') // split() - строчку превращает в массив
// .toReversed()
// .join('!')
// .split('')
// .filter((c) => c !== '!')
// .join('')

// console.log(reversed)


// const company = ['John', 'Hunter', 'Courtney', 'Austin', 'Barbara']

// const staff = [
//      {name: 'John', budget: 30000},
//      {name: 'Hunter', budget: 50000},
//      {name: 'Courtney', budget: 100000},
//      {name: 'Austin', budget: 20000},
//      {name: 'Barbara', budget: 160000},
// ]

// sumBudget = 0
// const filtered = staff.filter(function (s) {
//      return s.budget > 50000
// })
// console.log(filtered)

// const text = 'When I was a child, I`d loved play football'
// const reversed = text
// .split('')
// .toReversed()
// .join('lol')
// .split('')
// .join('')

// console.log(reversed)