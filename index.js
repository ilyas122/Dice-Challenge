var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDice="dice"+ randomNumber1+ ".png";
var randomImageSource="images/"+ randomDice;
var image1=document.querySelector("img")[0];
image1.setAttribute("src",randomImageSource);


document.querySelector("hi").innerHTML="Player 1 wins";
