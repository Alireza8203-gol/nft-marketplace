<template>
  <div
    class="grid grid-cols-10 tablet:grid-cols-1 grid-rows-1 tablet:grid-rows-2 items-center justify-center p-5 tablet:pt-2.5 tablet:px-5 desktop:px-7.5 rounded-2.5xl bg-secondary-dark"
  >
    <img :src="props.imageSrc" class="col-span-4 aspect-square" alt="pic" />
    <div
      class="col-span-6 flex flex-col tablet:items-center justify-center gap-y-2.5 tablet:text-center"
    >
      <h5 class="font-semibold desktop:text-1.5xl leading-140">
        {{ title }}
      </h5>
      <p class="text-xs desktop:text-base leading-140">
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    caption: string;
    imageSrc: string;
  }>(),
  {
    imageSrc: "/images/svg-images/create-collection.svg",
    title: "Default Title",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut debitis delectus dicta maiores nam neque perferendis possimus, quaerat quo reprehenderit similique, vel velit voluptatem?",
  },
);
</script>
