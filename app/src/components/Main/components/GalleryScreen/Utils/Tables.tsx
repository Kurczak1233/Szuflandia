import d1 from "images/MainGallery/Tables/01.jpg";
import d2 from "images/MainGallery/Tables/02.jpg";
import d3 from "images/MainGallery/Tables/03.jpg";
import d4 from "images/MainGallery/Tables/04.jpg";
import d5 from "images/MainGallery/Tables/05.jpg";
import d6 from "images/MainGallery/Tables/06.jpg";
import d7 from "images/MainGallery/Tables/07.jpg";
import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "App";

const Tables = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  const Tables: IGalleryFurnitureItem[] = [
    {
      title: currentLanguageSheet.galleryScreen.tables[0].title,
      sizing: currentLanguageSheet.galleryScreen.tables[0].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[0].createdUsing,
      img: d1,
      alt: "Table image 01",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[1].title,
      sizing: currentLanguageSheet.galleryScreen.tables[1].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[1].createdUsing,
      img: d2,
      alt: "Table image 02",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[2].title,
      sizing: currentLanguageSheet.galleryScreen.tables[2].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[2].createdUsing,
      img: d3,
      alt: "Table image 03",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[3].title,
      sizing: currentLanguageSheet.galleryScreen.tables[3].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[3].createdUsing,
      img: d4,
      alt: "Table image 04",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[4].title,
      sizing: currentLanguageSheet.galleryScreen.tables[4].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[4].createdUsing,
      img: d5,
      alt: "Table image 05",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[5].title,
      sizing: currentLanguageSheet.galleryScreen.tables[5].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[5].createdUsing,
      img: d6,
      alt: "Table image 06",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[6].title,
      sizing: currentLanguageSheet.galleryScreen.tables[6].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[6].createdUsing,
      img: d7,
      alt: "Table image 07",
    },
  ];

  return { Tables };
};

export default Tables;
