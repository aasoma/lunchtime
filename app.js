var textArea = document.getElementById("text-area");

var img = document.getElementById("img");

var paragraph = document.getElementById("paragraph");

var button = document.getElementById("button");

var lunch1 = {
imagesrc : "https://www.redrobin.com/content/dam/web/menu/2015-june/bacon-cheeseburger-1100.jpg",
name : " Cheseburger",
adjective : "12 Inch",
verb : " Roller-Skating",
};

var lunch2 = {
    imagesrc : "http://i1.ytimg.com/vi/tkXyM4Tzn7c/hqdefault.jpg",
    name : " Hot Dog",
    adjective : "Juicy",
    verb : " Surfing",
    };

var lunch3 = {
    imagesrc : "https://recipes.heart.org/-/media/aha/recipe/recipe-images/mediterranean-salad.jpg",
    name : " Salad",
    adjective : "Moist",
    verb : " Swimming",
    };

var lunch4 = {
    imagesrc : "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/08/01/clam-chowder-ck-1696572-x.jpg?itok=IZoSUuzS",
    name : " Clam Chowder",
    adjective : "Thicc",
    verb : " Swishing",
    };

var lunch5 = {
    imagesrc : "http://img.taste.com.au/w_-0kcUJ/taste/2016/11/aussie-style-beef-and-salad-tacos-86525-1.jpeg",
    name : " Taco",
    adjective : "Sexy",
    verb : " Jumping",
     };

var lunchOptions = [lunch1, lunch2, lunch3, lunch4, lunch5];     
button.addEventListener("click", function(){
    var randomNumber = Math.floor((Math.random() *5) +0);
    textArea.innerHTML= lunchOptions[randomNumber].adjective+lunchOptions[randomNumber].verb+lunchOptions[randomNumber].name
    img.src = lunchOptions[randomNumber].imagesrc;
});
