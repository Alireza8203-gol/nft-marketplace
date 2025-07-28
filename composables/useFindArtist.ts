/*
 * find the artist for the NFT, by providing the NFT's ID
 */

import axios from "axios";
import { ref } from "vue";
import type { ArtistInfo } from "~/types/Global";

export const useFindArtist = (id: string) => {
  const pending = ref(true);
  const error = ref<unknown>(null);
  const artist = ref<ArtistInfo | null>(null);

  axios
    .get(`/api/artists/${id}`)
    .then((res) => {
      artist.value = res.data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      pending.value = false;
    });

  return {
    error,
    artist,
    pending,
  };
};
