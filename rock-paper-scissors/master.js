
const hands=["paper","rock","scissors"];
const playBtnOne=document.getElementById("btn-one");
const playBtnTwo=document.getElementById("btn-two");
const imgHolderOne=document.getElementById("img-holder-one");
const imgHolderTwo=document.getElementById("img-holder-two");
let countOneClicks=0;
let countTwoClicks=0;

function randomHands(){
    let i=Math.floor(Math.random()*3)
    return "images/"+hands[i]+".svg"
}

function renderImg(div){
    let img=document.createElement("img");
    img.src=randomHands();    
    div.appendChild(img);
}


playBtnOne.addEventListener("click", function(){
    countOneClicks++;
    if(countOneClicks<=3){
    renderImg(imgHolderOne)
    }
} )

playBtnTwo.addEventListener("click", function(){
    countTwoClicks++;
    if(countTwoClicks <=3){
    renderImg(imgHolderTwo)
    }
} )
