"use client";

import styles from "./About.module.scss";

export default function About({ portfolio }) {
  if (!portfolio) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  const highlightItems = Array.isArray(portfolio.section1[0].highlightList)
    ? portfolio.section1[0].highlightList
    : [];

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={`${styles.pageTitle} txtL col-span-15`}>
          <p
            className={`${styles.tit} motion scaleUp`}
            lang="en"
            dangerouslySetInnerHTML={{ __html: portfolio.section1[0]?.title }}
          />
          <p
            className={`${styles.desc} motion scaleUp`}
            dangerouslySetInnerHTML={{ __html: portfolio.section1[0]?.desc }}
          />
        </div>
        <div className={styles.highlightWrap}>
          <ul className={styles.highlightList}>
            {highlightItems.map((item, index) => (
              <li
                key={index}
                className="motion scaleUp"
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
