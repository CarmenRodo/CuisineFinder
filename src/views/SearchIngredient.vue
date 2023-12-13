<template>
  <div class="flex flex-col items-center">
    <main class="flex flex-col items-center">
      <div
        v-if="ingredients"
        class="grid grid-cols-2 md:grid-cols-8 p-3 gap-5 lg:w-[1000px] w-full mt-5"
      >
        <BaseIngredientTile v-for="ingredient in ingredients" :ingredient="ingredient" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axiosClient from '../axiosClient'
import BaseIngredientTile from '../components/BaseIngredientTile.vue'

const ingredients = ref([])

onMounted(async () => {
  try {
    // Make a GET request to retrieve the list of ingredients
    const response = await axiosClient.get('list.php?i=list').then((res) => {
      return res.data
    })

    // Assign the meals data from the response to the ingredients ref
    ingredients.value = response.meals
  } catch (err) {
    console.log(err)
  }
})
</script>
