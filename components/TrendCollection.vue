<template>
  <div class="flex flex-col items-center gap-y-3.75">
    <div class="grid grid-cols-3 grid-rows-4 items-center gap-3.75">
      <NuxtImg
        :src="src"
        :key="index"
        :class="[
          'rounded-2.5xl overflow-hidden hover-class',
          { 'col-span-3 row-span-3': index === 0 },
        ]"
        v-for="(src, index) in collectionInfo.imagesSrc"
      />
      <CButton
        link-to="/"
        caption="1025+"
        class="text-base font-bold size-full font-spaceMono leading-140 tablet:text-1.5xl tablet:leading-160"
      />
    </div>
    <div class="flex w-full flex-col items-start gap-y-2.5">
      <h5 class="font-semibold font-workSans text-1.5xl leading-140">
        {{ collectionInfo.collectionTitle }}
      </h5>
      <ArtistProfileSmall :artist-info="props.collectionInfo.artist" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtistProfileSmall from "~/components/ArtistProfile-small.vue";

const props = defineProps({
  collectionInfo: {
    type: Object,
    required: true,
    default: {
      id: "1",
      collectionTitle: "Default Collection",
      imagesSrc: [
        "/images/colorful-dog-min.png",
        "/images/trending/trending-mouse-min.png",
        "/images/trending/trending-colorful-bear-min.png",
      ],
      artist: {
        username: "default artist",
        profilePic: "avatar1.png",
      },
    },
  },
});
</script>
