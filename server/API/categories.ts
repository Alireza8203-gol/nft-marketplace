import { CategoryInfo } from "~/types/Global";

export default defineEventHandler((): CategoryInfo[] => {
  return [
    {
      id: 1,
      name: "Art",
      image: "/images/category/category-art-min.webp",
      svg: "/SVGs/svg-icons/categories/paintbrush.svg",
    },
    {
      id: 2,
      name: "Collectibles",
      image: "/images/icecream-ape-min.webp",
      svg: "/SVGs/svg-icons/categories/Swatches.svg",
    },
    {
      id: 3,
      name: "Music",
      svg: "/SVGs/svg-icons/categories/MusicNotes.svg",
      image: "/images/category/category-music-min.webp",
    },
    {
      id: 4,
      name: "Photography",
      svg: "/SVGs/svg-icons/categories/Camera.svg",
      image: "/images/category/category-photography-min.webp",
    },
    {
      id: 5,
      name: "Video",
      image: "/images/life-on-edena-min.webp",
      svg: "/SVGs/svg-icons/categories/VideoCamera.svg",
    },
    {
      id: 6,
      name: "Utility",
      svg: "/SVGs/svg-icons/categories/MagicWand.svg",
      image: "/images/category/category-utility-min.webp",
    },
    {
      id: 7,
      name: "Sports",
      image: "/images/category/category-sport-min.webp",
      svg: "/SVGs/svg-icons/categories/Basketball.svg",
    },
    {
      id: 8,
      name: "Virtual Worlds",
      image: "/images/virtual-worlds-min.webp",
      svg: "/SVGs/svg-icons/categories/Planet.svg",
    },
  ];
});
