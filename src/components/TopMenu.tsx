import styles from "../styles/components/TopMenu.module.css";
import { MdHome, MdPerson } from "react-icons/md";
import { FaCarAlt, FaNetworkWired } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { useState } from "react";

export function TopMenu() {
  return (
    <div className={styles.topMenuContainer}>
      <div>
        <img src="assets/primary.svg" alt="" />
        <strong>BACKOFFICE</strong>
      </div>
    </div>
  );
}
