<template>
  <div class="flex flex-col items-center">
    <input
      class="py-4 my-4 rounded-lg w-[300px]"
      type="text"
      placeholder="search for meals"
      v-model="search"
      v-on:keyup.enter="saveWord"
      @change="searchMeals"
    />
    <main class="flex flex-col items-center w-[90%] mx-auto">
      <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 p-3 gap-4 lg:w-[1000px] w-full">
        <BaseDishTile v-for="meal in meals" :meal="meal" />
      </div>
      <p v-if="!meals">Sorry there is no match for "{{ searchedWord }}" in the database</p>
    </main>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import router from '../router'
import BaseDishTile from '../components/BaseDishTile.vue'

const search = ref('') // A reactive reference to the search input value
const meals = computed(() => store.state.searchedMeals) // A computed property that retrieves the searched meals from the store
const route = useRoute() // A Vue Router hook to access the current route
const searchedWord = ref('') // A reactive reference to store the searched word

function saveWord() {
  searchedWord.value = search.value // Update the searchedWord with the current search value
  router.push({ params: { name: search.value } }) // Push a new route with the search value as a parameter
}

function searchMeals() {
  store.dispatch('searchMeals', search.value) // Dispatch an action to search meals with the current search value
}

onMounted(() => {
  search.value = route.params.name // Set the search value to the value of the "name" parameter in the current route
  if (search.value) {
    searchMeals() // If there is a search value, trigger the searchMeals function
  }
})
</script>
