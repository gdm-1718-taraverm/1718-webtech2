setInterval(function(){
    //true or false
    var randomTrueFalse = Math.random() >= 0.5;
    //getal tussen 1 en 4
    var randomBetween = Math.floor(Math.random() * 4) + 1;

    //random true of false
    if(randomTrueFalse == true) {
        drawMountain(randomBetween); //teken berg
    }
    else{
        drawFlatArea(randomBetween); //teken dal
    }
}, 1000); //elke seconde


function drawMountain(lengthOfMountain) {

    //initiele toplengte
    let i = 0;

    //helling
    document.write('/');

    //zolang het einde van de top nog niet bereikt is
    while(i <= lengthOfMountain){
        document.write("'");
        i++;
    }

    //afdaling
    document.write("\\"); 
}

function drawFlatArea(lenghtFlat) {
    let i = 1;
    while(i <= lengthFlat) {
        document.write("_");
        i++;
    }
}