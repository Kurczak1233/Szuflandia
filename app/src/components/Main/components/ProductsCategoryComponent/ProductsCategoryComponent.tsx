import styles from "./ProductsCategoryComponent.module.scss";

interface IProductsCategoryComponent {
  categoryLogo: string;
  categoryTitle: string;
  categoryDescription: string;
  categoriesButtons: string[];
  mainImage: string;
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
          <img
            src={backgroundVector}
            style={{
              marginLeft: marginLeft,
              marginRight: marginRight,
              height: "100%",
            }}
            alt={`Background vector ${categoryTitle}`}
          ></img>
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
              <img src={categoryLogo} alt={`Szuflandia ${categoryLogo} logo`} />
              <h2 className={styles.cardTitle}>{categoryTitle}</h2>
              <div className={styles.cardDescription}>
                {categoryDescription}
              </div>
              <div className={styles.buttonsWrapper}>{itemsButtons()}</div>
            </div>
            <img src={mainImage} alt={`Szuflandia ${categoryLogo} image`} />
          </div>
          <div className={styles.borderBottom}>
            <div className={styles.borderElement}></div>
          </div>
        </div>
        {!reversePositioning && (
          <img
            src={backgroundVector}
            style={{
              marginLeft: marginLeft,
              marginRight: marginRight,
              height: "100%",
            }}
            alt={`Background vector ${categoryTitle}`}
          ></img>
        )}
      </div>
    </>
  );
};

export default ProductsCategoryComponent;
