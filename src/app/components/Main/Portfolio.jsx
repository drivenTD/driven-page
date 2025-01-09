"use client";

import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolios from "@/components/Sub/Portfolio/portfolioData";

// Styles
import styles from "./Portfolio.module.scss";

// Images
import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function Portfolio() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(`.${styles.item}`);
    const maxScale = 1;
    const minScale = 0.7;

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
      items.forEach((item, index) => {
        const isLastItem = index === items.length - 1;

        gsap.to(item, {
          scale: isLastItem ? maxScale : minScale, // 마지막 아이템은 scale 유지
          rotateX: isLastItem ? 0 : 180,
          opacity: isLastItem ? 1 : 0,
          scrollTrigger: {
            trigger: item,
            start: "top 20%",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }

    return () => {
      ScrollTrigger.killAll();
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
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.id}
              href={`/pages/portfolio/${portfolio.id}/`}
              className={styles.item}
              style={{
                background: `url(${portfolio.mainVisual}) no-repeat center`
              }}
            >
              <p
                className={styles.tit}
                dangerouslySetInnerHTML={{
                  __html: portfolio.mainTitle
                }}
              />
              <div className={styles.descBox}>
                <p className={styles.desc}>{portfolio.title}</p>
                <ul className={styles.descList}>
                  {portfolio.serviceItem.map((service, index) => (
                    <li key={index}>{service}</li>
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