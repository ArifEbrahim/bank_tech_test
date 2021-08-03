const TransactionClass = require('./transaction');
const Display = require('./display');

class Account {
  constructor(transaction = TransactionClass, display = new Display()) {
    this.balance = 0;
    this.history = [];
    this.Transaction = transaction;
    this.display = display;
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(new this.Transaction(amount, undefined, this.balance));
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error(`You have insufficient funds, your balance is ${this.balance}`);
    }
    this.balance -= amount;
    this.history.push(new this.Transaction(undefined, amount, this.balance));
  }

  statement() {
    this.display.print(this.history);
  }
}

module.exports = Account;
