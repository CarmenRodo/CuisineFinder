<template>
  <div class="flex flex-col max-w-[1000px] xl:w-full w-[90%] mx-auto p-5 bg-white my-3">
    <header v-if="meal.strMeal" class="my-5">
      <h2 class="font-bold text-center text-xl">{{ meal.strMeal }}</h2>
    </header>
    <figure v-if="meal.strMealThumb" class="my-5">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="h-80 w-full object-cover" />
    </figure>
    <div class="grid md:grid-cols-2 grid-cols-1 mx-5">
      <div>
        <p v-if="meal.strCategory">
          Category: <span class="font-bold">{{ meal.strCategory }}</span>
        </p>
        <p v-if="meal.strArea">
          Origin: <span class="font-bold">{{ meal.strArea }}</span>
        </p>
        <div v-if="meal.strTags" class="flex flex-wrap items-center justify-center">
          <span class="w-full">tags:</span>
          <span v-for="tag in meal.strTags.split(',')" class="mb-3 px-1"> {{ tag }} </span>
        </div>
        <div v-if="meal.strYoutube" class="flex">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="text-red-600 border-2 p-3 border-red-600 font-bold my-2"
            >View Youtube</a
          >
        </div>
        <div v-if="meal.strSource" class="flex">
          <a
            :href="meal.strSource"
            target="_blank"
            class="text-gray-600 border-2 p-3 border-gray-600 font-bold my-2"
            >Source</a
          >
        </div>
      </div>
      <div>
        <h3 class="mb-4 font-bold">Ingredients:</h3>
        <ul v-for="(item, index) in new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ meal[`strIngredient${index + 1}`] }}
            <span v-if="meal[`strMeasure${index + 1}`]"
              >- {{ meal[`strMeasure${index + 1}`] }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="meal.strInstructions" class="col-span-full">
        <h3 class="mb-4 font-bold">Instructions:</h3>
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'

// Define a reactive reference for the meal object
const meal = ref({})

// Get the current route using the useRoute() function from vue-router
const route = useRoute()

// Execute the code inside the onMounted() hook when the component is mounted
onMounted(async () => {
  try {
    // Make an HTTP GET request to retrieve meal data based on the route parameter
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
      // Update the meal object with the retrieved data
      meal.value = data.meals[0]
    })
  } catch (err) {
    console.log(err)
  }
})
</script>
