<template>
  <section>
    <div class="container">
      <div
        class="flex flex-col items-start justify-center tablet:gap-y-5 tablet:py-10 desktop:py-20 gap-y-2.5 py-7.5"
      >
        <h2
          class="font-semibold tablet:leading-tight text-2.6xl tablet:text-4.2xl desktop:text-4.2xl leading-140 desktop:leading-extra-tight"
        >
          Top Creators
        </h2>
        <p
          class="font-normal leading-140 desktop:text-1.5xl desktop:leading-160"
        >
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="grid grid-cols-4 grid-rows-1">
        <div
          class="flex items-center justify-center py-5 text-base font-semibold desktop:py-3.75 desktop:text-1.5xl leading-140 text-custom-gray active"
        >
          {{ windowStore.width < 750 ? "1d" : "Today" }}
        </div>
        <div
          class="flex items-center justify-center py-5 text-base font-semibold desktop:py-3.75 desktop:text-1.5xl leading-140 text-custom-gray"
        >
          {{ windowStore.width < 750 ? "7d" : "This Week" }}
        </div>
        <div
          class="flex items-center justify-center py-5 text-base font-semibold desktop:py-3.75 desktop:text-1.5xl leading-140 text-custom-gray"
        >
          {{ windowStore.width < 750 ? "30d" : "This Month" }}
        </div>
        <div
          class="flex items-center justify-center py-5 text-base font-semibold desktop:py-3.75 desktop:text-1.5xl leading-140 text-custom-gray"
        >
          All Time
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <c-table-row>
        <template #left>
          <div>#</div>
          <div>Artist</div>
        </template>
        <template #right>
          <div class="tablet:block hidden desktop:w-40 w-25">Change</div>
          <div class="desktop:block hidden desktop:w-40 w-25">NFTs Sold</div>
          <div class="desktop:w-40 w-25">Volume</div>
        </template>
      </c-table-row>
    </div>
  </section>
  <section>
    <div class="container">
      <c-table-row
        :key="artist.id"
        class="bg-secondary-dark"
        v-for="(artist, index) in artistsArray"
      >
        <template #left>
          <div
            class="flex items-center justify-center text-xs tablet:text-base font-normal size-6 desktop:size-7.5 rounded-2.5xl leading-extra-tight tablet:leading-140 desktop:bg-primary-dark"
          >
            {{ index + 1 }}
          </div>
          <div class="flex items-center justify-start gap-x-3 desktop:gap-x-5">
            <div>
              <nuxt-img
                :src="`/images/avatars/${artist.profilePic || 'default-profile-pic.jpg'}`"
                class="rounded-full size-6 desktop:size-15"
              />
            </div>
            <h5
              class="text-base font-normal tablet:font-semibold text-white tablet:text-1.5xl leading-140"
            >
              {{ artist.username }}
            </h5>
          </div>
        </template>
        <template #right>
          <div class="tablet:block hidden desktop:w-40 w-25 text-custom-green">
            +1.41%
          </div>
          <div class="desktop:block hidden desktop:w-40 w-25 text-white">
            {{ artist.nfts.length }}
          </div>
          <div class="desktop:w-40 w-25 text-white">
            {{ artist.totalSales }} ETH
          </div>
        </template>
      </c-table-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ArtistInfo } from "~/types/Global";
import { useApiData } from "~/composables/useApiData";

const windowStore = useWindowStore();
const artistsArray = ref<ArtistInfo[] | []>([]);
const artistsApi = useApiData<ArtistInfo[]>("/api/artists");

onMounted(async () => {
  await artistsApi.fetchData();
  artistsArray.value = artistsApi.data.value as ArtistInfo[];
  console.log(artistsArray.value);
});
</script>

<style scoped>
.active {
  @apply border-b-2 text-white border-e-custom-gray;
}
</style>
