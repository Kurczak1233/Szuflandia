import { useState } from "react";
import "./GalleryComponent.scss";

interface IGalleryComponent {
  title: string;
  icon: string;
  description: string[];
  hoverImage: string;
  noBorderBottom?: boolean;
  topCorner?: boolean;
  bottomCorner?: boolean;
}

const GalleryComponent = ({
  title,
  icon,
  description,
  hoverImage,
  noBorderBottom,
  topCorner,
  bottomCorner,
}: IGalleryComponent) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsMouseOver(() => true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(() => false);
  };

  return (
    <>
      <div
        className="galleryComponentContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="galleryComponentLeftSide">
          <img
            className="galleryComponentBackgroundImage"
            src={hoverImage}
            style={{
              borderTopLeftRadius: topCorner ? "25px" : 0,
              borderBottomLeftRadius: bottomCorner ? "25px" : 0,
            }}
            alt={`Szuflandia gallery item image: ${title}`}
            height={140}
          ></img>
          <div className="galleryComponentTitle">{title}</div>
          <img
            src={icon}
            alt={`Szuflandia gallery item: ${title}`}
            width={125}
            className="galleryComponentIcon"
          ></img>
          <div>
            {description.map((item) => (
              <div key={item} className="galleryDescriptionItem">
                <span className="galleryDescriptionGreenPlus">+</span> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="galleryComponentButtonWrapper">
          <div className="galleryComponentSmallButton">
            {isMouseOver ? `>>>` : "SEE MORE"}
          </div>
        </div>
      </div>
      {!noBorderBottom && <hr className="galleryComponentBreakingLine" />}
    </>
  );
};

export default GalleryComponent;
