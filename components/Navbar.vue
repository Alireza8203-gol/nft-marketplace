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

      <DesktopNavMenu :menu-items="menuItems" v-if="width" />
      <DrawerMenu
        v-else
        ref="drawerRef"
        :menu-items="menuItems"
        :direction="windowStore.width >= 750 ? 'y' : 'x'"
      />

      <Icon
        @click="openMenu"
        name="heroicons:bars-3-bottom-left-solid"
        class="desktop:hidden size-6 text-primary-dark dark:text-white"
      />
      <!--      <button @click="changeTheme">click to change the theme</button>-->
    </div>
  </nav>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import type { MenuItem } from "~/types/Global";
import { useWindowStore } from "~/stores/useWindowWidth";
import DesktopNavMenu from "~/components/DesktopNavMenu.vue";

const drawerRef = ref();
const windowStore = useWindowStore();
const menuItems = ref<MenuItem[]>([]);
const width = computed(() => windowStore.width > 1110);

const openMenu = () => {
  drawerRef.value?.open();
};
const handleResize = () => {
  windowStore.updateWidth();
};

onMounted(async () => {
  windowStore.initResizeListener();
  try {
    const res = await axios.get("api/menuItems");
    menuItems.value = res.data;
  } catch (error) {
    console.log("Error while fetching menuItems", error);
  }
});

onBeforeUnmount(() => {
  windowStore.removeResizeListener();
});

// const changeTheme = () => {
//   const currentMode = useColorMode().value; // Get the current color mode
//   useColorMode().preference = currentMode === "dark" ? "light" : "dark"; // Toggle theme
// };
</script>
