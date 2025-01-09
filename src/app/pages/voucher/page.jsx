"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SubVisual from "@/components/Sub/Visual";
import Innovation from "@/components/Sub/Voucher/Innovation";
import ExpertBusiness from "@/components/Sub/Voucher/ExpertBusiness";
import Media from "@/components/Sub/Voucher/ExpertMedia";
import Process from "@/components/Sub/Voucher/Process";
import ProcessFlowList from "@/components/Sub/Voucher/ProcessFlowList";
import ServiceAbout from "@/components/Sub/Voucher/ServiceAbout";

export default function Page() {
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
        start: "top 90%",
        markers: false,
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
      // ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="subTemplate">
      <SubVisual pagePosition="VOUCHER" pageName="VOUCHER" />
      <Innovation />
      <ExpertBusiness />
      <Media />
      <Process />
      <ProcessFlowList />
      <ServiceAbout />
    </div>
  );
}
