/*
 * find the artist for the NFT, by providing the NFT's ID
 */

import axios from "axios";
import { ref } from "vue";
import type { ArtistInfo } from "~/types/Global";

export const useFindArtistById = async (id: string) => {
  const error = ref<unknown>(null);
  const pending = ref(true);
  const artist = ref<ArtistInfo | null>(null);

  try {
    const { data } = await axios.get(`/api/artists/${id}`);
    artist.value = data;
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }

  return {
    error,
    artist,
    pending,
  };
};
