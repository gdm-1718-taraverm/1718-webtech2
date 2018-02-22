/*
@author     tara vermeersch
@created    15/02/2018
*/

//geef een getal in
let number = prompt('Voer een getal in');

//console.log kan je zien als je in de browser op pagina inspecteren klikt
console.log("dit is wat tekst");
console.log(number);

let text = 'Het getal dat u invoerde was: ' + number;

//hoelang het cijfer is 
let aantalcijfers = number.length;
let text2 = 'Het getal is ' + aantalcijfers + ' cijfers lang';

//het resultaat op het scherm brengen
document.write(text);
document.write('<br>');
document.write(text2);