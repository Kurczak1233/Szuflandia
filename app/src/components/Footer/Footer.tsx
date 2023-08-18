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
                <span className={styles.contact}>{currentLanguageSheet.footer.detailsContact}</span>
                <span className={styles.details}>{currentLanguageSheet.footer.detailsDetails}</span>
              </div>
              <div>
                <div className={styles.contactDetailItem}>
                  <div className={styles.footerGreenSideBar} />
                  <span className={styles.contactDetailItemText}>
                  {currentLanguageSheet.footer.currentPhoneForeign}
                  </span>
                </div>
                <div className={styles.contactDetailItem}>
                  <div className={styles.footerGreenSideBar} />
                  <span className={styles.contactDetailItemText}>
                  {currentLanguageSheet.footer.currentPhoneMotherland}
                  </span>
                </div>
                <div className={styles.contactDetailItem}>
                  <div className={styles.footerGreenSideBar} />
                  <span className={styles.contactDetailItemText}>
                    
                    {currentLanguageSheet.footer.email}
                  </span>
                </div>
              </div>
            </div>
            <img src={OrganizerVector} alt="Organizer" className={styles.organizersVector}/>
          </div>
          <hr className={styles.breakingLine}></hr>
          <div className={styles.authorSubtitle}>
            <span className={styles.madeByAuthor}>{currentLanguageSheet.footer.madeBy}&nbsp;</span>
            <span className={styles.madeByAuthorName}>
            {currentLanguageSheet.footer.author}(
              <a className={styles.link} href="https://michalkupczak.com/">
              {currentLanguageSheet.footer.authorSite}
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
