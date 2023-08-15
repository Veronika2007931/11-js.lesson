// const promise = new Promise((resolve, reject) => {
//     const isFullfield = Math.random()>0.5
//     console.log()

//     if(isFullfield){
//         resolve("promis is succesful")
//     }

//     reject("promis is false")
// });

// console.log(promise)

// promise.then((result) => {
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// promise.then((result)=>{
//     console.log(`1 result ${result}`)
//     return 5
// }).then((result) =>{
//     console.log(`2 then ${result}`)
//     return 10
// }).then((result) =>{
//     console.log(`3 then ${result}`)
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//   console.log("cod  going any way ")
// })


// const arr = [2, 4, 6, 7, 10]

// function getArr(numbers){
//  const result =  numbers.every((number)=>{
//     return number%2 === 0
//   })

//  return  new Promise((resolve, reject)=>{
//     if(result){
//         resolve("Всі числа в масиві парні")
//     }
//     reject("Є непарні числа")
//   })
// }

// getArr(arr).then((succes)=>{
//  console.log(succes)
// }).catch((error)=>{
//     console.log(error)
// })

// let firstNum = 3 
// let secondNum = 7 

// function addNumbers(first, second){
//     let numbersSum = first + second 
//     new Promise((resolve, reject)=>{
//         if(numbersSum){
//             resolve(numbersSum)
//         }reject(" Wrong arguments")
//     })
// }
// addNumbers(firstNum, secondNum).then((succes)=>{
//   console.log(succes)
// }).catch((error)=>{
//     console.log(error)
// })
