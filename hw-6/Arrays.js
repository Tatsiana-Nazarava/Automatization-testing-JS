1
let numberString = '1, 2, 3, 4, 5, 6';
if(numberString[0] + numberString[1] + numberString[2] === numberString[3] + numberString[4] + numberString[5]) {
console.log('Yes')
} else {
console.log('No')
}


2
for (let n = 1000, num = 5; n >= 50; num++) {
n = n / 2;
console.log(n)
}


3
const arr = [12, 15, 20, 25, 59, 79];
const getAverage = (arr) => {
let sum = 0; 
for (let i = 0; i < arr.length; i += 1) { 
sum += arr[i]; 
} return sum / arr.length; 
}
console.log(getAverage(arr));   


4
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.splice(3, 0, 'a', 'b', 'c'))
console.log(myArray)


5
let myArray1 = [1, 2, 3, 4, 5];
myArray1.splice(1, 0, 'a', 'b');
myArray1.splice(6, 0, 'c');
myArray1.splice(8, 0, 'e');
console.log(myArray1)


6
const myArray2 = [3, 4, 1, 2, 7];
console.log(myArray2.sort((a, b) => (a - b)))
console.log(myArray2.sort((a, b) => (b - a)))

