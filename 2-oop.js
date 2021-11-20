function getTrainer() {
  // some computation...
  return "Ash";
}

class Pokemon {
  // Private properties
  #cry = null;
  #trainer = null;

  constructor(pokedexNo, name, type, cry = "") {
    this.pokedexNo = pokedexNo;
    this.name = name;
    this.type = type;
    this.#cry = cry;
    this.#trainer = getTrainer();
  }

  cry() {
    console.log(this.#cry ? `${this.#cry}!!!` : "...");
  }

  summary() {
    console.log(`No. ${this.pokedexNo} ${this.name}`);
  }

  shouldObey(trainer) {
    return trainer === this.#trainer;
  }
}

const typeNull = new Pokemon(772, "Type: Null", "Normal");

typeNull.cry();

// Inheritance
class Pikachu extends Pokemon {
  constructor(isStarter) {
    super(25, "Pikachu", "Electric", "pika pika");
    this.isStarter = isStarter;
  }

  isObtainedFromProf() {
    return this.isStarter;
  }
}

const pikachu = new Pikachu(true);
pikachu.summary();

if (pikachu.shouldObey("Ash")) {
  pikachu.cry();
}

const party = [pikachu, typeNull, null, null, null, null];
console.log(party);
