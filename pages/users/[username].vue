<template>
  <page-section class="">
    <div class="container">
      <h1 class="text-center text-5xl font-bold">{{ userId }}</h1>
    </div>
  </page-section>
</template>

<script setup lang="ts">
const route = useRoute();
const userId = route.params.username;
</script>

<style scoped></style>
