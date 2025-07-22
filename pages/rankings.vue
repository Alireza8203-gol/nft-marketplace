<template>
  <section>
    <div class="container">
      <div
        class="flex flex-col items-start justify-center gap-y-2.5 tablet:gap-y-5 py-7.5 tablet:py-10 desktop:py-20"
      >
        <h2
          class="font-semibold text-2.6xl tablet:text-4.2xl desktop:text-4.2xl leading-140 tablet:leading-tight desktop:leading-extra-tight"
        >
          Top Creators
        </h2>
        <p
          class="font-normal leading-140 desktop:text-1.5xl desktop:leading-160"
        >
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="grid grid-cols-4 grid-rows-1">
        <div
          class="flex items-center justify-center py-5 desktop:py-3.75 font-semibold text-base desktop:text-1.5xl leading-140 text-custom-gray active"
        >
          {{ windowStore.width < 750 ? "1d" : "Today" }}
        </div>
        <div
          class="flex items-center justify-center py-5 desktop:py-3.75 font-semibold text-base desktop:text-1.5xl leading-140 text-custom-gray"
        >
          {{ windowStore.width < 750 ? "7d" : "This Week" }}
        </div>
        <div
          class="flex items-center justify-center py-5 desktop:py-3.75 font-semibold text-base desktop:text-1.5xl leading-140 text-custom-gray"
        >
          {{ windowStore.width < 750 ? "30d" : "This Month" }}
        </div>
        <div
          class="flex items-center justify-center py-5 desktop:py-3.75 font-semibold text-base desktop:text-1.5xl leading-140 text-custom-gray"
        >
          All Time
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <c-table-row>
        <template #left>
          <div>#</div>
          <div>Artist</div>
        </template>
        <template #right>
          <div class="hidden tablet:block w-25 desktop:w-40">Change</div>
          <div class="hidden desktop:block w-25 desktop:w-40">NFTs Sold</div>
          <div class="w-25 desktop:w-40">Volume</div>
        </template>
      </c-table-row>
    </div>
  </section>
  <page-section>
    <div class="container"></div>
  </page-section>
</template>

<script setup lang="ts">
const artist = {};
const windowStore = useWindowStore();
</script>

<style scoped>
.active {
  @apply text-white border-b-2 border-e-custom-gray;
}
</style>
