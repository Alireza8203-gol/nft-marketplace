<template>
  <input :type="props.type" :placeholder="props.placeholder" />
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
