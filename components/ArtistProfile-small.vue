<template>
  <div class="flex items-start justify-start gap-x-3">
    <NuxtLink to="/">
      <NuxtImg
        :src="`/images/avatars/${props.artistInfo?.profilePic}`"
        class="overflow-hidden transition-transform duration-300 size-6 rounded-2.5xl hover:scale-95"
      />
    </NuxtLink>
    <p class="text-base font-normal font-workSans leading-140">
      {{ artistInfo?.username }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface ArtistInfo {
  username: string;
  profilePic: string;
}

const props = withDefaults(
  defineProps<{
    artistInfo: ArtistInfo;
  }>(),
  {
    artistInfo: () => ({
      username: "default artist",
      profilePic: "avatar1-min.png",
    }),
  },
);
</script>
