/*
 * find the NFTs with only the NFT's ID
 */

import axios from "axios";
import { ref } from "vue";
import type { NFTItem } from "~/types/Global";

export const useFindNFTById = async (nftIds: string[]) => {
  const pending = ref<boolean>(true);
  const error = ref<unknown>(null);
  const nfts = ref<NFTItem[] | []>([]);

  try {
    const responses = await Promise.all(
      nftIds.map((id: string) => axios.get(`/api/nfts/${id}`)),
    );
    nfts.value = responses.map((res) => res.data);
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }

  return {
    error,
    nfts,
    pending,
  };
};
