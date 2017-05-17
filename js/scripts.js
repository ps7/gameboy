// Business Logic//
//Created Pokemon//
var Charmander = new Pokemon("Charmander", 100, "fire");
var Pikachu = new Pokemon("Pikachu", 100, "lightning");
var currentGame = new Game(0);

//Pokemon Constructor//
function Pokemon (name, health, type) {
  this.pokemonName = name;
  this.health = health;
  this.pokemonType = type;
}
//Lena help
function Game (currentNumber){
  this.currentNumber = currentNumber;
  this.players=[];
  this.currentPlayer=true;
}



//random number generator functions
function getRandomInt() {
  return Math.floor(Math.random() * 10) + 1;
}

// Game.prototype.appendString = function (x, y) {
//   return "<p> " + x + " attacks " + y + "! </p>  <p>" + y + " sustains " + Game.currentNumber + " damage.</p>"
// };
function charSpecial() {
  return getRandomInt() * 2 + 9;
};

//Game over condition evaluator function//
function gameOver(opponent) {
  if (opponent.health <= 0) {
    alert("game over");
    location.reload();
  }
}

//Pokemon attacks//
Pokemon.prototype.pikaAttack = function (opponent) {
  var num = getRandomInt();//set num to random integer beteween 1 and 10
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

function pikachuSpecial() {
  if (Charmander.pokemonType === "water") {
    return getRandomInt() * 2 + 9;
  } else {
    return getRandomInt() * 1.4.toPrecision(1);
  };
};

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

Game.prototype.switchPlayer = function () {
  if (currentGame.currentPlayer === true) {
    $(".player1button").attr("disabled", true);
    $(".player2button").attr("disabled", false);
    currentGame.currentPlayer = false;
  } else {
    $(".player1button").attr("disabled", false);
    $(".player2button").attr("disabled", true);
    currentGame.currentPlayer = true;
  }
};




//--------------------------------

//User Logic//
$(function() {
// //Lena help
//   $("button").click(function (){//when user clicks player 1's attack 1 button...
//   var clickId = $(this)[0].id;
//   console.log(clickId);
//   //Lena help ^
//     Pikachu.pikaAttack(Charmander);//do Pikachu attack on Charmander
//     $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
//     $("#pl2-health-number").text(Charmander.health);
//     $(".initially-hidden").show();
//     $("#player1col, #player2col").hide();
//   });

  //attack button click functions
  $("#pl1-att1").click(function (){//when user clicks player 1's attack 1 button...
    Pikachu.pikaAttack(Charmander);//do Pikachu attack on Charmander
    $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl2-health-number").text(Charmander.health);
    $(".initially-hidden").show();
    $("#player1col, #player2col").hide();
  });

  $("#pl1-att2").click(function (){//when user clicks player 1's attack 1 button...

    Pikachu.pikaAttack2(Charmander);//do Pikachu attack on Charmander
    $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl2-health-number").text(Charmander.health);
    $(".initially-hidden").show();
    $("#player1col, #player2col").hide();

  });

  $("#pl2-att1").click(function (){//when user clicks player 2's attack 1 button...
    Charmander.charAttack(Pikachu);//do Charmander attack on Pikachu
    $("#log").empty().append("<p>Charmander attacks Pikachu!</p> <p>Pikachu sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl1-health-number").text(Pikachu.health);
    $(".initially-hidden").show();
    $("#player1col, #player2col").hide();

  });

  $("#pl2-att2").click(function (){//when user clicks player 1's attack 1 button...
    Charmander.charAttack2(Pikachu);//do Pikachu attack on Charmander
    $("#log").empty().append("<p>Chamander attacks Pikachu!</p>  <p>Pikachu sustains " + Game.currentNumber + " damage.</p>");//display damage done info to user in log div
    $("#pl1-health-number").text(Pikachu.health);
    $(".initially-hidden").show();
    $("#player1col, #player2col").hide();
  });

  $(".initially-hidden").click(function() {
    $("#player1col, #player2col").show();
    $(".initially-hidden").hide();
  });

});
