"use client";

import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Styles
import styles from "./Portfolio.module.scss";

// Images
import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function Portfolio() {
  const project = [
    {
      label: `이찬원이 선택한 <br /> 바로인 슈즈`,
      sublabel: "바로 신는 편안함 이찬원 신발 바로인",
      keyword: [
        { item: "쇼핑몰 트래픽 유도" },
        { item: "구매 전환 캠페인" },
        { item: "브랜드 인지도 제고" },
        { item: "ROAS 강화" }
      ],
      image: "/image/portfolio/portfolio01.png",
      link: "/"
    },
    {
      label: `SOFTWARE FOR<br />SAFE WORLD`,
      sublabel: "글로벌 IT 융합 기업 슈어소프트테크",
      keyword: [
        { item: "Analytics 업그레이드" },
        { item: "DB 기술 지원" },
        { item: "그로스 컨설팅" }
      ],
      image: "/image/portfolio/portfolio02.png",
      link: "/"
    },
    {
      label: `ARTE<br />MUSEUM`,
      sublabel: "빛, 소리 그리고 영원한 자연 아르뗴뮤지엄",
      keyword: [{ item: "라스베가스, 두바이 현지 티켓 판매량 제고 프로젝트" }],
      image: "/image/portfolio/portfolio03.png",
      link: "/"
    },
    {
      label: `BEGIC`,
      sublabel: "기분 좋은 스킨케어 베이지크",
      keyword: [
        { item: "쇼핑몰 트래픽 유도" },
        { item: "구매 전환 캠페인" },
        { item: "ROAS 강화" }
      ],
      image: "/image/portfolio/portfolio04.png",
      link: "/"
    },
    {
      label: `meunde`,
      sublabel: "자연에서 온 언더웨어 미인더",
      keyword: [
        { item: "쇼핑몰 트래픽 유도" },
        { item: "구매 전환 캠페인" },
        { item: "브랜드 인지도 제고" },
        { item: "ROAS 강화" }
      ],
      image: "/image/portfolio/portfolio05.png",
      link: "/"
    }
  ];

  useEffect(() => {
    // GSAP ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(`.${styles.item}`);
    const maxScale = 1; // 기본 최대 scale
    const minScale = 0.7; // 최소 scale

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        window.location.reload();
      }
    };

    let hasReloaded = false;

    const resizeObserver = () => {
      if (!hasReloaded && window.innerWidth <= 768) {
        hasReloaded = true;
        window.location.reload();
      }
    };

    window.addEventListener("resize", resizeObserver);

    if (window.innerWidth > 768) {
      // 각 아이템의 애니메이션 설정
      items.forEach((item, index) => {
        const isLastItem = index === items.length - 1; // 마지막 아이템 여부

        gsap.to(item, {
          scale: isLastItem ? maxScale : minScale, // 마지막 아이템은 scale 유지
          rotateX: isLastItem ? 0 : 180,
          opacity: isLastItem ? 1 : 0,
          scrollTrigger: {
            trigger: item,
            start: "top 20%", // 수정된 start 값
            end: "bottom top", // 아이템이 뷰포트에서 사라질 때 끝
            scrub: true // 스크롤과 애니메이션 동기화
          }
        });
      });
    }

    return () => {
      ScrollTrigger.killAll(); // ScrollTrigger 정리
      window.removeEventListener("resize", resizeObserver);
    };
  }, []);

  return (
    <section className={styles.portfolioSection}>
      <div className={`${styles.title} tit-wrap border-line`}>
        <div className="container">
          <div className="main-tit col-span-15" lang="en">
            <span>Portfolio</span> of
            <br />
            Optimized
            <br />
            Performance
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`${styles.portfolioLists} col-span-15`}>
          {project.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={styles.item}
              style={{ background: `url(${item.image}) no-repeat center` }}
            >
              <p className={styles.tit}>
                {item.label.split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== item.label.split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <div className={styles.descBox}>
                <p className={styles.desc}>{item.sublabel}</p>
                <ul className={styles.descList}>
                  {item.keyword.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem.item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.portfolioAbout}>
          <div className="col-lg-span-3 col-md-span-2">
            <p className={`${styles.portfolioDesc} col-span-15`}>
              데이터 분석, A/B 테스트, 맞춤형 광고 전략으로 비즈니스 성장을
              실현한 다양한 성공 사례를 담은 포트폴리오입니다. 성과 중심의 접근
              방식으로 차별화된 결과를 제공합니다.
            </p>
          </div>
          <div
            className={`${styles.buttonWrap} col-lg-span-3 col-md-3 col-md-span-2 col-xs-span-1`}
          >
            <Link href="#;" className="btn-line">
              <span>See All Works</span>
              <ButtonIco />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}