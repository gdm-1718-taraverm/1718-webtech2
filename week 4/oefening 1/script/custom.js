//1. elementen selecteren en in variabelen stoppen
let anchorTags, strongTags, spanTags;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags = document.getElementsByTagName('span');

//eerste anchor tag uit de array van anchorTags halen
let linkElement = anchorTags[0];

//event toepassen
linkElement.addEventListener('mouseover', function(){

    //eerste strong tag oranje maken
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = 'orange';

    //tweede strongtag oranje maken
    strongTags[1].style.color = 'orange';

    //alle spantags doorlopen
    for(let i = 0; i < spanTags.length; i++){
        spanTags[i].style.color = 'purple';
    }

})

linkElement.addEventListener('mouseout', function(){

    //alle strongtags doorlopen
    for(let i = 0; i < strongTags.length; i++){
        strongTags[i].style.color = 'black';
    }

    //alle spantags doorlopen
    for(let i = 0; i < spanTags.length; i++){
        spanTags[i].style.color = 'black';
    }

});
