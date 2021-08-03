const TransactionClass = require('./transaction');

class Account {
  constructor(transaction = TransactionClass) {
    this.balance = 0;
    this.history = [];
    this.Transaction = transaction;
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
}

module.exports = Account;
