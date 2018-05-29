function isWeekend(){
   const todayDate = new Date();
   const day = todayDate.getDay();
    
   let checkReturnResult = returnResults[day] || returnResults.other;
   
   return checkReturnResult;
}

let returnResults = {
0: 'Weekend',
1: 'Weekday',
'other': 'weekday'
}

console.log('Result is = ' + isWeekend());
