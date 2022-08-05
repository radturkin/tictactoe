
//HI I am working on the tic tac toe projcet from class 30 
//please join me
//countClick for alternating xs and os
let countClick=0
localStorage.setItem("counter", countClick)

//the function that places the xs and os
const onClick = function(countClick) {
    console.log(this.id, this.innerHTML);
    let place = this.id

    countClick = Number(localStorage.getItem("counter"))

    let playerValue=""
    if (countClick%2==0){
        playerValue="X"
    }
    else {
        playerValue="O"
    }
    
    document.getElementById(place).innerText = playerValue
    countClick+=1
    localStorage.setItem("counter", countClick)

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

//reset button

