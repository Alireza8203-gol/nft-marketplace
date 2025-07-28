<template>
  <PageSection>
    <div class="container">
      <div
        class="grid tablet:grid-cols-8 desktop:grid-cols-12 items-center desktop:gap-x-20 overflow-hidden desktop:px-15 tablet:py-10 gap-7.5 tablet:px-7.5 rounded-2.5xl tablet:bg-secondary-dark"
      >
        <div
          class="tablet:col-span-4 desktop:col-span-6 tablet:aspect-square overflow-hidden rounded-2.5xl desktop:aspect-[4/3]"
        >
          <NuxtImg
            class="bg-cover bg-center bg-no-repeat"
            src="/images/subscribe-widget-min.webp"
          />
        </div>

        <div class="tablet:col-span-4 desktop:col-span-6">
          <h3
            class="font-semibold desktop:leading-tight mb-2.5 text-2.6xl desktop:text-4.2xl leading-140"
          >
            Join Our Weekly Digest
          </h3>
          <p
            class="mb-10 text-base font-normal desktop:text-1.5xl leading-140 desktop:leading-160"
          >
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div>
            <form
              action=""
              method="post"
              class="flex desktop:flex-row flex-col items-center justify-center gap-y-4 overflow-hidden desktop:bg-white rounded-2.5xl"
            >
              <c-input
                type="email"
                class="input desktop:input--outline-none"
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
    </div>
  </PageSection>
</template>

<script setup lang="ts"></script>
