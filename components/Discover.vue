<template>
  <PageSection>
    <div class="container">
      <SectionHeader
        title="Discover More NFTs"
        subtitle="Explore new trending NFTs"
      >
        <CButton
          link-to="/"
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
          v-for="NFT in visibleNFTsInfoArray"
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import type { NFTItem } from "~/types/Global";
import { useApiData } from "~/composables/useApiData";

const windowStore = useWindowStore();
const allNFTsInfoArray = ref<NFTItem[] | []>([]);
const visibleNFTsInfoArray = ref<NFTItem[] | []>([]);
const nftApi = useApiData<NFTItem[]>("/api/allNFTs");

const getSliceAmount = () => {
  if (windowStore.width < 750) return 3;
  if (750 <= windowStore.width && windowStore.width < 1110) return 2;
  return 3;
};
const updateVisibleNFTs = () => {
  visibleNFTsInfoArray.value = allNFTsInfoArray.value.slice(
    0,
    getSliceAmount()
  );
};

onMounted(async () => {
  await nftApi.fetchData();
  allNFTsInfoArray.value = nftApi.data.value as NFTItem[];
  updateVisibleNFTs();
});

watch(
  () => windowStore.width,
  () => {
    updateVisibleNFTs();
  },
  { immediate: true }
);
</script>
