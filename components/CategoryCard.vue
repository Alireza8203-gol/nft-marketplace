<template>
  <NuxtLink
    :to="categoryInfo.link"
    class="flex flex-col items-stretch overflow-hidden bg-secondary-dark rounded-2.5xl hover-class"
  >
    <div
      class="relative desktop:row-span-3 flex h-36 desktop:h-60 items-stretch justify-center"
    >
      <NuxtImg :src="categoryInfo.image" class="object-cover" />
      <div
        class="absolute flex items-center justify-center backdrop-blur-lg size-full"
      >
        <img alt="Art" :src="categoryInfo.svg" class="size-20" />
      </div>
    </div>
    <div
      class="flex items-stretch justify-start p-5 desktop:px-7.5 bg-secondary-dark"
    >
      <h5 class="flex-shrink font-semibold desktop:text-1.5xl leading-140">
        {{ categoryInfo.name }}
      </h5>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CategoryInfo } from "~/types/Global";

const props = defineProps<{
  categoryInfo: CategoryInfo;
}>();
</script>
