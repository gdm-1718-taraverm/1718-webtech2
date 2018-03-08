const password = 'kellypfaff';

let guess = prompt('Wat is het geheime wachtwoord?');
let amountTries = 1;

/* if (password == guess) {
    document.write('Goed zo');
} */

while(password != guess){
    amountTries++;
    guess = prompt('Wat is het geheime wachtwoord?')
}

document.write('Je hebt het wachtwoord ' + password + ' geraden ');
document.write('na ' + amountTries + ' pogingen!');