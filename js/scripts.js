// Business Logic//
//Pokemon Constructor//
function Pokemon (name, health, type) {
  this.pokemonName = name;
  this.health = health;
  this.pokemonType = type;
}
//Pokemon attack prototypes//
Pokemon.prototype.pikaAttack = function () {
  Charzard.health -= 5;
  attackFunction(Charzard);
}
Pokemon.prototype.charAttack = function () {
  Pikachu.health -= 5;
}
//Game over condition evaluator function//
function attackFunction(i) {
  if (i.health <= 95) {
    alert("game over")
  }
}
//Created Pokemon//
var Charzard = new Pokemon("Charzard", 100, "fire");
var Pikachu = new Pokemon("Pikachu", 100, "lightning");
console.log(Charzard, Pikachu);
//User Logic//
$(function(){


});
