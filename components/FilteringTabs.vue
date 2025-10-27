<template>
  <div class="flex justify-between mt-10">
    <div
      :key="index"
      @click="addActiveClass"
      v-for="(tab, index) in props.tabs"
      :class="`filtering  ${index == 0 ? 'active' : ''}`"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useActiveClass } from "#imports";

const props = defineProps<{
  tabs: string[];
}>();
const showingTab = ref(props.tabs[0]);

const addActiveClass = (e) => {
  showingTab.value = useActiveClass(e) as string;
  emit("update:showingTab", showingTab.value);
};

const emit = defineEmits<{
  (e: "update:showingTab", value: string): void;
}>();
</script>

<style scoped>
.active {
  @apply border-b-2 text-white border-e-custom-gray;
}
</style>
