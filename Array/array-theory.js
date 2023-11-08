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
const letters = ['c', 'd', 'b', 'a']
console.log(letters.sort()) // sort - выставляет элементы в нужной последовательности
console.log(letters)