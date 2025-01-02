import Link from "next/link";
import styles from "./GrandMenu.module.scss";
import { menuItems } from "./MenuItems"; // 메뉴 데이터 가져오기'
import { useState } from "react";

import GrandMenuClose from "@/image/global/global-menu-btn-close.svg";

const GrandMenu = ({ isClassToggled, onClose }) => {
  return (
    <div
      className={`${styles.grandMenu} ${isClassToggled ? styles.menuOpen : ""}`}
    >
      <button className={`${styles.globalMenuBtnClose}`} onClick={onClose}>
        <GrandMenuClose />
      </button>
      <aside className={`${styles.aside}`} lang="en">
        <h2 className="blind">메뉴 열림</h2>
        <nav className={`${styles.grandNavBar}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} onClick={onClose}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className={`${styles.childrenNav}`}>
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link} onClick={onClose}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default GrandMenu;
