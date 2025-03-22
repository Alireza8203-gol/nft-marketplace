<template>
  <div class="flex flex-col items-center gap-y-3.75">
    <div
      class="flex items-center justify-center size-full rounded-2.5xl overflow-hidden"
    >
      <NuxtImg src="/images/colorful-dog-min.png" />
    </div>
    <div class="grid grid-cols-3 items-center gap-x-3.75">
      <NuxtImg
        v-for="item in pictures"
        :key="item.id"
        :src="item.src"
        class="rounded-2.5xl overflow-hidden"
      />
      <CButton
        caption="1025+"
        class="size-full font-spaceMono font-bold text-base leading-140 tablet:text-1.5xl tablet:leading-160"
      ></CButton>
    </div>
    <div class="flex flex-col items-start gap-y-2.5 w-full">
      <h5 class="font-workSans font-semibold text-1.5xl leading-140">
        DSGN Animals
      </h5>
      <div class="flex items-start justify-start gap-x-3">
        <NuxtImg
          src="/images/avatars/avatar6-min.png"
          class="size-6 rounded-2.5xl overflow-hidden"
        />
        <p class="font-workSans font-normal text-base leading-140">MrFox</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  collectionTitle: {
    type: String,
    default: "default title",
  },
});
const pictures = [
  {
    id: 1,
    src: "/images/trending/trending-mouse-min.png",
  },
  {
    id: 2,
    src: "/images/trending/trending-colorful-bear-min.png",
  },
];
</script>
