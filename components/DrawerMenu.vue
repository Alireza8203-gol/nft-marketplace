<template>
  <div
    @click="toggleMenu"
    :class="[
      'mobile-nav-menu fixed top-0 right-0 w-full h-full p-5 transition-all duration-300',
      menuOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10',
    ]"
  ></div>
  <div
    ref="drawerRef"
    @touchend="onTouchEnd"
    @touchmove="onTouchMove"
    @touchstart="onTouchStart"
    :class="[
      'fixed flex items-stretch justify-stretch gap-x-2.5 z-20 text-end bg-secondary-dark transition-all duration-300 ease-in-out touch-none',
      isVertical
        ? 'top-0 right-0 h-full w-half py-10 rounded-l-2.5xl'
        : 'flex-col  bottom-0 right-0 w-full h-half px-10 rounded-t-2.5xl',
      menuOpen
        ? isVertical
          ? 'translate-x-0'
          : 'translate-y-0'
        : isVertical
          ? 'translate-x-full'
          : 'translate-y-full',
    ]"
  >
    <span
      :class="[
        'bg-white rounded-lg',
        isVertical ? 'h-10 w-1 mx-4 my-auto' : 'w-10 h-1 my-4 mx-auto ',
      ]"
    ></span>
    <div
      class="flex flex-col items-center justify-between gap-5 tablet:pr-4 size-full"
    >
      <ul class="flex flex-col items-stretch gap-y-5 size-full">
        <li
          :key="menuItem.id"
          v-for="menuItem in menuItems"
          class="flex flex-shrink items-center justify-center px-5 py-3"
        >
          <NuxtLink :to="menuItem.path" class="text-2.3xl">
            {{ menuItem.title }}
          </NuxtLink>
        </li>
      </ul>
      <client-only>
        <CButton
          class="w-full btn-sm"
          :caption="
            props.userAuth.isLoggedIn
              ? props.userAuth.userInfo.username
              : 'Sign Up'
          "
          :link-to="
            props.userAuth.isLoggedIn
              ? `/users/${props.userAuth.userInfo.username}`
              : '/create-account'
          "
        >
          <Icon
            class="size-7"
            v-if="userAuth.isLoggedIn"
            name="heroicons:user-circle-16-solid"
          />
          <Icon name="heroicons:user" class="size-5" v-else />
        </CButton>
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MenuItem } from "~/types/Global";

const props = defineProps<{
  menuItems: MenuItem[];
  direction: "x" | "y";
  userAuth: {
    isLoggedIn: boolean;
    userInfo: {
      username: string;
      email: string;
    };
  };
}>();

const touchStart = ref(0);
const isDragging = ref(false);
const menuOpen = ref<boolean>(false);
const drawerRef = ref<HTMLElement | null>(null);
const isVertical = computed(() => props.direction !== "x");

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const onTouchStart = (e: TouchEvent) => {
  touchStart.value = isVertical.value
    ? e.touches[0].clientX
    : e.touches[0].clientY;
  isDragging.value = true;
};

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value || !drawerRef.value) return;
  const current = isVertical.value
    ? e.touches[0].clientX
    : e.touches[0].clientY;

  const delta = current - touchStart.value;
  if (delta > 0) {
    e.preventDefault(); // ✅ stops scrolling
    drawerRef.value.style.transform = isVertical.value
      ? `translateX(${delta}px)`
      : `translateY(${delta}px)`;
  }
};

const onTouchEnd = () => {
  if (!drawerRef.value) return;

  const transformValue =
    parseFloat(drawerRef.value.style.transform.replace(/[^\d.]/g, "")) || 0;

  if (transformValue > 100) {
    // dragged down enough → close it
    drawerRef.value.style.transform = isVertical.value
      ? `translateX(100%)`
      : `translateY(100%)`;

    setTimeout(() => {
      menuOpen.value = false;
      drawerRef.value!.style.transform = "";
    }, 300);
  } else {
    // snap back up
    drawerRef.value.style.transform = isVertical.value
      ? `translateX(0)`
      : `translateY(0)`;
  }

  isDragging.value = false;
};

defineExpose({
  open: () => (menuOpen.value = true),
});
</script>

<style scoped>
.mobile-nav-menu {
  border-radius: 16px !important;
  backdrop-filter: blur(15px) !important;
  background: rgba(43, 43, 43, 0.73) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
}
</style>
