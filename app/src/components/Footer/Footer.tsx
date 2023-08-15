import React from "react";
import styles from "./Footer.module.scss";
import { LanguageContext } from "App";
import BottomWhiteVector from "components/Main/components/BottomWhiteVector/BottomWhiteVector";

const Footer = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);

  return (
    <footer id="footer" style={{ background: "white" }}>
      <BottomWhiteVector />
      <div className={styles.footerWrapper}>
        <div className={styles.contactUs}>
          {currentLanguageSheet.footer.contactUs}
        </div>
        <div className={styles.description}>
          {currentLanguageSheet.footer.contactUsDescription}
        </div>
        <a href="mailto:kurczak12333@gmail.com" className={styles.contacts}>
          {currentLanguageSheet.footer.email}: kurczak12333@gmail.com
        </a>
        <div className={styles.contacts}>
          {currentLanguageSheet.footer.phonePolish}: +48 505 695 555
        </div>
        <div className={styles.contacts}>
          {currentLanguageSheet.footer.phoneEnglish}: +48 576 590 697
        </div>
      </div>
    </footer>
  );
};

export default Footer;
