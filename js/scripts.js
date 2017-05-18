// Business Logic//
//Created Pokemon//
var Charmander = new Pokemon("Charmander", 100, "fire");
var Pikachu = new Pokemon("Pikachu", 100, "lightning");
var currentGame = new Game(0);

//Pokemon Constructor//
function Pokemon (name, health, type, miss, crit) {
  this.pokemonName = name;
  this.health = health;
  this.pokemonType = type;
  this.miss = miss;
  this.crit = crit;
};
//Lena help
function Game (currentNumber){
  this.currentNumber = currentNumber;
  // this.players=[];
  this.currentPlayer = true;
  this.miss = false;
  this.crit = false;
};



//random number generator functions
function getRandomInt() {
  return Math.floor(Math.random() * 4) + 8;
};


// Game.prototype.appendString = function (x, y) {
//   return "<p> " + x + " attacks " + y + "! </p>  <p>" + y + " sustains " + Game.currentNumber + " damage.</p>"
// };
var faint = new Audio('sounds/charmander.mp3')
var end = new Audio('sounds/ending.mp3')
//Game over condition evaluator function//
function gameOver(opponent) {
  if (opponent.health <= 0) {
    battle.pause();
    faint.play();
    $(".screen").hide();
    $("#win-screen").toggleClass("hidden-screen", function() {
      end.play();
    });
    $("#credits").delay(3000).animate({top: '-=2350px'}, 14000);
  }
}

//Pokemon attacks//
// Pokemon.prototype.pikaAttack = function (opponent) {
//   var num = getRandomInt() - 2;//set num to random integer beteween 1 and 10
//   opponent.health -= num;//subtract num from oppponent health
//   let health = document.getElementById("pl2-health")//set local scope variable for any elements with id pl2-health
//   health.value -= num;//subtract num from the health attribute of the progress element selected
//   gameOver(opponent);//check if the attack killed the opponent and display game over if so
//   Game.currentNumber = num;
// };





//pikachu's attacks

//pikachu attack 1
Pokemon.prototype.attack1 = function (opponent) {
  var dieRoll = Math.floor(Math.random() * 10) +1;//die roll from 1-10 to decide if there's miss or crit
  var dieRoll2 = Math.floor(Math.random() * 4) + 8; //regular die roll that determines the base number for attacks

  if (dieRoll === 1) {
    currentGame.currentNumber = 0;
    currentGame.miss = true;

  } else if (dieRoll === 10) {
    var criticalDieRoll = dieRoll2 + 8;
    currentGame.currentNumber = criticalDieRoll;
    currentGame.crit = true;
    opponent.health -= criticalDieRoll;
    let health = document.getElementById("pl2-health")
    health.value -= criticalDieRoll;
    currentGame.currentNumber = criticalDieRoll;

  } else if (true) {
    opponent.health -= dieRoll2;
    let health = document.getElementById("pl2-health")
    health.value -= dieRoll2;
    currentGame.currentNumber = dieRoll2;
  }

  gameOver(opponent);
};

//pikachu attack 2

Pokemon.prototype.attack2 = function (opponent) {
  var dieRoll = Math.floor(Math.random() * 10) +1;//die roll from 1-10 to decide if there's miss or crit
  var dieRoll2 = Math.floor(Math.random() * 4) + 8; //regular die roll that determines the base number for attacks

  if (dieRoll === 1) {
    currentGame.currentNumber = 0;
    currentGame.miss = true;

  } else if (dieRoll === 10) {
    var criticalDieRoll = dieRoll2 + 8;
    currentGame.currentNumber = criticalDieRoll;
    currentGame.crit = true;
    opponent.health -= criticalDieRoll;
    let health = document.getElementById("pl2-health")
    health.value -= criticalDieRoll;
    currentGame.currentNumber = criticalDieRoll;

  } else if (true) {
    opponent.health -= dieRoll2;
    let health = document.getElementById("pl2-health")
    health.value -= dieRoll2;
    currentGame.currentNumber = dieRoll2;
  }

  gameOver(opponent);
};

// Pokemon.prototype.pikaAttack2 = function (opponent) {//pika special attack
//   var num = pikachuSpecial();//returns 0, 10 or a random integer in a certain range
//   opponent.health -= num;
//   let health = document.getElementById("pl2-health")
//   health.value -= num;
//   gameOver(opponent);
//   Game.currentNumber = num;
//   if (num === 0) {
//     Game.miss = true;
//     Game.crit = false;
//   } else if (num === 10 ){
//     Game.miss = false;
//     Game.crit = true;
//   } else if (num > 1) {
//     Game.crit = false;
//     Game.miss = false;
//   };
//   console.log(Game.miss);
// };


// function pikachuSpecial() {
//   if (Math.floor(Math.random() * 10) + 1 === 1) {
//     return 0;
//   } else if (Math.floor(Math.random() * 10) + 1 === 10) {
//     return 10;
//   } else if (Charmander.pokemonType === "water") {
//     return getRandomInt() * 2 + 9;
//   } else {
//     return getRandomInt() + 6;
//   };
// };
//
//charzard's attacks
//charzard attack 1
Pokemon.prototype.charzAtt1 = function (opponent) {
  var dieRoll = Math.floor(Math.random() * 10) +1;//die roll from 1-10 to decide if there's miss or crit
  var dieRoll2 = Math.floor(Math.random() * 4) + 8; //regular die roll that determines the base number for attacks

  if (dieRoll === 1) {
    currentGame.currentNumber = 0;
    currentGame.miss = true;

  } else if (dieRoll === 10) {
    var criticalDieRoll = dieRoll2 + 8;
    currentGame.currentNumber = criticalDieRoll;
    currentGame.crit = true;
    opponent.health -= criticalDieRoll;
    let health = document.getElementById("pl1-health")
    health.value -= criticalDieRoll;
    currentGame.currentNumber = criticalDieRoll;

  } else if (true) {
    opponent.health -= dieRoll2;
    let health = document.getElementById("pl1-health")
    health.value -= dieRoll2;
    currentGame.currentNumber = dieRoll2;
  }

  gameOver(opponent);
};

//charzard attack 2

Pokemon.prototype.charzAtt2 = function (opponent) {
  var dieRoll = Math.floor(Math.random() * 10) +1;//die roll from 1-10 to decide if there's miss or crit
  var dieRoll2 = Math.floor(Math.random() * 4) + 8; //regular die roll that determines the base number for attacks

  if (dieRoll === 1) {
    currentGame.currentNumber = 0;
    currentGame.miss = true;

  } else if (dieRoll === 10) {
    var criticalDieRoll = dieRoll2 + 8;
    currentGame.currentNumber = criticalDieRoll;
    currentGame.crit = true;
    opponent.health -= criticalDieRoll;
    let health = document.getElementById("pl1-health")
    health.value -= criticalDieRoll;
    currentGame.currentNumber = criticalDieRoll;

  } else if (true) {
    opponent.health -= dieRoll2;
    let health = document.getElementById("pl1-health")
    health.value -= dieRoll2;
    currentGame.currentNumber = dieRoll2;
  }

  gameOver(opponent);
};

//old charzard attacks
// Pokemon.prototype.charAttack = function (opponent) {
//   debugger;
//   var num = getRandomInt();
//   opponent.health -= num;
//   let health = document.getElementById("pl1-health")
//   health.value -= num;
//   gameOver(opponent);
//   currentGame.currentNumber = num;
// }
//
// Pokemon.prototype.charAttack2 = function (opponent) {
//   var num = charSpecial();
//   opponent.health -= num;
//   let health = document.getElementById("pl1-health")
//   health.value -= num;
//   gameOver(opponent);
//   currentGame.currentNumber = num;
// }
//
//
// function charSpecial() {
//   return getRandomInt() + 6 ;
// };

//switch player

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
//     $("#log").show();
//     $("#player1col, #player2col").hide();
//   });

$("#log").click(function() {
  $("#player1col, #player2col").show();
  $("#log").hide();
});



//HERE WE ARE WE'RE WORKING ON THIS ONE
var attacksound1 = new Audio('sounds/thunderpunch.wav')
var attacksound2 = new Audio('sounds/slash.wav')
var specialsound1 = new Audio('sounds/thunder.wav')
var specialsound2 = new Audio('sounds/flamethrower.wav')
  //attack button click functions
  $("#pl1-att1").click(function (){//when user clicks player 1's attack 1 button...
    attacksound1.play();
    Pikachu.attack1(Charmander);//do Pikachu attack on Charmander

    if (currentGame.miss === true) {//if/else statement for miss and crit
      $("#log").empty().append("<p>Pikachu Missed!</p><p>Charmander sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
      currentGame.miss = false;

    } else if (currentGame.crit === true) {
      $("#log").empty().append("<p>Critical hit!</p><p>Charmander sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + currentGame.currentNumber + " damage!</p>");
    };
    //end of if - else statement

    //this code happens no matter what
    $("#pl2-health-number").text(Charmander.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();
  });

  $("#pl1-att2").click(function (){//when user clicks player 1's attack 1 button...
    specialsound1.play();
    Pikachu.attack2(Charmander);//do Pikachu attack on Charmander
    if (currentGame.miss === true) {
      $("#log").empty().append("<p>Pikachu Missed!</p><p>Charmander sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
      currentGame.miss = false;
    } else if (currentGame.crit === true) {
      $("#log").empty().append("<p>Critical hit!</p><p>Charmander sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + currentGame.currentNumber + " damage!</p>");
    };//display damage done info to user in log div
    $("#pl2-health-number").text(Charmander.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();

  });

//charmander click functions

  $("#pl2-att1").click(function (){//when user clicks player 1's attack 1 button...
    attacksound2.play();
    Charmander.charzAtt1(Pikachu);//do Pikachu attack on Charmander

    if (currentGame.miss === true) {//if/else statement for miss and crit
      $("#log").empty().append("<p>Charmander Missed!</p><p>Pikachu sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
      currentGame.miss = false;

    } else if (currentGame.crit === true) {
      $("#log").empty().append("<p>Critical hit!</p><p>Pikachu sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#log").empty().append("<p>Charmander attacks Pikachu!</p> <p>Pikachu sustains " + currentGame.currentNumber + " damage!</p>");
    };
    //end of if - else statement

    //this code happens no matter what
    $("#pl1-health-number").text(Pikachu.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();
  });

  $("#pl2-att2").click(function (){//when user clicks player 1's attack 1 button...
    specialsound2.play();
    Charmander.charzAtt2(Pikachu);//do Pikachu attack on Charmander
    if (currentGame.miss === true) {
      $("#log").empty().append("<p>Charmander Missed!</p><p>Pikachu sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
      currentGame.miss = false;
    } else if (currentGame.crit === true) {
      $("#log").empty().append("<p>Critical hit!</p><p>Pikachu sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#log").empty().append("<p>Charmander attacks Pikachu!</p> <p>Pikachu sustains " + currentGame.currentNumber + " damage!</p>");
    };//display damage done info to user in log div
    $("#pl1-health-number").text(Pikachu.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();

  });

  $("pl1-heal").click(function (){
    //when you click heal button, a method is called on pikachu that puts his health up 20 pts
  });

  // $("#pl2-att1").click(function (){//when user clicks player 2's attack 1 button...
  //   Charmander.charAttack(Pikachu);//do Charmander attack on Pikachu
  //   $("#log").empty().append("<p>Charmander attacks Pikachu!</p> <p>Pikachu sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
  //   $("#pl1-health-number").text(Pikachu.health);
  //   $("#log").show();
  //   $("#player1col, #player2col").hide();
  //   currentGame.switchPlayer();
  //
  // });
  //
  // $("#pl2-att2").click(function (){//when user clicks player 1's attack 1 button...
  //   Charmander.charAttack2(Pikachu);//do Pikachu attack on Charmander
  //   $("#log").empty().append("<p>Chamander attacks Pikachu!</p>  <p>Pikachu sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
  //   $("#pl1-health-number").text(Pikachu.health);
  //   $("#log").show();
  //   $("#player1col, #player2col").hide();
  //   currentGame.switchPlayer();
  // });

  // $("#log").click(function() {
  //   $("#player1col, #player2col").show();
  //   $("#log").hide();
  // });


});
