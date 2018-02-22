//3 variabelen met beestjes van het type string
const animal1 = 'elephant';
const animal2 = 'cockroach';
const animal3 = 'zebra';

//variabelen van het type array
let animals = [];

//variabelen in array steken
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);
animals.push('bunny')

//manueel alle string concatteneren (samenvoegen)
let allAnimals = animals [0] + animals[1] + animals[2];

//op scherm zetten
document.write(allAnimals);
document.write('<br>')

//tweede manier
let allAnimals2 = '';

//loopen door de array
for(let i = 0; i < animals.length; i++) {
    //resultaat loggen van elk element uit array
    console.log(animals[i]);
    //de strings samenvoegen
    allAnimals2 += animals[i];
}

//de samengevoegde strings op het scherm schrijven
document.write(allAnimals2); 
