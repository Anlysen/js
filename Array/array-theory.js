const names = ['Andrew', 'Alla', 'Vlad', 'Inna']

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
//const reversed = names.toReversed() // Возврвщает массив
//console.log(reversed)
// const letters = ['e', 'c', 'd', 'b', 'a']
// //console.log(
// //    letters.sort(function (a, b) { // sort - выставляет элементы в нужной последовательности, в данном случае в алфавитном порядке
// //        return a.charCodeAt(0) - b.charCodeAt(0) // Цикл идет на возрастание, возвращает новый массив
// //    })
// //)
// console.log(letters.toSorted()) // toSorted - возвращает новый массив, а старый оставляет
// console.log(letters)

// const num = [9, 8, 7, 6, 5, 4]
// console.log(num)
// console.log(num.toSorted())

//console.log(names.splice(2, 2)) // Удаляем объект, первое значение это его индекс, второе число это сколько мы хотим удалить элементов
//console.log(names.toSpliced(0, 2)) // toSpliced - не меняет оригинальный массив
//console.log(names)

// Как найти элемент массива?
const greatWoman = 'Alla'
const index = names.indexOf(greatWoman) // Находим колличество элементов в массиве, показывает числом 1, если -1, то такого элемента нету в массиве
console.log(index)
names[index] = 'Alla the best girl!' // Можем изменить элемент массива
console.log(names[index]) // Находим само название элемента
console.log(names) // Результат изменённого массива