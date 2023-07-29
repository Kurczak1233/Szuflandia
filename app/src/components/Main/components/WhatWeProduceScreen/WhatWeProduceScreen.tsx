import styles from "./WhatWeProduceScreen.module.scss";
import { LanguageContext } from "App";
import ProductsCategoryComponent from "../ProductsCategoryComponent/ProductsCategoryComponent";
import CabinetLogo from "images/CabinetLogo.svg";
import CabinetVector from "images/CabinetVector.svg";
import CabinetImage from "images/CabinetCategoryFurniture.png";
import TablesLogo from "images/TablesLogo.svg";
import TablesVector from "images/TablesVector.svg";
import TablesImage from "images/TablesImage.png";
import OrganizersLogo from "images/OrganizersIcon.svg";
import OrganizersVector from "images/OrganizersVector.svg";
import OrganizersImage from "images/OrganizersImage.png";
import ChestsLogo from "images/ChestsLogo.svg";
import ChestsVector from "images/ChestsVector.svg";
import ChestsImage from "images/ChestsImage.png";

import React from "react";
const WhatWeProduceScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <div>
      <div className={styles.title}>
        <span className={styles.furnitureGreen}>
          {currentLanguageSheet.whatWeProduceScreen.furnitureGreen}&nbsp;
        </span>
        {currentLanguageSheet.whatWeProduceScreen.weProduceText}
      </div>
      <ProductsCategoryComponent
        categoryLogo={CabinetLogo}
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
        mainImage={CabinetImage}
        backgroundVector={CabinetVector}
        marginLeft="40px"
      />
      <ProductsCategoryComponent
        categoryLogo={TablesLogo}
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
        mainImage={TablesImage}
        backgroundVector={TablesVector}
        marginRight="40px"
        reversePositioning
      />
      <ProductsCategoryComponent
        categoryLogo={OrganizersLogo}
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
        mainImage={OrganizersImage}
        backgroundVector={OrganizersVector}
        marginLeft="40px"
      />
      <ProductsCategoryComponent
        categoryLogo={ChestsLogo}
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
        mainImage={ChestsImage}
        backgroundVector={ChestsVector}
        marginRight="40px"
        reversePositioning
      />
    </div>
  );
};

export default WhatWeProduceScreen;
