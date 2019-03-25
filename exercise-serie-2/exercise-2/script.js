//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('get', 'https://api.punkapi.com/v2/beers', true);

request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
  data.forEach(beer => {
      /* console.log(beer.name);
      console.log(beer.description); */

      const row1 = document.getElementById("row-1");

      // create a div with a card class
      const card = document.createElement("div");
        card.setAttribute("class",'card shadow d-flex align-items-center mt-5');

      const img = document.createElement("img");
        img.setAttribute("class",'card-img-top card-title pt-3 pb-3 rounded');
        img.src = beer.image_url;

      const cardbody = document.createElement("div");
        cardbody.setAttribute("class",'card-body d-flex justify-content-center flex-column text-center');
    
      const h3 = document.createElement('h3');
      h3.textContent = beer.name;
      
      const h4 = document.createElement('h4');
      h4.textContent = beer.tagline;

      const p = document.createElement('p');
      p.textContent = beer.first_brewed;

    // append the cards to the container element
      row1.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardbody);
      cardbody.appendChild(h3);
      cardbody.appendChild(h4);
      cardbody.appendChild(p);

    })

  } else {
     console.log("I sorry, I can't find it :( "); 
  }
}

// Send request
request.send();