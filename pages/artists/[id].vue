<template>
  <section>
    <!-- Artist's Banner -->
    <div
      class="artist-banner relative flex items-end justify-center tablet:justify-start min-h-62.5 -z-10"
    >
      <!-- Gradiant Overlay -->
      <div class="gradient-cover absolute size-full"></div>
    </div>
    <!-- Artist's Details -->
    <div class="container">
      <!-- Artist's Avatar -->
      <div
        class="size-30 border-2 -mt-17.5 mx-auto tablet:mx-0 border-primary-dark rounded-2.5xl overflow-hidden z-50"
      >
        <nuxt-img
          :src="
            loading
              ? '/images/avatars/default-profile-pic.jpg'
              : `/images/avatars/${artistInfo?.profilePic}`
          "
        />
      </div>
      <!-- Artist's Name -->
      <div
        class="flex flex-col desktop:flex-row items-start desktop:items-center justify-start desktop:justify-between gap-y-7.5 w-full mt-7.5"
      >
        <h4
          class="font-semibold text-2.6xl tablet:text-4.2xl desktop:text-5.1xl leading-140 tablet:leading-tight desktop:leading-extra-tight"
        >
          {{ artistInfo?.name }}
        </h4>
        <div class="flex flex-col tablet:flex-row gap-5 w-full desktop:w-fit">
          <button class="btn btn-primary">
            <Icon
              name="heroicons:document-duplicate"
              class="size-5 text-white"
            />
            Lorem ipsum dolor sit ...
          </button>
          <button class="btn btn-outline btn-lg">
            <Icon name="heroicons:plus" class="size-5 text-pink" />
            Follow
          </button>
        </div>
      </div>
      <!-- Artist's Status -->
      <div
        class="grid grid-cols-3 tablet:grid-cols-4 desktop:grid-cols-5 items-start gap-x-7.5 my-7.5"
      >
        <StatusBox
          :key="index"
          :status-info="item.info"
          :status-title="item.title"
          v-for="(item, index) in artistStatus"
        />
      </div>
      <!-- Bio -->
      <div>
        <span
          class="mb-2.5 font-spaceMono tablet:font-bold text-base tablet:text-1.5xl leading-140 tablet:leading-160 text-custom-gray"
        >
          Bio
        </span>
        <p class="text-base desktop:text-1.5xl leading-140 desktop:leading-160">
          {{ artistInfo?.bio }}
        </p>
      </div>
      <!-- Social Media -->
      <div class="mt-7.5">
        <span
          class="mb-2.5 font-spaceMono tablet:font-bold text-base tablet:text-1.5xl leading-140 tablet:leading-160 text-custom-gray"
        >
          Links
        </span>
        <!-- Social Media Logos -->
        <div class="flex items-center justify-start gap-x-2.5">
          <nuxt-img
            class="size-6 desktop:size-8"
            src="/SVGs/svg-logo/DiscordLogo.svg"
          />
          <nuxt-img
            class="size-6 desktop:size-8"
            src="/SVGs/svg-logo/TwitterLogo.svg"
          />
          <nuxt-img
            class="size-6 desktop:size-8"
            src="/SVGs/svg-logo/InstagramLogo.svg"
          />
          <nuxt-img
            class="size-6 desktop:size-8"
            src="/SVGs/svg-logo/YoutubeLogo.svg"
          />
        </div>
      </div>
      <!-- Artist's NFTs -->
      <filtering-tabs :tabs="tabs" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFindNFTById } from "~/composables/useFindNFTById";
import type { ArtistInfo, NFTItem, StatusObj } from "~/types/Global";
import { useFindArtistById } from "~/composables/useFindArtistById";

const route = useRoute();
const id = route.params.id;
const loading = ref<boolean>(true);
const artistStatus = ref<StatusObj[]>([]);
const nftsInfo = ref<NFTItem[] | null>(null);
const artistInfo = ref<ArtistInfo | null>(null);
const tabs = ["Created", "Owned", "Collection"];

// const getArtistsNFTs = (nftsIdArray: string[]) => {};

onMounted(async () => {
  const { artist, pending } = await useFindArtistById(id as string);
  artistInfo.value = artist.value;
  const { nfts } = await useFindNFTById(artistInfo.value.nfts);
  console.log(nfts.value);
  // nftsInfo.value = nfts.value;
  loading.value = pending.value;
  artistStatus.value = [
    {
      title: "Volume",
      info: artistInfo.value?.salesVolume,
    },
    {
      title: "NFTs Sold",
      info: artistInfo.value?.nftsSold,
    },
    {
      title: "Followers",
      info: artistInfo.value?.followers,
    },
  ];
});
</script>

<style scoped>
.artist-banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/artist-banner.webp");
}

.gradient-cover {
  background: #9747ff;
  background: linear-gradient(
    0deg,
    rgba(151, 71, 255, 1) 0%,
    rgba(151, 71, 255, 0) 100%
  );
}
</style>
