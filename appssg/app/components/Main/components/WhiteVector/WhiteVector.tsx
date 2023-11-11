import VectorMiddlePart from "images/VectorMiddlePart.svg";
import styles from "./WhiteVector.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

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
        style={{ width: `calc(${100 - bigComponentWidth - 10}% - 184px)` }}
      ></div>
      <Image src={VectorMiddlePart} alt="Movable hidding vector" width={184} height={104}></Image>
      <div
        className={styles.whiteVectorSmallPart}
        style={{ width: `calc(${bigComponentWidth + 10}%)` }}
      ></div>
    </div>
  );
};

export default WhiteVector;
