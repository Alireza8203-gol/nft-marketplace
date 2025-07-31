export default defineEventHandler(async (): Promise<any> => {
  try {
    // Read JSON file
    const data = await $fetch(
      `${process.env.NUXT_PUBLIC_API_BASE}/data/artists.json`,
    );
    return data;
  } catch (error) {
    return { error: "Failed to read data" };
  }
});
