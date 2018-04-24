class CoffeeMachine {
  constructor() {
    this.currentBalance = 0;
    this.coffeeMenu = [
	  {id: 1, name: 'Макиато', price: 33 },                
	  {id: 2, name: 'Капучино', price: 11},
      {id: 3, name: 'Моккочино', price: 22},
    this.currentCoffeeNumber = 0;
  }
  
  setCash(money) {
    if (this.checkCash(money)) {
      this.currentBalance += money;
	  console.log(`Ваш баланс: ${this.currentBalance} руб.`)
      return true;
    } else
	console.log('Доступная форма оплаты: Монеты 1, 2, 5, 10 руб. и Купюры 10, 50 или 100 руб.')
    return false;
  }

  checkCash(money) {
    return money === 1 || money === 2 || money === 5 || 
           money === 10 || money === 50 || money === 100;
  }
  
  chooseCoffee (coffeeNumber) {
    if (typeof coffeeNumber === 'number') {
      if (coffeeNumber >= 1 && coffeeNumber < this.coffeeMenu.length + 1) {

        if (this.currentBalance >= this.coffeeMenu[coffeeNumber - 1].price){
          console.log('choosed ' + coffeeNumber);
          this.currentCoffeeNumber = coffeeNumber - 1;
          return true;
        }
        console.log('Недостаточно средств!');
        return false;
      }
      console.log('Вы не попали по кнопке!');
      return false;
    }
    return false;
  }
  