"use client";

import Link from "next/link";

// Styles
import styles from "./Footer.module.scss";

// Images
import DrivenLogo from "@/image/global/logo.svg";
import IcoOutlink from "@/image/global/outlink-ico.svg";
import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function Footer(information) {
  return (
    <footer className={styles.footer}>
      <div className={styles.index}>
        <div className="container">
          <div className={styles.footLinksWrap}>
            <div
              className={`${styles.logo} col-lg-1 col-md-1 col-xs-1 col-span-15`}
            >
              <DrivenLogo />
            </div>

            <div
              className={`${styles.linkList} col-lg-3 col-md-2 col-xs-1 col-lg-span-2 col-md-`}
            >
              <nav className={`${styles.footNav} col-span-15`} lang="en">
                <Link href="/pages/company/driven-story">Company</Link>
                <Link href="/pages/marketing/google">Marketing</Link>
                <Link href="/pages/work">Work</Link>
                <Link href="/pages/solution">Solution</Link>
                <Link href="/pages/voucher">Voucher</Link>
              </nav>
            </div>

            <div className={`${styles.instarList} col-lg-1 col-md-1 col-xs-1`}>
              <nav className={`${styles.instarNav} col-span-15`} lang="en">
                <Link href="#;">
                  Instargram <IcoOutlink />
                </Link>
                <Link href="#;">
                  Kakao <IcoOutlink />
                </Link>
                <Link href="#;">
                  Facebook <IcoOutlink />
                </Link>
                <Link href="#;">
                  Naver Blog <IcoOutlink />
                </Link>
                <Link href="#;">
                  Naver Post <IcoOutlink />
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.information}>
            <div className={`${styles.infoList} col-lg-2 col-md-2 col-xs-1`}>
              <div className={`${styles.box} col-lg-1 col-md-1 col-span-15 `}>
                <div className={styles.txtBox}>
                  <strong>대표</strong>
                  {information.exponent}
                </div>
                <div className={styles.txtBox}>
                  <strong>사업자등록번호</strong>
                  {information.registNumber}
                </div>
              </div>

              <div className={`${styles.box} col-lg-1 col-md-1 col-span-15`}>
                <div className={styles.txtBox}>
                  <strong>통신판매업신고증번호</strong>
                  {information.dealership}
                </div>
                <div className={styles.txtBox}>
                  <strong>주소</strong>
                  {information.address}
                </div>
              </div>
            </div>

            <div
              className={`${styles.contact} col-lg-3 col-md-2 col-xs-1 col-lg-span-2 col-md-span-1`}
            >
              <div className="col-span-15" lang="en">
                <p>
                  Let’s create something
                  <br />
                  amazing together
                </p>
                <Link href="/" className={styles.contactBtn}>
                  Let’s Connect <ButtonIco />
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            <div className="col-lg-1 col-md-2 col-xs-1">
              <div className={`${styles.copy} col-span-15`}>
                © 2025 Driven. All rights reserved
              </div>
            </div>

            <div className="col-lg-4 col-md-2 col-xs-1">
              <div className={`${styles.personal} col-span-15`}>
                <Link href="/">이용약관</Link>
                <Link href="/">개인정보처리방침</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.radialGrad} radial-grad`}></div>
    </footer>
  );
}
