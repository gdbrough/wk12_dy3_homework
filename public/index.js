const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers);
};

const populateList = function(beers){
  const ul = document.getElementById("beer-list");
  // for (let index in beers){
  beers.forEach(function(beer){
    let li = document.createElement("li");
    li.innerHTML = "<h2>" + beer.name + "</h2>";
    let photo = document.createElement("li");
    photo.innerHTML = "<img src=\"" + beer.image_url + "\">"
    let ingredients = document.createElement("li");
    ingredients.innerHTML = displayIngredients(beer.ingredients);
    let divider = document.createElement("li");
    divider.innerHTML = "<hr />";
    ul.appendChild(li);
    ul.appendChild(photo);
    ul.appendChild(ingredients);
    ul.appendChild(divider);
  });
  // };
};

const displayIngredients = function(ingredients){
  let malts = [];
  for (let malt of ingredients.malt){
    malts.push(malt.name);
  };

  let hops = [];
  for (let hop of ingredients.hops){
    hops.push(hop.name);
  };

  return "<h3>Ingredients:</h3>" +
    "Malts: " + malts.join(", ") +
    "<br />Hops: " + hops.join(", ") +
    "<br />Yeast: " + ingredients.yeast;
};



const app = function(){
    const url = "https://api.punkapi.com/v2/beers";
    makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
