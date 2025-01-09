"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SubVisual from "@/components/Sub/Visual";
import Character from "@/components/Sub/Contact/Recruit/Character";
import Culture from "@/components/Sub/Contact/Recruit/Culture";
import Recruitmenut from "@/components/Sub/Contact/Recruit/Recruitmenut";
import Introduction from "@/components/Sub/Contact/Recruit/Introduction";

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
      <SubVisual pagePosition="CONTACT" pageName="RECRUIT" />
      <Character />
      <Culture />
      <Recruitmenut />
      <Introduction />
    </div>
  );
}
