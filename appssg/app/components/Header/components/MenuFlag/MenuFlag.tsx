import { LanguageEnum } from "page";
import styles from "./MenuFlag.module.scss";
import Image from "next/image"

interface IMenuFlag {
  setLanguageToChosenOption: (option: LanguageEnum) => void;
  option: LanguageEnum;
  flagSrc: string;
  isLastFlag?: boolean;
}

const MenuFlag = ({
  setLanguageToChosenOption,
  option,
  flagSrc,
  isLastFlag,
}: IMenuFlag) => {
  return (
    <Image
      style={{ marginRight: isLastFlag ? "0px" : "8px" }}
      className={styles.flag}
      src={flagSrc}
      width={32} height={25}
      onClick={() => setLanguageToChosenOption(option)}
      alt={option.toString()}
    ></Image>
  );
};

export default MenuFlag;
