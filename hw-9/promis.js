//1 
function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let promise1 = new Promise((res) =>
    setTimeout(() => {
        res(1)
    }, getRandomTime(1000, 5000))
);

let promise2 = new Promise((res) =>
    setTimeout(() => {
        res(2)
    }, getRandomTime(1000, 5000))
);

let promise3 = new Promise((res) =>
    setTimeout(() => {
        res(3)
    }, getRandomTime(1000, 5000))
);

async function returnNumber() {
    let result = await Promise.race([promise1, promise2, promise3]);
    console.log(result);
}
returnNumber()

    .catch(err => {
        console.log('error ${err}')
    })
    .finally(() => {
        console.log('finally')
    });


// 2
function returnRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

function getNum() {
    let promise = new Promise((res, rej) => {
        let number = returnRandomNumber(1, 5);
        console.log(number);
        res(number)
    }, 3000)
    return promise
}

async function getSquareGetNum(number) {
    setTimeout
    let num = await getNum();
    let squareOfNum = num * num;
    console.log(squareOfNum)
}
getSquareGetNum()

    .catch(err => {
        console.log('error ${err}')
    })

//3
function returnRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(result);
    return result;
}

function getNum() {
    let promise = new Promise((res, rej) => {
        let number = returnRandomNumber(1, 5);
        res(number)
    }, 3000)
    return promise
}

function getNum1() {
    let promise1 = new Promise((res, rej) => {
        let number1 = returnRandomNumber(6, 10);
        res(number1)
    }, 5000)
    return promise1
}

async function getAdditionOfGetNums(number) {
    setTimeout
    let num1 = await getNum();
    let num2 = await getNum1();
    let additionOfNums = num1 + num2;
    console.log(additionOfNums)
}
getAdditionOfGetNums()

.catch(err => {
    console.log('error ${err}')
})