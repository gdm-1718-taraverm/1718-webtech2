//knop en inputveld declareren
let btn = document.getElementById('storeName');
let inputField = document.getElementById('name');

//click event zetten op de knop
btn.addEventListener('click', function() {
    //de mol uit het inputveld halen
    let mol = inputField.value;

    //na een klik moet het opgeslagen worden in de local storage
    localStorage.setItem('myMole', mol);
});

//controleren of de mol in de local storage zit
let storedMole = localStorage.getItem('myMole');

if(storedMole != null) {
    btn.style.display = "none";
    inputField.style.display = "none";

    //rood of groen
    if(storedMole == 'pieter')
        moleBackground.style.backgroundImage = "url('./groen.jpg')";
    else
        moleBackground.style.backgroundImage = "url('./rood.png')"; 
};
