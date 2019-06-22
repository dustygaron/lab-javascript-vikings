// Soldier
class Soldier {

  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage
  }

}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }

  }
}

// Saxon
class Saxon extends Soldier {

  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }

  }

}

// War
// class War { }



let myViking = new Viking('Bob', '10', '1')

console.log(myViking.receiveDamage(2))

// let mySaxon = new Saxon('Henry', '10', '1')

// console.log(mySaxon.receiveDamage(2))