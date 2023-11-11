/* eslint-disable react-hooks/exhaustive-deps */
import { LanguageContext, LanguageEnum } from "page";
import MenuFlag from "../MenuFlag/MenuFlag";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuSelection.module.scss";
import React, { useEffect } from "react";
import useClickedOutsideElement from "hooks/useClickedOutsideElement";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
import Image from "next/image"

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
          flagSrc="/PolandFlag.svg"
        />
        <MenuFlag
          setLanguageToChosenOption={setLanguageToChosenOption}
          option={LanguageEnum.English}
          flagSrc="/EnglishFlag.svg"
          isLastFlag
        />
      </div>

      {/* Burger menu mobile */}
      <div className={styles.topHeaderBurgerMenu}>
        <Image
          ref={menuBtnRef}
          onClick={() => handleDropdown(!isDropdownOpen)}
          src={
            isDropdownOpen && headerVisible
              ? "/BurgerMenuActive.svg"
              : "/BurgerMenuInactive.svg"
          }
          height={35}
          width={50}
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
              width: "220px",
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
                flagSrc="/EnglishFlag.svg"
              />
            </div>
            <div
              className={styles.customLanguagesDrawers}
              onClick={() => setLanguageToChosenOption(LanguageEnum.Polish)}
            >
              <MenuFlag
                setLanguageToChosenOption={setLanguageToChosenOption}
                option={LanguageEnum.Polish}
                flagSrc="/PolandFlag.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSelection;
