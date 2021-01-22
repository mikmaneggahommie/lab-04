var accountNumber = 1;
var balance = 20000;
var receiverAccountNumber = 2;
function thankYou() {
    console.log("Thanks for using our service!");
    return;
}
function displayBalance(){
    console.log("Your current balance is: $" + balance);
    thankYou();
    return;
}
function makeDeposit(depositAmount) {
    balance = balance + parseInt(depositAmount);
    console.log("Deposit made successfully");
    displayBalance();
}
function makeWithdrawal(withdrawalAmount) {
    if (withdrawalAmount < 50){
            console.log("Sorry! The minimum amount that can be withdrawn at a time is 50!");
    }else if (withdrawalAmount > 6000){
            console.log("Sorry! The maximum amount that can be withdrawn at a time is 6000!");
    }else {
        if (withdrawalAmount > balance){
            console.log("Dear customer you don't have enough balance to make this much withdraw!!");
        }else{
            let decision = prompt("You are making a withdraw from the account " + accountNumber + ": y/n: ");
                if (decision == "y"){
                    balance = balance - parseInt(withdrawalAmount);
                    console.log("Withdrawal Made Successfully!!");
                    displayBalance();
                    return;
                }else{
                    console.log("Withdrawal canceled!");
                    thankYou();
                    return;
                }
        }
    }
}