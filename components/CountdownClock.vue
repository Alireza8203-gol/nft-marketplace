<template>
  <div
    class="glass-effect flex flex-col items-center justify-center gap-y-2.5 w-full p-7.5 rounded-2.5xl text-white"
  >
    <p class="self-start text-xs leading-extra-tight">Auction ends in:</p>
    <div class="flex items-start gap-x-2.5 font-spaceMono">
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ days }}</h3>
        <p class="countdown-number-caption">Days</p>
      </div>
      <h4 class="colon">:</h4>
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ hours }}</h3>
        <p class="countdown-number-caption">Hours</p>
      </div>
      <h4 class="colon">:</h4>
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ minutes }}</h3>
        <p class="countdown-number-caption">Minutes</p>
      </div>
      <h4 class="colon">:</h4>
      <div class="flex flex-col items-center justify-start">
        <h3 class="countdown-number">{{ seconds }}</h3>
        <p class="countdown-number-caption">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountdown } from "@/composables/useCountdown";
const { days, hours, minutes, seconds, isEnded } = useCountdown(
  new Date("2025-06-01T00:00:00").getTime(),
);
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
  @apply text-4.2xl font-bold leading-tight;
}
.countdown-number-caption {
  @apply text-xs leading-extra-tight;
}
.colon {
  @apply font-bold text-2.6xl leading-140;
}
</style>
