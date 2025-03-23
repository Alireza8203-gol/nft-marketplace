<template>
  <div class="flex flex-col items-center gap-y-3.75">
    <!--    <div-->
    <!--      class="flex items-center justify-center size-full rounded-2.5xl overflow-hidden"-->
    <!--    >-->
    <!--    </div>-->
    <div class="grid grid-rows-4 grid-cols-3 items-center gap-3.75">
      <NuxtImg
        :src="src"
        :key="index"
        :class="[
          'rounded-2.5xl overflow-hidden hover:scale-95 transition-transform duration-300',
          { 'col-span-3 row-span-3': index === 0 },
        ]"
        v-for="(src, index) in collectionInfo.imagesSrc"
      />
      <CButton
        caption="1025+"
        class="size-full font-spaceMono font-bold text-base leading-140 tablet:text-1.5xl tablet:leading-160"
      />
    </div>
    <div class="flex flex-col items-start gap-y-2.5 w-full">
      <h5 class="font-workSans font-semibold text-1.5xl leading-140">
        {{ collectionInfo.collectionTitle }}
      </h5>
      <div class="flex items-start justify-start gap-x-3">
        <NuxtLink to="/">
          <NuxtImg
            :src="props.collectionInfo.artist.profilePic"
            class="size-6 rounded-2.5xl overflow-hidden hover:scale-95 transition-transform duration-300"
          />
        </NuxtLink>
        <p class="font-workSans font-normal text-base leading-140">
          {{ collectionInfo.artist.username }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  collectionInfo: {
    type: Object,
    required: true,
    default: {
      id: "1",
      collectionTitle: "Default Collection",
      imagesSrc: [
        "/images/colorful-dog-min.png",
        "/images/trending/trending-mouse-min.png",
        "/images/trending/trending-colorful-bear-min.png",
      ],
      artist: {
        username: "default artist",
        profilePic: "/images/avatars/avatar1.png",
      },
    },
  },
});
</script>
