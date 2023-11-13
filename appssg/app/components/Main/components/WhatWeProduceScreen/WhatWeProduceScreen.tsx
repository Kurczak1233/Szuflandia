import styles from "./WhatWeProduceScreen.module.scss";
import { LanguageContext } from "page";
import ProductsCategoryComponent from "../ProductsCategoryComponent/ProductsCategoryComponent";
import React from "react";

const WhatWeProduceScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.title}>
        <span className={styles.furnitureGreen}>
          {currentLanguageSheet.whatWeProduceScreen.furnitureGreen}&nbsp;
        </span>
        {currentLanguageSheet.whatWeProduceScreen.weProduceText}
      </div>
      <ProductsCategoryComponent
        categoryLogo="/CabinetLogo.svg"
        categoryTitle={
          currentLanguageSheet.whatWeProduceScreen.cabinetsItem.categoryTitle
        }
        categoryDescription={
          currentLanguageSheet.whatWeProduceScreen.cabinetsItem
            .categoryDescription
        }
        categoriesButtons={
          currentLanguageSheet.whatWeProduceScreen.cabinetsItem
            .categoryTraitsButtons
        }
        mainImage="/CabinetCategoryFurniture.webp"
        backgroundVector="/CabinetVector.svg"
        marginLeft="40px"
        mainMobileImage="/MobileCabinetsImage.webp"
      />
      <ProductsCategoryComponent
        categoryLogo="/TablesLogo.svg"
        categoryTitle={
          currentLanguageSheet.whatWeProduceScreen.tablesItem.categoryTitle
        }
        categoryDescription={
          currentLanguageSheet.whatWeProduceScreen.tablesItem
            .categoryDescription
        }
        categoriesButtons={
          currentLanguageSheet.whatWeProduceScreen.tablesItem
            .categoryTraitsButtons
        }
        mainImage="/TablesImage.webp"
        backgroundVector="/TablesVector.svg"
        marginRight="40px"
        reversePositioning
        mainMobileImage="/MobileTablesImage.webp"
      />
      <ProductsCategoryComponent
        categoryLogo="/OrganizersIcon.svg"
        categoryTitle={
          currentLanguageSheet.whatWeProduceScreen.organizersItem.categoryTitle
        }
        categoryDescription={
          currentLanguageSheet.whatWeProduceScreen.organizersItem
            .categoryDescription
        }
        categoriesButtons={
          currentLanguageSheet.whatWeProduceScreen.organizersItem
            .categoryTraitsButtons
        }
        mainImage="/OrganizersImage.webp"
        backgroundVector="/OrganizersVector.svg"
        marginLeft="40px"
        mainMobileImage="/MobileOrganizersImage.webp"
      />
      <ProductsCategoryComponent
        categoryLogo="/ChestsLogo.svg"
        categoryTitle={
          currentLanguageSheet.whatWeProduceScreen.chestsItem.categoryTitle
        }
        categoryDescription={
          currentLanguageSheet.whatWeProduceScreen.chestsItem
            .categoryDescription
        }
        categoriesButtons={
          currentLanguageSheet.whatWeProduceScreen.chestsItem
            .categoryTraitsButtons
        }
        mainImage="/ChestsImage.webp"
        backgroundVector="/ChestsVector.svg"
        marginRight="40px"
        reversePositioning
        mainMobileImage="/MobileChestsImage.webp"
      />
    </div>
  );
};

export default WhatWeProduceScreen;
