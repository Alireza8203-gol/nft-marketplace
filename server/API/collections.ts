export default defineEventHandler(async () => {
  const data = await $fetch(
    `${process.env.NUXT_PUBLIC_API_BASE}/data/trendingCollections.json`,
  );
  return data;
});
