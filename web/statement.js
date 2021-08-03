class Statement {
  constructor() {
    this.HEADER = 'date || credit || debit || balance';
  }

  print(history) {
    let displayString = `${this.HEADER}`;
    if (!history) { return displayString; }
    history.reverse().forEach((transaction) => {
      displayString += this.formattedDate(transaction.date);
      displayString += this.formattedCreditOrDebit(transaction.credit, transaction.debit);
      displayString += this.formattedBalance(transaction.balance);
    });
    return displayString;
  }

  formattedDate(date) {
    return `\n${date.toLocaleDateString()} ||`;
  }

  formattedCreditOrDebit(credit, debit) {
    return (credit ? ` ${credit.toFixed(2)} || || ` : ` || ${debit.toFixed(2)} || `);
  }

  formattedBalance(balance) {
    return `${balance.toFixed(2)}`;
  }
}

