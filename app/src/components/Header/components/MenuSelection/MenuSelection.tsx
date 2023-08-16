import { LanguageContext, LanguageEnum } from "../../../../App";
import MenuFlag from "../MenuFlag/MenuFlag";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuSelection.module.scss";
import PolishFlag from "../../../../images/PolandFlag.svg";
import EnglishFlag from "../../../../images/EnglishFlag.svg";
import React, { useEffect } from "react";
import BurgerMenuInactive from "images/BurgerMenuInactive.svg";
import BurgerMenuActive from "images/BurgerMenuActive.svg";
import useClickedOutsideElement from "hooks/useClickedOutsideElement";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
interface IMenuSelection {
  setLanguageToChosenOption: (option: LanguageEnum) => void;
  headerVisible: boolean;
}

const MenuSelection = ({
  headerVisible,
  setLanguageToChosenOption,
}: IMenuSelection) => {
  const { isDropdownOpen, handleDropdown, menuBtnRef, menuRef } =
    useClickedOutsideElement();

  const navigateToTop = () => {
    const element = document.getElementById("mainScreen");
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToGallery = () => {
    const element = document.getElementById("gallery");
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToFooter = () => {
    const element = document.getElementById("footer");
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const currentLanguageSheet = React.useContext(LanguageContext);

  useEffect(() => {
    if (headerVisible) {
      handleDropdown(false);
    }
  }, [headerVisible]);

  return (
    <div className={styles.headerMenu}>
      {/* Normal menu desktop */}
      <div className={styles.topHeaderMenu}>
        <MenuItem
          name={currentLanguageSheet.header.mainText1}
          onClick={navigateToTop}
        />
        <MenuItem
          name={currentLanguageSheet.header.mainText2}
          onClick={navigateToGallery}
        />
        <MenuItem
          name={currentLanguageSheet.header.mainText3}
          onClick={navigateToFooter}
          isLastItem
        />
      </div>
      <div className={styles.menuFlags}>
        <MenuFlag
          setLanguageToChosenOption={setLanguageToChosenOption}
          option={LanguageEnum.Polish}
          flagSrc={PolishFlag}
        />
        <MenuFlag
          setLanguageToChosenOption={setLanguageToChosenOption}
          option={LanguageEnum.English}
          flagSrc={EnglishFlag}
          isLastFlag
        />
      </div>

      {/* Burger menu mobile */}
      <div className={styles.topHeaderBurgerMenu}>
        <img
          ref={menuBtnRef}
          onClick={() => handleDropdown(!isDropdownOpen)}
          src={
            isDropdownOpen && headerVisible
              ? BurgerMenuActive
              : BurgerMenuInactive
          }
          height={35}
          alt="Szuflandia menu"
        />
        <div
          ref={menuRef}
          className={
            isDropdownOpen && headerVisible
              ? styles.mobileMenuActive
              : styles.mobileMenu
          }
        >
          <MobileMenuItem
            name={currentLanguageSheet.header.mainText1}
            onClick={() => {
              navigateToTop();
              handleDropdown(false);
            }}
            isItemActive={isDropdownOpen && headerVisible}
            top={"45px"}
            width="220px"
            transitionDelay="0.1s"
          />
          <MobileMenuItem
            name={currentLanguageSheet.header.mainText2}
            onClick={() => {
              navigateToGallery();
              handleDropdown(false);
            }}
            isItemActive={isDropdownOpen && headerVisible}
            top={"102px"}
            width="220px"
            transitionDelay="0.2s"
          />
          <MobileMenuItem
            name={currentLanguageSheet.header.mainText3}
            onClick={() => {
              navigateToFooter();
              handleDropdown(false);
            }}
            isItemActive={isDropdownOpen && headerVisible}
            top={"159px"}
            width="220px"
            transitionDelay="0.3s"
          />
          <div
            className={styles.languagesMobileDrawers}
            style={{
              top: "216px",
              right: isDropdownOpen && headerVisible ? "0px" : "-300px",
              width: "240px",
              transition: "all 1s",
            }}
          >
            <div
              className={styles.customLanguagesDrawers}
              onClick={() => setLanguageToChosenOption(LanguageEnum.English)}
            >
              <MenuFlag
                setLanguageToChosenOption={setLanguageToChosenOption}
                option={LanguageEnum.English}
                flagSrc={EnglishFlag}
              />
            </div>
            <div
              className={styles.customLanguagesDrawers}
              onClick={() => setLanguageToChosenOption(LanguageEnum.Polish)}
            >
              <MenuFlag
                setLanguageToChosenOption={setLanguageToChosenOption}
                option={LanguageEnum.Polish}
                flagSrc={PolishFlag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSelection;
