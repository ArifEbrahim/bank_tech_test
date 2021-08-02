class Account {
  constructor() {
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({
      date: new Date(),
      credit: amount,
      debit: 0,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error(`You have insufficient funds, your balance is ${this.balance}`);
    }
    this.balance -= amount;
    this.history.push({
      date: new Date(),
      credit: 0,
      debit: amount,
      balance: this.balance,
    });
  }
}

module.exports = Account;
