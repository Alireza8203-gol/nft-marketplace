<template>
  <div
    class="grid grid-cols-1 tablet:grid-cols-2 items-center tablet:gap-x-10 desktop:gap-x-15"
  >
    <div class="big-picture aspect-[3/2] tablet:aspect-[6/7]"></div>
    <div
      class="max-w-[315px] tablet:max-w-[325px] desktop:max-w-[460px] mx-auto py-7.5 tablet:py-0"
    >
      <h2
        class="font-semibold text-4.2xl desktop:text-5.1xl leading-extra-tight desktop:leading-extra-tight text-white"
      >
        Create account
      </h2>
      <p
        class="mt-5 mb-7.5 tablet:mb-10 font-normal text-base desktop:text-1.5xl leading-140 desktop:leading-160"
      >
        Welcome! enter your details and start creating, collecting and selling
        NFTs.
      </p>
      <form
        action=""
        @submit.prevent="handleSubmit"
        class="flex flex-col items-start justify-start gap-y-3.75 desktop:max-w-[330px]"
      >
        <form-input
          input-type="text"
          input-placeholder="Username"
          icon-name="heroicons:user-16-solid"
        />
        <form-input
          input-type="email"
          icon-name="heroicons:envelope"
          input-placeholder="Email Address"
        />
        <form-input
          input-type="password"
          input-placeholder="Password"
          icon-name="heroicons:lock-closed"
        />
        <form-input
          input-type="password"
          icon-name="heroicons:lock-closed"
          input-placeholder="Confirm Password"
        />

        <button
          type="submit"
          class="flex items-center justify-center w-full py-3 mt-3.75 rounded-2.5xl font-semibold text-base leading-140 text-white bg-pink"
        >
          Create account
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { registerNewUserSchema } from "~/schemas/registerNewUser";

const errors = ref({});
const form = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const toast = useToast();
toast.settings({
  theme: "dark",
  timeout: 3000,
  position: "topCenter",
  iconColor: "#A259FF",
  backgroundColor: "#3B3B3B",
  progressBarColor: "#A259FF",
  transitionIn: "fadeInRight",
  transitionOut: "fadeOutLeft",
  transitionInMobile: "fadeInRight",
  transitionOutMobile: "fadeOutLeft",
});

const handleSubmit = () => {
  const result = registerNewUserSchema.safeParse(form.value);
  if (!result.success) {
    errors.value = result.error.flatten().fieldErrors;
    toast.error({
      title: "Error! :(",
      icon: "fa-solid fa-circle-xmark",
      message: "New user sas NOT registered successfully!",
    });
  } else {
    errors.value = {};
    toast.success({
      title: "Success!",
      icon: "fa-circle-check",
      message: "New User Was Registered Successfully!",
    });
  }
};
</script>

<style scoped>
.big-picture {
  background-image: url("public/images/create-account-page-min.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
