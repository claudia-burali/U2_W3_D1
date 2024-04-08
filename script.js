class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static whoIsOlder(fstUser, sndUser) {
    if (fstUser.age > sndUser.age) {
      return fstUser.firstName + " " + "is older";
    } else if (fstUser.age < sndUser.age) {
      return sndUser.firstName + " " + "is older";
    } else {
      return fstUser.firstName + " " + "and" + " " + sndUser.firstName + " " + "are both" + " " + fstUser.age;
    }
  }
}

const marioRossi = new User("Mario", "Rossi", 21, "Milano");
const giuseppeVerdi = new User("Giuseppe", "Verdi", 27, "Palermo");
const saraBianchi = new User("Sara", "Bianchi", 23, "Roma");
const giuliaGialli = new User("Giulia", "Gialli", 23, "Padova");

console.log(User.whoIsOlder(marioRossi, saraBianchi));
console.log(User.whoIsOlder(giuseppeVerdi, saraBianchi));
console.log(User.whoIsOlder(giuliaGialli, saraBianchi));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  static sameOwner(fstPet, sndPet) {
    return fstPet.ownerName === sndPet.ownerName;
  }
}

const btnSend = document.getElementById("sendButtonId");
const petName = document.getElementById("petName");
const petOwner = document.getElementById("ownerName");
const petSpecies = document.getElementById("petSpecies");
const petBreed = document.getElementById("petBreed");
let pet_Name = "";
let pet_Owner = "";
let pet_Species = "";
let pet_Breed = "";
btnSend.onclick = (event) => {
  pet_Name = petName.value;
  pet_Owner = petOwner.value;
  pet_Species = petSpecies.value;
  pet_Breed = petBreed.value;
  const pet = new Pet(pet_Name, pet_Owner, pet_Species, pet_Breed);
  const petsPrint = document.createElement("ul");
  const petPrint = document.createElement("li");
  petPrint.textContent =
    "Pet name: " +
    pet.petName +
    " " +
    "Pet owner: " +
    pet.ownerName +
    " " +
    "Pet species: " +
    pet.species +
    " " +
    "Pet breed: " +
    pet.breed;
  petsPrint.appendChild(petPrint);
  document.body.appendChild(petsPrint);
};
