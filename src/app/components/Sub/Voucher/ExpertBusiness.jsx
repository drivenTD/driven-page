"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expertTabsData } from "./Data/expertTabsData";

import styles from "./ExpertBusiness.module.scss";

export default function ExpertBusiness() {
  // 첫 번째 아이템을 초기 상태로 설정
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const expertSection = document.querySelector(`.${styles.expertSection}`);

    const ExpertBusiness = gsap.timeline({
      scrollTrigger: {
        trigger: expertSection,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        markers: false
      }
    });

    ExpertBusiness.fromTo(
      expertSection,
      {},
      {
        backgroundColor: "#000"
      }
    );
  }, []);

  // 현재 선택된 탭의 `current` 배열에서 `label` 값을 가져오기
  const selectedCurrentLabels =
    expertTabsData[currentIndex]?.current.map((item) => item.label) || [];

  return (
    <section className={styles.expertSection}>
      <div className="container">
        <div className={`${styles.titWrap} pageTxtWrap txtC motion scaleUp`}>
          <p className="pageTitMiuem">
            <span lang="en">VOUCHER</span>
            바우처 사업 전문 기업
          </p>
        </div>
      </div>

      <div className={styles.contentBox}>
        <div className={`${styles.tabWrap} tabWrap`}>
          <nav className={`${styles.localNavi} tabsNavi`}>
            <ul className={`tabsLlist`}>
              {expertTabsData.map((tab, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(index)}
                    className={currentIndex === index ? "current" : ""}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.expertContBox}>
            {expertTabsData.map(
              (tab, index) =>
                currentIndex === index && (
                  <div className={`${styles.contItem}`} key={index}>
                    <img src={tab.img} alt={tab.alt} />
                  </div>
                )
            )}

            <div className={styles.contList}>
              {/* 기존 listGroup 구조를 그대로 사용 */}
              <div className={styles.listGroup}>
                <div
                  className={`${styles.listItem} motion scaleUp ${
                    selectedCurrentLabels.includes("인프라 구축")
                      ? `${styles.current}`
                      : ""
                  }`}
                >
                  인프라 구축
                </div>
                <div
                  className={`${styles.listItem} motion scaleUp ${
                    selectedCurrentLabels.includes("브랜딩")
                      ? `${styles.current}`
                      : ""
                  }`}
                >
                  브랜딩
                </div>
              </div>

              <div className={styles.listGroup}>
                <div
                  className={`${styles.listItem} motion scaleUp ${
                    selectedCurrentLabels.includes("세일즈 유도")
                      ? `${styles.current}`
                      : ""
                  }`}
                >
                  세일즈 유도
                </div>
                <div
                  className={`${styles.listItem} motion scaleUp ${
                    selectedCurrentLabels.includes("회원가입")
                      ? `${styles.current}`
                      : ""
                  }`}
                >
                  회원가입
                </div>
              </div>

              <div className={styles.listGroup}>
                <div
                  className={`${styles.listItem} motion scaleUp ${
                    selectedCurrentLabels.includes("DB 확보")
                      ? `${styles.current}`
                      : ""
                  }`}
                >
                  DB 확보
                </div>
                <div
                  className={`${styles.listItem} motion scaleUp ${
                    selectedCurrentLabels.includes("트래픽")
                      ? `${styles.current}`
                      : ""
                  }`}
                >
                  트래픽
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
