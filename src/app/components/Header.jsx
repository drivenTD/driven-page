"use client";

// Import
import { useState, useEffect } from "react";
import Nav from "@/components/Navbar/Navbar";
import GrandMenu from "@/components/Navbar/GrandMenu";
import Link from "next/link";

// Styles
import styles from "./Header.module.scss";

// Images
import DrivenLogo from "@/image/global/logo.svg";

export default function Header() {
  const [isClassToggled, setIsClassToggled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const toggleClassHandler = () => {
    setIsClassToggled((prev) => !prev);
  };

  const closeMenu = () => {
    setIsClassToggled(false); // 메뉴 닫기
  };

  // const handleScroll = () => {
  //   if (typeof window !== "undefined") {
  //     // 현재 스크롤 위치 가져오기
  //     const currentScrollY = window.scrollY;

  //     // 아래로 스크롤 시 헤더 숨기기
  //     if (currentScrollY > lastScrollY && currentScrollY > 1) {
  //       setIsHidden(true);
  //     } else if (currentScrollY < lastScrollY && currentScrollY > 1) {
  //       // 위로 스크롤 시 헤더 보이기
  //       setIsHidden(false);
  //     }

  //     // 마지막 스크롤 위치 업데이트
  //     setLastScrollY(currentScrollY);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    <div className={styles.topbar}>
      <header
        id="header"
        className={`${styles.header} ${isHidden ? styles.hidden : ""}`}
      >
        <h1 className={styles.logo}>
          <Link href="/">
            <DrivenLogo />
          </Link>
        </h1>

        <Nav />

        <div className={styles.globalWrap}>
          <Link className={styles.contactButton} href="/pages/contact/">
            CONTACT
          </Link>
          <button className={styles.globalMenuBtn} onClick={toggleClassHandler}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>
        </div>
      </header>
      <GrandMenu isClassToggled={isClassToggled} onClose={closeMenu} />
    </div>
  );
}
