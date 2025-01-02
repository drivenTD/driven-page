"use client";

// Import
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

// Styles
import styles from "./Visual.module.scss";

// Images
import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function Visual() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonWrapRef = useRef(null);

  useEffect(() => {
    const spans = titleRef.current.querySelectorAll("span");

    // 첫 번째 애니메이션: span 애니메이션
    gsap.fromTo(
      spans,
      { opacity: 0, y: 50, rotation: 0 }, // 시작 상태
      {
        opacity: 1,
        y: 0,
        rotation: (index) => (index % 2 === 0 ? 20 : -20), // 홀짝으로 회전 각도 다르게
        duration: 0.8, // 애니메이션 빠르게
        stagger: 0.05, // span마다 간격을 더 짧게
        ease: "power3.out",
        onComplete: () => {
          // span 애니메이션이 끝나면 desc와 buttonWrap 애니메이션 실행
          gsap.fromTo(
            descRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8, // 빠르게 나타나도록 설정
              ease: "power3.out"
            }
          );
          gsap.fromTo(
            buttonWrapRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8, // 빠르게 나타나도록 설정
              ease: "power3.out",
              delay: 0.2 // desc가 애니메이션을 마친 후 짧은 시간 후에 실행
            }
          );
        }
      }
    );
  }, []);

  return (
    <section className={styles.visual}>
      <div className={`${styles.textWrap} container`}>
        <h2 className={styles.tit} lang="en" ref={titleRef}>
          <span>D</span>
          <span>I</span>
          <span>G</span>
          <span>I</span>
          <span>T</span>
          <span>A</span>
          <span>L</span>
          <br />
          <span>P</span>
          <span>E</span>
          <span>R</span>
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>M</span>
          <span>A</span>
          <span>N</span>
          <span>C</span>
          <span>E</span>
        </h2>

        <div
          className={`${styles.boxWrap} col-lg-span-3 col-lg-5 col-md-4 col-md-span-2 col-xs-2`}
        >
          <p className={`${styles.desc} col-span-15`} ref={descRef}>
            어려운 해외 마케팅 &middot; 비즈니스 인큐베이팅 &middot; 정부 바우처
            <br />
            공식 수행기관 드리븐과 함께 하세요
          </p>
          <div className={styles.buttonWrap} ref={buttonWrapRef}>
            <Link href="#;" className="btn-line">
              <span>솔루션 문의하기</span>
              <ButtonIco />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.backgroundVideo}>
        <video
          muted
          autoPlay
          loop
          playsInline
          data-object-fit="cover"
          data-wf-ignore="true"
        >
          <source
            src="https://cdn.significo.com/videos/significo-main-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
