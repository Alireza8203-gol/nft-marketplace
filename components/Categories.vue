<template>
  <PageSection>
    <div class="container">
      <SectionHeader title="Browse Categories" subtitle="" />
      <div class="grid grid-cols-2 tablet:grid-cols-4 gap-5 tablet:gap-7.5">
        <CategoryCard
          :key="categoryInfo.id"
          :category-info="categoryInfo"
          v-for="categoryInfo in categoriesArray"
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import type { CategoryInfo } from "~/types/Global";
import { useApiData } from "~/composables/useApiData";

const categoriesArray = ref<CategoryInfo[] | []>([]);
const categoriesApi = useApiData<CategoryInfo[]>("/api/categories");

onMounted(async () => {
  await categoriesApi.fetchData();
  categoriesArray.value = categoriesApi.data.value as CategoryInfo[];
});
</script>
