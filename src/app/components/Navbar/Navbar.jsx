import Link from "next/link";
import styles from "./Navbar.module.scss";
import { menuItems } from "./MenuItems"; // 메뉴 데이터 가져오기

const NavBar = () => {
  return (
    <nav className={`${styles.navbar} special`}>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Link href={item.link}>{item.label}</Link>
            {item.children && (
              <ul className={styles.dropMenu}>
                {item.children.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.link}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
