"use client";
import Link from "next/link";
import styles from "./HelpAndJobs.module.scss";

import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function HelpAndJobs() {
  return (
    <section className={`${styles.helpSection} section`}>
      <div className="container">
        <div className="col-span-15">
          <div className={styles.helpBox}>
            <div className={`${styles.item} ${styles.box1}`}>
              <p className={styles.tit}>Question</p>
              <p className={styles.desc}>자주묻는 질문 확인하세요.</p>
              <Link href="/pages/contact/questions/" lang="en">
                VIEW MORE <ButtonIco />
              </Link>

              <div className={styles.backgroundVideo}>
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  data-object-fit="cover"
                  data-wf-ignore="true"
                >
                  <source src="/pages/contact/recruit/" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className={`${styles.item} ${styles.box2}`}>
              <p className={styles.tit}>Recruit</p>
              <p className={styles.desc}>우리는 멋진 당신을 기다립니다.</p>
              <Link href="/pages/contact/recruit" lang="en">
                VIEW MORE <ButtonIco />
              </Link>

              <div className={styles.backgroundVideo}>
                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  data-object-fit="cover"
                  data-wf-ignore="true"
                >
                  <source src="/video/recruit-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
