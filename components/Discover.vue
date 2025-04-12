<template>
  <PageSection>
    <div class="container">
      <SectionHeader
        title="Discover More NFTs"
        subtitle="Explore new trending NFTs"
      >
        <CButton
          caption="See All"
          class="btn btn-lg btn-outline self-end hidden tablet:flex"
        >
          <Icon name="heroicons:eye" class="size-5 text-pink" />
        </CButton>
      </SectionHeader>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-y-5 gap-x-7.5"
      >
        <NFTinfoCard
          :key="NFT.id"
          :nfts-info="NFT"
          variant="lighter"
          v-for="NFT in NFTsInfoArray"
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import axios from "axios";
import type { NFTItem } from "~/types/Global";

const NFTsInfoArray = ref<NFTItem[] | []>([]);

onMounted(async () => {
  try {
    const { data } = await axios.get("/api/allNFTs");
    NFTsInfoArray.value = data.slice(0, 3) as NFTItem[];
  } catch (error) {
    console.log("Error while fetching data in the component: ", error);
  }
});
</script>
