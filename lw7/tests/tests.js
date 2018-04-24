const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Метод getCoffeeMenu', function() {
  it(`Выводит в консоли меню`, function() {
    assert.doesNotThrow(function() {
      let test = new CoffeeMachine();
      test.getCoffeeMenu();
    });
  });
});

describe('Метод checkCash', function() {
  function makeTest(value, expected) {
    it(`Принял ${value} и должен вернуть ${expected}`, function() {
      let test = new CoffeeMachine();
      let actual = test.checkCash(value);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: -1, expected: false },
    { value: -10, expected: false },
    { value: 0, expected: false },
    { value: 11, expected: false },
    { value: 6, expected: false },
    { value: 15, expected: false },
    { value: 13, expected: false },
    { value: 9, expected: false },
    { value: 1, expected: true },
    { value: 2, expected: true },
    { value: 5, expected: true },
    { value: 10, expected: true },
    { value: 50, expected: true },
    { value: 100, expected: true }
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод setCash', function() {
  function makeTest(value, expected) {
    it(`Прибавляет ${value.cash} к текущему балансу ${value.currentBalance}, баланс должен быть: ${expected}`, function() {
      let test = new CoffeeMachine();
      test.currentBalance = value.currentBalance;
      test.setCash(value.cash);
      let actual = test.currentBalance;
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { currentBalance: 0, cash: null }, expected: 0 },
    { value: { currentBalance: 5, cash: null }, expected: 5 },
    { value: { currentBalance: 0, cash: undefined }, expected: 0 },
    { value: { currentBalance: 100, cash: undefined }, expected: 100 },
    { value: { currentBalance: 10, cash: -1 }, expected: 10 },
    { value: { currentBalance: 0, cash: -20 }, expected: 0 },
    { value: { currentBalance: 5, cash: -20 }, expected: 5 },
    { value: { currentBalance: 100, cash: 3 }, expected: 100 },
    { value: { currentBalance: 0, cash: 10 }, expected: 10 },
    { value: { currentBalance: 5, cash: 50 }, expected: 55 },
    { value: { currentBalance: 10, cash: 50 }, expected: 60 },
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

 describe('Метод getRemainCash', function() {
  function makeTest(value, expected) {
    it(`при балансе ${value.balance} и выбраном номере кофе ${value.coffee + 1} сдача должена быть: ${expected}`, function() {
      let testCoffeeMachine = new CoffeeMachine();
      testCoffeeMachine.currentBalance = value.balance;
      testCoffeeMachine.currentCoffeeNumber = value.coffee;
      let actual = testCoffeeMachine.getRemainCash();
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { balance: 23, coffee: 1 }, expected: 12 },
    { value: { balance: 50, coffee: 2 }, expected: 28 },
    { value: { balance: 122, coffee: 3 }, expected: 22 },
    { value: { balance: 100, coffee: 1 }, expected: 89 },
    { value: { balance: 15, coffee: 1 }, expected: 4 },
    { value: { balance: 125, coffee: 3 }, expected: 25 },
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
}); 
