var dog = {
    breed: 'cavalier',
    name: 'Jazz',
    colour: 'brown',
    age: 6,
    gender: 'm',
    colourEyes: function() {
        return 'brown'
    }
}

console.log(dog.name);

let Dog = function(breed, name, colour, age, gender, colourEyes) {
    this.breed = breed,
    this.name = name,
    this.colour = colour,
    this.age = age,
    this.gender = gender
    this.colourEyes = function() {
        return 'pink'
    }
    this.birthYear = function() {
        const now = new Date();
        const year = now.getFullYear();
        let currentYear = year;
        let birthYear = 2018 - this.age;
        return birthYear;
    }
};

var myFavouriteDog = new Dog('Bearded collie', 'Samson', 'grijs en wit', 27, 'm');

//property toevoegen aan het object
myFavouriteDog.bestToyEver = 'Een mooie rode bal';

//functie toevoegen aan de constructor
Dog.prototype.speak = function(line) {
    let slogan = 'De ' + this.breed + ' hond zegt: ' + line;
    return slogan;
}

let saySomething = myFavouriteDog.speak('Er klopt iemand op de deur');

console.log(myFavouriteDog);

console.log(saySomething);

document.write(myFavouriteDog.birthYear());



