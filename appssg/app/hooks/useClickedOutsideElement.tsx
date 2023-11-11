/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";

const useClickedOutsideElement = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);

  const handleDropdown = (rule: boolean) => {
    setIsDropdownOpen(rule);
  };

  const handleClickOutside = (e: { target: any }) => {
    if (
      menuRef.current &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      !menuRef.current.contains(e.target) &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      !menuBtnRef.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  return { isDropdownOpen, handleDropdown, menuRef, menuBtnRef };
};

export default useClickedOutsideElement;
