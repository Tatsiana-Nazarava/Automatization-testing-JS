//1
let arr = [1, 2, 3, 4, 5, 6];
function getNewArrReverse(numbers) {
   let value = [];
   for (i = 0; i < numbers.length; i++) {
      value[i] = numbers[(numbers.length - 1) - i];
   }
   return value;
}
console.log(getNewArrReverse(arr));

//2
let myArray = [3, 67, 15, 105];
function getMaxNumber(array) {
   let max = myArray[0];
   for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] > max) {
         max = myArray[i];
      }
   }
   return max
}
console.log(getMaxNumber(myArray));

//3
function getFibonachi(M, n, b) {
   let arr = [n, b];
   let c;
   for (let i = 3; i <= M; i++) {
      c = n + b;
      arr.push(c);
      n = b;
      b = c;
   }
   return arr;
}
console.log(getFibonachi(4, 2, 8));

//4
let arr1 = [3487];
let arr2 = [3794];
let sum = 0;

arr1[0] = 3;
arr1[1] = 4;
arr1[2] = 8;
arr1[3] = 7;

arr2[0] = 3;
arr2[1] = 7;
arr2[2] = 9;
arr2[3] = 4;

if (arr1[0] == arr2[0] || arr1[0] == arr2[1] || arr1[0] == arr2[3] || arr1[0] == arr2[2]) {
    sum += arr1[0];
    console.log('The number of digits that match in these numbers by value is ' + sum);
}
if (arr1[0] == arr2[0]) {
    console.log('The index of the repeating number is ' + 1);
}
else if (arr1[1] == arr2[1] && arr1[0] == arr2[0]) {
    console.log('The index of the repeating number is ' + 2);
}
else if (arr1[2] == arr2[2] && arr1[1] == arr2[1] && arr1[0] == arr2[0]) {
    console.log('The index of the repeating number is ' + 3);
}
else if (arr1[3] == arr2[3] && arr1[2] == arr2[2] && arr1[1] == arr2[1] && arr1[0] == arr2[0]) {
    console.log('The index of the repeating number is ' + 4);
} else {
    console.log('No matches found')
}
  
//5
let array = new Array(95, 140, 48, 15, 68, 5, 90);
function sortArrayTop(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
console.log(array.sort(sortArrayTop));

function sortArrayDown(a, b) {
    return a > b ? -1 : b > a ? 1 : 0;
}
console.log(array.sort(sortArrayDown));  

//6
var arrWithDublicates = [25, 40, 3, 3, 33, 25, 48, 72, 40, 40, 33, 3, 25];
var arrWithoutDublicates = [];
arrWithDublicates.forEach(function (number, i) {
    if (arrWithoutDublicates.indexOf(number) === -1) {
        arrWithoutDublicates.push(number);
    }
})
console.log(arrWithoutDublicates);

