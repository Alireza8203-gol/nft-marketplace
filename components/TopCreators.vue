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
const artists: Ref<ArtistInfo | []> = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get("api/artists");
    console.log(data);
    artists.value = data.slice(0, 12);
    console.log(artists.value);
  } catch (error) {
    console.log("error during fetching data from API: ", error);
  }
});
</script>
