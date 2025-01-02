"use client";
import { ExpertMediaData } from "./Data/ExpertMediaData";

import styles from "./Media.module.scss";

export default function ExpertMedia() {
  return (
    <section className={`${styles.mediaSection} section`}>
      <div className="container">
        <div className={styles.mediaListWrap}>
          <ul className={styles.mediaList}>
            {ExpertMediaData.map((item, index) => (
              <li className={`${styles.item} motion scaleUp`} key={index}>
                <p className={styles.listTit}>
                  {item.label}
                  <span lang="en">{item.labelEn}</span>
                </p>
                <ul className={styles.mediaLogoList}>
                  {item.listImgs.map((logo, idx) => (
                    <li
                      key={idx}
                      className={`${styles[logo.logoSize]} ${styles.logoItem}`}
                    >
                      <img src={logo.logoUrl} alt={logo.logoAlt} />
                    </li>
                  ))}
                </ul>
                <p
                  className={styles.listDesc}
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
