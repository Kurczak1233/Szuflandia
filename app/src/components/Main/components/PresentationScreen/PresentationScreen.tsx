import { LanguageContext } from "App";
import React from "react";
import styles from "./PresentationScreen.module.scss";
import FirstPresentationImage from "images/FirstPresentationImage.png";
import SecondPresentationImage from "images/SecondPresentationImage.png";
import ThirdPresentationImage from "images/ThirdPresentationImage.png";

const PresentationScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <main className={styles.presentetionScreen}>
      <div className={styles.uniqueFurnitureComponent}>
        <div className={styles.uniqueFurniture}>
          <span className={styles.greenText}>
            {currentLanguageSheet.presentationScreen.uniqueFurniture}
          </span>
          &nbsp;
          <span>
            {currentLanguageSheet.presentationScreen.uniqueFurnitureSecondPart}
          </span>
        </div>
        <div className={styles.description}>
          {currentLanguageSheet.presentationScreen.description}
        </div>
        <div className={styles.imagesWrapper}>
          <img
            className={styles.firstImage}
            src={FirstPresentationImage}
            width={400}
            height={265}
            alt="First unique szuflandia furniture presentation"
          ></img>
          <img
            className={styles.secondImage}
            src={SecondPresentationImage}
            width={400}
            height={265}
            alt="Second unique szuflandia furniture presentation"
          ></img>
          <img
            className={styles.thirdImage}
            src={ThirdPresentationImage}
            width={400}
            height={265}
            alt="Third unique szuflandia furniture presentation"
          ></img>
        </div>
      </div>
    </main>
  );
};

export default PresentationScreen;
