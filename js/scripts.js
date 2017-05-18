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
  this.potion = 3;
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


var faint = new Audio('sounds/charmander.mp3')
var end = new Audio('sounds/ending.mp3')
//Game over condition evaluator function//
function gameOver(opponent) {
  var angle = 0;
  if (opponent.health <= 0) {
    battle.pause();
    faint.play();
    if (currentGame.currentPlayer === true) {
      $("#winner").text("Pikachu");
      $("#player2pic-screen img").toggle("pulsate",2000);
    } else {
      $("#winner").text("Charmander");
      $("#player1pic-screen img").toggle("pulsate",2000);
    }
    $("#interface").hide();
    $(".screen").delay(2000).fadeOut(1500);
    $("#win-screen").delay(3500).fadeIn(1000, function() {
      end.play();
    });
    $("#credits").delay(7000).animate({top: '-=2350px'}, 14000);
  }
}


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

//potion protoype
Pokemon.prototype.Heal = function () {
  if (this.pokemonName === "Pikachu" && this.potion >0) {
    let health = document.getElementById("pl1-health")
    if (this.health >= 80) {
      this.health = 100;
      health.value =100;
    } else {
      this.health +=20;
      health.value += 20;
    }
    this.potion -= 1;
    console.log(this.potion);
  } else if (this.pokemonName === "Charmander" && this.potion >0) {
    let health = document.getElementById("pl2-health")
    if (this.health >= 80) {
      this.health = 100;
      health.value =100;
    } else {
      this.health +=20;
      health.value += 20;
    }
    this.potion -= 1;
  }


};

//switch player

Game.prototype.switchPlayer = function () {
  if (currentGame.currentPlayer === true) {//pikachu's turn
    $(".player1button").attr("disabled", true);
    $(".player2button").attr("disabled", false);
    if (Charmander.potion === 0) {
    $("#pl2-heal").attr("disabled", true);
    }
    currentGame.currentPlayer = false;
    $("#player2col").append("<h1><span class='glyphicon glyphicon-triangle-top' aria-hidden='true'></span></h1>");
    $("#player1col h1").last().remove();
  } else {//Charmander's turn
    $(".player1button").attr("disabled", false);
    $(".player2button").attr("disabled", true);
    if (Pikachu.potion === 0) {
    $("#pl1-heal").attr("disabled", true);
    }
    currentGame.currentPlayer = true;
    $("#player1col").append("<h1><span class='glyphicon glyphicon-triangle-top' aria-hidden='true'></span></h1>");
    $("#player2col h1").last().remove();
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

$("#log").click(function() {// hide div that pops up to display hit damage, etc.
  $("#player1col, #player2col").show();
  $("#log").hide();
});


var attacksound1 = new Audio('sounds/thunderpunch.wav')
var attacksound2 = new Audio('sounds/slash.wav')
var specialsound1 = new Audio('sounds/thunder.wav')
var specialsound2 = new Audio('sounds/flamethrower.wav')



  //pikachu click functions

  $("#pl1-att1").click(function (){//when user clicks player 1's attack 1 button...
    attacksound1.play();
    Pikachu.attack1(Charmander);//do Pikachu attack on Charmander

    if (currentGame.miss === true) {//if/else statement for miss and crit
      $("#log").empty().append("<p>Pikachu Missed!</p><p>Charmander sustains " + currentGame.currentNumber + " damage.</p>");//display damage done info to user in log div
      currentGame.miss = false;

    } else if (currentGame.crit === true) {
      $("#player2pic-screen").effect("shake", {times:6, distance:40}, 1100);
      $("#log").empty().append("<p>Critical hit!</p><p>Charmander sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#player2pic-screen").effect("shake");
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
      $("#player2pic-screen").effect("shake", {times:6, distance:40}, 1100);
      $("#log").empty().append("<p>Critical hit!</p><p>Charmander sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#player2pic-screen").effect("shake");
      $("#log").empty().append("<p>Pikachu attacks Charmander!</p> <p>Charmander sustains " + currentGame.currentNumber + " damage!</p>");
    };
    //display damage done info to user in log div
    $("#pl2-health-number").text(Charmander.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();

  });

//pikachu heal click function
  $("#pl1-heal").click(function (){
    Pikachu.Heal();
    if (Pikachu.potion === 0){
      $("#log").empty().append("<p>Pikachu used potion!</p><p> He's not a magician.</p><p>Pikachu restored 20 health!</p>");
      $("#log").empty().append("<p>Hey, pal!</p><p>This is Pete Kachoo's last potion!</p><p>Beware!</p>");
    } else {
      $("#log").empty().append("<p>Pikachu used potion!</p><p> He's not a magician.</p><p>Pikachu restored 20 health!</p>");
    }
    //when you click heal button, a method is called on pikachu that puts his health up 20 pts

    $("#PikachuPotion").text(Pikachu.potion);
    $("#pl1-health-number").text(Pikachu.health);
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
      $("#player1pic-screen").effect("shake", {times:6, distance:40}, 1100);
      $("#log").empty().append("<p>Critical hit!</p><p>Pikachu sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#player1pic-screen").effect("shake");
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
      $("#player1pic-screen").effect("shake", {times:6, distance:40}, 1100);
      $("#log").empty().append("<p>Critical hit!</p><p>Pikachu sustains MASSIVE " + currentGame.currentNumber + "-damage.</p>");
      currentGame.crit = false;
    } else {
      $("#player1pic-screen").effect("shake");
      $("#log").empty().append("<p>Charmander attacks Pikachu!</p> <p>Pikachu sustains " + currentGame.currentNumber + " damage!</p>");
    };//display damage done info to user in log div
    $("#pl1-health-number").text(Pikachu.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();
  });

//charmander heal potion
  $("#pl2-heal").click(function (){
    Charmander.Heal();
    if (Charmander.potion === 0){
      $("#log").empty().append("<p>Charmander heals!</p><p>He is a magician!!!</p><p>Charmander restored 20 health!</p>");
      $("#log").empty().append("<p>Hey Pal!</p><p>This is Charles Mander's last potion!</p><p>Beware!</p>");
    } else {
      $("#log").empty().append("<p>Charmander heals!</p><p>He is a magician!!!</p><p>Charmander restored 20 health!</p>");
    }
    //when you click heal button, a method is called on pikachu that puts his health up 20 pts
    $("#CharmanderPotion").text(Charmander.potion);
    $("#pl2-health-number").text(Charmander.health);
    $("#log").show();
    $("#player1col, #player2col").hide();
    currentGame.switchPlayer();
  });


});
