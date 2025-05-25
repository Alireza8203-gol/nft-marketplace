<template>
  <div class="flex items-center justify-center gap-x-2.5">
    <ul class="flex items-center justify-center gap-x-2.5">
      <li
        :key="menuItem.id"
        v-for="menuItem in menuItems"
        class="flex items-center justify-center flex-shrink py-3 px-5"
      >
        <NuxtLink :to="menuItem.path">
          {{ menuItem.title }}
        </NuxtLink>
      </li>
    </ul>
    <CButton caption="Sign Up" class="btn-sm" link-to="/create-account">
      <Icon name="heroicons:user" class="size-5" />
    </CButton>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from "~/types/Global";

const props = defineProps<{
  menuItems: MenuItem[];
}>();
</script>
