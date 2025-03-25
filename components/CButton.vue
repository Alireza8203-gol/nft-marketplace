<template>
  <NuxtLink :to="props.linkTo" class="btn">
    <slot />
    <span>{{ props.caption }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CButtonProps } from "~/types/Global";
const props: CButtonProps = defineProps({
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
