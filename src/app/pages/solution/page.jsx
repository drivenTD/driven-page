"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SubVisual from "@/components/Sub/Visual";
import DatamonAbout from "@/components/Sub/Solution/About";
import DataEnvironment from "@/components/Sub/Solution/DataEnvironment";
import SolutionList from "@/components/Sub/Solution/SolutionList";
import Casestudy from "@/components/Sub/Solution/Casestudy";

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
        start: "top bottom",
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="subTemplate">
      <SubVisual pagePosition="SOLUTION" pageName="SOLUTION" />
      <DatamonAbout />
      <DataEnvironment />
      <SolutionList />
      <Casestudy />
    </div>
  );
}
