import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "page";

const Organizers = () => {
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
    require.context("../../../../../../public/MainGallery/Organizers", false, /\.(webp)$/)
  );
  const Organizers: IGalleryFurnitureItem[] = Object.keys(images).filter(item => !item.includes("/MainGallery")).map((key, index) => ({
    title: currentLanguageSheet.galleryScreen.organizers[index].title,
    sizing: currentLanguageSheet.galleryScreen.organizers[index].sizing,
    createdUsing: currentLanguageSheet.galleryScreen.organizers[index].createdUsing,
    img: images[key],
    alt: `Organizer image ${index + 1}`,
  }));

  return { Organizers };
};

export default Organizers;
