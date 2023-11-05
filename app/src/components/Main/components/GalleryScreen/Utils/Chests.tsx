import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "App";

const Chests = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);

  function importAll(r: any) {
    const images: { [key: string]: string } = {};
    r.keys().forEach((item: string) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    require.context("images/MainGallery/Chests", false, /\.(webp)$/)
  );

  const Chests: IGalleryFurnitureItem[] = Object.keys(images).filter(item => !item.includes("images/MainGallery")).map((key, index) => ({
    title: currentLanguageSheet.galleryScreen.chests[index].title,
    sizing: currentLanguageSheet.galleryScreen.chests[index].sizing,
    createdUsing: currentLanguageSheet.galleryScreen.chests[index].createdUsing,
    img: images[key],
    alt: `Chest image ${index + 1}`,
  }));
  
  return { Chests };
};

export default Chests;
