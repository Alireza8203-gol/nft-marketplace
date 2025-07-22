<template>
  <div class="table-row-grid">
    <div class="table-cell-grid w-53.75 tablet:w-107.5 pl-2.5 tablet:pl-0">
      <slot name="left" />
    </div>
    <div class="table-cell-grid tablet:w-55 desktop:w-130">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
