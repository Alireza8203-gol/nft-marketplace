export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBaseUrl;

  // process.env.NUXT_PUBLIC_API_BASE
  const data = await $fetch(
    `${process.env.NUXT_PUBLIC_API_BASE}/data/trendingCollections.json`,
  );
  return data;
});
