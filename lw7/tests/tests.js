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
