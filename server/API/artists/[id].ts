import { readFileSync } from 'fs';
import { join } from 'path';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  
  try {
    const artistsPath = join(process.cwd(), 'server/data/artists.json');
    const artistsData = JSON.parse(readFileSync(artistsPath, 'utf-8'));
    
    const artist = artistsData.find((artist: any) => artist.id === id);
    
    if (!artist) {
      throw createError({
        statusCode: 404,
        message: 'Artist not found'
      });
    }
    
    // Transform the artist data to match the expected format
    return {
      ...artist,
      profilePic: artist.profileImage,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error reading artists data'
    });
  }
}); 