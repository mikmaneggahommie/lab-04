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
(function(){
    
    choice = prompt("Choose 1 for Addition, 2 for Subtraction, 3 for Multiplication, 4 for Division");

   
    if(choice == "1"){
        console.log("Addition")
        multipleNumberReceiver();
        addition(multipleNumberReceiver);    
    }
    
    else if(choice == "2"){
        console.log("Subtraction");
        let firstNumber = prompt("Your 1st number: ");
        let secondNumber = prompt("Your second Number: ");
        subtraction(firstNumber, secondNumber);
    }
   
    else if(choice == "3"){
        console.log("Multiplication");
        multipleNumberReceiver();
        multiplication(setOfNumbers);
    }
    
    else if(choice == "4"){
        console.log("Division");
        let firstNumber = prompt("Your 1st number: ");
        let secondNumber = prompt("Your second Number: ");
        division(firstNumber, secondNumber);  
    }

    else{
        console.log("Wrong Choice!!");
    }
})();