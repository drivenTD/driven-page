"use client";

import { useEffect } from "react";
import styles from "./Project.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Project({ portfolio }) {
  if (!portfolio) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  const projectItems = Array.isArray(portfolio.section2[0].projectImg)
    ? portfolio.section2[0].projectImg.map((img, index) => ({
        img,
        desc: portfolio.section2[0].projectDesc?.[index] || ""
      }))
    : [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = document.querySelector(`.${styles.horizontal}`);
    const sections = gsap.utils.toArray(`.${styles.horizontal} > section`);

    if (horizontal) {
      horizontal.style.setProperty("--item-count", sections.length - 1);
    }

    let hasReloaded = false;

    const resizeObserver = () => {
      hasReloaded = true;
      window.location.reload();
    };

    window.addEventListener("resize", resizeObserver);

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - window.innerWidth),
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    sections.forEach((section, index) => {
      gsap.to(section, {
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none reverse none",
          id: `section-${index + 1}`
        }
      });

      if (index === 0) {
        gsap.to(section, {
          y: -200,
          scale: 1,
          duration: 2,
          ease: "elastic",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none reverse none",
            id: `img-${index + 1}`
          }
        });
      }

      if (index) {
        gsap.to(section, {
          scale: 1,
          duration: 5,
          ease: "elastic",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right right",
            toggleActions: "play none reverse none",
            id: `img-${index + 1}`
          }
        });
      }

      if (index % 2 !== 0) {
        gsap.to(section, {
          y: 20,
          duration: 3,
          ease: "ease",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right right",
            toggleActions: "play none reverse none",
            id: `img-${index + 1}`
          }
        });
      }

      if (index % 2 !== 1) {
        gsap.to(section, {
          y: -20,
          duration: 3,
          ease: "ease",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right right",
            toggleActions: "play none reverse none",
            id: `img-${index + 1}`
          }
        });
      }
    });

    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section className={styles.projectSection}>
      <div
        className={styles.projectVisual}
        style={{
          background: `url(${portfolio.projectVisual}) no-repeat`
        }}
      />

      <main className={styles.horizontal}>
        <section className={`${styles.parallax__item} ${styles.title__item}`}>
          <div className="container">
            <div className="col-span-15">
              <p className={styles.tit} lang="en">
                Key Project Tasks
              </p>
              <p
                className={styles.desc}
                dangerouslySetInnerHTML={{
                  __html: portfolio.section2[0]?.desc
                }}
              />
            </div>
          </div>
        </section>
        {projectItems.map((item, index) => (
          <section className={styles.parallax__item} key={index}>
            <div className="col-span-15">
              <div className={`${styles.images} motion scaleUp`}>
                <div className={styles.imgDesc}>{item.desc}</div>
                <img src={item.img} alt={item.desc || "Project Image"} />
              </div>
            </div>
          </section>
        ))}
      </main>
    </section>
  );
}
