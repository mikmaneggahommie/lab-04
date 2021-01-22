let setOfNumbers = new Array();
var choice;
function addition(setOfNumbers) {
    let sum = 0;
    setOfNumbers.forEach(function(member, index){
        sum = sum + parseInt(member);
    });
    console.log("The sum of : " +_ setOfNumbers + "is " + sum);
}
function subtraction(firstNumber, secondNumber) {
    let difference = firstNumber - secondNumber;
    console.log("The difference of : " + firstNumber + " and " + secondNumber + " is " + difference);
}
function multiplication(setOfNumbers) {
    let product = 1;
    setOfNumbers.forEach(function(member, index){
        product = product * parseInt(member);
    });
    console.log("The product of :" + setOfNumbers + " is " + product);
}
function division(firstNumber, secondNumber) {
    if (secondNumber == 0) {
        console.log("Invalid Form: Rational numbers can't be divided by 0");
        return;
    } else {
        quotient = firstNumber / secondNumber
    }
}
console.log("The quotient of " + firstNumber + " and " + secondNumber + " is " + quotient);
console.log("Division done from left to right");
}
function multipleNumberReceiver() {
    let numberLength = prompt("How many numbers: ");
    for (let i = 0; i < parseInt(numberLength); i++){
        setOfNumbers[i] = prompt("Your Number " + (i + 1));
    }
}