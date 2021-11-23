//const nameOne=prompt("Name of player One");
//const nameTwo=prompt("Name of player two");
//const h2PlayerOne=document.getElementById("h2-player-one");
//const h2PlayerTwo=document.getElementById("h2-player-two");
const imgPlayerOne=document.getElementById("img-player-one");
const imgPlayerTwo=document.getElementById("img-player-two");


/* Put the names of the players */
//h2PlayerOne.textContent+=nameOne;
//h2PlayerTwo.textContent+=nameTwo;

const hands=["paper","rock","scissors"];

function randomHands(){
    let i=Math.floor(Math.random()*3)
    return "images/"+hands[i]+".svg"
}

const playBtnOne=document.getElementById("btn-one");

playBtnOne.addEventListener("click", function(){
    var img=document.createElement("img");
    img.src=randomHands();
    imgPlayerOne.appendChild(img);
})

const playBtnTwo=document.getElementById("btn-two");

playBtnTwo.addEventListener("click", function(){
    var img=document.createElement("img");
    img.src=randomHands();
    imgPlayerTwo.appendChild(img);
})
