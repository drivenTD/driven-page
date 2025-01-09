"use client";

import styles from "./Detail.module.scss";

export default function DetailInfo({ portfolio }) {
  if (!portfolio) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  return (
    <section className={styles.detailSection}>
      <div className="container">
        <div className="col-span-15">
          <h2 className={`${styles.tit} col-span-15 motion scaleUp`}>
            <span className={styles.pagePosition}>{portfolio.title}</span>
            <span
              className={styles.pageName}
              lang={portfolio.titleLanguage}
              dangerouslySetInnerHTML={{
                __html: portfolio.mainTitle
              }}
            />
          </h2>
        </div>
      </div>
      <div
        className={`${styles.detailVisual}`}
        style={{
          background: `url(${portfolio.detailVisual}) no-repeat`
        }}
      />
      <div className={styles.informationWrap}>
        <div className={`${styles.informationList} container`}>
          <div className="col-lg-1 col-md-1 col-xs-1 motion scaleUp">
            <div className="col-span-15">
              <p className={styles.tit} lang="en">
                CLIENT
              </p>
              <p className={styles.data} lang={portfolio.titleLanguage}>
                {portfolio.mainTitle}
              </p>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-xs-1 motion scaleUp">
            <div className="col-span-15">
              <p className={styles.tit} lang="en">
                SERVICE
              </p>
              <ul className={styles.data}>
                {portfolio.serviceItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-lg-span-1 col-md-2 col-xs-2 motion scaleUp">
            <div className="col-span-15">
              <p className={styles.tit} lang="en">
                OVERVIEW
              </p>
              <p
                className={styles.data}
                dangerouslySetInnerHTML={{
                  __html: portfolio.description
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
