const TransactionClass = require('./transaction');
const Statement = require('./statement');

class Account {
  constructor(transaction = TransactionClass, statement = new Statement()) {
    this.balance = 0;
    this.history = [];
    this.Transaction = transaction;
    this.statement = statement;
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

  printStatement() {
    return this.statement.print(this.history);
  }
}

module.exports = Account;
