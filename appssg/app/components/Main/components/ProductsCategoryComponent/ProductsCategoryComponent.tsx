import styles from "./ProductsCategoryComponent.module.scss";
import Image, { StaticImageData } from "next/image";

interface IProductsCategoryComponent {
  categoryLogo: StaticImageData;
  categoryTitle: string;
  categoryDescription: string;
  categoriesButtons: string[];
  mainImage: StaticImageData;
  mainMobileImage: StaticImageData;
  backgroundVector: string;
  marginLeft?: string;
  marginRight?: string;
  reversePositioning?: boolean;
}

const ProductsCategoryComponent = ({
  categoryLogo,
  categoryTitle,
  categoryDescription,
  categoriesButtons,
  mainImage,
  mainMobileImage,
  backgroundVector,
  marginLeft,
  marginRight,
  reversePositioning,
}: IProductsCategoryComponent) => {
  const itemsButtons = () => {
    return categoriesButtons.map((item) => (
      <div key={item} className={styles.button}>
        {item}
      </div>
    ));
  };

  return (
    <>
      <div className={styles.itemWrapper}>
        {reversePositioning && (
          <Image
            src={backgroundVector}
            className={styles.backgroundVector}
            style={{
              marginLeft: marginLeft,
              marginRight: marginRight,
              height: "100%",
            }}
            alt={`Background vector ${categoryTitle}`}
          ></Image>
        )}
        <div className={styles.bordersWrapper}>
          <div className={styles.topHeightEmptySpace}></div>
          <div
            className={styles.wrapper}
            style={{
              flexDirection: reversePositioning ? "row-reverse" : "row",
            }}
          >
            <div className={styles.detailsPart}>
              <Image src={categoryLogo} className={styles.productCategoryLogo} alt={`Szuflandia ${categoryLogo} logo`} />
              <h2 className={styles.cardTitle}>{categoryTitle}</h2>
              <div className={styles.cardDescription}>
                {categoryDescription}
              </div>
              <Image
                src={mainMobileImage}
                alt={`Szuflandia ${categoryLogo} image`}
                className={styles.mobileCardMainImage}
              />
              <div className={styles.buttonsWrapper}>{itemsButtons()}</div>
            </div>
            <Image
              src={mainImage}
              alt={`Szuflandia ${categoryLogo} image`}
              className={styles.cardMainImage}
            />
          </div>
          <div className={styles.borderBottom}>
            <div className={styles.borderElement}></div>
          </div>
        </div>
        {!reversePositioning && (
          <Image
            src={backgroundVector}
            className={styles.backgroundVector}
            style={{
              marginLeft: marginLeft,
              marginRight: marginRight,
              height: "100%",
            }}
            alt={`Background vector ${categoryTitle}`}
          ></Image>
        )}
      </div>
    </>
  );
};

export default ProductsCategoryComponent;
