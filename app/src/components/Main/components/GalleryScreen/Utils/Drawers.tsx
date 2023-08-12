import d1 from "images/MainGallery/Drawers/01.jpg";
import d2 from "images/MainGallery/Drawers/02.jpg";
import d3 from "images/MainGallery/Drawers/03.jpg";
import d4 from "images/MainGallery/Drawers/04.jpg";
import d5 from "images/MainGallery/Drawers/05.jpg";
import d6 from "images/MainGallery/Drawers/06.jpg";
import d7 from "images/MainGallery/Drawers/07.jpg";
import d8 from "images/MainGallery/Drawers/08.jpg";
import d9 from "images/MainGallery/Drawers/09.jpg";
import d10 from "images/MainGallery/Drawers/10.jpg";
import d11 from "images/MainGallery/Drawers/11.jpg";
import d12 from "images/MainGallery/Drawers/12.jpg";
import d13 from "images/MainGallery/Drawers/13.jpg";
import d14 from "images/MainGallery/Drawers/14.jpg";
import d15 from "images/MainGallery/Drawers/15.jpg";
import d16 from "images/MainGallery/Drawers/16.jpg";
import d17 from "images/MainGallery/Drawers/17.jpg";
import d18 from "images/MainGallery/Drawers/18.jpg";
import d19 from "images/MainGallery/Drawers/19.jpg";
import d20 from "images/MainGallery/Drawers/20.jpg";
import d21 from "images/MainGallery/Drawers/21.jpg";
import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "App";

const Drawers = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  const Drawers: IGalleryFurnitureItem[] = [
    {
      title: currentLanguageSheet.galleryScreen.drawers[0].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[0].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[0].createdUsing,
      img: d1,
      alt: "Drawer image 01",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[1].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[1].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[1].createdUsing,
      img: d2,
      alt: "Drawer image 02",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[2].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[2].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[2].createdUsing,
      img: d3,
      alt: "Drawer image 03",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[3].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[3].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[3].createdUsing,
      img: d4,
      alt: "Drawer image 04",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[4].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[4].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[4].createdUsing,
      img: d5,
      alt: "Drawer image 05",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[5].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[5].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[5].createdUsing,
      img: d6,
      alt: "Drawer image 06",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[6].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[6].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[6].createdUsing,
      img: d7,
      alt: "Drawer image 07",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[7].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[7].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[7].createdUsing,
      img: d8,
      alt: "Drawer image 08",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[8].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[8].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[8].createdUsing,
      img: d9,
      alt: "Drawer image 09",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[9].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[9].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[9].createdUsing,
      img: d10,
      alt: "Drawer image 010",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[10].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[10].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[10].createdUsing,
      img: d11,
      alt: "Drawer image 011",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[11].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[11].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[11].createdUsing,
      img: d12,
      alt: "Drawer image 012",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[12].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[12].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[12].createdUsing,
      img: d13,
      alt: "Drawer image 013",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[13].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[13].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[13].createdUsing,
      img: d14,
      alt: "Drawer image 014",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[14].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[14].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[14].createdUsing,
      img: d15,
      alt: "Drawer image 015",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[15].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[15].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[15].createdUsing,
      img: d16,
      alt: "Drawer image 016",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[16].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[16].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[16].createdUsing,
      img: d17,
      alt: "Drawer image 017",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[17].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[17].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[17].createdUsing,
      img: d18,
      alt: "Drawer image 018",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[18].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[18].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[18].createdUsing,
      img: d19,
      alt: "Drawer image 019",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[19].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[19].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[19].createdUsing,
      img: d20,
      alt: "Drawer image 020",
    },
    {
      title: currentLanguageSheet.galleryScreen.drawers[20].title,
      sizing: currentLanguageSheet.galleryScreen.drawers[20].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.drawers[20].createdUsing,
      img: d21,
      alt: "Drawer image 021",
    },
  ];

  return { Drawers };
};

export default Drawers;
