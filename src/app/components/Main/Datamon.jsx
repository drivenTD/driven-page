"use client";

// Import
import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

// Styles
import styles from "./Datamon.module.scss";

export default function Datamon() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // 재사용 가능한 GSAP 애니메이션 함수
    function animateWithScrollTrigger(targets, options) {
      const {
        opacity = 1,
        x = 0,
        duration = 1,
        ease = "power1.inOut",
        trigger,
        start = "top 80%",
        toggleActions = "play none none reverse"
      } = options;

      gsap.to(targets, {
        opacity,
        x,
        duration,
        ease,
        scrollTrigger: {
          trigger, // 스크롤 감지할 요소
          start,
          toggleActions
        }
      });
    }

    animateWithScrollTrigger(`.${styles.tabsTit}`, {
      x: 0,
      duration: 1,
      trigger: `.${styles.tabsTit}`
    });

    animateWithScrollTrigger(`.${styles.tabList}`, {
      x: 0,
      duration: 1,
      trigger: `.${styles.tabList}`,
      start: "top 90%"
    });

    animateWithScrollTrigger(`.${styles.imgBox}, ${styles.lineBox}`, {
      x: 0,
      duration: 1,
      trigger: `.${styles.imgBox}`,
      start: "top 90%"
    });

    animateWithScrollTrigger(`.${styles.tabArea}`, {
      x: 0,
      duration: 1,
      trigger: `.${styles.tabArea}`,
      start: "top 90%"
    });

    // 랜덤 borderRadius 값 생성 함수
    function getRandomBorderRadius() {
      const randomValue = () => Math.floor(Math.random() * 1000) + "px";
      return `${randomValue()} ${randomValue()} ${randomValue()} ${randomValue()}`;
    }

    // GSAP 애니메이션 적용
    gsap.to(`.${styles.imgBox}`, {
      borderRadius: () => getRandomBorderRadius(), // 랜덤 값 적용
      duration: 3, // 애니메이션 지속 시간
      repeat: -1, // 무한 반복
      yoyo: true, // 애니메이션 역재생
      ease: "power1.inOut" // 부드러운 효과
    });

    gsap.to(`.${styles.lineBox}`, {
      borderRadius: () => getRandomBorderRadius(), // 랜덤 값 적용
      opacity: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className={styles.datamonSection}>
      <div className={`${styles.flex} container`}>
        <div className={`${styles.motionRoundImg} col-lg-2 col-md-2 col-xs-2`}>
          <div className="col-span-15">
            <div className={styles.imgBox}>
              <img
                src="/image/datamon/figureImg.png"
                alt="Solution & Service"
              />
            </div>
            <div className={styles.lineBox}></div>
          </div>
        </div>

        <div className="col-lg-3 col-md-2 col-xs-2">
          <div className="col-span-15">
            <div className={styles.tabs}>
              <p className={styles.tabsTit}>
                <span lang="en">Data Mon</span>
                복잡한 데이터를 통합하여
                <br />
                시각화하는 자체개발 솔루션을 활용합니다
              </p>
              <ul className={styles.tabList} lang="en">
                <li>
                  <button
                    className={activeTab === 0 ? styles.active : ""}
                    onClick={() => handleTabClick(0)}
                  >
                    Solution & Service
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 1 ? styles.active : ""}
                    onClick={() => handleTabClick(1)}
                  >
                    Optimization Solution
                  </button>
                </li>
                <li>
                  <button
                    className={activeTab === 2 ? styles.active : ""}
                    onClick={() => handleTabClick(2)}
                  >
                    On-Demand Solution
                  </button>
                </li>
              </ul>
              <div className={styles.tabArea}>
                <div
                  className={`${styles.tabItem} ${
                    activeTab === 0 ? styles.active : ""
                  }`}
                >
                  인터넷 환경에 있는 버즈데이터를 수집해 분석합니다. 시장 조사,
                  <br />
                  경쟁사 파악, 모니터링, 프로모션에 대한 소비자 반응 및 태도를
                  <br />
                  중점으로 인사이트를 도출합니다.
                </div>
                <div
                  className={`${styles.tabItem} ${
                    activeTab === 1 ? styles.active : ""
                  }`}
                >
                  퍼널 설계, A/B테스트, SEO최적화, 행동파악을 통해 사이트의
                  <br />
                  사용성을 높입니다. 사이트 KPI 달성을 위한 전략을 수립하고
                  <br />
                  프로모션의 효과성을 측정합니다
                </div>
                <div
                  className={`${styles.tabItem} ${
                    activeTab === 2 ? styles.active : ""
                  }`}
                >
                  클라이언트의 니즈에 맞는 맞춤형 데이터 분석 서비스를 <br />
                  제공합니다. 문제를 해결하기 위한 최적의 방법론을 제안합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
