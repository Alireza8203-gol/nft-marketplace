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
import axios from "axios";
import type { NFTItem } from "~/types/Global";
import { useWindowStore } from "~/stores/useWindowWidth";

const windowStore = useWindowStore();
const allNFTsInfoArray = ref<NFTItem[] | []>([]);
const visibleNFTsInfoArray = ref<NFTItem[] | []>([]);

const getSliceAmount = () => {
  if (windowStore.width < 750) return 3;
  if (750 <= windowStore.width && windowStore.width < 1110) return 2;
  return 3;
};
const updateVisibleNFTs = () => {
  visibleNFTsInfoArray.value = allNFTsInfoArray.value.slice(
    0,
    getSliceAmount(),
  );
};

onMounted(async () => {
  windowStore.updateWidth();
  window.addEventListener("resize", windowStore.updateWidth);
  try {
    const { data } = await axios.get("/api/allNFTs");
    allNFTsInfoArray.value = data;
    updateVisibleNFTs();
  } catch (error) {
    console.log("Error while fetching data in the component: ", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", windowStore.updateWidth);
});

watch(
  () => windowStore.width,
  () => {
    updateVisibleNFTs();
  },
  { immediate: true },
);
</script>
