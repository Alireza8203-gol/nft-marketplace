<template>
  <div
    class="flex items-center gap-x-3 w-full py-3 px-5 rounded-2.5xl border border-t-custom-gray bg-white"
  >
    <Icon :name="props.iconName" class="text-custom-gray-light" />
    <c-input
      :type="props.inputType"
      :placeholder="props.inputPlaceholder"
      class="border-none outline-none"
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
</script>
