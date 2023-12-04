<script setup>


import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
<div class="hero-body">
  <div class="container has-text-centered">
<SearchBar></SearchBar>
  </div>
</div>
</template>

<style scoped>
.hero-body{
  background-image: url("src/assets/images/cutting-background.png");
  background-position: center;
  background-size: cover;
}
</style>