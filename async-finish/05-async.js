// Асинхронность
// Event loop

// const timeout = setTimeout(() => {
//   console.log('after 2 seconds')
// }, 2000)

// clearTimeout(timeout) // Удаляет этот цикл

// setTimeout(() => {
//   console.log('after 3 seconds')
// }, 3000)

// let count = 0
// setInterval(() => {
//   console.log('Tick', ++count)
// }, 1000)

// function delay (callBack, time = 1000) {
//   setTimeout(callBack, time)
// }

// delay(() => {
//   console.log('timeout')
// }, 2000)


// ===========


// Promise
const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve([1, 2, 3])
      // reject('Error in delay')
    }, time)
  })
  return promise
}
// resolve, reject - предупреждает, что какой-то асинхронный код завершился

// delay(2500).then((data) => {
//   console.log('Timeout', data)
//   return data.map((x) => x ** 2)
// })
// .then((data) => {
//   console.log(data)
// })
// .catch((err) => {
//   console.log(err) // Отлов ошибок
// })
// .finally(() => console.log('Finally'))


