import Vue from 'vue'
import VueRouter from 'vue-router'
import recipes from '../views/Recipes.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Recipes',
    component: recipes
  },
  {
    path: '/add',
    name: 'AddRecipe',
    component: () => import('../views/AddRecipe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
