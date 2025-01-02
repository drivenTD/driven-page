"use client";
import { useEffect } from "react";
import styles from "./About.module.scss";

export default function DatamonAbout() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return (
    <section className={styles.solutionAboutSection}>
      <div className="container">
        <div className="col-span-15">
          <div className={styles.bgAreaWrap}>
            <div
              className={`${styles.bgArea} ${styles.datamon} motion scaleUp`}
            >
              <p lang="en">
                Datamon explores, visualizes, and
                <br />
                analyzes your data to unlock its true value.
              </p>
            </div>

            <p className={`${styles.bottomTxt} txtC motion scaleUp`}>
              데이터몬은 사용자의 데이터를 탐색하고 이해합니다.
              <br />
              데이터몬을 통해 데이터를 시각화 하고
              <br />
              효율적인 분석을 통해 가치를 높일 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
