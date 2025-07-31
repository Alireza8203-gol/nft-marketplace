<template>
  <section>
    <div class="container">
      <div
        class="flex flex-col items-start justify-center tablet:gap-y-5 tablet:py-10 desktop:py-20 gap-y-2.5 py-7.5"
      >
        <h2
          class="font-semibold tablet:leading-tight text-2.6xl tablet:text-4.2xl desktop:text-4.2xl leading-140 desktop:leading-extra-tight"
        >
          Browse Marketplace
        </h2>
        <p
          class="font-normal leading-140 desktop:text-1.5xl desktop:leading-160"
        >
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
      </div>
      <div
        class="flex w-full items-center justify-between gap-x-7 border p-5 text-base font-normal mb-7.5 rounded-2.5xl border-secondary-dark leading-140 text-custom-gray"
      >
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search your favourite NFTs"
          class="w-full bg-transparent text-white outline-none"
        />
        <Icon
          class="text-white size-6"
          name="heroicons:magnifying-glass-20-solid"
        />
      </div>
      <div class="grid grid-cols-2 grid-rows-1">
        <div class="filtering active" @click="addActiveClass">NFTs</div>
        <div class="filtering" @click="addActiveClass">Collections</div>
      </div>
    </div>
  </section>
  <section class="border-b-2 bg-secondary-dark border-b-primary-dark">
    <div class="container">
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-y-5 py-10 tablet:py-15 gap-x-7.5"
      >
        <suspense>
          <template #default>
            <NFTinfoCard
              :key="NFT.id"
              variant="darker"
              :nfts-info="NFT"
              v-for="NFT in filteredNfts"
              v-if="showingTab === 'NFTs'"
            />
            <TrendCollection
              :key="index"
              :collection-info="collection"
              v-else-if="showingTab === 'Collections'"
              v-for="(collection, index) in collectionsArray"
            />
          </template>
          <template #fallback>
            <div class="">Loading Top Subscribe NFT...</div>
          </template>
        </suspense>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useApiData } from "~/composables/useApiData";
import type { CollectionInfo, NFTItem } from "~/types/Global";
import { useActiveClass } from "~/composables/useActiveClass";

const NFTinfoCard = defineAsyncComponent(
  () => import("@/components/NFTinfoCard.vue"),
);

const searchQuery = ref<string>("");
const showingTab = ref<string>("NFTs");
const nftsArray = ref<NFTItem[] | []>([]);
const collectionsArray = ref<CollectionInfo[] | []>([]);
const nftApiCall = useApiData<NFTItem[]>("/api/allNFTs");
const trendingApi = useApiData<CollectionInfo[]>("/api/collections");

const filteredNfts = computed(() => {
  if (!searchQuery.value) return nftsArray.value;
  return nftsArray.value.filter((NFT) => {
    return NFT.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const addActiveClass = (e) => {
  const chosenTab = useActiveClass(e) as string;
  showingTab.value = chosenTab;
  console.log(chosenTab);
};

onMounted(async () => {
  await nftApiCall.fetchData();
  await trendingApi.fetchData();
  nftsArray.value = nftApiCall.data.value as NFTItem[];
  collectionsArray.value = trendingApi.data.value as CollectionInfo[];
});
</script>

<style scoped>
.active {
  @apply border-b-2 text-white border-e-custom-gray;
}
</style>
