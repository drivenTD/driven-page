"use client";

// Import
import styles from "./Marquee.module.scss";

export default function Marquee() {
  return (
    <section className={styles.marqueeSection}>
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
    </section>
  );
}
