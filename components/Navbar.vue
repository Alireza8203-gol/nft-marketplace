<template>
  <nav>
    <div
      class="flex items-center justify-between py-[15px] desktop:py-5 px-7.5 tablet:px-[50px] text-primary-dark dark:text-white font-semibold"
    >
      <LogoIcon
        class="w-[182.56px] h-6 desktop:w-[243.41px] desktop:h-8 text-primary-dark dark:text-white"
      />
      <div class="hidden desktop:flex items-center justify-center gap-x-2.5">
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
        <CButton caption="Sign Up" class="btn btn-sm" link-to="/create-account">
          <Icon name="heroicons:user" class="size-5" />
        </CButton>
      </div>

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

const menuItems = ref<MenuItem[]>([]);

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/menuItems");
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

<style scoped></style>
