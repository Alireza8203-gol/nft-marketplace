import type { NFTItem } from "~/types/Global";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  try {
    const nftData = (await $fetch(
      `${process.env.NUXT_PUBLIC_API_BASE}/data/NFTs.json`,
    )) as NFTItem[];

    const nft = nftData.find((item: any) => item.id === id);

    if (!nft) {
      throw createError({
        statusCode: 404,
        message: "NFT not found",
      });
    } else {
      return nft;
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error reading NFT data",
    });
  }
});
