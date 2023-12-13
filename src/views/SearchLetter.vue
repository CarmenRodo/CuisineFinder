<template>
  <div class="flex flex-col items-center">
    <TheAlphabet class="py-4" @search="search" />
    <main class="flex flex-col items-center w-[90%] mx-auto">
      <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 lg:w-[1000px] w-full">
        <BaseDishTile v-for="meal in meals" :meal="meal" />
      </div>
      <p v-if="!meals && meals !== ''">Sorry there are no dishes starting with this letter yet</p>
    </main>
  </div>
</template>

<script setup>
import TheAlphabet from '../components/TheAlphabet.vue'
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import BaseDishTile from '../components/BaseDishTile.vue'

const searchedLetter = ref('') // Initialize a reactive reference variable with an empty string
const meals = computed(() => store.state.searchedLetter) // Create a computed property that retrieves the value of `store.state.searchedLetter`
const route = useRoute() // Get the current route object

function searchMealsByLetter() {
  store.dispatch('searchMealsByLetter', searchedLetter.value) // Dispatch an action to search meals based on the value of `searchedLetter`
}

const search = (letter) => {
  if (letter) {
    store.dispatch('searchMealsByLetter', letter) // Dispatch an action to search meals based on the provided `letter`
  }
}

onMounted(() => {
  searchedLetter.value = route.params.letter // Set the value of `searchedLetter` to the value of the `letter` parameter in the current route
  if (searchedLetter.value) {
    searchMealsByLetter() // Call the `searchMealsByLetter` function to perform the initial search
  }
})
</script>
