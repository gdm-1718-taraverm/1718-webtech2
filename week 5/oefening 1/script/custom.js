let recept = {
    name: 'Soep',
    servings: 4,
    ingredients: ['pompoen', 'wortel', 'water', 'bouillon']
};

console.log(recept.name);

let divRecipe = document.getElementById('recipe');

divRecipe.innerHTML = '<h2>' + recept.name + '</h2>';
divRecipe.innerHTML += '<p>' + recept.servings + '</p>';

for(let i = 0; i < recept.ingredients.length; i ++){
    divRecipe.innerHTML += '<li>' + recept.ingredients[i] + '</li>';
}
