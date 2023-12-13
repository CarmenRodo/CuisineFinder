<template>
  <main class="flex flex-col items-center w-[90%] mx-auto">
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 lg:w-[1000px] w-full mt-5">
      <BaseDishTile v-for="meal in meals" :meal="meal" />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'
import BaseDishTile from '../components/BaseDishTile.vue'

// Define a reactive variable to store the meals
const meals = ref([])

// Get the current route using the useRoute() function from vue-router
const route = useRoute()

// Run the code inside the onMounted() hook when the component is mounted
onMounted(async () => {
  try {
    // Send a GET request to the server using axiosClient and the ingredient parameter from the route
    const response = await axiosClient
      .get(`filter.php?i=${route.params.ingredient}`)
      .then((res) => {
        return res.data
      })

    // Update the meals variable with the response data
    meals.value = response.meals
  } catch (err) {
    // Log any errors that occur during the request
    console.log(err)
  }
})
</script>