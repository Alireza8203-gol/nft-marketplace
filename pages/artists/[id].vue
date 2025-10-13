<template>
  <section>
    <div class="artist-banner relative h-62.5 mb-22.5">
      <div
        class="gradient-cover absolute flex items-end justify-center size-full z-10"
      >
        <div
          class="size-30 -m-15 border-2 border-primary-dark rounded-2.5xl overflow-hidden"
        >
          <nuxt-img
            class="z-20"
            :src="
              loading
                ? '/images/avatars/default-profile-pic.jpg'
                : `/images/avatars/${artistInfo?.profilePic}`
            "
          />
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="font-semibold text-2.6xl leading-140">
        {{ artistInfo?.name }}
      </h4>
      <div class="flex flex-col tablet:flex-row gap-5 my-7.5">
        <button class="btn btn-primary">
          <Icon name="heroicons:document-duplicate" class="size-5 text-white" />
          Help
        </button>
        <button class="btn btn-outline">
          <Icon name="heroicons:plus" class="size-5 text-pink" />
          Follow
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ArtistInfo } from "~/types/Global";
import { useFindArtist } from "~/composables/useFindArtist";

const route = useRoute();
const id = route.params.id;
const artistInfo = ref<ArtistInfo | null>(null);
const loading = ref<boolean>(true);
// const openSeaAPI = useApiData("https://api.opensea.io/api/v2/collections", {
//   headers: {
//     accept: "application/json",
//     "x-api-key": "e6a69e6d341945a2b7a494d39e1f2134",
//   },
// });

onMounted(async () => {
  const { artist, pending } = await useFindArtist(id as string);
  artistInfo.value = artist.value;
  loading.value = pending.value;
});
</script>

<style scoped>
.artist-banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/artist-banner.webp");
}

.gradient-cover {
  background: #9747ff;
  background: linear-gradient(
    0deg,
    rgba(151, 71, 255, 1) 0%,
    rgba(151, 71, 255, 0) 100%
  );
}
</style>
