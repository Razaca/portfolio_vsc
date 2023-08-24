"use client";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

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

const ExplorerBar = () => {
  const [menu, setMenu] = useState(false);
  const params = usePathname();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const findItem = items.find((item) => item.path === params);
  const restItems = items.filter((item) => item.path !== params);

  return (
    <nav>
      {isTabletOrMobile ? (
        <div>
          <ul className={styles.files}>
            <li key={findItem.name}>
              <Link href={findItem.path}>
                <div className={styles.file}>
                  <Image
                    src={`/${findItem.icon}`}
                    alt={findItem.name}
                    height={18}
                    width={18}
                  />
                  <p>{findItem.name}</p>
                </div>
              </Link>
            </li>
            <li className={styles.file}>
              <TiThMenu size={15} onClick={() => setMenu(!menu)} />
            </li>
            <li style={menu ? null : { display: "none" }}>
              <ul style={{ position: "absolute" }}>
                {restItems.map((el) => (
                  <li key={el.name} onClick={() => setMenu(!menu)}>
                    <Link href={el.path}>
                      <div className={styles.file}>
                        <Image
                          src={`/${el.icon}`}
                          alt={el.name}
                          height={18}
                          width={18}
                        />
                        <p>{el.name}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className={styles.files}>
            {items.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <div
                    className={styles.file}
                    style={
                      params == item.path
                        ? {
                            backgroundColor: "var(--explorer-active-bg)",
                            borderBottom: "1px solid var(--main-bg)",
                          }
                        : null
                    }
                  >
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      height={18}
                      width={18}
                    />
                    <p>{item.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ExplorerBar;
