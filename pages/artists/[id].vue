<template>
  <section>
    <div class="artist-banner relative h-62.5">
      <div class="gradient-cover absolute size-full z-50"></div>
    </div>
    <div class="container"></div>
  </section>
</template>

<script setup lang="ts">
import { useFindArtist } from "~/composables/useFindArtist";

const route = useRoute();
const id = route.params.id;

onMounted(() => {
  const { artist, error, pending } = useFindArtist(id as string);
  console.log(artist);
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
