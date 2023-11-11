import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "page";
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
    // @ts-ignore
    require.context("../../../../../../public/MainGallery/Chests", false, /\.(webp)$/)
  );

  const Chests: IGalleryFurnitureItem[] = Object.keys(images).filter(item => !item.includes("/MainGallery")).map((key, index) => ({
    title: currentLanguageSheet.galleryScreen.chests[index].title,
    sizing: currentLanguageSheet.galleryScreen.chests[index].sizing,
    createdUsing: currentLanguageSheet.galleryScreen.chests[index].createdUsing,
    img: images[key],
    alt: `Chest image ${index + 1}`,
  }));
  
  return { Chests };
};

export default Chests;
