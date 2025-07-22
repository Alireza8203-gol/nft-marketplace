import { ref } from "vue";
import { defineStore } from "pinia";

export const useWindowStore = defineStore("window", () => {
  const width = ref(0);
  const initialized = ref(false);
  const updateWidth = () => {
    width.value = window.innerWidth;
  };

  const init = () => {
    if (initialized.value || typeof window === "undefined") return;
    updateWidth();
    window.addEventListener("resize", updateWidth);
    initialized.value = true;
  };

  const destroy = () => {
    if (initialized.value && typeof window !== "undefined") {
      window.removeEventListener("resize", updateWidth);
      initialized.value = false;
    }
  };

  return { width, init, destroy };
});
