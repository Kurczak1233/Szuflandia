import d1 from "images/MainGallery/Tables/01.webp";
import d2 from "images/MainGallery/Tables/02.webp";
import d3 from "images/MainGallery/Tables/03.webp";
import d4 from "images/MainGallery/Tables/04.webp";
import d5 from "images/MainGallery/Tables/05.webp";
import d6 from "images/MainGallery/Tables/06.webp";
import d7 from "images/MainGallery/Tables/07.webp";
import d8 from "images/MainGallery/Tables/08.webp";
import d9 from "images/MainGallery/Tables/09.webp";
import d10 from "images/MainGallery/Tables/10.webp";
import d11 from "images/MainGallery/Tables/11.webp";
import d12 from "images/MainGallery/Tables/12.webp";
import d13 from "images/MainGallery/Tables/13.webp";
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
    {
      title: currentLanguageSheet.galleryScreen.tables[7].title,
      sizing: currentLanguageSheet.galleryScreen.tables[7].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[7].createdUsing,
      img: d8,
      alt: "Table image 08",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[8].title,
      sizing: currentLanguageSheet.galleryScreen.tables[8].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[8].createdUsing,
      img: d9,
      alt: "Table image 09",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[9].title,
      sizing: currentLanguageSheet.galleryScreen.tables[9].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[9].createdUsing,
      img: d10,
      alt: "Table image 010",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[10].title,
      sizing: currentLanguageSheet.galleryScreen.tables[10].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[10].createdUsing,
      img: d11,
      alt: "Table image 11",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[11].title,
      sizing: currentLanguageSheet.galleryScreen.tables[11].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[11].createdUsing,
      img: d12,
      alt: "Table image 12",
    },
    {
      title: currentLanguageSheet.galleryScreen.tables[12].title,
      sizing: currentLanguageSheet.galleryScreen.tables[12].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.tables[12].createdUsing,
      img: d13,
      alt: "Table image 13",
    },
  ];

  return { Tables };
};

export default Tables;
