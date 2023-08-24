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
        <div>
          <Link href={"/"}>
            <VscFiles size={30} />
          </Link>
          <Link href={"/projects"}>
            <VscSearch size={30} />
          </Link>
          <Link href={"https://github.com/Razaca"} target={"_blank"}>
            <VscGithubAlt size={30} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/renzo-cervantes/"}
            target={"_blank"}
          >
            <SlSocialLinkedin size={30} />
          </Link>
          <Link href={"/contact"}>
            <VscMail size={30} />
          </Link>
        </div>
        <div>
          <Link href={"/about"}>
            <VscAccount size={30} />
          </Link>
          <Link href={"/settings"}>
            <VscSettingsGear size={30} />
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
