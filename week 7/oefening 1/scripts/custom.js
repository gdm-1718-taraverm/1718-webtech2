// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
}; 

/*//SKILLED

// knop declareren
const button = document.getElementById('btnMakeJoke');
const factsList = document.getElementById('facts');

button.addEventListener('click', function() {
    // waardes uit de elementen halen
    const firstName = document.getElementById('firstNameField').value;
    const lastName = document.getElementById('lastNameField').value;
    
    // url met dynamische parameters
    const url = ' http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName; 

    getJSON(url, function(error, data) {
        
        const listItem = document.createElement('li');
        listItem.textContent = data.value.joke;
        //listitem in de ul steken
        factsList.appendChild(listItem);
        });

})
*/


//INTERMEDIATE

// variabele met gegevens
const firstName = prompt('Vul hier uw voornaam in');
const lastName = prompt('vul hier uw achternaam in');

// url met dynamische parameters
const url = ' http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName; 



// JSON functie oproepen, binnen de callback manipuleren we de verkregen data
getJSON(url, function(error, data) {

    //schrijf de fact in het venster 
    document.write(data.value.joke);

});

