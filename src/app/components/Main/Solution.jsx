"use client";

import React from "react";
import { useState, useEffect } from "react";
import { gsap } from "gsap"; // GSAP import
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import
import Link from "next/link";

// Styles
import styles from "./Solution.module.scss";

export default function About() {
  const solution = [
    {
      class: `${styles.item} ${styles.disability} col-lg-1 col-md-1 col-xs-1 col-span-15`
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "1",
      description: `실시간<br />자동 입찰 솔루션`,
      keyword: [{ item: "Real Time" }, { item: "Auto System" }]
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "2",
      description: `키워드<br />자동확장 솔루션`,
      keyword: [{ item: "Keyword Uto" }, { item: "Large System" }]
    },
    {
      class: `${styles.item} ${styles.disability} col-lg-1 col-md-1 col-xs-1 col-span-15`
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "3",
      description: `부정클릭<br />자동관리 솔루션`,
      keyword: [{ item: "Catch Fraud" }, { item: "Click System" }]
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "4",
      description: `키워드<br />분석 솔루션`,
      keyword: [{ item: "Keyword" }, { item: "Analaytics System" }]
    },
    {
      class: `${styles.item} ${styles.disability} col-lg-1 col-md-1 col-xs-1 col-span-15`
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "5",
      description: `광고 실적<br />개선 솔루션`,
      keyword: [{ item: "Media Auto" }, { item: "Survey System" }]
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "6",
      description: `데이터 분석<br />시각화 솔루션`,
      keyword: [{ item: "Data Analysis" }, { item: "Visualization System" }]
    },
    {
      class: `${styles.item} ${styles.disability} col-lg-1 col-md-1 col-xs-1 col-span-15`
    },
    {
      class: `${styles.item} ${styles.disability} col-lg-1 col-md-1 col-xs-1 col-span-15`
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "7",
      description: `브랜드 점검<br />키트 솔루션`,
      keyword: [{ item: "Brand Checking" }, { item: "Kit System" }]
    },
    {
      class: `${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`,
      number: "8",
      description: `고객 자동화<br />마케팅 솔루션`,
      keyword: [{ item: "Customer Auto" }, { item: "Marketing System" }]
    }
  ];

  useEffect(() => {
    // Timeline을 사용하여 동시에 애니메이션 실행
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.solutionSection}`,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
        markers: false
      }
    });

    // bgScale 애니메이션과 solutionSection의 width 변경을 동시에 실행
    tl.to(`.${styles.bgScale}`, {
      width: "10000px", // width를 10000px로 설정
      height: "10000px",
      duration: 3,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section className={styles.solutionSection}>
      <div className={styles.bgScale}></div>
      <div className={styles.wrap}>
        <div className={`${styles.title} tit-wrap border-line`}>
          <div className="container">
            <div className={`${styles.tit} main-tit col-span-15`} lang="en">
              <span>MKT</span>
              <br />
              SOLUTION
            </div>
          </div>
        </div>

        <div className="container">
          <div className={`${styles.solutionLists}`}>
            {solution.map((item, index) => (
              <div className={item.class} key={index}>
                <div className={styles.head}>
                  <span className={styles.number}>{item.number}</span>
                </div>
                <div className={styles.body}>
                  <div className={styles.cont}>
                    {item.description && typeof item.description === "string"
                      ? item.description.split("<br />").map((line, i, arr) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== arr.length - 1 && <br />}
                          </React.Fragment>
                        ))
                      : null}
                  </div>
                  <div className={styles.foot}>
                    {item.keyword && Array.isArray(item.keyword)
                      ? item.keyword.map((subItem, subIndex) => (
                          <span key={subIndex}>{subItem.item}</span>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.marqueeSolution}>
        <div className={styles.marqueeLists} lang="en">
          {/* 항목 1세트 */}
          <span className={styles.item}>Data Extraction</span>
          <span className={styles.item}>UX/UI Optimization</span>
          <span className={styles.item}>Data Analysis</span>
          <span className={styles.item}>Data Clustering</span>
          <span className={styles.item}>Data Quality Management</span>
          <span className={styles.item}>Machine Learning Modeling</span>
          <span className={styles.item}>Data Visualization</span>
          <span className={styles.item}>Brand Data Analysis</span>
          {/* 항목 2세트 */}
          <span className={styles.item}>Data Extraction</span>
          <span className={styles.item}>UX/UI Optimization</span>
          <span className={styles.item}>Data Analysis</span>
          <span className={styles.item}>Data Clustering</span>
          <span className={styles.item}>Data Quality Management</span>
          <span className={styles.item}>Machine Learning Modeling</span>
          <span className={styles.item}>Data Visualization</span>
          <span className={styles.item}>Brand Data Analysis</span>
          {/* 항목 3세트 */}
          <span className={styles.item}>Data Extraction</span>
          <span className={styles.item}>UX/UI Optimization</span>
          <span className={styles.item}>Data Analysis</span>
          <span className={styles.item}>Data Clustering</span>
          <span className={styles.item}>Data Quality Management</span>
          <span className={styles.item}>Machine Learning Modeling</span>
          <span className={styles.item}>Data Visualization</span>
          <span className={styles.item}>Brand Data Analysis</span>
        </div>
      </div>
    </section>
  );
}
