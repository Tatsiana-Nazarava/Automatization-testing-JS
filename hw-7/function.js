//1
function rollDice1Player1(min = 1, max = 6) {
    return min + Math.floor(Math.random() * (max - min + 1));
  } for (let i = 0; i < 1; i++); 
    function rollDice1Player2(min = 1, max = 6) {
    return min + Math.floor(Math.random() * (max - min + 1));
  } for (let i = 0; i < 1; i++); 
  function rollDice2Player1(min = 1, max = 6) {
    return min + Math.floor(Math.random() * (max - min + 1));
  } for (let i = 0; i < 1; i++); 
    function rollDice2Player2(min = 1, max = 6) {
    return min + Math.floor(Math.random() * (max - min + 1));
  } for (let i = 0; i < 1; i++); 
  function rollDice3Player1(min = 1, max = 6) {
    return min + Math.floor(Math.random() * (max - min + 1));
  } for (let i = 0; i < 1; i++); 
    function rollDice3Player2(min = 1, max = 6) {
    return min + Math.floor(Math.random() * (max - min + 1));
  } for (let i = 0; i < 1; i++); 
    
  let sumOfFirstPlayer = 0;
  let sumOfSecondPlayer = 0;
  sumOfFirstPlayer =  (rollDice1Player1() + rollDice2Player1() + rollDice3Player1()); 
  sumOfSecondPlayer = (rollDice1Player2() + rollDice2Player2() + rollDice3Player2()); 
  console.log(("The SUM of the FIRST Player's three rolls = ") + sumOfFirstPlayer);
  console.log(("The SUM of the SECOND Player's three rolls = ") + sumOfSecondPlayer);
  if (sumOfFirstPlayer > sumOfSecondPlayer) {
    console.log("WON the FIRST Player");
  } else if (sumOfFirstPlayer < sumOfSecondPlayer) {
    console.log("WON the SECOND Player");
  } else {
    console.log("DRAW - no one wins");
  }

//2
function getcountFriday13th(startDate, endDate) {
    let count = 0;
    let currentDate = startDate;
    while (currentDate <= endDate) {
      if (currentDate.getDay() === 5 && currentDate.getDate() === 13) {
        count++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return count;
  }
  const startDate = new Date(2000, 0, 1); 
  const endDate = new Date(); 
  
  const count = getcountFriday13th(startDate, endDate);
  console.log(count);

//3a
const enterTheNumber = 10;
function sumOfRandomNumbers (enterTheNumber, length = 3) {
   let arr = new Array(length);
   let sum = 0;
   do {
      for (let i = 0; i < length; i++) {
         arr[i] = Math.random();
      }
      sum = arr.reduce((acc, val) => acc + val, 0);
      const scale = (enterTheNumber-length)/sum;
      arr = arr.map(value => Math.min(Math.round(value * scale) + 1));
      sum = arr.reduce((acc, value) => acc + value, 0);
   } while (sum-enterTheNumber);
   return arr;
};
console.log(sumOfRandomNumbers(enterTheNumber));

//3b
let enterNumber = 10;
function sumOfRandomNumbers (enterNumber, length = 3) {
   let arr = new Array(length);
   let sum = 0;
   do {
      for (let i = 0; i < length; i++) {
         arr[i] = Math.random();         
         }
      sum = arr.reduce((acc, value) => acc + value, 0);
      let scale = ((enterNumber-length)/sum);
      arr = arr.map(value => Number (Math.min((value * scale) + 1).toFixed(2)));
      sum = (arr.reduce((acc, value) => acc + value, 0));
           
   } while (sum-enterNumber);
   return arr;
};
console.log(sumOfRandomNumbers(enterNumber));

