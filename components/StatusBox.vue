<template>
  <div class="flex flex-col tablet:items-start items-center">
    <h4
      class="font-bold font-spaceMono text-1.5xl leading-160 desktop:text-2.6xl desktop:leading-140"
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
    type: [String, Number],
    default: "999K+",
  },
  statusTitle: {
    type: [String, Number],
    default: "Title",
  },
});
</script>
