import { IGalleryFurnitureItem } from "../GalleryScreen/Utils/IGalleryFurnitureItem";
import GalleryItemGreenVector from "images/GalleryItemGreenVector.svg";
import "./GalleryFurnitureItem.scss";

interface IGalleryFurnitureInterface {
  item: IGalleryFurnitureItem;
}

const GalleryFurnitureItem = ({ item }: IGalleryFurnitureInterface) => {
  return (
    <div className="galleryFurnitureItem">
      <img src={item.img} alt={item.alt} loading="lazy" className="galleryFurnitureItemImage"/>
      <img
        src={GalleryItemGreenVector}
        alt={`Gallery image green vector ${item.title} ${item.sizing}`}
        width={"100%"}
        className="galleryFurnitureItemVector"
      />
      <div className="galleryFurnitureItemWrapper">
        <div className="galleryFurnitureItemTitle">{item.title}</div>
        <div>{item.sizing}</div>
        <div>{item.createdUsing}</div>
      </div>
    </div>
  );
};

export default GalleryFurnitureItem;
