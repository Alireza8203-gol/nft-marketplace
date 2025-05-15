<template>
  <PageSection>
    <div class="container">
      <SectionHeader
        title="How It Works"
        subtitle="Find out how to get started"
      />

      <div
        class="grid grid-cols-1 tablet:grid-cols-3 grid-rows-3 tablet:grid-rows-1 items-center gap-y-5 gap-x-7.5"
      >
        <InfoCard
          image-src="/images/svg-images/create-collection.svg"
          title="Setup Your wallet"
          caption="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."
        />
        <InfoCard
          image-src="/images/svg-images/create-collection.svg"
          title="Create Collection"
          caption="Upload your work and setup your collection. Add a description, social links and floor price."
        />
        <InfoCard
          image-src="/images/svg-images/create-collection.svg"
          title="Start Earning"
          caption="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
        />
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts"></script>
