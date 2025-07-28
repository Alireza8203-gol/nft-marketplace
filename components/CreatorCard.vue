<template>
  <NuxtLink
    to="/create-account"
    class="relative flex desktop:flex-col items-center gap-x-5 gap-y-5 p-5 bg-secondary-dark rounded-2.5xl hover-class"
  >
    <div
      class="absolute top-3 desktop:top-5 left-3 desktop:left-5 flex items-center justify-center overflow-hidden rounded-full size-7.5 bg-primary-dark font-spaceMono leading-140"
    >
      {{ index + 1 }}
    </div>
    <div class="overflow-hidden rounded-full size-15 desktop:size-30">
      <NuxtImg :src="`/images/avatars/${artist.profilePic}`" />
    </div>
    <div
      class="flex flex-grow flex-col items-start desktop:items-center justify-between desktop:gap-y-1"
    >
      <h5 class="font-semibold font-workSans text-1.5xl leading-140">
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
