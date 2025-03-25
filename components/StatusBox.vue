<template>
  <div class="flex flex-col items-center tablet:items-start">
    <h4
      class="font-spaceMono font-bold text-[22px] leading-160 desktop:text-[28px] desktop:leading-[1.4]"
    >
      {{ props.statusInfo }}
    </h4>
    <span class="desktop:text-2xl leading-140 desktop:leading-160">{{
      props.statusTitle
    }}</span>
  </div>
</template>

<script setup lang="ts">
import type { StatusBoxProps } from "~/types/Global";

const props: StatusBoxProps = defineProps({
  statusInfo: {
    type: String,
    default: "999K+",
  },
  statusTitle: {
    type: String,
    default: "Title",
  },
});
</script>
