import { join } from "path";
import { readFile } from "fs/promises";

export default defineEventHandler(async (event) => {
  try {
    // Get the file path
    const filePath = join(process.cwd(), "server/data/artists.json");

    // Read JSON file
    const data = await readFile(filePath, "utf-8");

    // Parse and return data
    return JSON.parse(data);
  } catch (error) {
    return { error: "Failed to read data" };
  }
});
