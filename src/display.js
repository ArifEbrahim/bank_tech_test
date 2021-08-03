class Display {
  constructor() {
    this.HEADER = 'date || credit || debit || balance';
  }

  print(history) {
    let displayString = `${this.HEADER}`;
    if (!history) {
      return displayString;
    }
    history.forEach((transaction) => {
      // add date to display string
      const formattedDate = transaction.date.toLocaleDateString();
      displayString += `\n${formattedDate} ||`;
      // add credit to display string
      if (transaction.credit) {
        const formattedCredit = transaction.credit.toFixed(2);
        displayString += ` ${formattedCredit} || || `;
      } else if (transaction.debit) {
        const formattedDebit = transaction.debit.toFixed(2);
        displayString += ` || ${formattedDebit} || `;
      }
      // add balance
      const formattedBalance = transaction.balance.toFixed(2);
      displayString += `${formattedBalance}`;
    });
    return displayString;
  }
}

module.exports = Display;
