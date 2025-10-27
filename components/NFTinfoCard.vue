<template>
  <div
    :class="[
      'rounded-2.5xl overflow-hidden',
      {
        'bg-primary-dark': variant === 'darker',
        'bg-secondary-dark': variant === 'lighter',
      },
    ]"
  >
    <div>
      <NuxtImg
        :alt="`${props.nftsInfo?.name}`"
        :src="`/images/${props.nftsInfo?.image}`"
      />
    </div>
    <div
      class="flex flex-col items-start justify-center p-5 tablet:px-7.5 gap-y-6.25"
    >
      <div class="flex flex-col items-start justify-center gap-y-1.25">
        <nuxt-link :to="`/artists/${props.nftsInfo?.id}`">
          <h5 class="font-semibold text-1.5xl leading-140">
            {{ nftsInfo?.name }}
          </h5>
        </nuxt-link>
        <ArtistProfileSmall v-if="artist" :artist-info="artist" />
        <div v-else-if="pending" class="text-sm text-gray-400">
          Loading artist...
        </div>
        <div v-else-if="error || !artist" class="text-sm text-red-400">
          Error loading artist
        </div>
      </div>
      <div class="flex w-full items-center justify-between">
        <div class="flex flex-col items-start gap-y-2">
          <span class="text-xs leading-extra-tight text-custom-gray">
            Price
          </span>
          <p class="font-normal font-spaceMono leading-140">
            {{ nftsInfo?.price }} {{ nftsInfo?.currency }}
          </p>
        </div>
        <div class="flex flex-col items-end gap-y-2">
          <span class="text-xs leading-extra-tight text-custom-gray">
            Highest Bid
          </span>
          <p class="font-normal font-spaceMono leading-140">
            0.33 {{ nftsInfo?.currency }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NFTItem } from "~/types/Global";
import { useFindArtistById } from "~/composables/useFindArtistById";

const props = withDefaults(
  defineProps<{
    nftsInfo?: NFTItem;
    variant: "lighter" | "darker";
  }>(),
  {
    variant: "darker",
  },
);

const { artist, pending, error } = await useFindArtistById(
  props.nftsInfo?.creatorId || "",
);
</script>
