# Bank tech test

This is a mock tech test.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
## Planning

### User stories

```
As a user,
So that I can manage my money,
I want to create a bank account.

As a user,
So that I can add to my balance,
I want to be able to make deposits. 

As a user,
So that I can use my money,
I want to be able to make withdrawls.

As a user,
So that I can track my account activity over time,
I want the date of each transaction to be recorded.

As a user,
So that I can see my account history,
I want to print an account statment. 

As a user,
So that I can see my latest transactions quickly,
I want the statement to be in reverse chronological order.

```

### Class diagram

The solution uses 3 classes with the following responsibilites:
- Account class
  - Accepts deposits and withdrawals
  - Knows the balance
  - Saves transaction into the history

- Transaction class
  - Records user transactions in an object for later use

- Statement class
  - Formats the account hsitory into the required format
  - Returns the formatted string

![class_diagram](./img/classDiagram.png)

### Sequence diagram

![sequence_diagram](./img/sequenceDiagram.png)

## Testing

Testing was carried out using Jest, test output below:
```
 PASS  __test__/account.test.js
  Account
    ✓ starts with a balance of 0 (3 ms)
    deposit
      ✓ allows users to add to the balance (1 ms)
      ✓ creates a new transaction (1 ms)
    withdraw
      ✓ allows users to reduce the balance (1 ms)
      ✓ throws an error if balance goes below 0 (10 ms)
      ✓ creates a new transaction
    history
      ✓ the account starts with an empty history
    printStatement
      ✓ the account can request a printed statement (1 ms)

 PASS  __test__/feature.test.js
  Feature test
    ✓ users can create an empty bank account
    ✓ users can make deposits
    ✓ users can make withdrawls
    ✓ the date associated with a transaction is recorded (1 ms)
    ✓ users can request a statement (18 ms)

 PASS  __test__/statement.test.js
  Statement
    ✓ it can display the statement header with no history
    for one transaction
      ✓ it can display credit (1 ms)
      ✓ it can display debit
      ✓ it can display balance
    for multiple transactions
      ✓ it shows the transactions in reverse chronological order (1 ms)

 PASS  __test__/transaction.test.js
  Transaction
    ✓ it records the date
    ✓ it records deposits
    ✓ it records withdrawls
    ✓ it records the balance (1 ms)

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |    92.31 |     100 |     100 |                   
 account.js     |     100 |      100 |     100 |     100 |                   
 statement.js   |     100 |    83.33 |     100 |     100 | 17                
 transaction.js |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        0.436 s, estimated 1 s
Ran all test suites.
```
Evidence of passing the acceptance test:
![here](./img/feature_test_pass.png)

