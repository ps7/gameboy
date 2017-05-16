// Business Logic//
//Pokemon Constructor//
function Pokemon (name, health, type) {
  this.pokemonName = name;
  this.health = health;
  this.pokemonType = type;
}

function Game (currentNumber){
  this.currentNumber = currentNumber;
}

//random number generator
function getRandomInt() {
  return Math.floor(Math.random() * 10) + 1;
}

function specialAttack() {
  return getRandomInt() * 2 + 9;
}



//Pokemon attack prototypes//
Pokemon.prototype.pikaAttack = function (opponent) {
  var num = getRandomInt();//set num to random number
  opponent.health -= num;//subtract num from oppponent health
  let health = document.getElementById("pl2-health")//set local scope variable for any elements with id pl2-health
  health.value -= num;//subtract num from the health attribute of the progress element selected
  gameOver(opponent);//check if the attack killed the opponent and display game over if so
  Game.currentNumber = num;
}

Pokemon.prototype.pikaAttack2 = function (opponent) {
  var num = specialAttack();
  opponent.health -= num;
  let health = document.getElementById("pl2-health")
  health.value -= num;
  gameOver(opponent);
  Game.currentNumber = num;
}


Pokemon.prototype.charAttack = function (opponent) {
  var num = getRandomInt();
  opponent.health -= num;
  let health = document.getElementById("pl1-health")
  health.value -= num;
  gameOver(opponent);
  Game.currentNumber = num;
}
//Game over condition evaluator function//
function gameOver(opponent) {
  if (opponent.health <= 0) {
    alert("game over")
  }
}

//Created Pokemon//
var Charzard = new Pokemon("Charzard", 100, "fire");
var Pikachu = new Pokemon("Pikachu", 100, "lightning");
var currentGame = new Game(0);



//--------------------------------

//User Logic//
$(function() {
  $("#pl1-att1").click(function (){//when user clicks player 1's attack 1 button...
    Pikachu.pikaAttack(Charzard);//do Pikachu attack on charzard
    $("#log").empty().text("Pikachu attacks Charzard!  Charzard sustains " + Game.currentNumber + " damage.");//display damage done info to user in log div
  });

  $("#pl1-att2").click(function (){//when user clicks player 1's attack 1 button...
    Pikachu.pikaAttack2(Charzard);//do Pikachu attack on charzard
    $("#log").empty().text("Pikachu attacks Charzard!  Charzard sustains " + Game.currentNumber + " damage.");//display damage done info to user in log div
  });


  $("#pl2-att1").click(function (){//when user clicks player 2's attack 1 button...
    Charzard.charAttack(Pikachu);//do Charzard attack on Pikachu
    $("#log").empty().text("Charzard attacks Pikachu!  Pikachu sustains " + Game.currentNumber + " damage.");//display damage done info to user in log div
  });




});
