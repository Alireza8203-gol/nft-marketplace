// export default defineEventHandler(async () => {
//   const config = useRuntimeConfig();
//   const baseUrl = config.public.apiBaseUrl;
//
//   const data = await $fetch(`${baseUrl}/data/trending-collections.json`);
//   return data;
// });

// import { promises as fs } from "fs";
// import { join } from "path";
//
// export default defineEventHandler(async () => {
//   const filePath = join(
//     process.cwd(),
//     "public",
//     "data",
//     "trendingCollections.json",
//   );
//   const fileContent = await fs.readFile(filePath, "utf-8");
//   return JSON.parse(fileContent);
// });

import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default defineEventHandler(async () => {
  const filePath = join(process.cwd(), "public/data/trending-collections.json");
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw);
});
