<template>
  <div class="product-card">
    <div class="product-image"></div>
    <div class="product-content">
      <div class="product-title"></div>
      <div class="product-price"></div>
      <div class="product-rating"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.product-card {
  @apply flex flex-col relative overflow-hidden rounded-xl bg-primary-dark;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.product-image {
  height: 70%;
  @apply relative overflow-hidden w-full;
  background: linear-gradient(135deg, #f5f7fa, #e3e6f0);
}

.product-image::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgb(255, 255, 255),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 1.5s infinite;
}

.product-content {
  @apply flex flex-col gap-2.5 p-3.75;
}

.product-title {
  width: 80%;
  height: 14px;
  border-radius: 4px;
  animation: pulse 1.5s infinite alternate;
  background: linear-gradient(90deg, #f0f0f0, #e6e6e6);
}

.product-price {
  width: 40%;
  height: 16px;
  border-radius: 4px;
  animation-delay: 0.2s;
  animation: pulse 1.5s infinite alternate;
  @apply bg-gradient-to-r from-custom-gray to-custom-gray-light;
}

.product-rating {
  width: 60%;
  height: 12px;
  border-radius: 4px;
  animation-delay: 0.4s;
  animation: pulse 1.5s infinite alternate;
  background: linear-gradient(90deg, #f0f0f0, #e6e6e6);
}

@keyframes pulse {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
