let income = document.getElementById("incomeNumber");
let balance = document.getElementById("balanceNumber");
let expense = document.getElementById("expenseNumber");
let inputField = document.getElementById("inputField");
let incVal = 0;
let balVal = 0;
let expenseVal = 0;
let exVal = 0;
let totalVal = 0;
balance.innerHTML = totalVal;
income.innerHTML = incVal;
expense.innerHTML = expenseVal;

function calculator(type) {
  if (type === "incomeBtn") {
    incVal = incVal + +inputField.value;
    income.innerText = incVal;
    balVal = +inputField.value;
    totalVal = totalVal + balVal;
    balance.innerText = totalVal;
    console.log(incVal);
    inputField.value = "";
  }

  if (type === "expenseBtn") {
    exVal = exVal + +inputField.value;
    expense.innerText = exVal;
    expenseVal = +inputField.value;
    totalVal = totalVal - expenseVal;
    balance.innerText = totalVal;
    console.log(expenseVal);
    inputField.value = "";
  }
}
