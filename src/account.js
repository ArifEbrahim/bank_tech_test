class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error(`You have insufficient funds, your balance is ${this.balance}`);
    }
    this.balance -= amount;
  }
}

module.exports = Account;
