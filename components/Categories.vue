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
import axios from "axios";
import type { CategoryInfo } from "~/types/Global";

const categoriesArray = ref<CategoryInfo[] | []>([]);

onMounted(async () => {
  try {
    const { data } = await axios.get("/api/categories");
    categoriesArray.value = data;
    console.log(data);
  } catch (error) {
    console.log("Error while fetching data from API: ", error);
  }
});
</script>
