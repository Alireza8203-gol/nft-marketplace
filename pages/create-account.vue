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
        @submit.prevent="handleSubmit"
        class="flex flex-col items-start justify-start gap-y-3.75 desktop:max-w-[330px]"
      >
        <form-input
          input-type="text"
          v-model="form.username"
          input-placeholder="Username"
          icon-name="heroicons:user-16-solid"
        />
        <form-input
          input-type="email"
          v-model="form.email"
          icon-name="heroicons:envelope"
          input-placeholder="Email Address"
        />
        <form-input
          input-type="password"
          v-model="form.password"
          input-placeholder="Password"
          icon-name="heroicons:lock-closed"
        />
        <form-input
          input-type="password"
          v-model="form.confirmPassword"
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
import axios from "axios";
import { registerNewUserSchema } from "~/schemas/registerNewUser";

const router = useRouter();
const errors = ref({});
const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const auth = useAuthStore();
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

const handleSubmit = async () => {
  const result = registerNewUserSchema.safeParse({ ...form });
  if (!result.success) {
    auth.isLoggedIn = false;
    auth.userInfo.email = "";
    auth.userInfo.username = "";
    errors.value = result.error.flatten().fieldErrors;
    const errorArray = Object.values(errors.value).flat();
    errorArray.forEach((msg) => {
      toast.error({
        message: `${msg}`,
        title: "Validation Error",
        icon: "fa-solid fa-circle-xmark",
      });
    });
  } else {
    errors.value = {};
    auth.isLoggedIn = true;
    auth.userInfo.email = form.email;
    auth.userInfo.username = form.username;
    try {
      const { data } = await axios.post("/api/register", form);
      toast.success({
        title: "Success!",
        message: "New User Was Registered Successfully!",
      });
      console.log("Request successful! here's the data:", data);
      localStorage.setItem("showProfileReminder", "true");
      setTimeout(async () => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.log("Error during post request", error);
    }
  }
};

onMounted(() => {
  const shouldShowProfileReminderToast = localStorage.getItem(
    "showProfileReminder",
  );

  if (shouldShowProfileReminderToast) {
    toast.question({
      zindex: 999,
      timeout: 4000,
      title: "There is More!!",
      icon: "fa-solid fa-user-edit",
      message: "You can complete your profile in your panel!",
      buttons: [
        [
          "<button><b>See Profile</b></button>",
          function (instance, toast) {
            router.push("/");
            localStorage.removeItem("showProfileReminder");
            instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          },
          true,
        ],
        [
          "<button><b>No Thanks</b></button>",
          function (instance, toast) {
            localStorage.removeItem("showProfileReminder");
            instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          },
          true,
        ],
      ],
    });
  }
});
</script>

<style scoped>
.big-picture {
  background-image: url("public/images/create-account-page-min.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
