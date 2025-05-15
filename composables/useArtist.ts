import { ref } from "vue";
import type { ArtistInfo } from "~/types/Global";
import axios from "axios";

export const useArtist = (id: string) => {
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
