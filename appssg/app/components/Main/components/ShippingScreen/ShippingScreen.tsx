import React from "react";
import styles from "./ShippingScreen.module.scss";
import { LanguageContext } from "page";
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
          src="/Shipping.webp"
          alt="Shipping image"
          width={450}
          height={300}
          className={styles.shippingImage}
        />
        <div>
          <div className={styles.shippingStepItem}>
            <div className={styles.shippingImagesWrapper}>
              <Image
                src="/ShippingFirstStep.svg"
                alt="Shipping first step image"
                height={50}
                width={50}
                className={styles.shippingImageSmall}
              />
              <Image
                src="/DashedGreenLine.svg"
                alt="Dashed line 1"
                height={50}
                width={50}
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
                src="/ShippingSecondStep.svg"
                alt="Shipping second step image"
                height={50}
                width={50}
                className={styles.shippingImageSmall}
              />
              <Image
                src="/DashedGreenLine.svg"
                alt="Dashed line 2"
                height={50}
                width={50}
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
              src="/ShippingThirdStep.svg"
              alt="Shipping third step image"
              height={50}
              width={50}
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
