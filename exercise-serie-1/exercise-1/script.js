//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...



// als er op de button geklikt wordt veranderd de achtergrond kleur
var displayBlackCanvas = document.getElementById("blackCanvas");
var displayRedButton = document.getElementById("displayRedButton");

 document.getElementById("displayRedButton").onclick = function () {
    this.style.backgroundcolor = "red";
    document.getElementById("displayRedButton").style.backgroundColor = "red";
}

var displayGreenButton = document.getElementById("displayGreenButton");

 document.getElementById("displayGreenButton").onclick = function () {
    this.style.backgroundcolor = "Green";
    document.getElementById("displayGreenButton").style.backgroundColor = "green";
}

var displayBlueButton = document.getElementById("displayBlueButton");

 document.getElementById("displayBlueButton").onclick = function () {
    this.style.backgroundcolor = "blue";
    document.getElementById("displayBlueButton").style.backgroundColor = "blue";
}


