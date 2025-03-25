<template>
  <div
    :class="[
      'w-full h-full',
      { 'tablet:hidden': forMobile, 'hidden tablet:block': forDesktop },
    ]"
  >
    <img src="~/assets/gif/hero-gif.gif" alt="Hero Animated Gif" />
  </div>
</template>

<script setup lang="ts">
import type { AnimatedGifProps } from "~/types/Global";

const props: AnimatedGifProps = defineProps({
  forMobile: {
    type: Boolean,
    default: false,
  },
  forDesktop: {
    type: Boolean,
    default: false,
  },
});
</script>
