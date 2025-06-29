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
