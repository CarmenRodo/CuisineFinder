<template>
  <div class="flex flex-col p-5 flex-wrap items-center">
    <main class="flex flex-col items-center w-[90%] mx-auto">
      <div
        v-if="savedMeals.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 lg:w-[1000px] w-full"
      >
        <BaseSavedDish v-for="meal in savedMeals" :meal="meal" />
      </div>
      <div v-if="meals === 0">
        <h3>You haven't added any dish to your favorites list yet</h3>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient.js'
import BaseSavedDish from '../components/BaseSavedDish.vue'

// Define a computed property 'meals' that returns the value of 'savedDishesCount' from the store
const meals = computed(() => {
  return store.state.savedDishesCount
})

// Create a reactive reference 'savedMeals' and initialize it as an empty array
const savedMeals = ref([])

// Run the following code when the component is mounted
onMounted(async () => {
  // Check if there are any saved recipes in the local storage
  if (localStorage.getItem('savedRecipes')) {
    // Parse the saved recipes from the local storage and assign them to 'savedMeals'
    savedMeals.value = JSON.parse(localStorage.getItem('savedRecipes'))
  }

  // Create an array 'requests' to store the axios requests
  const requests = []

  // Iterate over each element in 'savedMeals'
  savedMeals.value.forEach((el) => {
    // Create an axios request and push it to the 'requests' array
    requests.push(axiosClient.get(`lookup.php?i=${el.id}`))
  })

  // Send all the axios requests concurrently and store the responses in 'mealsData'
  const mealsData = await Promise.all(requests)

  // Update the 'savedDishesCount' in the store with the length of 'mealsData'
  store.commit('setCounter', mealsData.length)

  // Iterate over each item in 'mealsData' and update the corresponding element in 'savedMeals'
  mealsData.forEach((item, index) => {
    savedMeals.value[index] = item.data.meals[0]
  })
})
</script>
