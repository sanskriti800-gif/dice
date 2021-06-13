var randomNumber1=Math.floor(Math.random()*6)+1;
var diceImage = "dice"+randomNumber1+".jpg";
document.querySelectorAll("img")[0].setAttribute("src",diceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage = "dice"+randomNumber2+".jpg";
document.querySelectorAll("img")[1].setAttribute("src",diceImage);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="✨ Player 1 wins !"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins ! ✨"
}
else {
    document.querySelector("h1").innerHTML=" Draw !!"
}