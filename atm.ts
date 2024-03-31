import inquirer from "inquirer";

let myBalance = 100000;
let pinCode = 2211;

let pinAnswer = await inquirer.prompt([
  {
    name: "Code",
    message: "Enter Your Password",
    type: "number",
  },
]);

if (pinAnswer.Code === pinCode) {
  let operation_Ans = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "Fast Cash", "Check Balance"],
    },
  ]);

  //if you select withdraw
  if (operation_Ans.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      { name: "amount", message: "enter your amount", type: "number" },
    ]);

    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(`The Remaining Balance is ${balance}`);
    } else {
      console.log(`You have insufficent balance`);
    }
  }

  // //if you select Fast Cash
  else if (operation_Ans.operation === "Fast Cash") {
    let FastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["2000", "5000", "10000", "20000"],
      },
    ]);

    if (FastcashAns.amount <= myBalance) {
      let balance2 = myBalance - FastcashAns.amount;
      console.log(`the remaining balance is ${balance2}`);
    } else {
      console.log(`You have insufficent amount`);
    }
  } else if (operation_Ans.operation === "Check Balance") {
    console.log(myBalance);
  } 
}
else {
    console.log(`Incorrect Pin Code...`);
  }
