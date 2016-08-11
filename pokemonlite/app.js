function Pokemon(name, health, magic){
	this.name = name;
	this.health = health;
    this.magic = magic;
    this.skills = [];
}

Pokemon.prototype.showStatus = function(){
	console.log(this.name + ' status:');
	console.log('Health:', this.health);
	console.log('Magic:', this.magic);
	console.log('Skills:', this.skills);

}

Pokemon.prototype.attack = function(attackIndx, victim){
  // pikachu.attack(0, bulbasaur);
  // attackObj: {name: 'lightning', damage: 40, magic: 30}
  // victim: {name: 'bulbasaur', health: 100, magic: 100}
  var attackObj = this.skills[attackIndx];
  if(this.magic < attackObj.magic) {
    console.log("Attack didn't work! Not enough magic")
  } else if(victim.health < 0) {
    console.log("Pokemon ran away and lived a happy life!")
  } else {
    victim.health -= attackObj.damage;
    this.magic -= attackObj.magic;
  } 
}

Pokemon.prototype.getMagic = function(magic){
  this.magic += magic;
}

// pikachu.attack(0, bulbasaur);

var pikachu = new Pokemon('pikachu', 100, 100);
var bulbasaur = new Pokemon('bulbasaur', 100, 100);
var squirtle = new Pokemon ('squirtle', 90, 100);
var charmander = new Pokemon ('charmander', 120, 100);
var Mew = new Pokemon ('mew', 500, 500);
// var arbok = new Pokemon ('arbok', 200, 170);
// var rhydon = new Pokemon ('rhydon', 170, 165);
// var charizard = new Pokemon ('charizard', 360, 400);
// var chansey = new Pokemon ('chansey', 700, 70);
// var growlithe = new Pokemon ('growlithe', 80, 90);
// var cloyster = new Pokemon ('cloyster', 250, 280);
// var vileplume = new Pokemon ('vileplume', 170, 200);
// var starmie = new Pokemon ('starmie', 210, 260);
// var electabuzz = new Pokemon ('electabuzz', 110, 300);
// var gengar = new Pokemon ('gengar', 290, 310);
// var meowth = new Pokemon ('meowth', 100, 70);
// var butterfree = new Pokemon ('butterfree', 120, 100);
// var golem = new Pokemon ('golem', 220, 210);
// var dragonair = new Pokemon ('dragonair', 230, 240);
// var moltres = new Pokemon ('moltres', 400, 400);
// var articuno = new Pokemon ('articuno', 400, 400);
// var zapdos = new Pokemon ('zapdos', 400, 400);
// var chikorita = new Pokemon ('chikorita', 90, 100);
// var eevee = new Pokemon ('eevee', 100, 100);
// var umbreon = new Pokemon ('umbreon', 300, 270);
// var espeon = new Pokemon ('espeon', 270, 300);
// var ditto = new Pokemon ('mew', 500, 500); ****************
// var ursaring = new Pokemon ('ursaring', 200, 350);
// var steelix = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);
// var Mew = new Pokemon ('mew', 500, 500);






function AttackSkill(name, damage, magic){
  this.name = name;
  this.damage = damage;
  this.magic = magic;
}


var lightning = new AttackSkill("lightning", 40, 30);
var solarbeam = new AttackSkill("solarbeam", 40, 20);
var hydropump = new AttackSkill("hydropump", 50, 40);
var flamethrower = new AttackSkill("flamethrower", 40, 30);
var psychic = new AttackSkill("psychic", 80, 30);


pikachu.learnAttackSkill(lightning);
pikachu.showStatus();
bulbasaur.showStatus();
bulbasaur.learnAttackSkill(solarbeam);
squirtle.learnAttackSkill(hydropump);
squirtle.showStatus();
charmander.learnAttackSkill(flamethrower);
charmander.showStatus();
mew.learnAttackSkill(psychic)
mew.showStatus();




Pokemon.prototype.attack = function(attackIndx, victim){
  // pikachu.attack(0, bulbasaur);
  // attackObj: {name: 'lightning', damage: 40, magic: 30}
  // victim: {name: 'bulbasaur', health: 100, magic: 100}
  var attackObj = this.skills[attackIndx];
  if(this.magic < attackObj.magic) {
    console.log("Attack didn't work! Not enough magic")
  } else if(victim.health < 0) {
    console.log("Pokemon ran away and lived a happy life!")
  } else {
    victim.health -= attackObj.damage;
    this.magic -= attackObj.magic;
  } 
}

Pokemon.prototype.getMagic = function(magic){
  this.magic += magic;
}

// pikachu.attack(0, bulbasaur);

var pikachu = new Pokemon('pikachu', 100, 100);
var bulbasaur = new Pokemon('bulbasaur', 100, 100);

function AttackSkill(name, damage, magic){
  this.name = name;
  this.damage = damage;
  this.magic = magic;
}

var lightning = new AttackSkill("lightning", 40, 30);
var lightning = new AttackSkill("lightning", 40, 30);


pikachu.learnAttackSkill(lightning);
pikachu.showStatus();
bulbasaur.showStatus();

console.log('Pikachu attacks bulbasaur');
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);

bulbasaur.showStatus();
pikachu.showStatus();











