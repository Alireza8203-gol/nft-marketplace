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
const menuApi = useApiData<MenuItem[]>("api/menuItems");

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
