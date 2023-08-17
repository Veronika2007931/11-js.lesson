
// №1
// function GetMiliseconds(ms){
// return new Promise((resolve, reject) => {
//    setInterval(()=>{
//     resolve(`Проміс перейшов в стан resolve через ${ms} мілісекунд`)
//     reject('Проміс не перейшов у стан resolve')
//    }, ms)

   
// })
// }

// GetMiliseconds(3000).then((succes)=>{
//     console.log(succes)
// }).catch((error)=>{
//   console.log(error)
// })


 
// №2
// const users = [
 
// { name: 'Mango', active: true },
 
// { name: 'Poly', active: false },
 
// { name: 'Ajax', active: true },
 
// { name: 'Lux', active: false },
 
// ];
 
//  function toggleUserState(allUsers, userName){
 
// const updatedUsers = allUsers.map(user =>{
//     user.name === userName ? { ...user, active: !user.active } : user
// });

//  return new Promise((resolve)=>{
//  resolve(console.table(updatedUsers))

// })
// };

// toggleUserState(users, 'Mango').then((succes)=>{
//     console.log(succes)
// })
//  toggleUserState(users, 'Lux').then(logger);

// №3


// Перепишіть функцію makeTransaction()так, щоб вона не використовувала callback-функції onSuccessі onError, 
// а прийняла весь один параметр transactionі повернула проміс.
 
function randomIntegerFromInterval(min, max){
 
return Math.floor(Math.random() * (max - min + 1) + min);
 
};
 
// Якщо randomIntegerFromInterval це не функція то чому ми знизу задаємо їй параметри???? 

function makeTransaction(transaction, onSuccess, onError){
 const delay = randomIntegerFromInterval(200, 500);
 
 setTimeout(() => {
 const canProcess = Math.random() > 0.3;
 if (canProcess) {
 onSuccess(transaction.id, delay);
 
 }else{
 onError(transaction.id);
 
}}, delay);
 

return new Promise((resolve, reject)=>{
  const logSuccess = (id, time) => {
    resolve(console.log(`Транзакція ${id} оброблена за ${time}ms`))
    };
    
const logError = id => {
       reject(console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`))
        };
        

})
};
 


 
// /*
 
// * Працює так
 
// */
 
// makeTransaction({ id: 70, сума: 150 }, logSuccess, logError);
 
// makeTransaction({ id: 71, сума: 230 }, logSuccess, logError);
 
// makeTransaction({ id: 72, сума: 75 }, logSuccess, logError);
 
// makeTransaction({ id: 73, сума: 100 }, logSuccess, logError);
 
// /*
 
// * Повинно працювати так
 
// */
 
// makeTransaction({ id: 70, сума: 150 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 71, сума: 230 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 72, сума: 75 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 73, сума: 100 })
 
// .then(logSuccess)
 
// .catch(logError);


