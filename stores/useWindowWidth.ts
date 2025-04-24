import { ref } from "vue";
import { defineStore } from "pinia";

export const useWindowStore = defineStore("window", () => {
  const width = ref(0);

  const updateWidth = () => {
    width.value = window.innerWidth;
  };

  return { width, updateWidth };
});
