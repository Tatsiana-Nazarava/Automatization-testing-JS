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
const date = new Date();
let numbersOfMonth = 278
function getNumberOfFriday13(year) {
    var count = 0;
        for (var month=0; month<=numbersOfMonth; month++) {
        var d = new Date(year,month,13);
        if(d.getDay() == 5){
          count++;
        }
    }
    return count;                            
}
console.log(getNumberOfFriday13(2023));

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
let enterTheNumber1 = 10;
function sumOfRandomNumbers1 (enterTheNumber1, length1 = 3) {
   let arr1 = new Array(length1);
   let sum1 = 0;
   do {
      for (let i = 0; i < length1; i++) {
         arr1[i] = Math.random();         
         }
      sum1 = arr1.reduce((acc1, value1) => acc1 + value1, 0);
      let scale1 = ((enterTheNumber1-length1)/sum1);
      arr1 = arr1.map(value1 => Number (Math.min((value1 * scale1) + 1).toFixed(2)));
      sum1 = (arr1.reduce((acc1, value1) => acc1 + value1, 0));
           
   } while (sum1-enterTheNumber1);
   return arr1;
};
console.log(sumOfRandomNumbers1(enterTheNumber1));

