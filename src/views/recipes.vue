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
import serviceRecipes from '@/services/recipes.js';
 
export default {
   name: 'recipes',
   components: {
       recipe,
   },
   data() {
       return {
           recipes: [],
       }
   },
   mounted() {
       this.recipes = serviceRecipes.get();
   },
   methods: {
        deleteRecipe(id) {
            serviceRecipes.remove(id);
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
