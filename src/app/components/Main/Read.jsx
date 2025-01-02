"use client";

// Import
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Styles
import styles from "./Read.module.scss";

export default function About() {
  const wordsRef = useRef(null);

  useEffect(() => {
    // 클라이언트에서만 ScrollTrigger 등록
    gsap.registerPlugin(ScrollTrigger);

    // GSAP 애니메이션 적용
    if (!wordsRef.current) return;

    const words = wordsRef.current.querySelectorAll(".single-word");

    gsap.fromTo(
      words,
      { opacity: 0.1, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.readTxt}`,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 1,
          markers: false
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.readSection}>
      <div className="container">
        <div
          className={`${styles.readTxt} col-lg-5 col-lg-span-1 col-md-4 col-md-span-1`}
        >
          <h3 className="col-span-15" ref={wordsRef}>
            <div>
              <div className={styles.wordBox}>
                <div className="single-word">우리는</div>
                <div className="single-word">광고주의</div>
                <div className="single-word">Industry와</div>
              </div>
              <div className={styles.wordBox}>
                <div className="single-word">Product를</div>
                <div className="single-word">면밀히</div>
                <div className="single-word">분석합니다.</div>
              </div>
              <div className={styles.wordBox}>
                <div className="single-word">우리는</div>
                <div className="single-word">지속적인</div>
                <div className="single-word">모니터링을</div>
                <div className="single-word">통해</div>
              </div>
              <div className={styles.wordBox}>
                <div className="single-word">최소한의</div>
                <div className="single-word">예산으로</div>
                <div className="single-word">최대의</div>
                <div className="single-word">효율을</div>
                <div className="single-word">출합니다.</div>
              </div>
            </div>
            <div>
              <div className={styles.wordBox}>
                <div className="single-word">우리는</div>
                <div className="single-word">창의적이고</div>
                <div className="single-word">합리적인</div>
              </div>
              <div className={styles.wordBox}>
                <div className="single-word">Media</div>
                <div className="single-word">Mi로</div>
                <div className="single-word">고객에게</div>
              </div>
              <div className={styles.wordBox}>
                <div className="single-word">광고를</div>
                <div className="single-word">노출하고</div>
                <div className="single-word">구매를</div>
                <div className="single-word">유도합니다.</div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
}
