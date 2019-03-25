//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var Shuffle = window.Shuffle;
var element = document.getElementsByClassName('button');
var sizer = document.getElementsById('carousel');

var shuffleInstance = new Shuffle(button, {
  carousel: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});