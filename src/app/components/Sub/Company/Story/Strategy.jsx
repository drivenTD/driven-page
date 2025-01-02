"use client";

// Import
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Styles
import styles from "./Strategy.module.scss";

export default function About() {
  const strategyListRef = useRef(null);
  const titleWrapRef = useRef(null);

  const strategy = [
    {
      img: "/image/sub/company/itemThumb01.jpg",
      alt: "Data-Driven Insights의 설명 사진",
      title: "Data-Driven Insights",
      desc: "데이터를 기반으로 한 명확한 분석과 통찰로, 마케팅 성공을 이끌어냅니다."
    },
    {
      img: "/image/sub/company/itemThumb02.jpg",
      alt: "Building Stronger Connections의 설명 사진",
      title: "Building Stronger Connections",
      desc: "고객과의 소통을 통해 신뢰를 구축하고 효과적인 전략을 설계합니다."
    },
    {
      img: "/image/sub/company/itemThumb03.jpg",
      alt: "The Power of Digital Networks의 설명 사진",
      title: "The Power of Digital Networks",
      desc: "글로벌 연결성을 활용하여 디지털 마케팅의 무한한 가능성을 실현합니다."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const strategyList = strategyListRef.current;
    const titleWrap = titleWrapRef.current;

    let titleWrapTrigger = null;
    let strategyListTrigger = null;

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        killScrollTriggers(); // 768 이하에서는 트리거 제거
      } else {
        updateScrollTriggers(); // 768 초과에서는 트리거 재생성
        window.location.reload();
      }
    });

    const killScrollTriggers = () => {
      if (titleWrapTrigger) {
        titleWrapTrigger.kill();
        titleWrapTrigger = null;
      }

      if (strategyListTrigger) {
        strategyListTrigger.kill();
        strategyListTrigger = null;
      }
    };

    // ScrollTrigger 초기화
    const updateScrollTriggers = () => {
      if (strategyList && titleWrap) {
        const totalWidth = strategyList.scrollWidth; // 전체 가로 길이
        const viewportWidth = window.innerWidth; // 뷰포트 너비

        // 제목 영역 고정
        titleWrapTrigger = ScrollTrigger.create({
          trigger: titleWrap,
          start: "top top",
          pin: titleWrap,
          pinSpacing: false,
          end: () => `+=${totalWidth - viewportWidth}`
        });

        // 가로 스크롤 애니메이션 트리거 생성 및 저장
        strategyListTrigger = gsap.to(strategyList, {
          x: -(totalWidth - viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: strategyList,
            start: "top top",
            end: () => `+=${totalWidth - viewportWidth}`,
            pin: true,
            scrub: true,
            pinSpacing: true
          }
        }).scrollTrigger; // 트리거 객체 저장
      }
    };

    updateScrollTriggers();
  }, []);

  return (
    <section className={styles.StrategySection}>
      <div className="container">
        {/* 제목 영역 */}
        <div className={styles.wrap} ref={titleWrapRef}>
          <div className={`${styles.titWrap} col-span-15`}>
            <p className={styles.tit} lang="en">
              DRIVEN
            </p>
            <p className={styles.desc}>
              데이터 전문가와 퍼포먼스 마케팅 리더들이 함께 만든
              <br />
              맞춤형 광고 전략과 최신 마케팅 트렌드를 만나보세요.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {/* 전략 리스트 */}
        <div className={styles.strategyList} ref={strategyListRef}>
          {strategy.map((item, index) => (
            <div
              className={`${styles.item} col-lg-3 col-md-3 col-xs-2 col-span-15`}
              key={index}
            >
              <div className={styles.thumb}>
                <Image src={item.img} layout="fill" alt={item.alt} />
              </div>
              <div className={`${styles.item} col-lg-3 col-span-15`}>
                <p className={styles.tit} lang="en">
                  {item.title}
                </p>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
