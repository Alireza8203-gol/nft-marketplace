<template>
  <div class="grid grid-rows-4 bg-secondary-dark rounded-2.5xl overflow-hidden">
    <div
      class="relative flex items-center justify-center row-span-3 h-36 desktop:h-60 bg-indigo-500"
    >
      <NuxtImg :src="categoryInfo.image" class="bg-cover" />
      <img alt="Art" :src="categoryInfo.svg" class="absolute size-20" />
    </div>
    <div
      class="flex items-center justify-start px-5 desktop:px-7.5 bg-secondary-dark"
    >
      <h5 class="font-semibold desktop:text-1.5xl leading-140">
        {{ categoryInfo.name }}
      </h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CategoryInfo } from "~/types/Global";

const props = defineProps<{
  categoryInfo: CategoryInfo;
}>();
</script>
