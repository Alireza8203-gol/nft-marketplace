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
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: Record<string, unknown>; // since it’s an object but not defined
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: OpenSeaCollectionContract[];
}

export interface OpenSeaCollectionResponse {
  collections: OpenSeaCollection[];
  next: string;
}

export interface MenuItem {
  id: number;
  path: string;
  title: string;
}

export interface StatusObj {
  info: string;
  title: string;
}

export interface AnimatedGifProps {
  forMobile: boolean;
  forDesktop: boolean;
}

export interface StatusBoxProps {
  statusInfo: string;
  statusTitle: string;
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
