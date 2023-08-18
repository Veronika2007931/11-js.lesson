
// №1
// function GetMiliseconds(ms){
// return new Promise((resolve, reject) => {
//    setInterval(()=>{
//     resolve(`Проміс перейшов в стан resolve через ${ms} мілісекунд`)
//    }, ms)

   
// })
// }

// GetMiliseconds(3000).then((succes)=>{
//     console.log(succes)
// })


 
// №2
const users = [
 
{ name: 'Mango', active: true },
 
{ name: 'Poly', active: false },
 
{ name: 'Ajax', active: true },
 
{ name: 'Lux', active: false },
 
];
 
 function toggleUserState(allUsers, userName){
 return new Promise((resolve)=>{

  const updatedUsers = allUsers.map(user =>{
    return user.name === userName ? { ...user, active: !user.active } : user
});
 resolve(updatedUsers)

})
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger)

//  toggleUserState(users, 'Lux').then(logger);

// №3


function randomIntegerFromInterval(min, max){
 return Math.floor(Math.random() * (max - min + 1) + min);
 };

function makeTransaction(transaction){
 const delay = randomIntegerFromInterval(200, 500);
 
return new Promise((resolve, reject)=>{
  setTimeout(() => {
    const canProcess = Math.random() > 0.3;
    if (canProcess) {
    resolve({id:transaction.id, time:delay});
    
    }else{
    reject({id:transaction.id});
    
   }}, delay);
});
}


const logSuccess = ({id, time}) => {
 
  console.log(`Транзакція ${id} оброблена за ${time} ms`);
   
  };
   
   
  const logError = ({id})=> {
   
  console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
   
  };
   
 
makeTransaction({ id: 70, time: 150 })
 
.then(logSuccess)
 
.catch(logError);
 
 
// makeTransaction({ id: 71, сума: 230 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 72, сума: 75 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 73, сума: 100 })
 
// .then(logSuccess)
 
// .catch(logError);


