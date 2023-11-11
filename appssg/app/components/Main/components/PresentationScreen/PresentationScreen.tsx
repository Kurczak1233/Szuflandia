import { LanguageContext } from "page";
import React from "react";
import styles from "./PresentationScreen.module.scss";
import FirstPresentationImage from "images/FirstPresentationImage.webp";
import SecondPresentationImage from "images/SecondPresentationImage.webp";
import ThirdPresentationImage from "images/ThirdPresentationImage.webp";
import LeftBranch from "images/LeftBranch.svg";
import RightBranch from "images/RightBranch.svg";
import Image from "next/image";

const PresentationScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);
  return (
    <main className={styles.main}>
      <div className={styles.leftBranchWrapper}>
        <Image src={RightBranch} alt={"Right branch"} />
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
            <Image
              className={styles.firstImage}
              src={FirstPresentationImage}
              width={400}
              alt="First unique szuflandia furniture presentation"
            ></Image>
            <Image
              className={styles.secondImage}
              src={SecondPresentationImage}
              width={400}
              alt="Second unique szuflandia furniture presentation"
            ></Image>
            <Image
              className={styles.thirdImage}
              src={ThirdPresentationImage}
              width={400}
              alt="Third unique szuflandia furniture presentation"
            ></Image>
          </div>
          <div className={styles.descriptionSecondPart}>
            {currentLanguageSheet.presentationScreen.descriptionSecondPart}
          </div>
        </div>
      </section>
      <div className={styles.rightBranchWrapper}>
        <Image src={LeftBranch} alt={"Left branch"} />
      </div>
    </main>
  );
};

export default PresentationScreen;