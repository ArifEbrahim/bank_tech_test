class Display {
  constructor() {
    this.HEADER = 'date || credit || debit || balance';
  }

  print(history) {
    if (!history) {
      return this.HEADER;
    }
    let displayString = `${this.HEADER}\n`;
    // add date to display string
    const formattedDate = history.date.toLocaleDateString();
    displayString += `${formattedDate} ||`;
    // add credit to display string
    if (history.credit) {
      const formattedCredit = history.credit.toFixed(2);
      displayString += ` ${formattedCredit} || ||`;
    } else if (history.debit) {
      const formattedDebit = history.debit.toFixed(2);
      displayString += ` || ${formattedDebit} ||`;
    }
    return displayString;
  }
}

module.exports = Display;
