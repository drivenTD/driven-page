"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SubVisual from "@/components/Sub/Visual";
import Aboutpage from "@/components/Sub/Marketing/Aboutpage";
import FixedinFocus from "@/components/Sub/Marketing/Meta/FixedinFocus";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.overflow = "visible";
    document.body.style.overflow = "visible";
    gsap.registerPlugin(ScrollTrigger);

    const motionElements = document.querySelectorAll(".motion");
    let hasReloaded = false;

    const resizeObserver = () => {
      hasReloaded = true;
      window.location.reload();
    };

    window.addEventListener("resize", resizeObserver);

    motionElements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        toggleActions: "restart none none none",
        markers: false,
        onEnter: () => el.classList.add("action"),
        onLeaveBack: () => el.classList.remove("action")
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="subTemplate"
      style={{
        overflow: "visible",
        transform: "none !important",
        minHeight: "100vh"
      }}
    >
      <SubVisual pagePosition="MARKETING" pageName="MARKETING" />
      <Aboutpage
        button={false}
        imgUrl="/image/marketing/meta/featuredImage.png"
        imgClass="meta"
        pageTitle="Meta = <span class='facebook'>Facebook </span> + <span class='instargram'>Instargram</span>"
        pageDescription="
          메타광고는 페이스북과 인스타그램을 통칭합니다.<br/>
          SNS 채널을 활용하여 다양한 소비자와 소통을 할 수 있으며,<br class='visibleMobile'/> 이미 증명된 Meta DMP를<br class='visiblePc'/><br class='visibleTablet'/>
          활용한 퍼포먼스 타겟팅을 통해<br class='visibleMobile' /> 브랜딩부터 상품홍보까지 저렴한 비용으로<br class='visiblePc' /><br class='visibleTablet'/>
          그 최고 수준의<br class='visibleMobile' /> 퍼포먼스 효과 경험을 해볼 수 있습니다.<br/> <br class='visibleMobile' />
          눈에 확 띄는 컨텐츠와 최적화 된 유저 타겟팅으로<br class='visibleMobile' /> 효과적인 홍보를 도와드립니다.
        "
      />
      <FixedinFocus />
    </div>
  );
}
