const users=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}];function toggleUserState(e,n){return new Promise((o=>{o(e.map((e=>e.name===n?{...e,active:!e.active}:e)))}))}const logger=e=>console.table(e);function randomIntegerFromInterval(e,n){return Math.floor(Math.random()*(n-e+1)+e)}function makeTransaction(e){const n=randomIntegerFromInterval(200,500);return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o({id:e.id,time:n}):t({id:e.id})}),n)}))}toggleUserState(users,"Mango").then(logger);const logSuccess=({id:e,time:n})=>{console.log(`Транзакція ${e} оброблена за ${n} ms`)},logError=({id:e})=>{console.warn(`Помилка обробки транзакції ${e}. Спробуйте пізніше.`)};makeTransaction({id:70,time:150}).then(logSuccess).catch(logError);
//# sourceMappingURL=hw-11.60bdfdd2.js.map
