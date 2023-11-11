import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "page";

const Tables = () => {
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
    require.context("../../../../../../public/MainGallery/Tables", false, /\.(webp)$/)
  );
  const Tables: IGalleryFurnitureItem[] = Object.keys(images).filter(item => !item.includes("/MainGallery")).map((key, index) => ({
    title: currentLanguageSheet.galleryScreen.tables[index].title,
    sizing: currentLanguageSheet.galleryScreen.tables[index].sizing,
    createdUsing: currentLanguageSheet.galleryScreen.tables[index].createdUsing,
    img: images[key],
    alt: `Tables image ${index + 1}`,
  }));

  return { Tables };
};

export default Tables;
