<template>
  <nav>
    <div
      class="flex items-center justify-between desktop:py-5 font-semibold py-[15px] px-7.5 tablet:px-[50px] text-primary-dark dark:text-white"
    >
      <NuxtLink to="/">
        <LogoIcon
          class="h-6 desktop:h-8 w-[182.56px] desktop:w-[243.41px] text-primary-dark dark:text-white"
        />
      </NuxtLink>

      <DesktopNavMenu
        v-if="width"
        :user-auth="userAuth"
        :menu-items="menuItems"
      />
      <DrawerMenu
        v-else
        ref="drawerRef"
        :user-auth="userAuth"
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
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import type { MenuItem } from "~/types/Global";
import { useApiData } from "~/composables/useApiData";
import DesktopNavMenu from "~/components/DesktopNavMenu.vue";

const drawerRef = ref();
const userAuth = useAuthStore();
const windowStore = useWindowStore();
const menuItems = ref<MenuItem[]>([]);
const width = computed(() => windowStore.width > 1110);
const menuApi = useApiData<MenuItem[]>("http://localhost:4000/api/menuItems");

const openMenu = () => {
  drawerRef.value?.open();
};

onMounted(async () => {
  await menuApi.fetchData();
  menuItems.value = menuApi.data.value as MenuItem[];
});

// const changeTheme = () => {
//   const currentMode = useColorMode().value; // Get the current color mode
//   useColorMode().preference = currentMode === "dark" ? "light" : "dark"; // Toggle theme
// };
</script>
