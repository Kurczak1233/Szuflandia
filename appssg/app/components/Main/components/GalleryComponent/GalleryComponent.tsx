import { useState } from "react";
import "./GalleryComponent.scss";
import GalleryCollection from "../GalleryCollection/GalleryCollection";
import { IGalleryFurnitureItem } from "../GalleryScreen/Utils/IGalleryFurnitureItem";
import { LanguageContext } from "page";
import React from "react";
import Image, { StaticImageData } from "next/image"

interface IGalleryComponent {
  title: string;
  icon: string;
  description: string[];
  hoverImage: StaticImageData;
  itemsCollection: IGalleryFurnitureItem[];
  noBorderBottom?: boolean;
  topCorner?: boolean;
  bottomCorner?: boolean;
}

const GalleryComponent = ({
  title,
  icon,
  description,
  hoverImage,
  itemsCollection,
  noBorderBottom,
  topCorner,
  bottomCorner,
}: IGalleryComponent) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentLanguageSheet = React.useContext(LanguageContext);

  const handleMouseEnter = () => {
    setIsMouseOver(() => true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(() => false);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const changeGalleryState = () => {
    setIsOpen((state) => !state);
  };

  return (
    <>
      <div
        className="galleryComponentContainer"
        style={{
          borderTopLeftRadius: topCorner ? "25px" : 0,
          borderTopRightRadius: topCorner ? "25px" : 0,
          borderBottomRightRadius: bottomCorner ? "25px" : 0,
          borderBottomLeftRadius: bottomCorner ? "25px" : 0,
        }}
        onClick={changeGalleryState}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="galleryComponentLeftSide">
          <Image

            className="galleryComponentBackgroundImage"
            src={hoverImage}
            style={{
              borderTopLeftRadius: topCorner ? "25px" : 0,
              borderBottomLeftRadius: bottomCorner ? "25px" : 0,
            }}
            alt={`Szuflandia gallery item image: ${title}`}
            height={140}
          ></Image>
          <div className="galleryComponentMobileButtonWrapper">
            <div className="galleryComponentTitle">{title}</div>
            <div className="galleryComponentMobileButton">
              {isOpen
                ? currentLanguageSheet.galleryScreen.galleryComponentMisc.close
                : currentLanguageSheet.galleryScreen.galleryComponentMisc.open}
            </div>
          </div>
          <Image
            src={icon}
            alt={`Szuflandia gallery item: ${title}`}
            width={125}
            className="galleryComponentIcon"
          ></Image>
          <div className="galleryDescriptionItemsWrapper">
            {description.map((item) => (
              <div key={item} className="galleryDescriptionItem">
                <span className="galleryDescriptionGreenPlus">+</span> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="galleryComponentButtonWrapper">
          <div className="galleryComponentSmallButton">
            {isMouseOver
              ? `>>>`
              : currentLanguageSheet.galleryScreen.galleryComponentMisc.seeMore}
          </div>
        </div>
      </div>
      {!noBorderBottom && <hr className="galleryComponentBreakingLine" />}
      {isOpen && (
        <GalleryCollection
          closeItem={closeGallery}
          itemsCollection={itemsCollection}
        />
      )}
    </>
  );
};

export default GalleryComponent;
