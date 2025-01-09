"use client";
import { useEffect } from "react";
import { use } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import portfolios from "@/components/Sub/Portfolio/portfolioData";
import DetailInfo from "@/components/Sub/Portfolio/DetailInfo";
import Strategy from "@/components/Sub/Portfolio/Strategy";
import About from "@/components/Sub/Portfolio/About";
import Project from "@/components/Sub/Portfolio/Project";

const PortfolioDetail = ({ params }) => {
  const resolvedParams = use(params);
  const portfolioId = resolvedParams.id;

  // 포트폴리오 찾기
  const portfolio = portfolios.find((p) => p.id === portfolioId);

  if (!portfolio) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  useEffect(() => {
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
        start: "top bottom",
        markers: false,
        scrub: 1,
        invalidateOnRefresh: true,
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
    };
  }, []);

  return (
    <div className="subTemplate portfolio">
      <DetailInfo portfolio={portfolio} />
      <Strategy portfolio={portfolio} />
      <About portfolio={portfolio} />
      <Project portfolio={portfolio} />
    </div>
  );
};

export default PortfolioDetail;
