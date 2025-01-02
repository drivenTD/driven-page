"use client";

// Import
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Styles
import styles from "./About.module.scss";

// Images
import ButtonIco from "@/image/global/button/button-ico-round.svg";

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
          trigger: wordsRef.current,
          start: "top 120%",
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
    <section className={styles.aboutSection}>
      <div className={`${styles.radialGrad} radial-grad`}></div>
      <div className="container">
        <div
          className={`${styles.readTxt} col-lg-5 col-lg-span-2 col-md-4 col-md-span-1`}
        >
          <h3 className="col-span-15" ref={wordsRef}>
            <div className={styles.wordBox}>
              <div className="single-word">고객사의</div>
              <div className="single-word">비즈니스</div>
              <div className="single-word">환경을</div>
              <div className="single-word">기반으로</div>
              <div className="single-word">한</div>
              <div className="single-word">맞춤형</div>
              <div className="single-word">광고</div>
              <div className="single-word">전략과</div>
              <div className="single-word">데이터</div>
              <div className="single-word">리터러시,</div>
              <div className="single-word">A/B</div>
              <div className="single-word">테스트</div>
              <div className="single-word">등을</div>
              <div className="single-word">활용하여</div>
              <div className="single-word">광고</div>
              <div className="single-word">성과를</div>
              <div className="single-word">최적화하는</div>
              <div className="single-word">퍼포먼스</div>
              <div className="single-word">마케팅</div>
              <div className="single-word">전문</div>
              <div className="single-word">회사입니다.</div>
            </div>
            <div className={styles.wordBox}>
              <div className="single-word">우리는</div>
              <div className="single-word">이를</div>
              <div className="single-word">통해</div>
              <div className="single-word">다양한</div>
              <div className="single-word">기업에</div>
              <div className="single-word">그로스</div>
              <div className="single-word">마케팅을</div>
              <div className="single-word">제공하고</div>
              <div className="single-word">있습니다.</div>
            </div>
          </h3>
        </div>

        <div
          className={`${styles.buttonBox} col-lg-span-2 col-md-span-1 col-md-4`}
        >
          <Link href="/marketing/google" className="btn-line col-md-1">
            <span>Google Partner</span>
            <ButtonIco />
          </Link>

          <Link href="/marketing/meta" className="btn-line col-md-1">
            <span>Meta Business Partner</span>
            <ButtonIco />
          </Link>

          <Link href="/marketing/tiktok" className="btn-line col-md-1">
            <span>TikTok Official Partner</span>
            <ButtonIco />
          </Link>

          <Link href="/marketing/naver" className="btn-line col-md-1">
            <span>Naver Official Partner</span>
            <ButtonIco />
          </Link>

          <Link href="/marketing/kakao" className="btn-line col-md-1">
            <span>Kakao Official Partner</span>
            <ButtonIco />
          </Link>
        </div>
      </div>
    </section>
  );
}
