class Transaction {
  constructor(credit = 0, debit = 0, balance = 0) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}

module.exports = Transaction;
