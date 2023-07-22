import styles from "./MenuItem.module.scss";

interface IMenuProps {
  name: string;
  onClick: () => void;
  isLastItem?: boolean;
}

const MenuItem = ({ name, onClick, isLastItem }: IMenuProps) => {
  return (
    <div
      className={styles.menuItem}
      onClick={onClick}
      style={{ marginRight: isLastItem ? "0px" : "50px" }}
    >
      {name}
    </div>
  );
};

export default MenuItem;
