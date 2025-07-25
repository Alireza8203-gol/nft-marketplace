<template>
  <PageSection>
    <div class="container">
      <SectionHeader
        title="Top Creators"
        subtitle="Checkout Top Rated Creators on the NFT Marketplace"
      >
        <CButton
          link-to="/"
          caption="View Rankings"
          class="btn-lg btn-outline self-end hidden tablet:flex"
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
          v-for="(artist, index) in visibleArtists"
        />
      </div>
      <CButton
        link-to="/"
        caption="View Rankings"
        class="btn-lg btn-outline self-end tablet:hidden"
      >
        <Icon name="heroicons:rocket-launch" class="size-5 text-pink" />
      </CButton>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import type { ArtistInfo } from "~/types/Global";
import { useApiData } from "~/composables/useApiData";

const windowStore = useWindowStore();
const allArtists = ref<ArtistInfo[]>([]);
const visibleArtists: Ref<ArtistInfo[] | []> = ref([]);
const artistApi = useApiData<ArtistInfo[]>("/api/artists");

const updateVisibleArtists = () => {
  visibleArtists.value = allArtists.value.slice(0, getSliceAmount());
};
const getSliceAmount = () => {
  if (windowStore.width < 750) return 5;
  if (750 <= windowStore.width && windowStore.width < 1110) return 6;
  return 12;
};

onMounted(async () => {
  await artistApi.fetchData();
  allArtists.value = artistApi.data.value as ArtistInfo[];
  updateVisibleArtists();
});

watch(
  () => windowStore.width,
  () => {
    updateVisibleArtists();
  },
);
</script>
