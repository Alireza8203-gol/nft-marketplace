<template>
  <nav>
    <div
      class="flex items-center justify-between py-[15px] desktop:py-5 px-7.5 table:px-[50px] text-primary-dark dark:text-white font-semibold"
    >
      <LogoIcon
        class="w-[182.56px] h-6 desktop:w-[243.41px] desktop:h-8 text-primary-dark dark:text-white"
      />
      <div class="hidden desktop:flex items-center justify-center gap-x-2.5">
        <ul class="flex items-center justify-center gap-x-2.5">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            class="flex items-center justify-center flex-shrink py-3 px-5"
          >
            <a href="#">{{ menuItem.title }}</a>
          </li>
        </ul>
        <a
          href="#"
          class="flex items-center justify-center gap-x-3 py-5 px-7.5 bg-pink rounded-[20px] font-semibold text-base"
        >
          <Icon name="heroicons:user" class="size-5" />
          <span>Sign Up</span>
        </a>
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
interface menuItem {
  id: number;
  title: string;
}

const menuItems: menuItem[] = [
  { id: 1, title: "Marketplace" },
  { id: 2, title: "Rankings" },
  { id: 3, title: "Connect a wallet" },
];
const changeTheme = () => {
  const currentMode = useColorMode().value; // Get the current color mode
  useColorMode().preference = currentMode === "dark" ? "light" : "dark"; // Toggle theme
};
</script>

<style scoped></style>
