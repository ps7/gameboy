// Business Logic//
//Pokemon Constructor//
function Pokemon (name, health, type) {
  this.pokemonName = name;
  this.health = health;
  this.pokemonType = type;
}
//Pokemon attack prototypes//
Pokemon.prototype.pikaAttack = function (opponent) {
  opponent.health -= 5;
  let health = document.getElementById("pl2-health")
  health.value -= 5;
  gameOver(opponent);
}
Pokemon.prototype.charAttack = function (opponent) {
  let health = document.getElementById("pl1-health")
  health.value -= 5;
  opponent.health -= 5;
  gameOver(opponent);
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
var allPokemon = []
allPokemon.push(Charzard, Pikachu)



//--------------------------------

//User Logic//
$(function() {
  $("#pl1-att1").click(function (){
    Pikachu.pikaAttack(Charzard);
    console.log(Charzard);
    $("#log").text("Pikachu attacks Charzard!  Charzard sustains 5 damage.");

  });

  $("#pl2-att1").click(function (){
    Charzard.charAttack(Pikachu);
    console.log(Pikachu);
    $("#log").empty().text("Charzard attacks Pikachu!  Pikachu sustains 5 damage.");
  });




});
