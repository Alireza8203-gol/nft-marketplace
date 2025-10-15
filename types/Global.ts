export interface ArtistInfo {
  id: string;
  bio: string;
  name: string;
  nfts: string[];
  email?: string;
  username: string;
  profilePic: string;
  totalSales: number;
  walletAddress: string;
  nftsSold: number | string;
  followers: number | string;
  salesVolume: number | string;
}

export interface CollectionInfo {
  id: number;
  imagesSrc: string[];
  collectionTitle: string;
  artist: {
    username: string;
    profilePic: string;
  };
}

export interface OpenSeaCollectionContract {
  address: string;
}

export interface OpenSeaCollection {
  name: string;
  owner: string;
  is_nsfw: boolean;
  wiki_url: string;
  category: string;
  image_url: string;
  collection: string;
  description: string;
  opensea_url: string;
  project_url: string;
  discord_url: string;
  is_disabled: boolean;
  telegram_url: string;
  banner_image_url: string;
  twitter_username: string;
  instagram_username: string;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  contracts: OpenSeaCollectionContract[];
  safelist_status: Record<string, unknown>; // since it’s an object but not defined
}

export interface OpenSeaCollectionResponse {
  next: string;
  collections: OpenSeaCollection[];
}

export interface MenuItem {
  id: number;
  path: string;
  title: string;
}

export interface StatusObj {
  title: string;
  info: string | number;
}

export interface AnimatedGifProps {
  forMobile: boolean;
  forDesktop: boolean;
}

export interface StatusBoxProps {
  statusInfo: string | number;
  statusTitle: string | number;
}

export interface CButtonProps {
  linkTo: string;
  caption: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export interface CategoryInfo {
  id: number;
  svg: string;
  name: string;
  link: string;
  image: string;
}

export interface NFTItem {
  id: string;
  name: string;
  image: string;
  price: number;
  tags: string[];
  ownerId: string;
  currency: string; // e.g., "BTC", "ETH"
  createdAt: string; // or Date if you parse it
  creatorId: string;
  description: string;
  status: "listed" | "unlisted" | "sold"; // add more if needed
}
