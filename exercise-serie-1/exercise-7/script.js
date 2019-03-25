//Check to see if script is linked properly.
console.log("This script is linked properly!")

/* // for loop
for (let i = 0; i < 100 i++) {
console.log("Click here")  
}  */ 



//Write your JS code here...

let turn = 0;
let word = document.getElementById("btn");

function btnMove() {
    turn ++;
    if (turn === 5) {
        turn = 0;
    }

    let btn = document.getElementById("btn");
    btn.style.top = Math.floor((Math.random() * 200) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 400) + 1) + "px";

    switch (turn) {
        case 0:
        word.textContent = "Try again"
            break; 
        case 1:
        word.textContent = "Looser"
            break; 
        case 2:
        word.textContent = "You can't even do this??"
            break; 
        case 3:
        word.textContent = "Hopeless ;-)"
            break; 
    }
}
