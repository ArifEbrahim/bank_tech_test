class Statement {
  constructor() {
    this.HEADER = 'date || credit || debit || balance';
  }

  print(history) {
    let displayString = `${this.HEADER}`;
    if (!history) { return displayString; }
    history.reverse().forEach((transaction) => {
      displayString += this._formattedDate(transaction.date);
      displayString += this._formattedCreditOrDebit(transaction.credit, transaction.debit);
      displayString += this._formattedBalance(transaction.balance);
    });
    return displayString;
  }

  _formattedDate(date) {
    return `\n${date.toLocaleDateString()} ||`;
  }

  _formattedCreditOrDebit(credit, debit) {
    if (credit) {
      return ` ${credit.toFixed(2)} || || `;
    } else if (debit) {
      return ` || ${debit.toFixed(2)} || `;
    }
  }

  _formattedBalance(balance) {
    return `${balance.toFixed(2)}`;
  }
}

module.exports = Statement;
