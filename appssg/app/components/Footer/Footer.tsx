import React from "react";
import styles from "./Footer.module.scss";
import { LanguageContext } from "page";
import BottomWhiteVector from "components/Main/components/BottomWhiteVector/BottomWhiteVector";
import Image from "next/image";

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
          <Image
            src="/FooterVectorLogo.svg"
            alt="Footer szuflandia logo"
            height={105}
            width={266}
            className={styles.szuflandaVector}
          ></Image>
        </div>
        <div className={styles.footerSecondPart}>
          <div className={styles.footerSecondPartAndOrganizer}>
            <div>
              <div className={styles.temporaryText}>
                {currentLanguageSheet.footer.temporary}
              </div>
              <div className={styles.contactDetailsWrapper}>
                <span className={styles.contact}>
                  {currentLanguageSheet.footer.detailsContact}
                </span>
                <span className={styles.details}>
                  {currentLanguageSheet.footer.detailsDetails}
                </span>
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
            <Image
              src="/OrganizersIcon.svg"
              alt="Organizer"
              className={styles.organizersVector}
              height={177}
              width={170}
            />
          </div>
          <hr className={styles.breakingLine}></hr>
          <div className={styles.authorSubtitle}>
            <span className={styles.madeByAuthor}>
              {currentLanguageSheet.footer.madeBy}&nbsp;
            </span>
            <span className={styles.madeByAuthorName}>
              <a className={styles.catchyFlow} href="https://catchyflow.com/">
                CatchyFlow
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
