let firstButton = document.getElementById("firstbtn")


let score = 18



function increment(){
    score+=1
    firstButton.innerText = score
}



function increase(){
    score += 2
    firstButton.innerText= score
}
   

function onyons(){
    score +=3
    firstButton.innerText= score
}

let secondBtn = document.getElementById("secondbtn")
let secondScore = 10

function grow(){
    secondScore += 1
    secondBtn.innerText = secondScore
}

function dblincrement(){
    secondScore += 2
    secondBtn.innerText = secondScore

}

function tplincrement(){
    secondScore += 3
    secondBtn.innerText = secondScore
}