import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.foot}>
      <p>Powered by</p>
      <img className="logo" src="/img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;