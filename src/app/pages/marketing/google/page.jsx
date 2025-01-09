"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SubVisual from "@/components/Sub/Visual";
import Aboutpage from "@/components/Sub/Marketing/Aboutpage";
import ProductAbout from "@/components/Sub/Marketing/Google/ProductAbout";
import Solution from "@/components/Sub/Marketing/Google/Solution";
import SolutionItem from "@/components/Sub/Marketing/Google/SolutionItem";
import FixedinFocus from "@/components/Sub/Marketing/Google/FixedinFocus";
import FixedinFocus2 from "@/components/Sub/Marketing/Google/FixedinFocus2";

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
        button={true}
        imgUrl="/image/marketing/google/featuredImage.png"
        imgClass="google"
        pageTitle="Google Official Partner"
        profileLink="https://www.google.com/partners/agency?id=7589481278"
        pageDescription="구글 프리미어 파트너사로 선정 된 드리븐은 구글 마케팅<br class='visibleMobile'/> 분야에서<br class='visiblePc'/> <br class='visibleTablet'/> 전문성과 효율성을 인정받은 대행사입니다.<br class='visibleMobile'/><br class='visibleMobile'/> 데이터 기반의 분석과 최적화된 광고 전략으로<br />ROAS 성장을 리드하며, 고객의 비즈니스 환경을 깊이 이해하고<br class='visibleMobile'/> 맞춤형 광고로 성과를 극대화합니다."
      />
      <ProductAbout />
      <Solution />
      <SolutionItem />
      <FixedinFocus />
      <FixedinFocus2 />
    </div>
  );
}
