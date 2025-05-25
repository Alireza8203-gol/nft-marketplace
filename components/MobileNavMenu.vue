<template>
  <div
    class="mobile-nav-menu fixed top-0 right-0 flex flex-col items-center justify-center gap-x-2.5 w-full h-full z-10 transition-transform"
  >
    <ul class="flex flex-col items-center justify-center gap-x-2.5">
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

<style scoped>
.mobile-nav-menu {
  /* From https://css.glass */
  background: rgba(43, 43, 43, 0.73);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
