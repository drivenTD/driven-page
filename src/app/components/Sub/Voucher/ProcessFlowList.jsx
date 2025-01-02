"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import styles from "./ProcessFlowList.module.scss";
import IcoOutlink from "@/image/global/outlink-ico.svg";

export default function ProcessFlowList() {
  const flowListSectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false); // 화면이 데스크탑인지 확인하는 상태 추가

  const FlowList = [
    {
      number: "1",
      title: "사업 신청 및 선정",
      desc: "전문화된 바우처 사업에 참여하기 위해, 고객은 먼저 사업 신청을 진행합니다. 사업 선정 과정에서는 고객의 요구사항과 사업 목표를 고려하여 적합한 프로그램을 선정합니다. 이 과정은 고객의 성장 가능성을 최대화할 수 있도록 정확하고 신속하게 이루어집니다."
    },
    {
      number: "2",
      title: "바우처 사이트 검색",
      desc: "신청이 완료된 후, 고객은 바우처 제공 사이트에서 다양한 서비스를 탐색합니다. 이를 통해 제공되는 각종 프로그램을 비교 분석하고, 비즈니스에 최적화된 바우처 옵션을 선택할 수 있습니다. 바우처 사이트는 투명하고 명확한 정보 제공을 통해, 고객이 쉽게 접근할 수 있도록 설계되어 있습니다."
    },
    {
      number: "3",
      title: "수행기관 클릭",
      desc: "고객은 선정된 바우처를 통해 전문 수행기관을 클릭하여, 필요한 서비스를 제공할 기관을 선택합니다. 이 단계에서는 각 수행기관의 역량과 이전 프로젝트 성과를 기반으로, 가장 적합한 파트너를 결정할 수 있습니다. 이 과정은 고객의 요구사항에 부합하는 전문성을 갖춘 기관을 쉽게 찾을 수 있게 돕습니다."
    },
    {
      number: "4",
      title: "검색창에 ‘드리븐’ 검색",
      desc: "드리븐(Driven) 검색어를 바탕으로, 고객은 특정 서비스나 제공자의 상세 정보를 검색합니다. 이를 통해 필요한 솔루션과 정보를 신속하게 확보할 수 있으며, 고객의 요구에 맞는 정확한 데이터를 찾아 실행에 옮길 수 있습니다."
    },
    {
      number: "5",
      title: "상세보기 → 문의하기 클릭",
      desc: "마지막으로, 고객은 서비스의 상세 정보를 열람하고, 필요 시 직접 문의하기 기능을 통해 추가적인 질문이나 지원을 요청합니다. 이 단계에서는 고객과의 원활한 소통을 통해 더욱 맞춤화된 서비스를 제공하며, 고객의 요구사항을 반영하여 정확한 정보를 제공합니다."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = flowListSectionRef.current;
    if (!wrapper) return;

    const inner = wrapper.querySelector(`.${styles.flowList}`);
    if (!inner) return;

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let scrollTriggerInstance;

    if (isDesktop) {
      scrollTriggerInstance = gsap.to(inner, {
        x: () =>
          -(inner.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => `+=${inner.scrollWidth}`
        }
      });
    } else {
      // 모바일에서는 ScrollTrigger를 사용하지 않음
      ScrollTrigger.refresh();
    }

    return () => {
      // 리사이즈 이벤트와 ScrollTrigger 인스턴스를 정리
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.scrollTrigger.kill();
      }
      ScrollTrigger.refresh();
    };
  }, [isDesktop]); // isDesktop이 변경될 때마다 실행

  return (
    <section ref={flowListSectionRef} className={styles.flowListSection}>
      <div className={`${styles.flowContainer} container`}>
        <div className={styles.flowBox}>
          <div className={`${styles.titWrap} pageTxtWrap txtC`}>
            <p className="pageTitMiuem">
              <span lang="en">VOUCHER</span>
              바우처 사업 전문 기업
            </p>
          </div>
          <div className={`${styles.flowList}`}>
            {FlowList.map((item, index) => (
              <div
                key={index}
                className={`${styles.itemWrap} col-lg-2 col-md-2 col-xs-2 col-span-15`}
              >
                <div className={`${styles.item}`}>
                  <p className={styles.num}>
                    <span>{item.number}</span>
                  </p>
                  <p className={styles.tit}>{item.title}</p>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-15">
            <div className={styles.btnWrap}>
              <Link
                href="https://www.exportvoucher.com/portal/menupan/menu?totSchInput=%EB%93%9C%EB%A6%AC%EB%B8%90"
                target="_blank"
              >
                수출바우처 신청하기 <IcoOutlink />
              </Link>
              <Link href="https://www.mssmiv.com/portal/Main" target="_blank">
                혁신바우처 신청하기 <IcoOutlink />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
