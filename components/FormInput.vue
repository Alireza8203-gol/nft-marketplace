<template>
  <div
    class="flex w-full items-center gap-x-3 border bg-white px-5 py-3 rounded-2.5xl border-t-custom-gray"
  >
    <Icon :name="props.iconName" class="text-custom-gray-light" />
    <input
      @input="updateValue"
      :type="props.inputType"
      :value="props.modelValue"
      :placeholder="props.inputPlaceholder"
      class="border-none outline-none text-primary-dark"
    />
    <!--  === 'password' && show ? 'text' : 'password' -->
    <button @click="show = !show">
      <Icon :name="show ? 'heroicons:eye' : 'heroicons:eye-slash'" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    iconName: string;
    inputType: string;
    inputPlaceholder: string;
  }>(),
  {
    inputType: "text",
    iconName: "heroicons:envelope",
    inputPlaceholder: "Default Placeholder",
  },
);
const show = ref(false);
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
