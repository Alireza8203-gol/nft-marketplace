<template>
  <div
    class="flex w-full flex-col items-center justify-center text-white glass-effect gap-y-2.5 p-7.5 rounded-2.5xl"
  >
    <p class="self-start text-xs leading-extra-tight">Auction ends in:</p>
    <div class="flex items-start gap-x-2.5 mb-7.5 font-spaceMono">
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ props.date.days }}</h3>
        <p class="countdown-number-caption">Days</p>
      </div>
      <h4 class="colon">:</h4>
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ props.date.hours }}</h3>
        <p class="countdown-number-caption">Hours</p>
      </div>
      <h4 class="colon">:</h4>
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ props.date.minutes }}</h3>
        <p class="countdown-number-caption">Minutes</p>
      </div>
      <h4 class="colon">:</h4>
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ props.date.seconds }}</h3>
        <p class="countdown-number-caption">Seconds</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  date: {
    days: globalThis.Ref<number, number>;
    hours: globalThis.Ref<number, number>;
    minutes: globalThis.Ref<number, number>;
    seconds: globalThis.Ref<number, number>;
    isEnded: globalThis.Ref<boolean, boolean>;
  };
}>();
</script>

<style scoped>
.glass-effect {
  /* From https://css.glass */
  backdrop-filter: blur(10px);
  background: rgba(59, 59, 59, 0.5);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.countdown-number {
  @apply font-bold leading-tight text-4.2xl;
}
.countdown-number-caption {
  @apply text-xs leading-extra-tight;
}
.colon {
  @apply font-bold text-2.6xl leading-140;
}
</style>
