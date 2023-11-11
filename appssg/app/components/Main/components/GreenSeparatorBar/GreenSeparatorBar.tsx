import styles from "./GreenSeparatorBar.module.scss";

interface IGreenSeparatorBar {
  isHidden?: boolean;
}

const GreenSeparatorBar = ({ isHidden }: IGreenSeparatorBar) => {
  return (
    <div
      id="greenSeparatorBar"
      style={{ display: isHidden ? "none" : "initial" }}
      className={styles.greenSeparatorBar}
    ></div>
  );
};
export default GreenSeparatorBar;
