import { useState } from "react";
import "./GalleryCollection.scss";
import { IGalleryFurnitureItem } from "../GalleryScreen/Utils/IGalleryFurnitureItem";
import GalleryFurnitureItem from "../GalleryFurnitureItem/GalleryFurnitureItem";
import { LanguageContext } from "page";
import React from "react";

interface IGalleryCollection {
  closeItem: () => void;
  itemsCollection: IGalleryFurnitureItem[];
}

const GalleryCollection = ({
  closeItem,
  itemsCollection,
}: IGalleryCollection) => {
  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState<number>(12);
  const currentLanguageSheet = React.useContext(LanguageContext);

  const updateNumberOfItems = () => {
    setNumberOfItemsToShow((oldValue) => {
      if (oldValue < itemsCollection.length) {
        return oldValue + 12;
      } else {
        return oldValue;
      }
    });
  };

  const filtrateCurrentItems = (
    itemsCollection: IGalleryFurnitureItem[],
    numberOfItems: number
  ) => {
    const items = itemsCollection.slice(0, numberOfItems);
    return items.map((element, index) => {
      return (
        <GalleryFurnitureItem
          item={element}
          index={index}
          key={`${index} ${element.title}`}
        />
      );
    });
  };

  const currentItems = filtrateCurrentItems(
    itemsCollection,
    numberOfItemsToShow
  );

  return (
    <div className="galleryCollectionWrapper">
      <div className="galleryCollectionTitle">
        {
          currentLanguageSheet.galleryScreen.galleryComponentMisc
            .currentCollection
        }
      </div>
      <div className="galleryCollectionItemsWrapper">{currentItems}</div>
      <footer className="galleryCollectionFooter">
        <div className="galleryCollectionFooterCloseButton" onClick={closeItem}>
          {currentLanguageSheet.galleryScreen.galleryComponentMisc.closeGroup}
        </div>
        {itemsCollection.length > numberOfItemsToShow && (
          <div
            className="galleryCollectionFooterShowMoreButton"
            onClick={updateNumberOfItems}
          >
            {currentLanguageSheet.galleryScreen.galleryComponentMisc.showMore}
          </div>
        )}
      </footer>
    </div>
  );
};

export default GalleryCollection;
