class Validator {

  static isPositiveNumber(val,selector,field){
    if(!Utils.isPositiveNumber(val)){
      $("#"+selector).prepend("<span>"+field+" precisa ser preenchido e ser um número positivo.</span>");
    }
  }
}

class Utils {
  static round(val){
    return Math.round(val*100)/100;
  }
  static isPositiveNumber(val){
    if (!isNaN(val) && val > 0) {
      return true;
    } else {
      return false;
    }
  }
}

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

  calculate() {
    Validator.isPositiveNumber(this.value,"value-poupa","Valor");
    Validator.isPositiveNumber(this.month,"value-poupa","Mês");
    Validator.isPositiveNumber(this.tax,"value-poupa","Taxa");

    return Utils.round(this.calculateIncome(this.tax));
  }
}

class Cdb extends Investment {
  constructor(value, month, tax, cdi) {
    super(value, month);
    this.tax = tax;
    this.cdi = cdi;
  }

  calculate() {
    Validator.isPositiveNumber(this.value,"value-cdb","Valor");
    Validator.isPositiveNumber(this.month,"value-cdb","Mês");
    Validator.isPositiveNumber(this.tax,"value-cdb","Taxa");
    Validator.isPositiveNumber(this.cdi,"value-cdb","Cdi");

    var percent = this.cdi * (this.tax / 100);
    percent = percent * 0.01;

    return Utils.round(this.calculateIncome(percent));
  } 
}
