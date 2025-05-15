import { join } from "path";
import { readFileSync } from "fs";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");

  try {
    const artistsPath = join(process.cwd(), "server/data/artists.json");
    const artistsData = JSON.parse(readFileSync(artistsPath, "utf-8"));

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
