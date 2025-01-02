"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SubVisual from "@/components/Sub/Visual";
import Read from "@/components/Sub/Company/Story/Read";
import Strategy from "@/components/Sub/Company/Story/Strategy";
import Organization from "@/components/Sub/Company/Story/Organization";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const motionElements = document.querySelectorAll(".motion");

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
      <SubVisual pagePosition="COMPANY" pageName="STORY" />
      <Read />
      <Strategy />
      <Organization />
    </div>
  );
}
