let fruit = ['peer', 'appel', 'banaan', 'mango', 'perzik']; 


const showItems = function (arrayName){

    for(let i=0; i < arrayName.length; i++){
        document.write(arrayName[i]);
        document.write('<br>');
    }
}

showItems(fruit);