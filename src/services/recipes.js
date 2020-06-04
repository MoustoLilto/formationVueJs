let recipes = [
    {
        id: 0,
        name: 'Carbo',
        picture: 'https://assets.afcdn.com/recipe/20180716/81306_w1024h768c1cx1944cy2592cxt0cyt0cxb3888cyb5184.jpg',
        description: 'Des pates a la creme fraiche',
        ingredients: ['pates', 'creme', 'lardons'],
        instructions: 'Mettre les pattes dans de l eau puis verser creme et enfin ajouter lardons',
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
function getById(id) {
    console.log('Get recipeById... with id: ', id);
    const recipe = recipes.find(recipe => recipe.id == id);
    console.log('Recipe: ', recipe);
    return recipe;
}
function add(recipe) {
    console.log('Add recipe... with recipe: ', recipe);
    recipe.id = recipes.length;
    recipes.push(recipe);
    console.log('Recipes: ', recipes);
}
function remove(id) {
    console.log('Delete recipe... with id: ', id);
    const newRecipes = recipes.slice();
    recipes = newRecipes.filter((recipe) => {
        return recipe.id != id
    });
    console.log('Recipes: ', recipes);
}
function modify(newRecipe) {
    console.log('Modify recipe... with recipe: ', newRecipe);
    const newRecipes = recipes.slice();
    recipes = newRecipes.map((recipe) => {
        if (recipe.id == newRecipe.id) {
            return newRecipe
        } else {
            return recipe;
        }
    });
    console.log('Recipes: ', recipes);
}

export default {
    get,
    getById,
    add,
    modify,
    remove,
}