<template>
  <NuxtLink
    to="/"
    :class="[
      'rounded-2.5xl overflow-hidden',
      {
        'bg-primary-dark': variant === 'darker',
        'bg-secondary-dark': variant === 'lighter',
      },
    ]"
  >
    <div>
      <NuxtImg src="/images/distant-galaxy-min.webp" alt="discover" />
    </div>
    <div
      class="flex flex-col items-start justify-center p-5 tablet:px-7.5 gap-y-6.25"
    >
      <div class="flex flex-col items-start justify-center gap-y-1.25">
        <h5 class="font-semibold text-1.5xl leading-140">Life on Edena</h5>
        <ArtistProfileSmall />
      </div>
      <div class="flex items-center justify-between w-full">
        <div class="flex flex-col items-start gap-y-2">
          <span class="text-xs leading-extra-tight text-custom-gray">
            Price
          </span>
          <p class="font-spaceMono font-normal leading-140">1.63 ETH</p>
        </div>
        <div class="flex flex-col items-end gap-y-2">
          <span class="text-xs leading-extra-tight text-custom-gray">
            Highest Bid
          </span>
          <p class="font-spaceMono font-normal leading-140">0.33 wETH</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { NFTItem } from "~/types/Global";

const props = withDefaults(
  defineProps<{
    nftsInfo?: NFTItem;
    variant: "lighter" | "darker";
  }>(),
  {
    variant: "darker",
  },
);
</script>
