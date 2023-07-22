import mainBackground from "images/MainBackground.png";
import styles from "./InitialScreen.module.scss";
import SzuflandiaColorLogo from "images/SzuflandiaColorLogo.svg";
import { LanguageContext } from "App";
import React from "react";
import GreenSeparatorBar from "../GreenSeparatorBar/GreenSeparatorBar";
import WhiteVector from "../WhiteVector/WhiteVector";

const InitialScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <>
      <div className={styles.mainLayer}>
        <div className={styles.mainScreenContainer}>
          <div className={styles.topText}>
            {currentLanguageSheet.mainScreen.topText}
          </div>
          <div className={styles.mainTitle}>
            {currentLanguageSheet.mainScreen.szuflandiaTitle}
          </div>
          <div className={styles.description}>
            {currentLanguageSheet.mainScreen.siteDescription}
          </div>
          <div className={styles.attriubtes}>
            <div>{currentLanguageSheet.mainScreen.attributes.madeByHand}</div>
            <GreenSeparatorBar />
            <div>
              {currentLanguageSheet.mainScreen.attributes.howManyProducts}
            </div>
            <GreenSeparatorBar />
            <div>
              {currentLanguageSheet.mainScreen.attributes.uniqueFurniture}
            </div>
            <GreenSeparatorBar />
            <div>{currentLanguageSheet.mainScreen.attributes.oneCraftsman}</div>
          </div>
          <img
            src={SzuflandiaColorLogo}
            alt="Szuflandia logo item"
            width={151}
            height={164}
          ></img>
          {/* <div>Button?</div> */}
        </div>
      </div>
      <img
        className={styles.image}
        src={mainBackground}
        alt="Szuflandia main background"
        height={1080}
        width={1920}
      ></img>
      <WhiteVector />
    </>
  );
};

export default InitialScreen;
