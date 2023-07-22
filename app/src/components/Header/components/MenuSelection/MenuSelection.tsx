import { LanguageContext, LanguageEnum } from "../../../../App";
import MenuFlag from "../MenuFlag/MenuFlag";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuSelection.module.scss";
import PolishFlag from "../../../../images/PolandFlag.svg";
import EnglishFlag from "../../../../images/EnglishFlag.svg";
import React from "react";
interface IMenuSelection {
  setLanguageToChosenOption: (option: LanguageEnum) => void;
}

const MenuSelection = ({ setLanguageToChosenOption }: IMenuSelection) => {
  const testFunc = () => {
    console.log("Test");
  };

  const currentLanguageSheet = React.useContext(LanguageContext);

  return (
    <div className={styles.headerMenu}>
      <div className={styles.topHeaderMenu}>
        <MenuItem
          name={currentLanguageSheet.header.mainText1}
          onClick={testFunc}
        />
        <MenuItem
          name={currentLanguageSheet.header.mainText2}
          onClick={testFunc}
        />
        <MenuItem
          name={currentLanguageSheet.header.mainText3}
          onClick={testFunc}
          isLastItem
        />
      </div>
      <div>
        <MenuFlag
          setLanguageToChosenOption={setLanguageToChosenOption}
          option={LanguageEnum.Polish}
          flagSrc={PolishFlag}
        />
        <MenuFlag
          setLanguageToChosenOption={setLanguageToChosenOption}
          option={LanguageEnum.English}
          flagSrc={EnglishFlag}
          isLastFlag
        />
      </div>
    </div>
  );
};

export default MenuSelection;
