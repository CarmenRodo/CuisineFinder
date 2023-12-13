<template>
  <button
  class="bg-white shadow-md rounded-t px-2 py-1 rounded"
  >
    <RouterLink
      :to="{ name: 'MealsByIngredient', params: { ingredient: ingredient.strIngredient } }"
      ><h4>{{ ingredient.strIngredient }}</h4></RouterLink
    >
  </button>
</template>
<script setup>
// Define props for the component
const props = defineProps({
  ingredient: Object // The ingredient object passed as a prop
})
</script>
