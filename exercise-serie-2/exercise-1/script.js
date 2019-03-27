//Check to see if script is linked properly.
console.log("This script is linked properly!")
//Write your JS code here...

var request = new XMLHttpRequest();

request.open('get', 'https://thecatapi.com/', true);

request.onload = function() {
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
  data.forEach(catImage => {

    const row1 = document.getElementById("row-1");
    const img = document.createElement("img");
    img.setAttribute("class",);
    img.scr = cat.image_url;

    row1.appendChild(img);
  })

} else {
  console.log("No cat pictures available");
} 
}

request.send();

setInterval(api, 1000);

