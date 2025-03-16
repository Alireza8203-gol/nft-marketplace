<template>
  <NuxtLink
    :to="props.linkTo"
    class="flex items-center justify-center gap-x-3 py-5 px-7.5 bg-pink rounded-[20px] font-semibold text-base"
  >
    <slot />
    <span>{{ props.caption }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  caption: {
    type: String,
    default: "Default Caption",
  },
  linkTo: {
    type: String,
    default: "/",
  },
});
</script>
