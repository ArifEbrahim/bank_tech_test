const Transaction = require('./transaction');

class Account {
  constructor(transaction = Transaction) {
    this.balance = 0;
    this.history = [];
    this.transaction = transaction;
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(new this.transaction(amount, undefined, this.balance));
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error(`You have insufficient funds, your balance is ${this.balance}`);
    }
    this.balance -= amount;
    this.history.push(new Transaction(undefined, amount, this.balance));
  }
}

module.exports = Account;
