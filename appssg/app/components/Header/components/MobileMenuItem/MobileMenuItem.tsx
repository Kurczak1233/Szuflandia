import "./MobileMenuItem.scss";

interface IMobileMenuItem {
  name: string;
  onClick: () => void;
  width?: string;
  marginLeft?: string;
  isItemActive: boolean;
  top?: string;
  transitionDelay?: string;
  transition?: string;
  left?: string;
}

const MobileMenuItem = ({
  name,
  onClick,
  width,
  marginLeft,
  isItemActive,
  top,
  transitionDelay,
  left,
}: IMobileMenuItem) => {
  return (
    <div
      style={{
        width: width ? width : "auto",
        marginLeft: marginLeft ? marginLeft : 0,
        top: top,
        transitionDelay: transitionDelay ? transitionDelay : "0s",
        left: left ? left : "auto",
      }}
      className={
        isItemActive ? "headerMobileMenuItemAcitve" : "headerMobileMenuItem"
      }
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default MobileMenuItem;
