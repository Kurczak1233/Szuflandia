import styles from "./Header.module.scss";
import Logo from "../../images/Logo.svg";
import MenuSelection from "./components/MenuSelection/MenuSelection";
import { LanguageEnum } from "../../App";

interface IHeader {
  setLanguageToChosenOption: (option: LanguageEnum) => void;
}

const Header = ({ setLanguageToChosenOption }: IHeader) => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Szuflandia logo"></img>
      <MenuSelection setLanguageToChosenOption={setLanguageToChosenOption} />
    </div>
  );
};

export default Header;
