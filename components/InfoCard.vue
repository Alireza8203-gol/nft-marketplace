<template>
  <div
    class="flex tablet:flex-col items-center p-5 rounded-2.5xl tablet:max-w-[210px] desktop:max-w-[330px] tablet:p-7.5 tablet:pt-2.5 bg-secondary-dark"
  >
    <NuxtImg
      alt="pic"
      :src="props.imageSrc"
      class="aspect-square w-[100px] tablet:w-[160px] desktop:w-[250px]"
    />
    <div
      class="tablet:mt-5 tablet:ml-0 ml-5 flex flex-col tablet:items-center justify-center tablet:text-center gap-y-2.5"
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
