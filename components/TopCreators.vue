<template>
  <PageSection>
    <div class="container">
      <SectionHeader
        title="Top Creators"
        subtitle="Checkout Top Rated Creators on the NFT Marketplace"
      >
        <CButton
          caption="View Rankings"
          class="btn btn-lg btn-outline self-end hidden tablet:flex"
        >
          <Icon name="heroicons:rocket-launch" class="size-5 text-pink" />
        </CButton>
      </SectionHeader>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 grid-rows-5 tablet:grid-rows-3 gap-7.5 mb-10 overflow-hidden"
      >
        <CreatorCard
          :index="index"
          :key="artist.id"
          :artist="artist"
          v-for="(artist, index) in artists"
        />
      </div>
      <CButton
        caption="View Rankings"
        class="btn btn-lg btn-outline self-end tablet:hidden"
      >
        <Icon name="heroicons:rocket-launch" class="size-5 text-pink" />
      </CButton>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import axios from "axios";
import type { ArtistInfo } from "~/types/Global";

const width = ref<number>(0);
const allArtists = ref<ArtistInfo[]>([]);
const artists: Ref<ArtistInfo[] | []> = ref([]);

const updateVisibleArtists = () => {
  artists.value = allArtists.value.slice(0, getSliceAmount());
};
const updateWidth = () => {
  width.value = window.innerWidth;
  updateVisibleArtists();
};
const getSliceAmount = () => {
  if (width.value < 750) return 5;
  if (750 <= width.value && width.value < 1110) return 6;
  return 12;
};

onMounted(async () => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
  try {
    const { data } = await axios.get("api/artists");
    allArtists.value = data as ArtistInfo[];
    updateVisibleArtists();
  } catch (error) {
    console.log("error during fetching data from API: ", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
