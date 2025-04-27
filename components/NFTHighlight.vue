<template>
  <section class="h-[640px]">
    <div class="gradient-div">
      <div class="container h-full">
        <div
          class="flex flex-col tablet:flex-row items-stretch tablet:items-end justify-end tablet:justify-between gap-2.5 h-full pb-10 tablet:pb-15"
        >
          <div class="flex flex-col gap-7.5">
            <ArtistProfileSmall
              :artist-info="artistInfo"
              class="w-fit py-2.5 px-5 bg-secondary-dark rounded-2.5xl"
            />
            <h3
              class="text-4.2xl desktop:text-5.1xl leading-tight desktop:leading-140 font-semibold text-white"
            >
              Magic Mashrooms
            </h3>
            <CButton
              link-to="/"
              caption="See NFT"
              class="hidden tablet:flex btn btn-lg leading-140 bg-white text-primary-dark"
            >
              <Icon name="heroicons:eye" class="size-5 text-pink" />
            </CButton>
          </div>
          <div
            class="flex flex-col tablet:flex-row items-end justify-stretch gap-7.5"
          >
            <CountdownClock />
            <CButton
              link-to="/"
              caption="See NFT"
              class="tablet:hidden btn btn-lg leading-140 bg-white text-primary-dark"
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
const artistInfo = {
  username: "Shroomie",
  profilePic: "avatar7-min.png",
};
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
