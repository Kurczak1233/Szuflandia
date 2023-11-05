import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "App";

const Drawers = () => {
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
    require.context("images/MainGallery/Drawers", false, /\.(webp)$/)
  );

  const Drawers: IGalleryFurnitureItem[] = Object.keys(images).filter(item => !item.includes("images/MainGallery")).map((key, index) => ({
    title: currentLanguageSheet.galleryScreen.drawers[index].title,
    sizing: currentLanguageSheet.galleryScreen.drawers[index].sizing,
    createdUsing: currentLanguageSheet.galleryScreen.drawers[index].createdUsing,
    img: images[key],
    alt: `Drawer image ${index + 1}`,
  }));
  
  return { Drawers };
};

export default Drawers;
