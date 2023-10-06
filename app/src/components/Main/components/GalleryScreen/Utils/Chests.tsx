import d1 from "images/MainGallery/Chests/01.webp";
import d2 from "images/MainGallery/Chests/02.webp";
import d3 from "images/MainGallery/Chests/03.webp";
import d4 from "images/MainGallery/Chests/04.webp";
import d7 from "images/MainGallery/Chests/07.webp";
import d8 from "images/MainGallery/Chests/08.webp";
import d9 from "images/MainGallery/Chests/09.webp";
import d10 from "images/MainGallery/Chests/10.webp";
import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "App";

const Chests = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  const Chests: IGalleryFurnitureItem[] = [
    {
      title: currentLanguageSheet.galleryScreen.chests[0].title,
      sizing: currentLanguageSheet.galleryScreen.chests[0].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[0].createdUsing,
      img: d1,
      alt: "Chest image 01",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[1].title,
      sizing: currentLanguageSheet.galleryScreen.chests[1].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[1].createdUsing,
      img: d2,
      alt: "Chest image 02",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[2].title,
      sizing: currentLanguageSheet.galleryScreen.chests[2].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[2].createdUsing,
      img: d3,
      alt: "Chest image 03",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[3].title,
      sizing: currentLanguageSheet.galleryScreen.chests[3].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[3].createdUsing,
      img: d4,
      alt: "Chest image 04",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[4].title,
      sizing: currentLanguageSheet.galleryScreen.chests[4].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[4].createdUsing,
      img: d7,
      alt: "Chest image 07",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[5].title,
      sizing: currentLanguageSheet.galleryScreen.chests[5].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[5].createdUsing,
      img: d8,
      alt: "Chest image 08",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[6].title,
      sizing: currentLanguageSheet.galleryScreen.chests[6].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[6].createdUsing,
      img: d9,
      alt: "Chest image 09",
    },
    {
      title: currentLanguageSheet.galleryScreen.chests[7].title,
      sizing: currentLanguageSheet.galleryScreen.chests[7].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.chests[7].createdUsing,
      img: d10,
      alt: "Chest image 10",
    },
  ];

  return { Chests };
};

export default Chests;
