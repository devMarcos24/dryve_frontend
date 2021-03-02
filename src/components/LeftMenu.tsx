import styles from "../styles/components/LeftMenu.module.css";
import { MdHome, MdPerson } from "react-icons/md";
import { FaCarAlt, FaNetworkWired } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { useState } from "react";

export function LeftMenu() {
  const [homeStyle, setHomeStyle] = useState(styles.iconColor);
  const [userStyle, setUserStyle] = useState(styles.iconWithoutColor);
  const [carStyle, setCarStyle] = useState(styles.iconWithoutColor);
  const [networkStyle, setNetworkStyle] = useState(styles.iconWithoutColor);
  const [walletStyle, setWalletStyle] = useState(styles.iconWithoutColor);

  function clickHome() {
    setHomeStyle(styles.iconColor);
    setUserStyle(styles.iconWithoutColor);
    setCarStyle(styles.iconWithoutColor);
    setNetworkStyle(styles.iconWithoutColor);
    setWalletStyle(styles.iconWithoutColor);
  }

  function clickUser() {
    setHomeStyle(styles.iconWithoutColor);
    setUserStyle(styles.iconColor);
    setCarStyle(styles.iconWithoutColor);
    setNetworkStyle(styles.iconWithoutColor);
    setWalletStyle(styles.iconWithoutColor);
  }

  function clickCar() {
    setHomeStyle(styles.iconWithoutColor);
    setUserStyle(styles.iconWithoutColor);
    setCarStyle(styles.iconColor);
    setNetworkStyle(styles.iconWithoutColor);
    setWalletStyle(styles.iconWithoutColor);
  }

  function clickNetwork() {
    setHomeStyle(styles.iconWithoutColor);
    setUserStyle(styles.iconWithoutColor);
    setCarStyle(styles.iconWithoutColor);
    setNetworkStyle(styles.iconColor);
    setWalletStyle(styles.iconWithoutColor);
  }

  function clickWallet() {
    setHomeStyle(styles.iconWithoutColor);
    setUserStyle(styles.iconWithoutColor);
    setCarStyle(styles.iconWithoutColor);
    setNetworkStyle(styles.iconWithoutColor);
    setWalletStyle(styles.iconColor);
  }

  return (
    <div className={styles.leftMenuContainer}>
      <div className={styles.profileContainer}>
        <img src="https://github.com/devMarcos24.png" alt="User Image" />
      </div>
      <nav className={styles.menu}>
        <div onClick={clickHome}>
          <MdHome className={homeStyle} />
        </div>
        <div onClick={clickUser}>
          <MdPerson className={userStyle} />
        </div>
        <div onClick={clickCar}>
          <FaCarAlt className={carStyle} />
        </div>
        <div onClick={clickNetwork}>
          <FaNetworkWired className={networkStyle} />
        </div>
        <div onClick={clickWallet}>
          <IoMdWallet className={walletStyle} />
        </div>
      </nav>
    </div>
  );
}
