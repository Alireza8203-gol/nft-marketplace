<template>
  <nav>
    <div
      class="flex items-center justify-between py-[15px] desktop:py-5 px-7.5 tablet:px-[50px] text-primary-dark dark:text-white font-semibold"
    >
      <NuxtLink to="/">
        <LogoIcon
          class="w-[182.56px] h-6 desktop:w-[243.41px] desktop:h-8 text-primary-dark dark:text-white"
        />
      </NuxtLink>

      <DesktopNavMenu :menu-items="menuItems" v-if="windowStore.width > 1110" />
      <MobileNavMenu :menu-items="menuItems" v-else />

      <Icon
        name="heroicons:bars-3-bottom-left-solid"
        class="desktop:hidden size-6 text-primary-dark dark:text-white"
      />
      <!--      <button @click="changeTheme">click to change the theme</button>-->
    </div>
  </nav>
</template>

<script setup lang="ts">
import axios from "axios";
import type { MenuItem } from "~/types/Global";
import { useWindowStore } from "~/stores/useWindowWidth";
import DesktopNavMenu from "~/components/DesktopNavMenu.vue";

const windowStore = useWindowStore();
const menuItems = ref<MenuItem[]>([]);

onMounted(async () => {
  try {
    const res = await axios.get("api/menuItems");
    menuItems.value = res.data;
  } catch (error) {
    console.log("Error while fetching menuItems", error);
  }
});

// const changeTheme = () => {
//   const currentMode = useColorMode().value; // Get the current color mode
//   useColorMode().preference = currentMode === "dark" ? "light" : "dark"; // Toggle theme
// };
</script>
