import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div class={styles.header}>
      <a href="/" alt="Homepage">
        <img src={logo} width={148} />
      </a>
    </div>
  );
};

export default Header;
