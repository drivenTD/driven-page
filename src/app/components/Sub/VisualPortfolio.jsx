"use client";

import Link from "next/link";
import { gsap } from "gsap"; // GSAP import
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Visual.module.scss";

import ButtonIco from "@/image/global/button/button-ico-round.svg";
import ScrollBtn from "@/image/global/scroll-ico.svg";

export default function SubTemplate({ pagePosition, pageName }) {
  return (
    <div className={`${styles.subVisual} ${styles.portfolio}`}>
      <div className={`${styles.visualWrap} container`}>
        <div
          className={`${styles.buttonWrap} col-lg-5 col-lg-span-4 col-md-4 col-md-span-3 col-xs-2 col-xs-span-1`}
        >
          <Link
            href="#;"
            className={`${styles.btnContact} btn-line motion scaleUp`}
          >
            <span>솔루션 문의하기</span>
            <ButtonIco />
          </Link>
        </div>
        <div className={styles.titleWrap}>
          <div className="col-lg-3 col-md-3">
            <h2
              className={`${styles.tit} col-span-15 motion scaleUp`}
              lang="en"
            >
              <span className={styles.pagePosition}>{pagePosition}</span>
              <span>DRIVEN</span>
              <span className={styles.pageName}>{pageName}</span>
            </h2>
          </div>
          <div
            className={`${styles.subText} col-lg-2 col-md-1 col-span-15 motion scaleUp`}
          >
            <p className="">
              고객사의 비즈니스 환경을 기반으로 한 맞춤형 광고 전략과 데이터
              리터러시, A/B 테스트 등을 활용하여 광고 성과를 최적화하는 퍼포먼스
              마케팅 전문 회사입니다.
              <br />
              <br />
              우리는 이를 통해 다양한 기업에 그로스 마케팅을 제공하고 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.scroll} motion scaleUp`}>
        <button className={styles.scrollBtn}>
          <ScrollBtn />
        </button>
      </div>
    </div>
  );
}
