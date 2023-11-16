import { IGalleryFurnitureItem } from "../GalleryScreen/Utils/IGalleryFurnitureItem";
import "./GalleryFurnitureItem.scss";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

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

  //@ts-ignore;
  const imageIsVertical = item.img.default.height === 678;
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
                alt="Gallery furniture picture"
                width={1920}
                height={1280}
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
          width={imageIsVertical ? 370 : 170}
          height={244}
          className="galleryFurnitureItemImage"
        />
        <Image
          src="/GalleryItemGreenVector.svg"
          alt={`Gallery image green vector ${item.title} ${item.sizing}`}
          width={370}
          height={48}
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
