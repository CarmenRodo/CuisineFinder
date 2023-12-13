<template>
  <div
    :key="meal.idMeal"
    class="flex flex-col relative p-3 bg-white shadow-md rounded-t-xl md:max-w-[300px] w-full"
  >
    <EmptyHeartIcon
      v-if="!isSaved"
      class="absolute w-5 right-5 bottom-3 z-10 cursor-pointer"
      @click="addToFavorites"
    />
    <FullHeartIcon
      v-if="isSaved"
      class="absolute w-5 right-5 bottom-3 z-10 cursor-pointer"
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
    <div v-if="meal.strTags" class="flex flex-col mb-3">
      <span
        v-if="!showTags"
        @click="showTags = !showTags"
        class="inline-flex gap-2 items-center cursor-pointer"
        ><ArrowDown class="w-5" /> Show Tags
      </span>
      <span
        v-if="showTags"
        @click="showTags = !showTags"
        class="inline-flex gap-2 items-center cursor-pointer"
      >
        <ArrowUp class="w-5" /> Hide Tags</span
      >
      <div
        v-if="showTags"
        class="mt-3 mb-5 flex gap-2 flex-wrap justify-center border-b-2 border-red-600"
      >
        <span v-for="tag in meal.strTags.split(',')" class="mb-3"> {{ tag }}</span>
      </div>
    </div>
    <div v-if="meal.strCategory" class="flex flex-col mb-3">
      <span
        v-if="!showCats"
        @click="showCats = !showCats"
        class="inline-flex gap-2 items-center cursor-pointer"
        ><ArrowDown class="w-5" /> Show Categories
      </span>
      <span
        v-if="showCats"
        @click="showCats = !showCats"
        class="inline-flex gap-2 items-center cursor-pointer"
      >
        <ArrowUp class="w-5" /> Hide Categories</span
      >
      <div v-if="showCats" class="mt-3 mb-5 inline-flex gap-2 flex-wrap border-b-2 border-red-600">
        <span v-for="tag in meal.strCategory.split(',')" class="mb-3"> {{ tag }}</span>
      </div>
    </div>
    <a
      v-if="meal.strYoutube"
      :href="meal.strYoutube"
      class="inline-flex hover:text-red-600 mt-auto mr-auto"
      >View Youtube</a
    >
  </div>
</template>
<script setup>
import store from '../store'
import EmptyHeartIcon from './icons/EmptyHeartIcon.vue'
import FullHeartIcon from './icons/FullHeartIcon.vue'
import ArrowDown from './icons/ArrowDown.vue'
import ArrowUp from './icons/ArrowUp.vue'
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
  meal: Object
})

// Define reactive variables
const showTags = ref(false)
const showCats = ref(false)
const savedRecipes = ref([])
const isSaved = ref('')

// Function to commit a dish to the store as a favorite
function addFavorite() {
  store.commit('saveDish', props.meal.idMeal)
}

// Function to add a dish to the favorites list
function addToFavorites() {
  // Retrieve saved recipes from local storage
  if (localStorage.getItem('savedRecipes')) {
    savedRecipes.value = JSON.parse(localStorage.getItem('savedRecipes'))
  }

  // Create an object to save the dish
  const objectToSave = {
    id: props.meal.idMeal
  }

  // Add the dish to the saved recipes list
  savedRecipes.value.reverse().push(objectToSave)

  // Update the saved recipes in local storage
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes.value.reverse()))

  // Call the addFavorite function to commit the dish to the store
  addFavorite()

  // Update the isSaved variable to indicate that the dish is saved
  isSaved.value = true
}

// Function to remove a dish from the favorites list
function removeFromFavorites() {
  // Retrieve saved recipes from local storage
  const saved = JSON.parse(localStorage.getItem('savedRecipes'))

  // Filter out the dish to be removed from the saved recipes list
  const updatedList = saved.filter((el) => el.id !== props.meal.idMeal)

  // Update the saved recipes in local storage
  localStorage.setItem('savedRecipes', JSON.stringify(updatedList))

  // Update the isSaved variable to indicate that the dish is not saved
  isSaved.value = false
}

// Hook that runs before the component is mounted
onBeforeMount(() => {
  // Retrieve saved recipes from local storage
  const saved = JSON.parse(localStorage.getItem('savedRecipes'))

  // Check if the current dish is saved in the saved recipes list
  if (saved) {
    saved.forEach((el) => {
      if (el.id === props.meal.idMeal) {
        isSaved.value = true
      }
    })
  }
})
</script>
