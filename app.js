var textArea = document.getElementById("text-area");

var img = document.getElementById("img");

var paragraph = document.getElementById("paragraph");

var button = document.getElementById("button");

var lunch1 = {
imagesrc : "",
name : "Cheseburger",
adjective : "12 Inch",
verb : "Roller-Skating",
};

var lunch2 = {
    imagesrc : "",
    name : "Hot Dog",
    adjective : "Juicy",
    verb : "Surfing",
    };

var lunch3 = {
    imagesrc : "",
    name : "Salad",
    adjective : "Moist",
    verb : "Swimming",
    };

var lunch4 = {
    imagesrc : "",
    name : "Clam Chowder",
    adjective : "Thicc",
    verb : "Swishing",
    };

var lunch5 = {
    imagesrc : "",
    name : "Taco",
    adjective : "Sexy",
    verb : "Jumping",
     };

var lunchOptions = [lunch1, lunch2, lunch3, lunch4, lunch5];     
button.addEventListener("click", function(){
    var randomNumber = Math.floor((Math.random() *5) +0);
    textArea.innerHTML= lunchOptions[randomNumber].name
    
});     
 
     

