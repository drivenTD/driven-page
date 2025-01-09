"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type"; // SplitType 라이브러리 임포트
import styles from "../FixedinFocus.module.scss";

export default function FixedinFocus() {
  const focusDate = [
    {
      className: "col-lg-1 col-md-1 col-xs-1",
      label: "소통의 시작",
      title: "Conversation"
    },
    {
      className: `col-lg-1 col-md-1 col-xs-1`,
      label: "연결의 힘",
      title: "SNS"
    },
    {
      className: `col-lg-span-1 col-lg-2 col-md-2 col-md-span-1 col-xs-1`,
      label: "대화로 이어지는 기회",
      title: "Chat"
    },
    {
      className: "col-lg-1 col-md-1 col-xs-1",
      label: "메시지로 전하는 가치",
      title: "Send"
    },
    {
      className: `col-lg-2 col-lg-span-1 col-md-1 col-xs-1 ${styles.emoji} ${styles.great}`,
      label: "더 나은 결과",
      title: "Good"
    },
    {
      className: `col-lg-2 col-lg-span-1 col-md-1 col-xs-1`,
      label: "손끝에서 시작되는 변화",
      title: "Mobile"
    },
    {
      className: `col-lg-2 col-lg-span-1 col-md-1 col-xs-1 ${styles.emoji} ${styles.face}`,
      label: "세상에 퍼지는 당신의 브랜드",
      title: "Spread"
    },
    {
      className: `col-lg-2 col-lg-span-1 col-md-1 col-xs-1`,
      label: "영향력을 만드는 파트너",
      title: "Influencer"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const targets = document.querySelectorAll(".split");

    targets.forEach((target) => {
      // SplitType 생성
      const splitInstance = new SplitType(target, {
        type: "lines, words, chars"
      });
      const chars = splitInstance.chars;

      // 애니메이션 적용
      gsap.from(chars, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "circ.out",
        toggleActions: "restart none none none",
        stagger: {
          amount: 1,
          from: "random"
        },
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "+=400",
          markers: false
        }
      });
    });

    // 컴포넌트 언마운트 시 SplitType 인스턴스 정리
    return () => {
      targets.forEach((target) => {
        if (target._split) {
          target._split.revert();
        }
      });
    };
  }, []);

  return (
    <section className={`${styles.fixedinSection} ${styles.addCont} black`}>
      <div className={`${styles.row} container`}>
        <div className={`${styles.titWrap} pageTxtWrap txtC`}>
          <p className={`${styles.tit} pageTitMiuem white split`}>
            <strong>
              소통과 연결로
              <br />
              확장하는 마케팅 키워드
            </strong>
          </p>
          <p className="pageDesc white col-span-15">
            고객과의 소통, 플랫폼 간 연결, 그리고 영향력 있는 확장을 통해
            <br /> 브랜드 가치를 높이고 성공적인 마케팅 전략을 실현하는 핵심
            키워드들입니다.
          </p>
        </div>

        <div className={`${styles.fixedCont}`}>
          {focusDate.map((item, index) => (
            <div
              className={`${styles.itemWrap} ${item.className} motion scaleUp`}
              key={index}
            >
              <div className="col-span-15">
                <div className={styles.item}>
                  <p
                    className={styles.label}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                  <p
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                    lang="en"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.fixedSectionCont}>
          <div className={`${styles.titWrap} pageTxtWrap txtC`}>
            <p className={`${styles.tit} pageTitMiuem white split`}>
              <strong>우리가 함께 만들어 갑니다</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
