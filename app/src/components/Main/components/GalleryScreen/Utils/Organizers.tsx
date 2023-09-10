import d1 from "images/MainGallery/Organizers/01.webp";
import d2 from "images/MainGallery/Organizers/02.webp";
import d3 from "images/MainGallery/Organizers/03.webp";
import d4 from "images/MainGallery/Organizers/04.webp";
import d5 from "images/MainGallery/Organizers/05.webp";
import d6 from "images/MainGallery/Organizers/06.webp";
import d7 from "images/MainGallery/Organizers/07.webp";
import d8 from "images/MainGallery/Organizers/08.webp";
import d9 from "images/MainGallery/Organizers/09.webp";
import d10 from "images/MainGallery/Organizers/10.webp";
import d11 from "images/MainGallery/Organizers/11.webp";
import d12 from "images/MainGallery/Organizers/12.webp";
import d13 from "images/MainGallery/Organizers/13.webp";
import d14 from "images/MainGallery/Organizers/14.webp";
import d15 from "images/MainGallery/Organizers/15.webp";
import d16 from "images/MainGallery/Organizers/16.webp";
import d17 from "images/MainGallery/Organizers/17.webp";
import d18 from "images/MainGallery/Organizers/18.webp";
import d19 from "images/MainGallery/Organizers/19.webp";
import d20 from "images/MainGallery/Organizers/20.webp";
import d21 from "images/MainGallery/Organizers/21.webp";
import d22 from "images/MainGallery/Organizers/22.webp";
import d23 from "images/MainGallery/Organizers/23.webp";
import d24 from "images/MainGallery/Organizers/24.webp";
import d25 from "images/MainGallery/Organizers/25.webp";
import d26 from "images/MainGallery/Organizers/26.webp";
import d27 from "images/MainGallery/Organizers/27.webp";
import d28 from "images/MainGallery/Organizers/28.webp";
import d29 from "images/MainGallery/Organizers/29.webp";
import d30 from "images/MainGallery/Organizers/30.webp";
import d31 from "images/MainGallery/Organizers/31.webp";
import d32 from "images/MainGallery/Organizers/32.webp";
import d33 from "images/MainGallery/Organizers/33.webp";
import d34 from "images/MainGallery/Organizers/34.webp";
import d35 from "images/MainGallery/Organizers/35.webp";
import d36 from "images/MainGallery/Organizers/36.webp";
import d37 from "images/MainGallery/Organizers/37.webp";
import d38 from "images/MainGallery/Organizers/38.webp";
import d39 from "images/MainGallery/Organizers/39.webp";
import d40 from "images/MainGallery/Organizers/40.webp";
import d41 from "images/MainGallery/Organizers/41.webp";
import d42 from "images/MainGallery/Organizers/42.webp";
import d43 from "images/MainGallery/Organizers/43.webp";
import d44 from "images/MainGallery/Organizers/44.webp";
import d45 from "images/MainGallery/Organizers/45.webp";
import d46 from "images/MainGallery/Organizers/46.webp";
import d47 from "images/MainGallery/Organizers/47.webp";
import d48 from "images/MainGallery/Organizers/48.webp";
import d49 from "images/MainGallery/Organizers/49.webp";
import d50 from "images/MainGallery/Organizers/50.webp";
import d51 from "images/MainGallery/Organizers/51.webp";
import d52 from "images/MainGallery/Organizers/52.webp";
import d53 from "images/MainGallery/Organizers/53.webp";
import d54 from "images/MainGallery/Organizers/54.webp";
import d55 from "images/MainGallery/Organizers/55.webp";
import d56 from "images/MainGallery/Organizers/56.webp";
import d57 from "images/MainGallery/Organizers/57.webp";
import d58 from "images/MainGallery/Organizers/58.webp";
import d59 from "images/MainGallery/Organizers/59.webp";
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
    {
      title: currentLanguageSheet.galleryScreen.organizers[22].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[22].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[22].createdUsing,
      img: d23,
      alt: "Organizer image 023",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[23].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[23].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[23].createdUsing,
      img: d24,
      alt: "Organizer image 024",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[24].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[24].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[24].createdUsing,
      img: d25,
      alt: "Organizer image 025",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[25].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[25].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[25].createdUsing,
      img: d26,
      alt: "Organizer image 026",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[26].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[26].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[26].createdUsing,
      img: d27,
      alt: "Organizer image 027",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[27].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[27].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[27].createdUsing,
      img: d28,
      alt: "Organizer image 028",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[28].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[28].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[28].createdUsing,
      img: d29,
      alt: "Organizer image 029",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[29].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[29].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[29].createdUsing,
      img: d30,
      alt: "Organizer image 030",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[30].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[30].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[30].createdUsing,
      img: d31,
      alt: "Organizer image 031",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[31].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[31].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[31].createdUsing,
      img: d32,
      alt: "Organizer image 032",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[32].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[32].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[32].createdUsing,
      img: d33,
      alt: "Organizer image 033",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[33].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[33].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[33].createdUsing,
      img: d34,
      alt: "Organizer image 034",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[34].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[34].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[34].createdUsing,
      img: d35,
      alt: "Organizer image 035",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[35].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[35].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[35].createdUsing,
      img: d36,
      alt: "Organizer image 036",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[36].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[36].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[36].createdUsing,
      img: d37,
      alt: "Organizer image 037",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[37].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[37].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[37].createdUsing,
      img: d38,
      alt: "Organizer image 038",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[38].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[38].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[38].createdUsing,
      img: d39,
      alt: "Organizer image 039",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[39].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[39].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[39].createdUsing,
      img: d40,
      alt: "Organizer image 040",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[40].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[40].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[40].createdUsing,
      img: d41,
      alt: "Organizer image 041",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[41].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[41].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[41].createdUsing,
      img: d42,
      alt: "Organizer image 042",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[42].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[42].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[42].createdUsing,
      img: d43,
      alt: "Organizer image 043",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[43].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[43].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[43].createdUsing,
      img: d44,
      alt: "Organizer image 044",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[44].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[44].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[44].createdUsing,
      img: d45,
      alt: "Organizer image 045",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[45].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[45].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[45].createdUsing,
      img: d46,
      alt: "Organizer image 046",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[46].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[46].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[46].createdUsing,
      img: d47,
      alt: "Organizer image 047",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[47].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[47].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[47].createdUsing,
      img: d48,
      alt: "Organizer image 048",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[48].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[48].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[48].createdUsing,
      img: d49,
      alt: "Organizer image 049",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[49].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[49].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[49].createdUsing,
      img: d50,
      alt: "Organizer image 050",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[50].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[50].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[50].createdUsing,
      img: d51,
      alt: "Organizer image 051",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[51].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[51].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[51].createdUsing,
      img: d52,
      alt: "Organizer image 052",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[52].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[52].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[52].createdUsing,
      img: d53,
      alt: "Organizer image 053",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[53].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[53].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[53].createdUsing,
      img: d54,
      alt: "Organizer image 054",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[54].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[54].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[54].createdUsing,
      img: d55,
      alt: "Organizer image 055",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[55].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[55].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[55].createdUsing,
      img: d56,
      alt: "Organizer image 056",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[56].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[56].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[56].createdUsing,
      img: d57,
      alt: "Organizer image 057",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[57].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[57].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[57].createdUsing,
      img: d58,
      alt: "Organizer image 058",
    },
    {
      title: currentLanguageSheet.galleryScreen.organizers[58].title,
      sizing: currentLanguageSheet.galleryScreen.organizers[58].sizing,
      createdUsing: currentLanguageSheet.galleryScreen.organizers[58].createdUsing,
      img: d59,
      alt: "Organizer image 059",
    },
  ];

  return { Organizers };
};

export default Organizers;
