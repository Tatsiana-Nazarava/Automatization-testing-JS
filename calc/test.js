const { expect } = require('chai');
const Calculator = require('./calculator');

describe('My unit testing of calculator', async function () {
  it('Should perform summation, subtraction, multiplication, division and square root', async () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 1)).to.equal(2);
  });
});

it('правильно находит сумму 0 и 5', async () => {
  const calculator = new Calculator();
  expect(calculator.add(0, 5)).to.equal(5);
});

it('правильно находит сумму 1 и 6', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 6)).to.equal(7);
});

it('правильно находит сумму 2 и 7', async () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 7)).to.equal(9);
});

it('правильно находит сумму 3 и 8', async () => {
  const calculator = new Calculator();
  expect(calculator.add(3, 8)).to.equal(11);
});

it('правильно находит сумму 4 и 9', async () => {
  const calculator = new Calculator();
  expect(calculator.add(4, 9)).to.equal(13);
});

it('правильно находит сумму 5 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.add(5, -1)).to.equal(4);
});

it('правильно находит сумму -3985 и -5.2', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-3985, -5.2)).to.equal(-3990.2);
});

it('правильно находит сумму -1000.99 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-1000.99, -1000.99)).to.equal(-2001.98);
});

it('правильно находит сумму -1000 и -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-1000, -1000)).to.equal(-2000);
});

it('правильно находит сумму -499 и -499', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-499, -499)).to.equal(-998);
});

it('правильно находит сумму -500.495 и -500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-500.495, -500.495)).to.equal(-1000.99);
});

it('правильно находит сумму -500 и -500', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-500, -500)).to.equal(-1000);
});

it('правильно находит сумму -1 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-1, -1)).to.equal(-2);
});

it('правильно находит сумму -0.01 и -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-0.01, -0.01)).to.equal(-0.02);
});

it('правильно находит сумму 0 и 0', async () => {
  const calculator = new Calculator();
  expect(calculator.add(0, 0)).to.equal(0);
});

it('правильно находит сумму 0.01 и 0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.add(0.01, 0.01)).to.equal(0.02);
});

it('правильно находит сумму 1 и 1', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 1)).to.equal(2);
});

it('правильно находит сумму 499 и 499', async () => {
  const calculator = new Calculator();
  expect(calculator.add(499, 499)).to.equal(998);
});

it('правильно находит сумму 500.495 и 500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.add(500.495, 500.495)).to.equal(1000.99);
});

it('правильно находит сумму 501 и 501', async () => {
  const calculator = new Calculator();
  expect(calculator.add(501, 501)).to.equal(1002);
});

it('правильно находит сумму 1000 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1000, 1000)).to.equal(2000);
});

it('правильно находит сумму 1000.99 и 1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1000.99, 1000.99)).to.equal(2001.98);
});

it('правильно находит сумму 0 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.add(0, -1000.99)).to.equal(-1000.99);
});

it('правильно находит сумму 0.01 и -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.add(0.01, -1000)).to.equal(-999.99);
});

it('правильно находит сумму 1 и -499', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1, -499)).to.equal(-498);
});

it('правильно находит сумму 499 и -500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.add(499, -500.495)).to.equal(-1.495);
});

it('правильно находит сумму 500.495 и -500', async () => {
  const calculator = new Calculator();
  expect(calculator.add(500.495, -500)).to.equal(0.495);
});

it('правильно находит сумму 501 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.add(501, -1)).to.equal(500);
});

it('правильно находит сумму 1000 и -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1000, -0.01)).to.equal(999.99);
});

it('правильно находит сумму 1000.99 и 0', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1000.99, 0)).to.equal(1000.99);
});

it('правильно находит сумму 1, 10 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 10, 1000)).to.equal(1011);
});

it('правильно находит сумму -10, 100 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-10, 100, 1000)).to.equal(1090);
});

it('правильно находит сумму -1, 10, -100 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.add(-1, 10, -100, 1000)).to.equal(909);
});

it('правильно находит сумму 100.001, 0 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.add(100.001, 0, -1000.99)).to.equal(-900.989);
});

it('правильно находит РАЗНОСТЬ 0 и 5', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(0, 5)).to.equal(-5);
});

it('правильно находит разность 1 и 6', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1, 6)).to.equal(-5);
});

it('правильно находит разность 2 и 7', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(2, 7)).to.equal(-5);
});

it('правильно находит разность 3 и 8', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(3, 8)).to.equal(-5);
});

it('правильно находит разность 4 и 9', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(4, 9)).to.equal(-5);
});

it('правильно находит разность 5 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(5, -1)).to.equal(6);
});

it('правильно находит разность -3985 и -5.2', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-3985, -5.2)).to.equal(-3979.80);
});

it('правильно находит разность -1000.99 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-1000.99, -1000.99)).to.equal(0);
});

it('правильно находит разность -1000 и -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-1000, -1000)).to.equal(0);
});

it('правильно находит разность -499 и -499', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-499, -499)).to.equal(0);
});

it('правильно находит разность -500.495 и -500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-500.495, -500.495)).to.equal(0);
});

it('правильно находит разность -500 и -500', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-500, -500)).to.equal(0);
});

it('правильно находит разность -1 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-1, -1)).to.equal(0);
});

it('правильно находит разность -0.01 и -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-0.01, -0.01)).to.equal(0);
});

it('правильно находит разность 0 и 0', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(0, 0)).to.equal(0);
});

it('правильно находит разность 0.01 и 0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(0.01, 0.01)).to.equal(0);
});

it('правильно находит разность 1 и 1', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1, 1)).to.equal(0);
});

it('правильно находит разность 499 и 499', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(499, 499)).to.equal(0);
});

it('правильно находит разность 500.495 и 500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(500.495, 500.495)).to.equal(0);
});

it('правильно находит разность 501 и 501', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(501, 501)).to.equal(0);
});

it('правильно находит разность 1000 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1000, 1000)).to.equal(0);
});

it('правильно находит разность 1000.99 и 1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1000.99, 1000.99)).to.equal(0);
});

it('правильно находит разность 0 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(0, -1000.99)).to.equal(1000.99);
});

it('правильно находит разность 0.01 и -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(0.01, -1000)).to.equal(1000.01);
});

it('правильно находит разность 1 и -499', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1, -499)).to.equal(500);
});

it('правильно находит разность 499 и -500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(499, -500.495)).to.equal(999.495);
});

it('правильно находит разность 500.495 и -500', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(500.495, -500)).to.equal(1000.495);
});

it('правильно находит разность 501 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(501, -1)).to.equal(502);
});

it('правильно находит разность 1000 и -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1000, -0.01)).to.equal(1000.01);
});

it('правильно находит разность 1000.99 и 0', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1000.99, 0)).to.equal(1000.99);
});

it('правильно находит разность 0 и 0', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(0, 0)).to.equal(0);
});

it('правильно находит разность 1, 100 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(1, 100, 1000)).to.equal(-1099);
});

it('правильно находит разность -1, -10, 100 и 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-1, -10, 100, 1000)).to.equal(-1091);
});

it('правильно находит разность -100,001, 0 и 1000,99', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(-100.001, 0, 1000.99)).to.equal(-1100.991);
});

it('правильно находит разность 2 и 8', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(2, 8)).to.equal(-6);
});

it('должен фэйлится, т.к. при вычитании из 2 числа 8 в ожидаемом результате указано неправильное значение', async () => {
  const calculator = new Calculator();
  expect(calculator.subtraction(2, 8)).to.equal(6);
});

it('правильно УМНОЖАЕТ -3 и -7', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(-7, -3)).to.equal(21);
});

it('правильно умножает 12345679 и 9', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(12345679, 9)).to.equal(111111111);
});

it('правильно умножает 0 и 5', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(0, 5)).to.equal(0);
});

it('правильно умножает 1 и 6', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1, 6)).to.equal(6);
});

it('правильно умножает 2 и 7', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 7)).to.equal(14);
});

it('правильно умножает 3 и 8', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(3, 8)).to.equal(24);
});

it('правильно умножает 4 и 9', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(4, 9)).to.equal(36);
});

it('правильно умножает 5 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(5.5, -1)).to.equal(-5.5);
});

it('правильно умножает -3985 и -5.2', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(-3985, -5.2)).to.equal(20722);
});

it('правильно умножает 0 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(0, -1000.99)).to.equal(0);
});

it('правильно умножает 0.01 и -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(0.01, -1000)).to.equal(-10);
});

it('правильно умножает 1 и -499', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1, -499)).to.equal(-499);
});

it('правильно умножает 499 и -500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(499, -500.495)).to.equal(-249747.005);
});

it('правильно умножает 500.495 и -500', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(500.495, -500)).to.equal(-250247.5);
});

it('правильно умножает 501 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(501, -1)).to.equal(-501);
});

it('правильно умножает 1000 и -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1000, -0.01)).to.equal(-10);
});

it('правильно умножает 1000.99 и 0', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(1000.99, 0)).to.equal(0);
});

it('правильно умножает 2, 3, 4', async () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 3, 4)).to.equal(24);
});

it('правильно отображает ошибку при делении 1 на 0', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(6, 0)).to.equal(0);
});

it('правильно делит 10 на 2', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(10, 2)).to.equal(5);
});

it('правильно делит 9 на 5', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(9, 5)).to.equal(1.8);
});

it('правильно делит 7 на 7', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(7, 7)).to.equal(1);
});

it('правильно делит 0 на 4', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(0, 4)).to.equal(0);
});

it('правильно делит 6 на 3', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(6, 3)).to.equal(2);
});

it('правильно делит -30,500 и -8', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(-30.500, -8)).to.equal(3.8125);
});

it('правильно делит 0 и -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(0, -1000.99)).to.equal(0);
});

it('правильно делит 0.01 и -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(0.01, -1000)).to.equal(-0.00001);
});

it('правильно делит 1 и -499', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(1, -500)).to.equal(-0.002);
});

it('правильно делит 1001 и -500.5', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(1001, -500.5)).to.equal(-2);
});

it('правильно делит 500.495 и -500', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(500.495, -500)).to.equal(-1.00099);
});

it('правильно делит 501 и -1', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(501, -1)).to.equal(-501);
});

it('правильно делит 1000 и -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(1000, -0.01)).to.equal(-100000);
});

it('правильно делит 64 на 2 и на 8', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(64, 2, 8)).to.equal(4);
});

it('правильно делит 90 на 10 и на 3', async () => {
  const calculator = new Calculator();
  expect(calculator.divide(90, 10, 3)).to.equal(3);
});

it('правильно возводит в квадрат 25', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(25)).to.equal(625);
});

it('правильно возводит в квадрат 9999999', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(9999999)).to.equal(99999980000001);
});

it('правильно возводит в квадрат -1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-1000.99)).to.equal(1001980.9801);
});

it('правильно возводит в квадрат -1000', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-1000)).to.equal(1000000);
});

it('правильно возводит в квадрат -499', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-499)).to.equal(249001);
});

it('правильно возводит в квадрат -500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-500.495)).to.equal(250495.245025);
});

it('правильно возводит в квадрат -500', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-500)).to.equal(250000);
});

it('правильно возводит в квадрат -1', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-1)).to.equal(1);
});

it('правильно возводит в квадрат -0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(-0.01)).to.equal(0.0001);
});

it('правильно возводит в квадрат 0', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(0)).to.equal(0);
});

it('правильно возводит в квадрат 0.01', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(0.01)).to.equal(0.0001);
});

it('правильно возводит в квадрат 1', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(1)).to.equal(1);
});

it('правильно возводит в квадрат 499', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(499)).to.equal(249001);
});

it('правильно возводит в квадрат 500.495', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(500.495)).to.equal(250495.245025);
});

it('правильно возводит в квадрат 501', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(501)).to.equal(251001);
});

it('правильно возводит в квадрат 1000', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(1000)).to.equal(1000000);
});

it('правильно возводит в квадрат 1000.99', async () => {
  const calculator = new Calculator();
  expect(calculator.exponentiation(1000.99)).to.equal(1001980.9801);
});
