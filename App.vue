<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const windowStore = useWindowStore();

onMounted(() => {
  windowStore.init();
});

onBeforeUnmount(() => {
  windowStore.destroy();
});
</script>
