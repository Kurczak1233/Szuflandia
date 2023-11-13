/* eslint-disable @next/next/no-img-element */
import { LanguageContext } from "page";
import React from "react";
import styles from "./PresentationScreen.module.scss";

const PresentationScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <main className={styles.main}>
      <div className={styles.leftBranchWrapper}>
        <img
          src="/RightBranch.svg"
          alt={"Right branch"}
        />
      </div>
      <section className={styles.presentetionScreen}>
        <div className={styles.uniqueFurnitureComponent}>
          <div className={styles.uniqueFurniture}>
            <span className={styles.greenText}>
              {currentLanguageSheet.presentationScreen.uniqueFurniture}
            </span>
            <span className={styles.presentationScreenTitleSpace}>&nbsp;</span>
            <span>
              {
                currentLanguageSheet.presentationScreen
                  .uniqueFurnitureSecondPart
              }
            </span>
          </div>
          <div className={styles.description}>
            {currentLanguageSheet.presentationScreen.description}
          </div>
          <div className={styles.imagesWrapper}>
            <img
              className={styles.firstImage}
              src="/FirstPresentationImage.webp"
              alt="First unique szuflandia furniture presentation"
            />
            <img
              className={styles.secondImage}
              src="/SecondPresentationImage.webp"
              alt="Second unique szuflandia furniture presentation"
            ></img>
            <img
              className={styles.thirdImage}
              src="/ThirdPresentationImage.webp"
              alt="Third unique szuflandia furniture presentation"
            ></img>
          </div>
          <div className={styles.descriptionSecondPart}>
            {currentLanguageSheet.presentationScreen.descriptionSecondPart}
          </div>
        </div>
      </section>
      <div className={styles.rightBranchWrapper}>
        <img
          src="/LeftBranch.svg"
          alt={"Left branch"}
        />
      </div>
    </main>
  );
};

export default PresentationScreen;
