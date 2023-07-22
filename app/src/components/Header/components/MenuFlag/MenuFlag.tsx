import { LanguageEnum } from "../../../../App";
import styles from "./MenuFlag.module.scss";

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
    <img
      style={{ marginRight: isLastFlag ? "0px" : "8px" }}
      className={styles.flag}
      src={flagSrc}
      onClick={() => setLanguageToChosenOption(option)}
      alt={option.toString()}
    ></img>
  );
};

export default MenuFlag;
