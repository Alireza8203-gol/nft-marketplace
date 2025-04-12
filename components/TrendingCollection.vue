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
import axios from "axios";
import type { CollectionInfo } from "~/types/Global";

const trendingCollections = ref<CollectionInfo[] | []>([]);

onMounted(async () => {
  try {
    const { data } = await axios.get("/api/trending");
    trendingCollections.value = data;
  } catch (error) {
    console.log("error fetching trending collections from api", error);
  }
});
</script>
