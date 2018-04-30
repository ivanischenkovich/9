class CoffeeMachine {
  constructor() {
    this.currentBalance = 0;
    this.coffeeMenu = new Map ([ 
                                  [1, { name: 'Макиато', price: 33 }],
                                  [250, { name: 'Капучино', price: 11 }],
                                  [300, { name: 'Моккочино', price: 22 }],
								  [4, { name: 'Американо', price: 100 }],
                               ]);
    this.currentCoffeeNumber = null;
  }

  getCoffeeMenu() {
    for(let [id, coffee] of this.coffeeMenu) {
      console.log(`№ ${id} - ${coffee.name} (${coffee.price} руб.)`);
    }
  }
  
  setCash(money) {
    if (this.checkCash(money)) {
      this.currentBalance += money;
	  console.log(`Ваш баланс: ${this.currentBalance} руб.`)
      return true;
    } else {
	  console.log('Доступная форма оплаты: Монеты 1, 2, 5, 10 руб. и Купюры 10, 50 или 100 руб.')
      return false;
	}
  }

  checkCash(money) {
    return money === 1 || money === 2 || money === 5 || 
           money === 10 || money === 50 || money === 100;
  }
  
  chooseCoffee(coffeeNumber) {
    if (this.checkCoffeeNumber(coffeeNumber) && this.checkMoney(coffeeNumber)) {
      this.currentCoffeeNumber = coffeeNumber;
      console.log('Ваш выбор: № ' + coffeeNumber);
	  return true;
    } else {
      return false;
	}
  }

  checkMoney(coffeeNumber) {
    if (this.currentBalance >= this.coffeeMenu.get(coffeeNumber).price) {
	  return true;
    } else {
      console.log('Недостаточно средств!');
	  return false;
	}
  }

  checkCoffeeNumber(coffeeNumber) {
    if(this.coffeeMenu.has(coffeeNumber)) {
      return true;
    } else {
	  console.log('Вы не попали по кнопке!');
      return false;
	}
  }

  getRemainCash() {
	var remain = this.currentBalance - this.coffeeMenu.get(this.currentCoffeeNumber).price;
    console.log('Остаток баланса: ');
	return remain;
  }
}