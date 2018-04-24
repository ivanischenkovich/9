class CoffeeMachine {
  constructor() {
    this.currentBalance = 0;
    this.coffeeMenu = [
	  {id: 1, name: 'Макиато', price: 33 },                
	  {id: 2, name: 'Капучино', price: 11},
      {id: 3, name: 'Моккочино', price: 22},
    this.currentCoffeeNumber = 0;
  }
