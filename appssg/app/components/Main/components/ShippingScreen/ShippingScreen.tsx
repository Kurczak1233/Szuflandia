import React from "react";
import styles from "./ShippingScreen.module.scss";
import { LanguageContext } from "page";
import Shipping from "images/Shipping.webp";
import ShippingFirstStep from "images/ShippingFirstStep.svg";
import ShippingSecondStep from "images/ShippingSecondStep.svg";
import ShippingThirdStep from "images/ShippingThirdStep.svg";
import DashedGreenLine from "images/DashedGreenLine.svg";
import Image from "next/image";

const ShippingScreen = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);

  return (
    <div className={styles.wrapper} id="gallery">
      <div className={styles.galleryTitle}>
        {currentLanguageSheet.shippingScreen.shippingTitle}
      </div>
      <div className={styles.itemContent}>
        <Image
          src={Shipping}
          alt="Shipping image"
          width={450}
          className={styles.shippingImage}
        />
        <div>
          <div className={styles.shippingStepItem}>
            <div className={styles.shippingImagesWrapper}>
              <Image
                src={ShippingFirstStep}
                alt="Shipping first step image"
                height={50}
                className={styles.shippingImageSmall}
              />
              <Image
                src={DashedGreenLine}
                alt="Dashed line 1"
                className={styles.shippingImageDashedLine}
              />
            </div>
            <div className={styles.shippingTextPart}>
              <div className={styles.shippingStepItemText}>
                {currentLanguageSheet.shippingScreen.contact}
              </div>
              <div className={styles.shippingStepItemDescription}>
                {currentLanguageSheet.shippingScreen.contactDesc}        
              </div>
            </div>
          </div>
          <div className={styles.shippingStepItem}>
            <div className={styles.shippingImagesWrapper}>
              <Image
                src={ShippingSecondStep}
                alt="Shipping second step image"
                height={50}
                className={styles.shippingImageSmall}
              />
              <Image
                src={DashedGreenLine}
                alt="Dashed line 2"
                className={styles.shippingImageDashedLine}
              />
            </div>
            <div className={styles.shippingTextPart}>
              <div className={styles.shippingStepItemText}>
                {currentLanguageSheet.shippingScreen.details}
              </div>
              <div className={styles.shippingStepItemDescription}>
                {currentLanguageSheet.shippingScreen.detailsDesc}
              </div>
            </div>
          </div>
          <div className={styles.shippingStepItem}>
            <Image
              src={ShippingThirdStep}
              alt="Shipping third step image"
              height={50}
              className={styles.shippingImageSmall}
            />
            <div className={styles.shippingTextPart}>
              <div className={styles.shippingStepItemText}>
                {currentLanguageSheet.shippingScreen.agreement}
              </div>
              <div className={styles.shippingStepItemDescription}>
                {currentLanguageSheet.shippingScreen.agreementDesc}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
