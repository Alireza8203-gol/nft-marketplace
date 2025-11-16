<template>
  <section class="h-[640px]">
    <div class="gradient-div">
      <div class="container h-full">
        <div
          class="flex h-full tablet:flex-row flex-col tablet:items-end items-stretch justify-end tablet:justify-between pb-10 tablet:pb-15 gap-2.5"
        >
          <div class="flex flex-col gap-7.5">
            <ArtistProfileSmall
              :artist-info="artistInfo"
              class="w-fit px-5 py-2.5 bg-secondary-dark rounded-2.5xl"
            />
            <h3
              class="font-semibold leading-tight text-white text-4.2xl desktop:text-5.1xl desktop:leading-140"
            >
              Magic Mashrooms
            </h3>
            <CButton
              link-to="/"
              caption="See NFT"
              class="tablet:flex hidden bg-white btn btn-lg leading-140 text-primary-dark"
            >
              <Icon name="heroicons:eye" class="size-5 text-pink" />
            </CButton>
          </div>
          <div
            class="flex tablet:flex-row flex-col items-end justify-stretch gap-7.5"
          >
            <CountdownClock :date="countDownData" />
            <CButton
              link-to="/"
              caption="See NFT"
              class="tablet:hidden bg-white btn btn-lg leading-140 text-primary-dark"
            >
              <Icon name="heroicons:eye" class="size-5 text-pink" />
            </CButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCountdown } from "@/composables/useCountdown";

const artistInfo = {
  username: "Shroomie",
  profilePic: "avatar7-min.png",
};

const countDownData = useCountdown(new Date("2026-06-01T00:00:00").getTime());
</script>

<style scoped>
section {
  background-image: url("/public/images/giant-mushroom-min.webp");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.gradient-div {
  height: 100%;
  background: #a259ff;
  background: linear-gradient(
    0deg,
    rgba(162, 89, 255, 1) 0%,
    rgba(162, 89, 255, 0) 100%
  );
}
</style>
