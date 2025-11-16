<template>
  <section>
    <div class="nft-banner min-h-80 mb-10"></div>
    <div class="container">
      <div class="flex flex-col tablet:flex-row items-start justify-between">
        <h2
          class="font-semibold text-2.6xl tablet:text-4.2xl desktop:text-5.1xl leading-140 tablet:leading-tight desktop:leading-extra-tight"
        >
          {{ nftInfo?.name }}
        </h2>
        <div
          class="flex items-end justify-stretch gap-7.5 bg-secondary-dark rounded-2.5xl"
        >
          <CountdownClock :date="countDownData">
            <CButton
              link-to="/"
              caption="Place Bid"
              class="btn btn-lg w-full leading-140 text-primary-dark"
            />
          </CountdownClock>
          <!-- <Icon name="heroicons:eye" class="size-5 text-pink" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { NFTItem } from "~/types/Global";
import { useCountdown } from "~/composables/useCountdown";
import { useFindNFTById } from "~/composables/useFindNFTById";

const route = useRoute();
const id = route.params.id;
const nftInfo = ref<NFTItem | null>(null);

const countDownData = useCountdown(new Date("2026-06-01T00:00:00").getTime());

onMounted(async () => {
  const { nfts } = await useFindNFTById([id]);
  console.log(nfts.value);
  nftInfo.value = nfts.value[0];
});
console.log(typeof id);
</script>

<style scoped>
.nft-banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/sunset-dimension-min.webp");
}
</style>
