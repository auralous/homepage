import constants from "../constants.js";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class={styles.links}>
        <a href={constants.facebook.href}>Facebook</a>
        <a href={constants.twitter.href}>Twitter</a>
        <a href={constants.github.href}>GitHub</a>
        <a href="/privacy">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
