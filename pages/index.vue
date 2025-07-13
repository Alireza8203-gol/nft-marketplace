<template>
  <Hero />
  <TrendingCollection />

  <Suspense>
    <template #default>
      <TopCreators />
    </template>
    <template #fallback>
      <div class="">Loading Top Creators...</div>
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <Categories />
    </template>
    <template #fallback>
      <div class="">Loading Top Categories...</div>
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <Discover />
    </template>
    <template #fallback>
      <div class="">Loading Top Discover...</div>
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <NFTHighlight />
    </template>
    <template #fallback>
      <div class="">Loading Top Highlights...</div>
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <HowItWorks />
    </template>
    <template #fallback>
      <div class="">Loading Top How It Works...</div>
    </template>
  </Suspense>

  <Suspense>
    <template #default>
      <SubscribeWidget />
    </template>
    <template #fallback>
      <div class="">Loading Top Subscribe Widget...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
const TopCreators = defineAsyncComponent(
  () => import("@/components/TopCreators.vue"),
);
const Categories = defineAsyncComponent(
  () => import("@/components/Categories.vue"),
);
const Discover = defineAsyncComponent(
  () => import("@/components/Discover.vue"),
);
const NFTHighlight = defineAsyncComponent(
  () => import("@/components/NFTHighlight.vue"),
);
const HowItWorks = defineAsyncComponent(
  () => import("@/components/HowItWorks.vue"),
);
const SubscribeWidget = defineAsyncComponent(
  () => import("@/components/SubscribeWidget.vue"),
);
</script>
