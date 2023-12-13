<template>
  <div>
    <ul class="flex sm:flex-row h-full flex-col">
      <base-navbar-item name="MealsByName" title="Search name" />
      <base-navbar-item name="MealsByLetter" title="Meals by Letter" />
      <base-navbar-item name="Ingredients" title="Ingredients" />
    </ul>
  </div>
</template>

<script setup>
import BaseNavbarItem from './BaseNavbarItem.vue'
</script>
