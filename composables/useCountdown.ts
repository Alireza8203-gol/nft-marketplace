import { ref, onMounted, onUnmounted } from "vue";

export function useCountdown(targetTime: number) {
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  const isEnded = ref(false);

  let intervalId: number;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(intervalId);
      days.value = hours.value = minutes.value = seconds.value = 0;
      isEnded.value = true;
      return;
    }

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  };

  onMounted(() => {
    updateCountdown();
    intervalId = window.setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return {
    days,
    hours,
    minutes,
    seconds,
    isEnded,
  };
}
