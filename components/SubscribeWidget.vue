<template>
  <PageSection>
    <div class="container">
      <div
        class="grid tablet:grid-cols-8 desktop:grid-cols-12 gap-7.5 desktop:gap-x-20 items-center tablet:py-10 tablet:px-7.5 desktop:px-15 rounded-2.5xl tablet:bg-secondary-dark overflow-hidden"
      >
        <div
          class="tablet:col-span-4 desktop:col-span-6 rounded-2.5xl overflow-hidden tablet:aspect-square desktop:aspect-[4/3]"
        >
          <NuxtImg
            class="bg-cover bg-center bg-no-repeat"
            src="/images/subscribe-widget-min.webp"
          />
        </div>

        <div class="tablet:col-span-4 desktop:col-span-6">
          <h3
            class="mb-2.5 font-semibold text-2.6xl desktop:text-4.2xl leading-140 desktop:leading-tight"
          >
            Join Our Weekly Digest
          </h3>
          <p
            class="mb-10 font-normal text-base desktop:text-1.5xl leading-140 desktop:leading-160"
          >
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div>
            <form
              action=""
              method="post"
              class="flex flex-col desktop:flex-row items-center justify-center gap-y-4 rounded-2.5xl desktop:bg-white overflow-hidden"
            >
              <c-input
                type="email"
                class="input desktop:input--outline-none"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                class="btn btn-lg w-full py-3 desktop:py-5 leading-140"
              >
                <Icon name="heroicons:envelope" class="size-5 text-white" />
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
