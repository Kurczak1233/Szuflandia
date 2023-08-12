import d1 from "images/MainGallery/Organizers/01.jpg";
import d2 from "images/MainGallery/Organizers/02.jpg";
import d3 from "images/MainGallery/Organizers/03.jpg";
import d4 from "images/MainGallery/Organizers/04.jpg";
import d5 from "images/MainGallery/Organizers/05.jpg";
import d6 from "images/MainGallery/Organizers/06.jpg";
import d7 from "images/MainGallery/Organizers/07.jpg";
import d8 from "images/MainGallery/Organizers/08.jpg";
import d9 from "images/MainGallery/Organizers/09.jpg";
import d10 from "images/MainGallery/Organizers/10.jpg";
import d11 from "images/MainGallery/Organizers/11.jpg";
import d12 from "images/MainGallery/Organizers/12.jpg";
import d13 from "images/MainGallery/Organizers/13.jpg";
import d14 from "images/MainGallery/Organizers/14.jpg";
import d15 from "images/MainGallery/Organizers/15.jpg";
import d16 from "images/MainGallery/Organizers/16.jpg";
import d17 from "images/MainGallery/Organizers/17.jpg";
import d18 from "images/MainGallery/Organizers/18.jpg";
import d19 from "images/MainGallery/Organizers/19.jpg";
import d20 from "images/MainGallery/Organizers/20.jpg";
import d21 from "images/MainGallery/Organizers/21.jpg";
import d22 from "images/MainGallery/Organizers/22.jpg";
import { IGalleryFurnitureItem } from "./IGalleryFurnitureItem";
import React from "react";
import { LanguageContext } from "App";

const Organizers = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  const Organizers: IGalleryFurnitureItem[] = [
    {
      title: currentLanguageSheet.galleryScreen.organizers[0].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[0].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[0].createdUsing,
      img: d1,
      alt: "Organizer image 01",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[1].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[1].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[1].createdUsing,
      img: d2,
      alt: "Organizer image 02",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[2].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[2].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[2].createdUsing,
      img: d3,
      alt: "Organizer image 03",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[3].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[3].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[3].createdUsing,
      img: d4,
      alt: "Organizer image 04",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[4].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[4].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[4].createdUsing,
      img: d5,
      alt: "Organizer image 05",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[5].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[5].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[5].createdUsing,
      img: d6,
      alt: "Organizer image 06",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[6].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[6].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[6].createdUsing,
      img: d7,
      alt: "Organizer image 07",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[7].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[7].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[7].createdUsing,
      img: d8,
      alt: "Organizer image 08",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[8].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[8].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[8].createdUsing,
      img: d9,
      alt: "Organizer image 09",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[9].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[9].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[9].createdUsing,
      img: d10,
      alt: "Organizer image 010",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[10].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[10].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[10].createdUsing,
      img: d11,
      alt: "Organizer image 011",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[11].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[11].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[11].createdUsing,
      img: d12,
      alt: "Organizer image 012",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[12].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[12].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[12].createdUsing,
      img: d13,
      alt: "Organizer image 013",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[13].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[13].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[13].createdUsing,
      img: d14,
      alt: "Organizer image 014",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[14].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[14].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[14].createdUsing,
      img: d15,
      alt: "Organizer image 015",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[15].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[15].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[15].createdUsing,
      img: d16,
      alt: "Organizer image 016",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[16].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[16].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[16].createdUsing,
      img: d17,
      alt: "Organizer image 017",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[17].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[17].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[17].createdUsing,
      img: d18,
      alt: "Organizer image 018",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[18].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[18].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[18].createdUsing,
      img: d19,
      alt: "Organizer image 019",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[19].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[19].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[19].createdUsing,
      img: d20,
      alt: "Organizer image 020",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[20].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[20].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[20].createdUsing,
      img: d21,
      alt: "Organizer image 021",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[21].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[21].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[21].createdUsing,
      img: d22,
      alt: "Organizer image 022",
    },
  ];

  return { Organizers };
};

export default Organizers;
