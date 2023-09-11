import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  VscFiles,
  VscSearch,
  VscMail,
  VscGithubAlt,
  VscChevronDown,
  VscSettingsGear,
  VscAccount,
} from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

const items = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "settings.json",
    path: "/settings",
    icon: "json_icon.svg",
  },
];

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.icons}>
        <div >
          <Link href={"/"} className={styles.icon}>
            <VscFiles size={30} />
            <span className={styles.bubble}>home</span>
          </Link>
          <Link href={"/projects"} className={styles.icon}>
            <VscSearch size={30} />
            <span className={styles.bubble}>projects</span>
          </Link>
          <Link href={"https://github.com/Razaca"} target={"_blank"} className={styles.icon}>
            <VscGithubAlt size={30} />
            <span className={styles.bubble}>github</span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/renzo-cervantes/"}
            target={"_blank"}
            className={styles.icon}
          >
            <SlSocialLinkedin size={30} />
            <span className={styles.bubble}>linkedin</span>
          </Link>
          <Link href={"/contact"} className={styles.icon}>
            <VscMail size={30} />
            <span className={styles.bubble}>contact</span>
          </Link>
        </div>
        <div>
          <Link href={"/about"} className={styles.icon}>
            <VscAccount size={30} />
            <span className={styles.bubble}>about</span>
          </Link>
          <Link href={"/settings"} className={styles.icon}>
            <VscSettingsGear size={30} />
            <span className={styles.bubble}>setting</span>
          </Link>
        </div>
      </div>
      <div className={styles.items}>
        <h5>EXPLORER</h5>
        <p>
          <VscChevronDown /> Portfolio
        </p>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />{" "}
                  <p>{item.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
