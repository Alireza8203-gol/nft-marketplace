export interface ArtistInfo {
  id: string;
  name: string;
  username: string;
  profileImage: string;
  bio: string;
  walletAddress: string;
  totalSales: number;
  nfts: string[];
}

export interface CollectionInfo {
  id: number;
  collectionTitle: string;
  imagesSrc: string[];
  artist: {
    username: string;
    profilePic: string;
  };
}

export interface MenuItem {
  id: number;
  title: string;
  path: string;
}

export interface StatusObj {
  title: string;
  info: string;
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
  caption: string;
  linkTo: string;
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
