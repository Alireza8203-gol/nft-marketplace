<template>
  <NuxtLink
    to="/create-account"
    class="flex desktop:flex-col items-center relative p-5 gap-x-5 gap-y-5 bg-secondary-dark rounded-2.5xl hover-class"
  >
    <div
      class="absolute left-3 top-3 desktop:left-5 desktop:top-5 flex items-center justify-center size-7.5 bg-primary-dark rounded-full overflow-hidden font-spaceMono leading-140"
    >
      {{ index + 1 }}
    </div>
    <div class="size-15 desktop:size-30 rounded-full overflow-hidden">
      <NuxtImg :src="`/images/avatars/${artist.profileImage}`" />
    </div>
    <div
      class="flex flex-col items-start desktop:items-center justify-between desktop:gap-y-1 flex-grow"
    >
      <h5 class="font-workSans font-semibold text-1.5xl leading-140">
        {{ artist.name }}
      </h5>
      <div class="flex items-center justify-between gap-x-4 desktop:gap-x-2.5">
        <p class="font-workSans leading-140 text-custom-gray">Total Sales:</p>
        <p class="font-spaceMono leading-140">{{ artist.totalSales }} ETH</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ArtistInfo } from "~/types/Global";

const props = defineProps<{
  artist: ArtistInfo;
  index: number;
}>();
</script>
