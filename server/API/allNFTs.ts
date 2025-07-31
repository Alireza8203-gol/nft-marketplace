import { NFTItem } from "~/types/Global";

export default defineEventHandler(
  async (): Promise<
    NFTItem[] | { error: "Fetching Data form json file failed :(" }
  > => {
    try {
      const data = await $fetch(
        `${process.env.NUXT_PUBLIC_API_BASE}/data/NFTs.json`,
      );
      return data as NFTItem[];
    } catch (error) {
      return { error: "Fetching Data form json file failed :(" };
    }
  },
);
