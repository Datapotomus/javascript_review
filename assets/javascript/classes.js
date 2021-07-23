"use strict";
console.log("classes.js");

class LivingThing {
  constructor(name, health){
      this.name = name;
      this.health = health;
  }
  isAlive(){
    return this.health > 0
  }
}

class Monster extends LivingThing{

  constructor(name, health, classification){
    super(name, health);
    this.classification = classification;

  }
}

let rat = new LivingThing("Splinter", 0, "rat");
let goblin = new LivingThing("Stew", 30, "goblin");
let orge = new LivingThing("Bob", 80, "ogre")

const monstersArray = [rat, goblin, orge];

//The code below should work when you are done
console.log(monstersArray);


monstersArray.forEach(function (monster) {
  console.log(`${monster.name} : ${monster.health} : ${monster.isAlive() ? "alive" : "dead"}`)
})

class Hero extends LivingThing{
  constructor(name, health, secretIdentity){
    super(name, health);
    this.secretIdentity = secretIdentity;

  }

}

const myHero = new Hero("Superman", 110, "Clark Kent");

console.log(myHero.isAlive())