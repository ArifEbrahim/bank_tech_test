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
    if (amount < 0) { throw new Error('Cannot deposit negative numbers, please enter again'); }
    this.balance += amount;
    this.history.push(new this.Transaction(amount, undefined, this.balance));
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error(`You have insufficient funds, your balance is ${this.balance}`);
    } else if (amount < 0) {
      throw new Error('Cannot withdraw negative numbers, please enter again');
    }
    this.balance -= amount;
    this.history.push(new this.Transaction(undefined, amount, this.balance));
  }

  printStatement() {
    return this.statement.print(this.history);
  }
}

module.exports = Account;
