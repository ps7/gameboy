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

//random number generator functions
function getRandomInt() {
  return Math.floor(Math.random() * 10) + 1;
}

function pikachuSpecial() {
  if (Charmander.pokemonType === "water") {
    return getRandomInt() * 2 + 9;
  } else {
    return getRandomInt() * 1.4.toPrecision(1);
  };
};

function charSpecial() {
  return getRandomInt() * 2 + 9;
}


// Game.prototype.appendString = function (x, y) {
//   return "<p> " + x + " attacks " + y + "! </p>  <p>" + y + " sustains " + Game.currentNumber + " damage.</p>"
// };

//Game over condition evaluator function//
function gameOver(opponent) {
  if (opponent.health <= 0) {
    alert("game over");
    location.reload();
  }
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
  var num = pikachuSpecial();
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

Pokemon.prototype.charAttack2 = function (opponent) {
  var num = charSpecial();
  opponent.health -= num;
  let health = document.getElementById("pl1-health")
  health.value -= num;
  gameOver(opponent);
  Game.currentNumber = num;
}


//Created Pokemon//
var Charmander = new Pokemon("Charmander", 100, "fire");
var Pikachu = new Pokemon("Pikachu", 100, "lightning");
var currentGame = new Game(0);



//--------------------------------

//User Logic//
$(function() {
  $("#pl1-att1").click(function (){//when user clicks player 1's attack 1 button...
    Pikachu.pikaAttack(Charmander);//do Pikachu attack on Charmander
    $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl2-health-number").text(Charmander.health);
  });

  $("#pl1-att2").click(function (){//when user clicks player 1's attack 1 button...
    Pikachu.pikaAttack2(Charmander);//do Pikachu attack on Charmander
    $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl2-health-number").text(Charmander.health);

  });


  $("#pl2-att1").click(function (){//when user clicks player 2's attack 1 button...
    Charmander.charAttack(Pikachu);//do Charmander attack on Pikachu
    $("#log").empty().append("<p>Charmander attacks Pikachu!</p> <p>Pikachu sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl1-health-number").text(Pikachu.health);
  });

  $("#pl2-att2").click(function (){//when user clicks player 1's attack 1 button...
    Charmander.charAttack2(Pikachu);//do Pikachu attack on Charmander
    $("#log").empty().append("<p>Chamander attacks Pikachu!</p>  <p>Pikachu sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl1-health-number").text(Pikachu.health);
  });



});
