import { IGalleryFurnitureItem } from "../GalleryScreen/Utils/IGalleryFurnitureItem";
import GalleryItemGreenVector from "images/GalleryItemGreenVector.svg";
import "./GalleryFurnitureItem.scss";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image"

interface IGalleryFurnitureInterface {
  item: IGalleryFurnitureItem;
  index: number;
}

const GalleryFurnitureItem = ({ item, index }: IGalleryFurnitureInterface) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPicture, setCurrentPicture] = useState<string>("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (itemPicture: string) => {
    setIsModalOpen(true);
    setCurrentPicture(itemPicture);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          className={"galleryModalContainer"}
          overlayClassName="galleryModalOverlay"
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Furniture Gallery Item Modal"
        >
          {isModalOpen && currentPicture && (
            <div>
              <div className="galleryAdditionalExit" onClick={closeModal}>
                X
              </div>
              <Image
                src={currentPicture}
                loading="lazy"
                className="galleryBigPicture"
                alt="Big screen centrum siły gallery picture"
              />
            </div>
          )}
        </Modal>
      )}
      <div className="galleryFurnitureItem" onClick={() => openModal(item.img)}>
        <Image
          src={item.img}
          alt={item.alt}
          loading="lazy"
          className="galleryFurnitureItemImage"
        />
        <Image
          src={GalleryItemGreenVector}
          alt={`Gallery image green vector ${item.title} ${item.sizing}`}
          className="galleryFurnitureItemVector"
        />
        <div className="galleryFurnitureItemWrapper">
          <div className="galleryFurnitureItemTitle">
            {index + 1}. {item.title}
          </div>
          <div className="galleryFurnitureItemSizing">{item.sizing}</div>
          <div>{item.createdUsing}</div>
        </div>
      </div>
    </>
  );
};

export default GalleryFurnitureItem;
