let recipes = [
    {
        id: 0,
        name: 'Route',
        picture: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        description: 'CECI est un test',
        ingredients: ['lolo', 'sisi', 'maria'],
        instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
        flex: 6
    },
    {
        id: 1,
        name: 'Maison',
        picture: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        description: 'CECI est un test',
        ingredients: ['lolo', 'sisi', 'maria'],
        instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
        flex: 6
    },
    {
        id: 2,
        name: 'Avion',
        picture: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        description: 'CECI est un test',
        ingredients: ['lolo', 'sisi', 'maria'],
        instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
        flex: 4
    },
    {
        id: 3,
        name: 'Route',
        picture: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        description: 'CECI est un test',
        ingredients: ['lolo', 'sisi', 'maria'],
        instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
        flex: 4
    },
    {
        id: 4,
        name: 'Maison',
        picture: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        description: 'CECI est un test',
        ingredients: ['lolo', 'sisi', 'maria'],
        instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
        flex: 4
    },
    {
        id: 5,
        name: 'Avion',
        picture: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        description: 'CECI est un test',
        ingredients: ['lolo', 'sisi', 'maria'],
        instructions: 'Faut prendre lolo, tu jettes sur sisi et tu frappes avec maria',
        flex: 6
    },
];

function get() {
    console.log('Get recipe...');
    console.log('Recipes: ', recipes);
    return recipes;
}
function add(recipe) {
    console.log('Add recipe...');
    recipe.id = recipes.length;
    recipes.push(recipe);
    console.log('Recipes: ', recipes);
}
function remove(id) {
    console.log('Delete recipe...');
    const newRecipes = recipes.slice();
    recipes = newRecipes.filter((recipe) => {
        return recipe.id !== id
    });
    console.log('Recipes: ', recipes);
}
function modify(newRecipe) {
    console.log('Modify recipe...');
    const newRecipes = recipes.slice();
    recipes = newRecipes.map((recipe) => {
        if (recipe.id !== newRecipe.id) {
            return newRecipe
        }
    });
    console.log('Recipes: ', recipes);
}

export default {
    get,
    add,
    modify,
    remove,
}