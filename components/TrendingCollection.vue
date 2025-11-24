<template>
  <PageSection>
    <div class="container">
      <SectionHeader
        title="Trending Collection"
        subtitle="Checkout our weekly updated trending collection."
      >
      </SectionHeader>
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-7.5"
      >
        <TrendCollection
          :key="index"
          :collection-info="collection"
          v-for="(collection, index) in trendingCollections"
          :class="[
            {
              'hidden tablet:flex': index === 1,
              'hidden desktop:flex': index === 2,
            },
          ]"
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import type { CollectionInfo } from "~/types/Global";
import { useApiData } from "~/composables/useApiData";

const trendingCollections = ref<CollectionInfo[] | []>([]);
const trendingApi = useApiData<CollectionInfo[]>("/api/collections");

onMounted(async () => {
  await trendingApi.fetchData();
  console.log(trendingApi.data.value);
  trendingCollections.value = trendingApi.data.value?.slice(
    0,
    3,
  ) as CollectionInfo[];
});
</script>
