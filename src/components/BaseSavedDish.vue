<template>
  <div
    v-if="isSaved"
    :key="meal.idMeal"
    class="relative p-3 bg-white shadow-md rounded-t-xl md:max-w-[300px] w-full"
  >
    <EmptyHeartIcon
      v-if="!isSaved"
      class="absolute w-5 hover:w-6 right-5 bottom-3 z-10 cursor-pointer"
      @click="addToFavorites"
    />
    <FullHeartIcon
      v-if="isSaved"
      class="absolute w-6 hover:w-5 right-5 bottom-3 z-10 cursor-pointer"
      @click="removeFromFavorites"
    />
    <RouterLink
      v-if="meal.strMealThumb"
      :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
      class="overflow-hidden"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-[200px] md:h-[150px] object-cover w-full hover:transform hover:scale-95 ease-in duration-200"
      />
    </RouterLink>
    <img
      v-if="!meal.strMealThumb"
      src="../assets/images/placeholder.jpg"
      :alt="meal.strMeal"
      class="rounded-t-xl h-[150px] object-cover w-full hover:transform hover:scale-95 ease-in duration-200"
    />
    <h3 v-if="meal.strMeal" class="my-5 font-bold">{{ meal.strMeal }}</h3>
    <a v-if="meal.strYoutube" :href="meal.strYoutube" class="hover:text-red-600">View Youtube</a>
  </div>
</template>
<script setup>
import store from '../store'
import EmptyHeartIcon from './icons/EmptyHeartIcon.vue'
import FullHeartIcon from './icons/FullHeartIcon.vue'
import { onBeforeMount, ref } from 'vue'
const props = defineProps({
  meal: Object
})

const savedRecipes = ref([]) // Array to store saved recipes
const isSaved = ref('') // Flag to indicate if the current recipe is saved or not

function deleteFavorite() {
  store.commit('deleteDish', props.meal.idMeal) // Call the 'deleteDish' mutation to remove the dish from the store
}

function addToFavorites() {
  if (localStorage.getItem('savedRecipes')) {
    savedRecipes.value = JSON.parse(localStorage.getItem('savedRecipes')) // Retrieve saved recipes from local storage
  }
  const objectToSave = {
    id: props.meal.idMeal // Create an object with the ID of the current recipe
  }
  savedRecipes.value.reverse().push(objectToSave) // Add the object to the saved recipes array
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes.value.reverse())) // Save the updated array to local storage
  isSaved.value = true // Set the 'isSaved' flag to true
}

function removeFromFavorites() {
  const saved = JSON.parse(localStorage.getItem('savedRecipes')) // Retrieve saved recipes from local storage
  const updatedList = saved.filter((el) => el.id !== props.meal.idMeal) // Filter out the current recipe from the saved recipes array
  localStorage.setItem('savedRecipes', JSON.stringify(updatedList)) // Save the updated array to local storage
  deleteFavorite() // Call the 'deleteFavorite' function to remove the dish from the store
  isSaved.value = false // Set the 'isSaved' flag to false
}

onBeforeMount(() => {
  const saved = JSON.parse(localStorage.getItem('savedRecipes')) // Retrieve saved recipes from local storage

  if (saved) {
    saved.forEach((el) => {
      if (el.idMeal === props.meal.idMeal) {
        isSaved.value = true // Set the 'isSaved' flag to true if the current recipe is found in the saved recipes array
      }
    })
  }
})
</script>
