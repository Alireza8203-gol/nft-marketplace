import type { ArtistInfo } from "~/types/Global";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  try {
    const artistsData = (await $fetch(
      `${process.env.NUXT_PUBLIC_API_BASE}/data/artists.json`,
    )) as ArtistInfo[];

    const artist = artistsData.find((artist: any) => artist.id === id);

    if (!artist) {
      throw createError({
        statusCode: 404,
        message: "Artist not found",
      });
    } else {
      return artist;
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: "Error reading artists data",
    });
  }
});
