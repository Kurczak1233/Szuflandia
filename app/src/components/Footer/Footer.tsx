import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.contactUs}>Contact us</div>
      <div className={styles.description}>
        Get in touch and let us help you decorate your place with our uniques!
      </div>
      <a href="mailto:kurczak12333@gmail.com"className={styles.contacts}>Email: kurczak12333@gmail.com</a>
      <div className={styles.contacts}>Polish: +48 505 695 555</div>
      <div className={styles.contacts}>English: +48 576 590 697</div>
    </footer>
  );
};

export default Footer;
