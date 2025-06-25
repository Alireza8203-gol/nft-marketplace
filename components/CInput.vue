<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    class="text-primary-dark"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type: string;
    placeholder: string;
  }>(),
  {
    type: "text",
    placeholder: "Default Placeholder ...",
  },
);
</script>

<style scoped>
input::placeholder {
  @apply text-primary-dark;
}
</style>
