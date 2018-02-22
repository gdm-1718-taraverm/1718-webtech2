//parseInt is alleen voor gehele getallen; parseFloat ook voor kommagetallen
let number1 = prompt('Voer een getal in');
number1 = parseFloat(number1);

let number2 = prompt('Voer een tweede getal in');
number2 = parseFloat(number2);

let som = number1 + number2 

//${...} werkt alleen bij `` niet bij '' of ""
let text = `De som van ${number1} en ${number2} is ${som}`

document.write(text);

let i = 7;

console.log(i); //7 want ongewijzigd
console.log(i++); //7 want eerst gelogd dan pas 1 toegevoegd
console.log(i); //8 want 1 is toegevoegd in vorige statement
console.log(++i); //9 eerst 1 toegevoegd dan loggen