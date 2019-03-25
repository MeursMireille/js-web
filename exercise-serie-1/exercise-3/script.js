//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function ValidateName() {
    var Name = document.forms["formApplication"]["Name"].value;
    if (Name == "") {
        prompt('Please insert your Name & Surname');
        return false;
    }
}
ValidateName();

function ValidatePower() {
    var Power = document.forms["formApplication"]["Power"].value;
    if (Power == "") {
        prompt('Please insert your Super Power');
        return false;
    }
}
ValidatePower();

function ValidateMotivation() {
    var Motivation = document.forms["formApplication"]["Motivation"].value;
    if (Motivation == "") {
        prompt('Please insert your Motivation');
        return false;
    }
}
ValidateMotivation();

function ValidateConquer() {
    var Conquer = document.forms["formApplication"]["Conquer"].value;
    if (Conquer == "") {
        prompt('Please insert how you would Conquer the world');
        return false;
    }
}
ValidateConquer();

function pushButton(push) {
    var reset = document.getElementsById(reset);
    console.log('Your input is lost');  
}
pushButton();

function pushButton(push) {
    var display = document.getElementById(display);
    console.log('Thanks for your input');
}
pushButton();