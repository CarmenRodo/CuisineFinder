import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchLetter from '../views/SearchLetter.vue'
import SearchIngredient from '../views/SearchIngredient.vue'
import SearchName from '../views/SearchName.vue'
import MealDetails from '../views/MealDetails.vue'
import SearchMealsByIngredient from '../views/SearchMealsByIngredient.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meals-by-letter/:letter?',
      name: 'MealsByLetter',
      component: SearchLetter
    },
    {
      path: '/meals-by-name/:name?',
      name: 'MealsByName',
      component: SearchName
    },
    {
      path: '/ingredients/',
      name: 'Ingredients',
      component: SearchIngredient
    },
    {
      path: '/ingredients/:ingredient',
      name: 'MealsByIngredient',
      component: SearchMealsByIngredient
    },
    {
      path: '/meal-details/:id?',
      name: 'MealDetails',
      component: MealDetails
    }
  ]
})

export default router
