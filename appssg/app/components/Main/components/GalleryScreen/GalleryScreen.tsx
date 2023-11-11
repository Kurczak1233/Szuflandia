import React from "react";
import GalleryComponent from "../GalleryComponent/GalleryComponent";
import { LanguageContext } from "page";
import styles from "./GalleryScreen.module.scss";
import CabinetLogo from "images/CabinetLogo.svg";
import TablesLogo from "images/TablesLogo.svg";
import OrganizersLogo from "images/OrganizersIcon.svg";
import ChestsLogo from "images/ChestsLogo.svg";
import DrawerImage from "images/DrawersGalleryImage.webp";
import ChestsImage from "images/ChestsGalleryImage.webp";
import TablesImage from "images/TablesGalleryImage.webp";
import OrganizersImage from "images/OrganizersGalleryImage.webp";
import DrawersComponent from "./Utils/Drawers";
import TablesComponent from "./Utils/Tables";
import OrganizersComponent from "./Utils/Organizers";
import ChestsComponent from "./Utils/Chests";

const GalleryScreen = () => {
  const { Drawers } = DrawersComponent();
  const { Tables } = TablesComponent();
  const { Organizers } = OrganizersComponent();
  const { Chests } = ChestsComponent();

  const currentLanguageSheet = React.useContext(LanguageContext);

  return (
    <div className={styles.wrapper} id="gallery">
      <div className={styles.galleryTitle}>
        {currentLanguageSheet.galleryScreen.galleryTitle}
      </div>
      <div className={styles.centralText}>
        <span className={styles.descriptionTop}>
          {currentLanguageSheet.galleryScreen.descriptionBlackPart}
        </span>
        &nbsp;
        <span className={styles.descriptionTopGreen}>
          {currentLanguageSheet.galleryScreen.availableGreenPart}
        </span>
      </div>
      <div className={styles.descriptionBottom}>
        {currentLanguageSheet.galleryScreen.furtherDescriptionFirstSentence}
      </div>
      <div className={styles.descriptionBottom}>
        {currentLanguageSheet.galleryScreen.furtherDescriptionSecondSentence}
      </div>
      <section className={styles.galleryContainer}>
        <div className={styles.galleryWrapper}>
          <GalleryComponent
            title={currentLanguageSheet.galleryScreen.galleryItems[0].title}
            description={
              currentLanguageSheet.galleryScreen.galleryItems[0].description
            }
            icon={CabinetLogo}
            itemsCollection={Drawers}
            hoverImage={DrawerImage}
            topCorner
          />
          <GalleryComponent
            title={currentLanguageSheet.galleryScreen.galleryItems[1].title}
            description={
              currentLanguageSheet.galleryScreen.galleryItems[1].description
            }
            icon={TablesLogo}
            itemsCollection={Tables}
            hoverImage={TablesImage}
          />
          <GalleryComponent
            title={currentLanguageSheet.galleryScreen.galleryItems[2].title}
            description={
              currentLanguageSheet.galleryScreen.galleryItems[2].description
            }
            icon={OrganizersLogo}
            itemsCollection={Organizers}
            hoverImage={OrganizersImage}
          />
          <GalleryComponent
            title={currentLanguageSheet.galleryScreen.galleryItems[3].title}
            description={
              currentLanguageSheet.galleryScreen.galleryItems[3].description
            }
            itemsCollection={Chests}
            icon={ChestsLogo}
            noBorderBottom
            hoverImage={ChestsImage}
            bottomCorner
          />
        </div>
      </section>
    </div>
  );
};

export default GalleryScreen;
