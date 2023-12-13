<template>
  <div class="flex flex-row items-center h-[80px] flex-wrap justify-center px-4">
    <router-link
      v-for="letter in alphabet"
      :to="{ name: 'MealsByLetter', params: { letter } }"
      :key="{ letter }"
      class="px-1 sm:hover:text-xl sm:hover:px-2 sm:hover:font-bold"
      @click="$emit('search', letter)"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>
