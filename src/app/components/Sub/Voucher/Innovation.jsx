"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { tabs } from "./Data/tabsData";
import styles from "./Innovation.module.scss";

export default function Innovation() {
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭 인덱스

  useEffect(() => {
    const tabWrap = document.querySelector(`.tabWrap`);
    const localNavi = document.querySelector(`.${styles.localNavi}`);
    const mainImages = document.querySelectorAll(`.${styles.main}`);
    const size1 = document.querySelectorAll(`.${styles.size1}`);
    const regionInforms = document.querySelectorAll(`.${styles.inform}`);
    const informInner1 = document.querySelectorAll(`.${styles.informInner1}`);
    const informInner2 = document.querySelectorAll(`.${styles.informInner2}`);
    const informInner3 = document.querySelectorAll(`.${styles.informInner3}`);

    gsap.registerPlugin(ScrollTrigger);

    // stiscky를 위한 body overflow visible
    document.body.style.overflow = "visible";
    document.querySelectorAll(".subTemplate").forEach((element) => {
      element.style.overflow = "visible";
    });

    size1.forEach((item) => {
      const informElement = item.querySelector(`.${styles.inform}`);

      if (informElement) {
        informElement.remove();
      }
    });

    if (window.innerWidth >= 1280) {
      mainImages.forEach((image) => {
        const parentLi = image.closest("li");

        if (!parentLi.classList.contains("gsap-animated")) {
          const businessRegion = gsap.timeline({
            scrollTrigger: {
              trigger: tabWrap,
              start: "10% top",
              end: "bottom bottom",
              scrub: 2,
              toggleActions: "restart none none reverse",
              invalidateOnRefresh: true,
              onEnter: () => {
                localNavi.classList.add(`${styles.action}`);
              },
              onLeave: () => {},
              onEnterBack: () => {},
              onLeaveBack: () => {
                localNavi.classList.remove(`${styles.action}`);
              },
              markers: false
            }
          });

          businessRegion
            .addLabel("blt1Pc")
            .fromTo(
              parentLi,
              {
                duration: 0.3
              },
              {
                width: "70.667vw",
                duration: 0.3
              },
              "blt1Pc"
            )
            .fromTo(
              mainImages,
              {
                duration: 0.3
              },
              {
                height: "42.24vw",
                duration: 0.3
              },
              "blt1Pc"
            );

          informInner1.forEach((informInner1) => {
            businessRegion
              .fromTo(
                informInner1,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=0.1"
              )
              .to(
                informInner1,
                {
                  opacity: 0,
                  duration: 0.3
                },
                "blt1Pc+=0.6"
              );
          });

          informInner2.forEach((informInner2) => {
            businessRegion
              .fromTo(
                informInner2,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=1.1"
              )
              .to(
                informInner2,
                {
                  transform: "translateY(-50%)",
                  opacity: 0,
                  duration: 0.3,
                  delay: 0.5
                },
                "blt1Pc+=1.1"
              );
          });

          informInner3.forEach((informInner3) => {
            businessRegion
              .fromTo(
                informInner3,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=1.7"
              )
              .to(
                informInner3,
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3,
                  delay: 0.5
                },
                "blt1Pc+=1.7"
              );
          });

          businessRegion
            .to(
              parentLi,
              {
                width: "calc(100vw + 3.2rem)",
                duration: 0.3
              },
              "blt1Pc+=0.8"
            )
            .to(
              mainImages,
              {
                height: "100vh",
                borderRadius: "0",
                duration: 0.3,
                onComplete: function () {
                  regionInforms.forEach((regionInform) => {
                    regionInform.classList.add("on");
                  });
                },
                onReverseComplete: function () {
                  regionInforms.forEach((regionInform) => {
                    regionInform.classList.remove("on");
                  });
                }
              },
              "blt1Pc+=0.8"
            );

          parentLi.classList.add("gsap-animated");
        }
      });
    } else if (window.innerWidth >= 768) {
      mainImages.forEach((image) => {
        const parentLi = image.closest("li");

        if (!parentLi.classList.contains("gsap-animated")) {
          const businessRegion = gsap.timeline({
            scrollTrigger: {
              trigger: tabWrap,
              start: "10% top",
              end: "bottom bottom",
              scrub: 2,
              toggleActions: "restart none none reverse",
              invalidateOnRefresh: true,
              onEnter: () => {
                localNavi.classList.add(`${styles.action}`);
              },
              onLeave: () => {},
              onEnterBack: () => {},
              onLeaveBack: () => {
                localNavi.classList.remove(`${styles.action}`);
              },
              markers: false
            }
          });

          businessRegion
            .addLabel("blt1Pc")
            .fromTo(
              parentLi,
              {
                duration: 0.3
              },
              {
                width: "70.667vw",
                duration: 0.3
              },
              "blt1Pc"
            )
            .fromTo(
              mainImages,
              {
                duration: 0.3
              },
              {
                height: "90vh",
                duration: 0.3
              },
              "blt1Pc"
            );

          informInner1.forEach((informInner1) => {
            businessRegion
              .fromTo(
                informInner1,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=0.1"
              )
              .to(
                informInner1,
                {
                  opacity: 0,
                  duration: 0.3
                },
                "blt1Pc+=0.6"
              );
          });

          informInner2.forEach((informInner2) => {
            businessRegion
              .fromTo(
                informInner2,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=1.1"
              )
              .to(
                informInner2,
                {
                  transform: "translateY(-50%)",
                  opacity: 0,
                  duration: 0.3,
                  delay: 0.5
                },
                "blt1Pc+=1.1"
              );
          });

          informInner3.forEach((informInner3) => {
            businessRegion
              .fromTo(
                informInner3,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=1.7"
              )
              .to(
                informInner3,
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3,
                  delay: 0.5
                },
                "blt1Pc+=1.7"
              );
          });

          businessRegion
            .to(
              parentLi,
              {
                width: "calc(100vw + 3.2rem)",
                duration: 0.3
              },
              "blt1Pc+=0.8"
            )
            .to(
              mainImages,
              {
                height: "100vh",
                borderRadius: "0",
                duration: 0.3,
                onComplete: function () {
                  regionInforms.forEach((regionInform) => {
                    regionInform.classList.add("on");
                  });
                },
                onReverseComplete: function () {
                  regionInforms.forEach((regionInform) => {
                    regionInform.classList.remove("on");
                  });
                }
              },
              "blt1Pc+=0.8"
            );

          parentLi.classList.add("gsap-animated");
        }
      });
    } else if (window.innerWidth <= 768) {
      mainImages.forEach((image) => {
        const parentLi = image.closest("li");

        if (!parentLi.classList.contains("gsap-animated")) {
          const businessRegion = gsap.timeline({
            scrollTrigger: {
              trigger: tabWrap,
              start: "10% top",
              end: "bottom bottom",
              scrub: 2,
              toggleActions: "restart none none reverse",
              invalidateOnRefresh: true,
              onEnter: () => {
                localNavi.classList.add(`${styles.action}`);
              },
              onLeave: () => {},
              onEnterBack: () => {},
              onLeaveBack: () => {
                localNavi.classList.remove(`${styles.action}`);
              },
              markers: false
            }
          });

          businessRegion
            .addLabel("blt1Pc")
            .fromTo(
              parentLi,
              {
                duration: 0.3
              },
              {
                width: "92vw",
                duration: 0.3
              },
              "blt1Pc"
            )
            .fromTo(
              mainImages,
              {
                duration: 0.3
              },
              {
                height: "92vh",
                duration: 0.3
              },
              "blt1Pc"
            );

          informInner1.forEach((informInner1) => {
            businessRegion
              .fromTo(
                informInner1,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=0.1"
              )
              .to(
                informInner1,
                {
                  opacity: 0,
                  duration: 0.3
                },
                "blt1Pc+=0.6"
              );
          });

          informInner2.forEach((informInner2) => {
            businessRegion
              .fromTo(
                informInner2,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=1.1"
              )
              .to(
                informInner2,
                {
                  transform: "translateY(-50%)",
                  opacity: 0,
                  duration: 0.3,
                  delay: 0.5
                },
                "blt1Pc+=1.1"
              );
          });

          informInner3.forEach((informInner3) => {
            businessRegion
              .fromTo(
                informInner3,
                {
                  transform: "translateY(15vh)",
                  opacity: 0,
                  duration: 0.3
                },
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3
                },
                "blt1Pc+=1.7"
              )
              .to(
                informInner3,
                {
                  transform: "translateY(-50%)",
                  opacity: 1,
                  duration: 0.3,
                  delay: 0.5
                },
                "blt1Pc+=1.7"
              );
          });

          // parentLi 및 mainImages의 추가 애니메이션
          businessRegion
            .to(
              parentLi,
              {
                width: "calc(100vw + 3.2rem)",
                duration: 0.3
              },
              "blt1Pc+=0.8"
            )
            .to(
              mainImages,
              {
                height: "100vh",
                borderRadius: "0",
                duration: 0.3,
                onComplete: function () {
                  regionInforms.forEach((regionInform) => {
                    regionInform.classList.add("on");
                  });
                },
                onReverseComplete: function () {
                  regionInforms.forEach((regionInform) => {
                    regionInform.classList.remove("on");
                  });
                }
              },
              "blt1Pc+=0.8"
            );

          parentLi.classList.add("gsap-animated");
        }
      });
    }
  }, [activeTab]);

  return (
    <section className={`${styles.innovationSection} section`}>
      <div className="container motion scaleUp">
        <div className="pageTxtWrap txtC">
          <p className="pageTitBig">
            <span lang="en">SME Innovation & Global Growth</span>
            중소기업 혁신과 글로벌 도약
          </p>
          <p className="pageDesc type2">
            사업은 중소기업이 국내외 시장에서 경쟁력을
            <br className="visibleMobile" /> 강화하고 지속 가능한 성장을
            이루도록 돕는 프로그램입니다.
            <br />
            기업별 역량과 필요에 맞는 다양한 지원을 통해 혁신적인
            <br className="visibleMobile" /> 기술 개발, 효율적인 경영 개선, 해외
            시장 진출 등을 촉진합니다.
          </p>
        </div>
      </div>

      <div className={styles.motionBox}>
        <div className={`${styles.tabWrap} tabWrap `}>
          <nav className={`${styles.localNavi} tabsNavi`}>
            <ul className={`tabsLlist`}>
              {tabs.map((tab) => (
                <li className="tabsItem" key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={activeTab === tab.id ? "current" : ""}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`${styles.tabCont} tabsContent`}>
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div
                    className={
                      activeTab === tab.id ? "tabArea current" : "tabArea"
                    }
                    key={tab.id}
                    style={{ height: "100%" }}
                  >
                    <div className={styles.regionBody}>
                      <div className={styles.regionBodyWrap}>
                        <ul className={styles.regionThumbnail}>
                          {tab.content.map((image, index) => {
                            // 이미지가 children 배열을 포함하는 경우 처리
                            if (image.children) {
                              return (
                                <li
                                  className={styles.thumbnailItem}
                                  key={index}
                                >
                                  {image.children.map(
                                    (childImage, childIndex) => (
                                      <div
                                        className={`${styles.thumbnailBody} ${
                                          styles[childImage.size]
                                        }`}
                                        key={childIndex}
                                      >
                                        <div className={styles.thumbnailFigure}>
                                          <picture className={styles.picture}>
                                            <img
                                              src={childImage.src}
                                              alt={childImage.alt}
                                            />
                                          </picture>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </li>
                              );
                            }

                            // "main" size인 이미지를 확인하여 클래스를 추가
                            return (
                              <li className={styles.thumbnailItem} key={index}>
                                <div
                                  className={`${styles.thumbnailBody} ${
                                    styles[image.size]
                                  }`}
                                >
                                  <div className={styles.thumbnailFigure}>
                                    <picture className={styles.picture}>
                                      <img
                                        className={
                                          image.size === "main"
                                            ? styles.mainImage
                                            : ""
                                        }
                                        src={image.src}
                                        alt={image.alt}
                                      />
                                    </picture>
                                  </div>

                                  {activeTab === 0 && (
                                    <div className={styles.inform}>
                                      <div className={styles.informInner1}>
                                        <div className="pageTxtWrap">
                                          <p className="pageTitMiuem white">
                                            <span>EXPORT VOUCHER</span>
                                            수출지원기반활용사업
                                          </p>
                                          <p className="pageDesc">
                                            드리븐은 귀사 성공적인 해외 진출을
                                            위해
                                            <br />
                                            데이터 기반의 디지 마케팅 서비스를
                                            지원합니다.
                                          </p>
                                        </div>
                                      </div>
                                      <div className={styles.informInner2}>
                                        <div className="pageTxtWrap">
                                          <p className="pageTitMiuem white">
                                            수출 바우처란?
                                          </p>
                                          <p className="pageDesc">
                                            각 정부부처 수출지원사업간 칸막이를
                                            제거하고 중소ㆍ중견기업이
                                            <br />
                                            자사의 수출역량에 맞는 수출지원
                                            사업을 자유롭게 선택할 수 있도록
                                            <br />
                                            ‘바우처’ 형태로 도입한 정부 지원
                                            사업입니다.
                                          </p>
                                        </div>
                                      </div>
                                      <div className={styles.informInner3}>
                                        <p>
                                          중소·중견기업의 수출을 돕는 맞춤형
                                          정부 지원 사업!
                                          <br />
                                          필요한 수출지원 서비스를 바우처로
                                          자유롭게 선택하세요.
                                        </p>
                                        <ul className={styles.list}>
                                          <li>
                                            <img
                                              src="/image/voucher/export_logo1.png"
                                              alt="수출바우처 로고1"
                                            />
                                          </li>
                                          <li>
                                            <img
                                              src="/image/voucher/export_logo2.png"
                                              alt="수출바우처 로고2"
                                            />
                                          </li>
                                          <li>
                                            <img
                                              src="/image/voucher/export_logo3.png"
                                              alt="수출바우처 로고3"
                                            />
                                          </li>
                                          <li>
                                            <img
                                              src="/image/voucher/export_logo4.png"
                                              alt="수출바우처 로고4"
                                            />
                                          </li>
                                        </ul>
                                        <div className={styles.submitBox}>
                                          <button
                                            type="submit"
                                            className={styles.submitButton}
                                          >
                                            제출하기
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {activeTab === 1 && (
                                    <div className={styles.inform}>
                                      <div className={styles.informInner1}>
                                        <div className="pageTxtWrap">
                                          <p className="pageTitMiuem black">
                                            <span>INNOVATION VOUCHER</span>
                                            중소기업 혁신바우처 플랫폼
                                          </p>
                                          <p className="pageDesc black">
                                            드리븐은 우리회삭에 딱 맞는 온라인
                                            마케팅 방향성 도출 및<br />
                                            온라인 환경 구축(온라인 광고,
                                            홍보영상, 홈페이지 등) 제공합니다.
                                          </p>
                                        </div>
                                      </div>
                                      <div className={styles.informInner2}>
                                        <div className="pageTxtWrap">
                                          <p className="pageTitMiuem black">
                                            혁신 바우처란?
                                          </p>
                                          <p className="pageDesc black">
                                            성장 가능성 높은 중소기업 대상으로
                                            진단을 통한 기업 특성별
                                            <br />
                                            맞춤형 지원으로 중소기업의 경쟁력
                                            강화를 목적으로 하는 사업입니다.
                                          </p>
                                        </div>
                                      </div>
                                      <div
                                        className={`${styles.informInner3} ${styles.typeInnovation}`}
                                      >
                                        <p>
                                          혁신 바우처는 성장 가능성 높은
                                          <br className="visibleMobile" />
                                          중소기업을 대상으로 기업 진단과
                                          <br />
                                          맞춤형 지원을 통해 경쟁력 강화를 돕는
                                          <br className="visibleMobile" />
                                          정부 지원 사업입니다.
                                        </p>
                                        <ul
                                          className={`${styles.list} ${styles.typeInnovation}`}
                                        >
                                          <li>
                                            <img
                                              src="/image/voucher/innobation_logo1.png"
                                              alt="혁신바우처 로고1"
                                            />
                                          </li>
                                          <li>
                                            <img
                                              src="/image/voucher/export_logo3.png"
                                              alt="수출바우처 로고2"
                                            />
                                          </li>
                                        </ul>
                                        <div className={styles.submitBox}>
                                          <button
                                            type="submit"
                                            className={styles.submitButton}
                                          >
                                            제출하기
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
