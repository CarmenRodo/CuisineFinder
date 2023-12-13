<template>
  <div>
    <header class="shadow px-5">
      <div>
        <nav class="flex justify-between h-full p-3 items-center">
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
          <TheNavbar />
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TheNavbar from './TheNavbar.vue'
</script>

<style lang="scss" scoped></style>
