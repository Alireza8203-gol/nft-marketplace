<template>
  <nuxt-link
    :to="`/artists/${props.artistInfo.id}`"
    class="flex items-start justify-start gap-x-3"
  >
    <NuxtImg
      :src="`/images/avatars/${props.artistInfo?.profilePic}`"
      class="overflow-hidden transition-transform duration-300 size-6 rounded-2.5xl hover:scale-95"
    />
    <p class="text-base font-normal font-workSans leading-140">
      {{ artistInfo?.username }}
    </p>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { ArtistInfo } from "~/types/Global";

const props = defineProps<{
  artistInfo: ArtistInfo;
}>();

// const props = withDefaults(
//   defineProps<{
//     artistInfo: ArtistInfo;
//   }>(),
//   {
//     artistInfo: () => ({
//       username: "default artist",
//       profilePic: "avatar1-min.png",
//     }),
//   },
// );
</script>
