import type { ArtistInfo } from '~/types/Global';

export const useArtist = (id: string) => {
  const { data: artist, pending, error } = useFetch<ArtistInfo>(`/api/artists/${id}`);

  return {
    artist,
    pending,
    error
  };
}; 