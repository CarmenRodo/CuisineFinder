<template>
  <li class="inline-flex h-full items-center hover:bg-slate-400">
    <RouterLink :to="{ name: props.name }" class="sm:p-3 p-1">{{ props.title }}</RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'
// Define props object to receive component props
const props = defineProps({
  // The name prop represents the name of the route
  name: String,
  // The title prop represents the title to be displayed
  title: String
})
</script>
