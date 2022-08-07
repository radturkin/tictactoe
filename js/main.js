class Game {
  constructor(name) {
    // Start of constructor
    // Parameters
    this._name = name;

    // Setting "self" as this here means we can refer to object variables
    // from within individual methods.
    let self = this;

    // Private properties
    let a1 = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let a3 = document.getElementById("a3");
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    this.countClick = 0;
    this.playerValue = "";

    // each square listens for click
    a1.onclick = this.onClick;
    a2.onclick = this.onClick;
    a3.onclick = this.onClick;
    b1.onclick = this.onClick;
    b2.onclick = this.onClick;
    b3.onclick = this.onClick;
    c1.onclick = this.onClick;
    c2.onclick = this.onClick;
    c3.onclick = this.onClick;
    document.querySelector("button").onclick = this.resetGame;
  }

  // End of Constructor

  get name() {
    return this._name;
  }
  //the function that places the xs and os
  onClick = function (countClick) {
    let place = this.id;

    self.countClick = Number(localStorage.getItem("counter"));

    if (self.countClick % 2 == 0) {
      self.playerValue = "X";
    } else {
      self.playerValue = "O";
    }

    document.getElementById(place).innerHTML = self.playerValue;
    console.log(this.id, this.innerHTML);
    self.countClick += 1;
    localStorage.setItem("counter", self.countClick);

    const winner = function () {
      console.log(a1.innerHTML, a2.innerHTML, a3.innerHTML);
      //array of array if x+1, if o-1 if =3 x wins if =-3 o wins
      let winArray = [
        [a1.innerHTML, a2.innerHTML, a3.innerHTML],
        [b1.innerHTML, b2.innerHTML, b3.innerHTML],
        [c1.innerHTML, c2.innerHTML, c3.innerHTML],
        [a1.innerHTML, b1.innerHTML, c1.innerHTML],
        [a2.innerHTML, b2.innerHTML, c2.innerHTML],
        [a3.innerHTML, b3.innerHTML, c3.innerHTML],
        [a1.innerHTML, b2.innerHTML, c3.innerHTML],
        [a3.innerHTML, b2.innerHTML, c1.innerHTML],
      ];
      for (let array of winArray) {
        if (array[0] == array[1] && array[2] == array[0] && array[0] != "") {
          console.log(`congrats the winner is ${array[0]}`);
          document.getElementById(
            "win"
          ).innerHTML = `congrats the winner is ${array[0]}`;
          break;
        } else {
          document.getElementById("win").innerHTML =
            "No Winner has been detected";
        }
      }
    };
    winner();

    return self.countClick;
  };
  //check for winner

  //reset button resets game
  resetGame = function () {
    localStorage.clear();
    window.location.reload();
  };
}

// Declare the new object
const tictactoe = new Game("tictactoe");

////////////////////////// Old Program //////////////////
//countClick for alternating xs and os

localStorage.setItem("counter", tictactoe.countClick);
