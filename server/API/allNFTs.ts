import { join } from "path";
import { readFile } from "fs/promises";
import { NFTItem } from "~/types/Global";

export default defineEventHandler(
  async (): Promise<NFTItem[] | { error: "Failed to read data" }> => {
    try {
      // Get the file path and read JSON file
      const filePath = join(process.cwd(), "server/data/NFTs.json");
      const data = await readFile(filePath, "utf-8");
      // Parse and return data
      return JSON.parse(data) as NFTItem[];
    } catch (error) {
      return { error: "Failed to read data" };
    }
  },
);
