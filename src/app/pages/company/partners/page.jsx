"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SubVisual from "@/components/Sub/Visual";
import Partners from "@/components/Sub/Company/Partners/Partners";
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
    <div className="subTemplate">
      <SubVisual pagePosition="COMPANY" pageName="PARTNERS" />
      <Partners />
    </div>
  );
}
