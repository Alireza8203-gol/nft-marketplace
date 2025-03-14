<template>
  <nav>
    <div
      class="flex items-center justify-between my-[15px] md:my-5 mx-[30px] sm:mx-[50px] text-primary-dark dark:text-white font-semibold"
    >
      <LogoIcon
        :width="182.56"
        :height="24"
        text-color-class="text-primary-dark dark:text-white"
      />
      <ul class="flex items-center justify-center space-x-2.5">
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Rankings</a></li>
        <li><a href="#">Connect a wallet</a></li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center space-x-3 py-5 px-[30px] bg-pink rounded-[20px]"
          >
            <Icon name="heroicons:user" class="size-5" />
            <span>Sign Up</span>
          </a>
        </li>
      </ul>
      <Icon
        name="heroicons:bars-3-bottom-left-solid"
        class="md:hidden size-6 text-primary-dark dark:text-white"
      />
      <!--      <button @click="changeTheme">click to change the theme</button>-->
    </div>
  </nav>
</template>

<script setup lang="ts">
const changeTheme = () => {
  const currentMode = useColorMode().value; // Get the current color mode
  useColorMode().preference = currentMode === "dark" ? "light" : "dark"; // Toggle theme
};
</script>

<style scoped></style>
