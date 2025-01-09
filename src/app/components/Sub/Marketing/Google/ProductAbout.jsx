"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./ProductAbout.module.scss";

export default function ProductAbout() {
  const product = [
    {
      label:
        '<span>검색 광고 Search Ads</span><strong lang="en">Search Advertising</strong>',
      description:
        "광고 최적화, 예산 및 키워드 전략 등으로 검색광고<br /> 캠페인에 대한 전문성을 입증하였습니다.",
      imgUrl: "/image/marketing/google/horlzontalList01.png",
      keyword: [
        "Advertising on Google(Google 광고 게재)",
        "Optimize search marketing(검색광고 최적화)",
        "Establishing a keyword strategy(키워드 전략 수립)",
        "Advanced Ads Support(Google 광고 고급지원)"
      ]
    },
    {
      label:
        '<span>디스플레이 광고 Google Ads</span><strong lang="en">Display Dvertising</strong>',
      description:
        "디스플레이 캠페인 생성, 관리, 측정, 최적화의<br/>고급 개념 및 권장사항에 대한 지식 등<br/>디스플레이 광고를 잘 알고 능숙하게<br/>운영할 수 있음을 입증하였습니다.",
      imgUrl: "/image/marketing/google/horlzontalList02.png",
      keyword: [
        "Advertising on Google(Google 광고 게재)",
        "Mobile and Video(모바일 및 동영상)",
        "Online Marketing plan(온라인 마케팅 계획)",
        "Advanced Ads Support(Google 광고 고급지원)"
      ]
    },
    {
      label: '<span>YOUTUBE CERTIFIED</span><strong lang="en">YouTube</strong>',
      description:
        "구글 유튜브 캠페인에 대한 생성과 운영<br/>그리고 최적화에 대한 모범 사례를 포함한<br/>동영상 광고 역량을 입증하였습니다.",
      imgUrl: "/image/marketing/google/horlzontalList03.png",
      keyword: [
        "Advertising on Google(Google 광고 게재)",
        "Mobile and Video(모바일 및 동영상)",
        "Online Marketing plan(온라인 마케팅 계획)",
        "Advanced Ads Support(Google 광고 고급지원)"
      ]
    },
    {
      label: '<span>Google Ads</span><strong lang="en">Google Shoping</strong>',
      description:
        "구글 유튜브 캠페인에 대한 생성과 운영<br/> 그리고 최적화에 대한 모범 사례를 포함한<br/> 동영상 광고 역량을 입증하였습니다.",
      imgUrl: "/image/marketing/google/horlzontalList04.png",
      keyword: [
        "Advertising on Google(Google 광고 게재)",
        "Mobile and Video(모바일 및 동영상)",
        "Online Marketing plan(온라인 마케팅 계획)",
        "Advanced Ads Support(Google 광고 고급지원)"
      ]
    }
  ];

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
          toggleActions: "play none none reverse",
          id: `section-${index + 1}`
        }
      });

      if (index === 0) {
        gsap.to(section, {
          y: -200,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
            id: `img-${index + 1}`
          }
        });
      }

      if (index) {
        gsap.to(section, {
          scale: 1.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right right",
            toggleActions: "play none none reverse",
            id: `img-${index + 1}`
          }
        });
      }

      if (index % 2 !== 0) {
        gsap.to(section, {
          y: 20,
          duration: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right right",
            toggleActions: "play none none reverse",
            id: `img-${index + 1}`
          }
        });
      }

      if (index % 2 !== 1) {
        gsap.to(section, {
          y: -20,
          duration: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right right",
            toggleActions: "play none none reverse",
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
    <section className={styles.productSection}>
      <main className={styles.horizontal}>
        <section className={`${styles.parallax__item} ${styles.title__item}`}>
          <div className="container">
            <div className="col-span-15">
              <p className={styles.tit} lang="en">
                Google
                <br />
                Advertising
                <br />
                Products
              </p>
            </div>
          </div>
        </section>
        {product.map((item, index) => (
          <section className={styles.parallax__item} key={index}>
            <div className="col-span-15">
              <div className={`${styles.images} motion scaleUp`}>
                <div className={styles.imgDesc}>{item.desc}</div>
                <ul className={styles.imgDesc}>
                  {item.keyword.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
                <img src={item.imgUrl} alt={item.desc || "Project Image"} />
              </div>
            </div>
          </section>
        ))}
      </main>
    </section>
  );
}
