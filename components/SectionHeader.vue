<template>
  <div class="mb-10 desktop:mb-15 flex items-center justify-between">
    <div class="flex flex-col items-start justify-center gap-y-2.5">
      <h3
        class="font-semibold desktop:leading-tight font-workSans text-[28px] desktop:text-[38px] leading-140"
      >
        {{ title }}
      </h3>
      <p
        class="text-base font-normal font-workSans leading-140 desktop:text-1.5xl desktop:leading-160"
      >
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { SectionHeaderProps } from "~/types/Global";

const props: SectionHeaderProps = defineProps({
  title: {
    type: String,
    default: "Section Heading",
  },
  subtitle: {
    type: String,
    default: "Section Subtitle",
    required: false,
  },
});
</script>
