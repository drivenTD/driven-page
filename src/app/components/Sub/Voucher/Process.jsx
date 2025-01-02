"use client";
import { ProcessData } from "./Data/ProcessData";

import styles from "./Process.module.scss";

export default function Process() {
  return (
    <section className={`${styles.processSection} section`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.stickyBox} col-lg-2 col-md-2 col-span-15`}>
          <div className={`${styles.titWrap} pageTxtWrap txtC motion scaleUp`}>
            <p className="pageTitMiuem">
              <span lang="en">VOUCHER</span>
              전문화 프로세스
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-2 col-span-15">
          <div className={styles.processList}>
            {ProcessData.map((item, index) => {
              return (
                <div className={`${styles.item} motion scaleUp`} key={index}>
                  <div className={styles.thumbnailBox}>
                    <img src={item.imgUrl} alt={item.imgAlt} />
                  </div>
                  <div className={styles.txtBox}>
                    <p className={styles.tit}>{item.title}</p>
                    <p className={styles.desc}>{item.desc}</p>
                    <ul className={styles.tagList}>
                      {item.tag.map((tag, idx) => {
                        return <li key={idx}>{tag.label}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
