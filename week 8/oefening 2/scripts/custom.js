let btn = document.getElementById('button');

btn.addEventListener('click', function() {
    let color = document.querySelector('input[name="color"]:checked');

    //met template literals
    btn.className = `btn ${(color) ? color.value : 'btn-warning'}`;

    /*//zonder template literals
    if(color) {
        btn.className = 'btn ' + color.value;
    }
    else {
        btn.className = 'btn ' + 'btn-warning';
    }*/

})
