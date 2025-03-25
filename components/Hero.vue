<template>
  <PageSection>
    <div class="container">
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 items-start justify-center gap-x-7.5 pt-10 desktop:pt-0"
      >
        <div
          class="flex flex-col items-start gap-y-10 tablet:gap-y-5 desktop:gap-y-7.5"
        >
          <div
            class="flex flex-col items-start gap-y-2.5 tablet:gap-y-5 desktop:gap-y-5"
          >
            <h1
              class="text-[28px] tablet:text-[38px] desktop:text-[67px] font-semibold leading-140 tablet:leading-tight desktop:leading-extra-tight"
            >
              Discover<br class="hidden desktop:block" />
              Digital Art & Collect NFTs
            </h1>
            <p
              class="text-base desktop:text-[22px] leading-140 desktop:leading-160 font-normal text-justify"
            >
              Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
              Sell Art From More Than 20k Nft Artists.
            </p>
          </div>
          <HeroAnimatedGif :for-mobile="true" />
          <c-button caption="Get Started" class="btn btn-lg">
            <Icon name="heroicons:rocket-launch" class="size-5" />
          </c-button>
          <div
            class="grid grid-cols-3 items-start justify-between gap-x-7.5 w-full"
          >
            <StatusBox
              :key="index"
              :status-info="item.info"
              :status-title="item.title"
              v-for="(item, index) in status"
            />
          </div>
        </div>
        <HeroAnimatedGif :for-desktop="true" />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import axios from "axios";
import HeroAnimatedGif from "~/components/HeroAnimatedGif.vue";
import type { StatusObj } from "~/types/Global";

const status = ref<StatusObj[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/status");
    // console.log(response.data);
    status.value = response.data;
  } catch (error) {
    console.log("error from try/catch: ", error);
  }
});
</script>
