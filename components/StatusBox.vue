<template>
  <div class="flex flex-col tablet:items-start items-center">
    <h4
      class="font-bold font-spaceMono text-[22px] leading-160 desktop:text-[28px] desktop:leading-[1.4]"
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
