<template>
   <v-container fluid>
       <v-row>
       <v-col
           v-for="recipe in recipes"
           :key="recipe.id"
           :cols="recipe.flex"
       >
           <recipe
               :id= recipe.id
               :name = recipe.name
               :picture = recipe.picture
               :description = recipe.description
               :ingredients = recipe.ingredients
               :instructions = recipe.instructions
               @deletedRecipe= "deleteRecipe"
           />
       </v-col>
       </v-row>
   </v-container>
</template>
 
<script>
import recipe from '@/components/recipe.vue';
 
export default {
   name: 'recipes',
   components: {
       recipe,
   },
   data() {
       return {
           recipes: [
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
           ],
       }
   },
   methods: {
        deleteRecipe(id) {
            const newRecipes = this.recipes.slice();
            this.recipes = newRecipes.filter((recipe) => {
                return recipe.id !== id
            })
        }
   }
}
</script>
 
<style lang="scss">
</style>
