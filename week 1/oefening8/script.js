let getal = 7263;

// 1 uur = 3600 seconden

let amountHours = getal / 3600;
//kommagetal
console.log(amountHours);

//naar beneden afronden
amountHours = Math.floor(amountHours);
//resultaat tonen
console.log('Aantal uur: ' + amountHours); 

//hoeveel seconden blijven er over
let remainingSeconds = getal % 3600;
console.log('Overgebleven seconden: ' + remainingSeconds);

let amountMinutes = Math.floor(remainingSeconds / 60);
console.log('Aantal minuten: ' + amountMinutes);