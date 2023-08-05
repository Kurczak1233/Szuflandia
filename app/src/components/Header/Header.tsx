import "./Header.scss";
import Logo from "../../images/Logo.svg";
import MenuSelection from "./components/MenuSelection/MenuSelection";
import { LanguageEnum } from "../../App";
import { useEffect, useRef, useState } from "react";
interface IHeader {
  setLanguageToChosenOption: (option: LanguageEnum) => void;
}

const Header = ({ setLanguageToChosenOption }: IHeader) => {
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  const [lastScrolledTo, setLastScrolledTo] = useState<number>(0);
  const navigationRef = useRef<HTMLDivElement>(null);

  const logScroll = () => {
    if (window.scrollY > lastScrolledTo) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScrolledTo(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", logScroll);
    return () => {
      window.removeEventListener("scroll", logScroll);
    };
  });

  return (
    <div
      className={`${
        headerVisible ? "showTopHeader" : "hideTopHeader"
      } topHeaderItem`}
      ref={navigationRef}
    >
      <img src={Logo} alt="Szuflandia logo"></img>
      <MenuSelection setLanguageToChosenOption={setLanguageToChosenOption} headerVisible={headerVisible} />
    </div>
  );
};

export default Header;
