import React from "react";
import styles from "./Footer.module.scss";
import { LanguageContext } from "App";
import BottomWhiteVector from "components/Main/components/BottomWhiteVector/BottomWhiteVector";
import FooterVectorLogo from "images/FooterVectorLogo.svg";
import OrganizerVector from "images/OrganizersIcon.svg";

const Footer = () => {
  const currentLanguageSheet = React.useContext(LanguageContext);

  return (
    <footer id="footer" style={{ background: "white" }}>
      <BottomWhiteVector />
      <div className={styles.footerWrapper}>
        <div className={styles.footerFirstPart}>
          <div className={styles.footerFirstPartText}>
            <span className={styles.contacts}>
              {currentLanguageSheet.footer.contact}
            </span>
            <span className={styles.contactsBlack}>
              {currentLanguageSheet.footer.contactUs}
            </span>
          </div>
          <img src={FooterVectorLogo} alt="Footer szuflandia logo" className={styles.szuflandaVector}></img>
        </div>
        <div className={styles.footerSecondPart}>
          <div className={styles.footerSecondPartAndOrganizer}>
            <div>
              <div className={styles.contactDetailsWrapper}>
                <span className={styles.contact}>Contact </span>
                <span className={styles.details}>details:</span>
              </div>
              <div>
                <div className={styles.contactDetailItem}>
                  <div className={styles.footerGreenSideBar} />
                  <span className={styles.contactDetailItemText}>
                    Phone (Foreign clients): +48 576 590 697
                  </span>
                </div>
                <div className={styles.contactDetailItem}>
                  <div className={styles.footerGreenSideBar} />
                  <span className={styles.contactDetailItemText}>
                    Phone (Polish clients): +48 505 695 555
                  </span>
                </div>
                <div className={styles.contactDetailItem}>
                  <div className={styles.footerGreenSideBar} />
                  <span className={styles.contactDetailItemText}>
                    Email: Kurczak12333@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <img src={OrganizerVector} alt="Organizer" className={styles.organizersVector}/>
          </div>
          <hr className={styles.breakingLine}></hr>
          <div className={styles.authorSubtitle}>
            <span className={styles.madeByAuthor}>Made by:&nbsp;</span>
            <span className={styles.madeByAuthorName}>
              Michał Kupczak (
              <a className={styles.link} href="https://michalkupczak.com/">
                michalkupczak.com
              </a>
              )
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
