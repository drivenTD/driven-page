"use client";

import styles from "./Strategy.module.scss";

export default function Strategy({ portfolio }) {
  if (!portfolio) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  return (
    <section className={styles.strategySection}>
      <div className="container">
        <div className="pageTxtWrap txtC motion scaleUp action">
          <p className="pageTitMiuem white" lang="en">
            <span>Performance-Driven</span>
            Marketing Strategy
          </p>
        </div>

        <ul className={styles.diagram}>
          {portfolio.serviceItem.map((item, index) => (
            <li className="motion scaleUp" key={index}>
              {item}
            </li>
          ))}
        </ul>

        <p
          className={`${styles.desc} motion scaleUp`}
          dangerouslySetInnerHTML={{ __html: portfolio.strategyDesc }}
        />
      </div>
    </section>
  );
}
