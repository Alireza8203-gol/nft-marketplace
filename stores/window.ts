import { ref } from "vue";
import { defineStore } from "pinia";

export const useWindowStore = defineStore("window", () => {
  const width = ref(0);

  const updateWidth = () => {
    width.value = window.innerWidth;
  };

  const initResizeListener = () => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  };

  const removeResizeListener = () => {
    window.removeEventListener("resize", updateWidth);
  };

  return { width, updateWidth, initResizeListener, removeResizeListener };
});
