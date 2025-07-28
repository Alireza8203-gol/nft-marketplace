<template>
  <footer class="py-10 bg-secondary-dark">
    <div class="container">
      <!-- grid grid-cols-1 desktop:grid-cols-12 -->
      <div
        class="flex desktop:flex-row flex-col items-start justify-between gap-7.5"
      >
        <div class="flex desktop:w-60 flex-col text-custom-gray-light">
          <LogoIcon
            class="h-6 desktop:h-8 w-[182.56px] desktop:w-[243.41px] text-primary-dark dark:text-white"
          />
          <p class="mb-5 mt-7.5 leading-140">
            NFT marketplace UI created with Anima for Figma
          </p>
          <div class="flex flex-col items-start gap-y-3.75">
            <p class="leading-140">Join our community</p>
            <div class="flex items-center gap-x-2.5">
              <NuxtImg
                alt="Discord"
                class="size-8"
                src="/SVGs/svg-logo/DiscordLogo.svg"
              />
              <NuxtImg
                alt="Youtube"
                class="size-8"
                src="/SVGs/svg-logo/YoutubeLogo.svg"
              />
              <NuxtImg
                alt="Twitter"
                class="size-8"
                src="/SVGs/svg-logo/TwitterLogo.svg"
              />
              <NuxtImg
                class="size-8"
                alt="Instagram"
                src="/SVGs/svg-logo/InstagramLogo.svg"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col text-custom-gray-light">
          <h5
            class="mb-6 font-bold text-white font-spaceMono text-1.5xl leading-160"
          >
            Explore
          </h5>
          <ul class="flex flex-col items-start gap-y-5 leading-140">
            <li>
              <NuxtLink to="/marketplace">Marketplace</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rankings">Rankings</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/connect-wallet">Connect a wallet</NuxtLink>
            </li>
          </ul>
        </div>
        <div
          class="col-span-5 flex flex-col items-start text-custom-gray-light"
        >
          <h5
            class="font-bold text-white font-spaceMono text-1.5xl leading-160"
          >
            Join Our Weekly Digest
          </h5>
          <p
            class="my-5 desktop:mt-6 desktop:w-80 text-base font-normal leading-140"
          >
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div class="w-full">
            <form
              action=""
              method="post"
              class="flex tablet:flex-row flex-col items-center justify-center gap-y-4 overflow-hidden tablet:bg-white rounded-2.5xl"
            >
              <c-input
                type="email"
                class="input tablet:input--outline-none"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                class="w-full py-3 desktop:py-5 btn btn-lg leading-140"
              >
                <Icon name="heroicons:envelope" class="text-white size-5" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        class="flex items-end justify-start border-t pt-5 mt-7.5 border-t-custom-gray"
      >
        <p class="text-xs leading-extra-tight text-custom-gray-light">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
