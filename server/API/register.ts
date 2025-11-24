import { join } from "path";
import { randomBytes } from "node:crypto";
import { ArtistInfo } from "~/types/Global";
import { readFile, writeFile } from "fs/promises";
import { createError, H3Event, readBody, sendError } from "h3";

// ✅ Define the input type
type RegisterBody = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody<RegisterBody>(event);
  const { username, email, password, confirmPassword } = body;

  if (!username || !email || !password || password !== confirmPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid input.",
      }),
    );
  }

  const filePath = join(process.cwd(), "data", "artists.json");
  let artists: ArtistInfo[] = [];

  try {
    const raw = await readFile(filePath, "utf8");
    artists = JSON.parse(raw);
  } catch (err) {
    artists = [];
  }

  const usernameExists = artists.some(
    (a: ArtistInfo): boolean => a.username === username,
  );
  const emailExists = artists.some(
    (a: ArtistInfo): boolean => a.email === email,
  );

  if (usernameExists) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username already exists",
      }),
    );
  } else {
    if (emailExists) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Username or email already exists",
        }),
      );
    }
  }

  const newArtistInfo: ArtistInfo = {
    id: randomBytes(8).toString("hex"),
    bio: "",
    name: "",
    nfts: [],
    email,
    username,
    nftsSold: "",
    followers: "",
    totalSales: 0,
    profilePic: "",
    salesVolume: "",
    walletAddress: "",
  };

  artists.push(newArtistInfo);

  await writeFile(filePath, JSON.stringify(artists, null, 2));

  event.node.res.statusCode = 201;

  return {
    message: "User created successfully",
    artist: newArtistInfo,
  };
});
