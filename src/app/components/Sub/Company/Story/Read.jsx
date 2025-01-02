"use client";

// Import
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Styles
import styles from "./Read.module.scss";

export default function Read() {
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
          start: "top 70%",
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
                <div className="single-word">드리븐은</div>
                <div className="single-word">버려지는</div>
                <div className="single-word">데이터라는</div>
                <div className="single-word">미지의</div>
                <div className="single-word">보물을</div>
                <div className="single-word">찾아내는</div>
                <div className="single-word">디지털</div>
                <div className="single-word">온라인상</div>
                <div className="single-word">버려진</div>
                <div className="single-word">데이터를</div>
                <div className="single-word">발굴하고</div>
                <div className="single-word">활용하여</div>
                <div className="single-word">디지털</div>
                <div className="single-word">마케팅</div>
                <div className="single-word">생태계를</div>
                <div className="single-word">활성화하는</div>
                <div className="single-word">애드테크</div>
                <div className="single-word">기반</div>
                <div className="single-word">마케팅전문가</div>
                <div className="single-word">입니다.</div>
              </div>
            </div>

            <div>
              <div className={styles.wordBox}>
                <div className="single-word">드리븐의</div>
                <div className="single-word">앨런애널리틱스는</div>
                <div className="single-word">현</div>
                <div className="single-word">집행</div>
                <div className="single-word">중인</div>
                <div className="single-word">다양한</div>
                <div className="single-word">광고를</div>
                <div className="single-word">앨런에서</div>
                <div className="single-word">데이터</div>
                <div className="single-word">정리와</div>
                <div className="single-word">시각화를</div>
                <div className="single-word">한번에</div>
                <div className="single-word">볼</div>
                <div className="single-word">수</div>
                <div className="single-word">있게</div>
                <div className="single-word">제공해주며,</div>
                <div className="single-word">광고주들은</div>
                <div className="single-word">앨런의</div>
                <div className="single-word">빅데이터와</div>
                <div className="single-word">AI를</div>
                <div className="single-word">활용해</div>
                <div className="single-word">캠페인</div>
                <div className="single-word">분석</div>
                <div className="single-word">및</div>
                <div className="single-word">최적화</div>
                <div className="single-word">설계</div>
                <div className="single-word">그리고,</div>
                <div className="single-word">고객</div>
                <div className="single-word">만족도</div>
                <div className="single-word">향상을</div>
                <div className="single-word">위한</div>
                <div className="single-word">이상</div>
                <div className="single-word">징후</div>
                <div className="single-word">및</div>
                <div className="single-word">기여도</div>
                <div className="single-word">측정이</div>
                <div className="single-word">가능합니다.</div>
              </div>
            </div>

            <div>
              <div className={styles.wordBox}>
                <div className="single-word">이렇게</div>
                <div className="single-word">얻은</div>
                <div className="single-word">데이터를</div>
                <div className="single-word">근거로</div>
                <div className="single-word">사용자</div>
                <div className="single-word">행동</div>
                <div className="single-word">패턴을</div>
                <div className="single-word">파악하고,</div>
                <div className="single-word">개인화된</div>
                <div className="single-word">마케팅</div>
                <div className="single-word">전략을</div>
                <div className="single-word">수립</div>
                <div className="single-word">및</div>
                <div className="single-word">운영하여</div>
                <div className="single-word">결과를</div>
                <div className="single-word">실시간으로</div>
                <div className="single-word">모니터링하고</div>
                <div className="single-word">개선하는</div>
                <div className="single-word">등</div>
                <div className="single-word">그로스마케팅의</div>
                <div className="single-word">핵심</div>
                <div className="single-word">요소들을</div>
                <div className="single-word">모두</div>
                <div className="single-word">충족시킬</div>
                <div className="single-word">수</div>
                <div className="single-word">있습니다.</div>
              </div>
            </div>

            <div>
              <div className={styles.wordBox}>
                <div className="single-word">드리븐은</div>
                <div className="single-word">장인정신,</div>
                <div className="single-word">변화</div>
                <div className="single-word">선도,</div>
                <div className="single-word">그리고</div>
                <div className="single-word">함께</div>
                <div className="single-word">성장이라는</div>
                <div className="single-word">핵심</div>
                <div className="single-word">가치를</div>
                <div className="single-word">바탕으로,</div>
                <div className="single-word">개인,</div>
                <div className="single-word">기업,</div>
                <div className="single-word">고객</div>
                <div className="single-word">모두가</div>
                <div className="single-word">성장하는</div>
                <div className="single-word">목표를</div>
                <div className="single-word">향해</div>
                <div className="single-word">전진과</div>
                <div className="single-word">상호</div>
                <div className="single-word">성장하는</div>
                <div className="single-word">진정한</div>
                <div className="single-word">동반자입니다.</div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
}
