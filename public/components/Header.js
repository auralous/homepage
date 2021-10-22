import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div class={styles.header}>
      <a href="/">
        <img src={logo} alt="Auralous" width={148} />
      </a>
    </div>
  );
};

export default Header;
