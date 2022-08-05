
//countClick for alternating xs and os
let countClick=0
localStorage.setItem("counter", countClick)
let squareArray=["a1","a2","a3","b1","b2","b3","c1","c2","c3"]
let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
//the function that places the xs and os
const onClick = function(countClick) {
    let place = this.id

    countClick = Number(localStorage.getItem("counter"))

    let playerValue=""
    if (countClick%2==0){
        playerValue="X"
    }
    else {
        playerValue="O"
    }
    
    document.getElementById(place).innerHTML = playerValue
    console.log(this.id, this.innerHTML);
    countClick+=1
    localStorage.setItem("counter", countClick)

    winner()

    return countClick
  }
  
// each square listens for click
document.getElementById("a1").onclick = onClick
document.getElementById("a2").onclick = onClick
document.getElementById("a3").onclick = onClick
document.getElementById("b1").onclick = onClick
document.getElementById("b2").onclick = onClick
document.getElementById("b3").onclick = onClick
document.getElementById("c1").onclick = onClick
document.getElementById("c2").onclick = onClick
document.getElementById("c3").onclick = onClick


//check for winner

function winner(){
    console.log(a1.innerHTML, a2.innerHTML, a3.innerHTML)

    if ((a1.innerHTML == a2.innerHTML == a3.innerHTML)&&(a1.innerHTML!="")){
        console.log("winner")
        document.getElementById("win").innerHTML = "winner"
        }
}
//reset button resets game
function resetGame(){
    localStorage.clear()
    for(let i=0;i<9;i++){
        document.getElementById(squareArray[i]).innerText = ""
    }return countClick
}
document.querySelector("button").onclick = resetGame
