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
  },
  {
    path: '/modify/:id',
    name: 'modifyRecipe',
    component: () => import('../views/ModifyRecipe.vue')
  },
  {
    path: '*',
    name: 'Default',
    component: recipes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
