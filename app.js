var textarea = document.getElementById("text-area");

var img = document.getElementById("img");

var paragraph = document.getElementById("paragraph");

var button = document.getElementById("button");

var Lunch1 = {
imagesrc : "",
name : "Cheseburger",
adjective : "12 Inch",
verb : "Roller-Skating",
};

var Lunch2 = {
    imagesrc : "",
    name : "Hot Dog",
    adjective : "Juicy",
    verb : "Surfing",
    };

var Lunch3 = {
    imagesrc : "",
    name : "Salad",
    adjective : "Moist",
    verb : "Swimming",
    };

var Lunch4 = {
    imagesrc : "",
    name : "Clam Chowder",
    adjective : "Thicc",
    verb : "Swishing",
    };

var Lunch5 = {
    imagesrc : "",
    name : "Taco",
    adjective : "Sexy",
    verb : "Jumping",
     };

var lunchOptions = [lunch1, lunch2, lunch3, lunch4, lunch5];     

button.addEventListener("click", function(){
var random = Math.random();
console.log(random);
});     
 
     

