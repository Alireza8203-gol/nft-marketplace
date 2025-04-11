<template>
  <div class="flex items-center justify-between mb-10 desktop:mb-15">
    <div class="flex flex-col items-start justify-center gap-y-2.5">
      <h3
        class="font-workSans font-semibold text-[28px] desktop:text-[38px] leading-140 desktop:leading-tight"
      >
        {{ title }}
      </h3>
      <p
        class="font-workSans font-normal text-base leading-140 desktop:text-[22px] desktop:leading-160"
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
