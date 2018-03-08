//waardes van fastfood
let popcorn = 3;
let hamburger = 4;
let donut = 5;

//waarde laten ingeven
popcorn = parseInt(prompt('Waarde van popcorn'));
hamburger = parseInt(prompt('Waarde van hamburger'));
donut = parseInt(prompt('Waarde van donut'));

//inputvelden uit DOM delareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

//inputvelden invullen
input1.value = popcorn + popcorn + popcorn;
input2.value = popcorn + hamburger + hamburger;
input3.value = donut*2 + hamburger + donut*2;

//correcte oplossing berekenen
let correctSolution = hamburger + donut * popcorn;

//button declareren
let checkButton = document.getElementById('check');

//als er op de knop geklikt wordt
checkButton.addEventListener('click', function() {
    if(userSolution.value == correctSolution) {
        //correct
        alert('joepie')
}
    else {
        //wrong
        alert('uh oh')
    }
})
