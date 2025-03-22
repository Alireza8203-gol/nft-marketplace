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
        <TrendCollection />
        <TrendCollection class="hidden tablet:flex" />
        <TrendCollection class="hidden desktop:flex" />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts"></script>
