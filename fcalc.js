class Investment {
	
  constructor(value, month) {
    this.value = value;
    this.month = month;
  }

  calculateIncome(percent) {
  	var income = 0;
    for (var i = 0; i < this.month; i++) {
      income = this.value * percent;
      this.value += income;
    }
    return this.value;
  }

}

class Poupanca extends Investment {

	constructor(value, month, tax) {
		super(value, month);
		this.tax = tax;
	}

}