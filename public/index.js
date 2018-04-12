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
  for (let index in beers){
    let li = document.createElement("li");
    li.innerHTML = "<b>" + beers[index].name + "</b>";
    let photo = document.createElement("li");
    photo.innerHTML = "<img src=\"" + beers[index].image_url + "\">"
    let ingredients = document.createElement("li");
    ingredients.innerText = displayIngredients(beers[index].ingredients);
    let divider = document.createElement("li");
    divider.innerHTML = "<hr />";
    ul.appendChild(li);
    ul.appendChild(photo);
    ul.appendChild(ingredients);
    ul.appendChild(divider);
  };
};

const displayIngredients = function(ingredients){
  // console.log(ingredients.malt[0].name);
  // const ingrediantsList = document.getElementById("ingrediants-list")
  // while(ingrediantsList.firstChild){
  //   ingrediantsList.removeChild(ingrediantsList.firstChild);
  // }
  // const paragraph = document.createElement("p");
  for (let malt of ingredients.malt){
  // ingredients.forEach(function(ingredient){
    // ingredient.forEach(function())
    console.log(malt);
  };
  let ingredient = ingredients.malt[0].name;
  // ingrediantsList.appendChild(paragraph)
  return ingredient;
};



const app = function(){
    const url = "https://api.punkapi.com/v2/beers";
    makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
