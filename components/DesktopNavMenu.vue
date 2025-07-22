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
    <client-only>
      <CButton
        class="btn-sm"
        :link-to="
          props.userAuth.isLoggedIn
            ? `/users/${props.userAuth.userInfo.username}`
            : '/create-account'
        "
        :caption="
          props.userAuth.isLoggedIn
            ? props.userAuth.userInfo.username
            : 'Sign Up'
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
</template>

<script setup lang="ts">
import type { MenuItem } from "~/types/Global";

const props = defineProps<{
  menuItems: MenuItem[];
  userAuth: {
    isLoggedIn: boolean;
    userInfo: {
      username: string;
      email: string;
    };
  };
}>();
</script>
