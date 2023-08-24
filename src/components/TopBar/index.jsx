import React from "react";
import styles from "./styles.module.css";
import { SiVisualstudiocode } from "react-icons/si";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";

const TopBar = () => {
  return (
    <div className={styles.TopBar}>
      <ul className={styles.tags}>
        <li>
          <SiVisualstudiocode color="#007ACC" size={15}/>
        </li>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Go</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>
      <span>Renzo Cervantes - Visual Studio Code</span>
      <ul className={styles.buttons}>
        <li className={styles.minmax}>
          <VscChromeMinimize size={15} />
        </li>
        <li className={styles.minmax}>
          <VscChromeMaximize size={15} />
        </li>
        <li className={styles.close}>
          <VscChromeClose size={15} />
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
