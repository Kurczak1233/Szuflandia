import VectorMiddlePart from "images/VectorMiddlePart.svg";
import styles from "./WhiteVector.module.scss";
import { useEffect, useState } from "react";

const WhiteVector = () => {
  const [bigComponentWidth, setBigComponentWidth] = useState(0);

  const logit = () => {
    if (window.scrollY < 800) {
      setBigComponentWidth(Math.ceil(window.scrollY / 10));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", logit);
    // Remove listener
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <div className={styles.vectorWrapper}>
      <div
        className={styles.whiteVectorBigPart}
        style={{ width: `${100 - bigComponentWidth - 10}%` }}
      ></div>
      <img src={VectorMiddlePart} alt="Movable hidding vector"></img>
      <div
        className={styles.whiteVectorSmallPart}
        style={{ width: `${bigComponentWidth + 10}%` }}
      ></div>
    </div>
  );
};

export default WhiteVector;
