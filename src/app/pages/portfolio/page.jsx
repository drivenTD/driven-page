"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Link from "next/link";
import portfolios from "@/components/Sub/Portfolio/portfolioData";
import styles from "@/components/Sub/Portfolio/Portfolio.module.scss";

import SubVisual from "@/components/Sub/VisualPortfolio";

const PortfolioList = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    document.documentElement.style.overflow = "visible";
    document.body.style.overflow = "visible";
    gsap.registerPlugin(ScrollTrigger);

    const motionElements = document.querySelectorAll(".motion");

    let hasReloaded = false;

    const resizeObserver = () => {
      hasReloaded = true;
      window.location.reload();
    };

    window.addEventListener("resize", resizeObserver);

    motionElements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 150%",
        markers: false,
        scrub: 1,
        invalidateOnRefresh: true,
        onEnter: () => el.classList.add("action"),
        onLeaveBack: () => el.classList.remove("action")
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
  };

  // 필터링된 포트폴리오 목록
  const filteredPortfolios =
    activeCategory === "ALL"
      ? portfolios
      : portfolios.filter((portfolio) =>
          portfolio.category.includes(activeCategory)
        );

  return (
    <div
      className="subTemplate portfolio"
      style={{
        overflow: "visible",
        transform: "none !important",
        minHeight: "100vh"
      }}
    >
      <SubVisual pagePosition="WORK" pageName="PORTFOLIO" />
      <section className={styles.portfolioSection}>
        <div className={`${styles.contWrap} container`}>
          <aside className={`${styles.sideFilterWrap} col-span-15`}>
            <p className={styles.tit} lang="en">
              MKT
              <br />
              REFERENCE
            </p>

            <ul className={styles.filterList}>
              {[
                "ALL",
                "이커머스",
                "뷰티패션",
                "엔터/라이프스타일",
                "병의원",
                "IT/App",
                "교육",
                "글로벌마케팅",
                "크리에이티브"
              ].map((category) => (
                <li key={category}>
                  <button
                    className={activeCategory === category ? styles.active : ""}
                    onClick={() => handleFilterClick(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div
            className={`${styles.portfolioListWrap} col-span-15 motion scaleUp`}
          >
            <ul className={styles.portfolioList}>
              {filteredPortfolios.map((portfolio) => (
                <li key={portfolio.id}>
                  <Link
                    href={`/pages/portfolio/${portfolio.id}/`}
                    style={{
                      background: `url(${portfolio.thumbnailImg}) no-repeat`
                    }}
                  >
                    <p>{portfolio.title}</p>
                    <ul className={styles.serviceList}>
                      {portfolio.serviceItem.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioList;
