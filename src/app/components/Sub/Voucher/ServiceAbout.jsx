"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ServiceAbout.module.scss";
import { useRef, useState } from "react";

import { ServiceData } from "./Data/ServiceData";

import SwiperButton from "@/image/global/swiperArrow.svg";
import Comma from "@/image/global/swiperItem-ico.svg";

export default function ServiceAbout() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // 활성화된 슬라이드의 인덱스를 추적

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // 현재 활성 슬라이드의 인덱스 업데이트
  };

  // 버튼의 opacity를 제어하는 함수
  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === ServiceData.length - 1;

  return (
    <section className={styles.serviceSection}>
      <div className="container">
        <div className={`${styles.titWrap} pageTxtWrap txtC motion scaleUp`}>
          <p className="pageTitMiuem">
            <span lang="en">VOUCHER</span>
            바우처 사업 전문 기업
          </p>
        </div>
      </div>
      {/* Swiper 컴포넌트 */}
      <div className={styles.serviceSwiper}>
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          spaceBetween={80}
          centeredSlides={true}
          loop={false}
          autoplay={true}
          pagination={{ clickable: true }}
          onSlideChange={onSlideChange}
          className="motion scaleUp"
          breakpoints={{
            768: {
              spaceBetween: 80
            },
            0: {
              spaceBetween: 20
            }
          }}
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.swipeItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div className={`${styles.slideContent} slideCont`}>
                <p className={styles.tit}>
                  <span className={styles.ico}>
                    <Comma />
                  </span>
                  <span lang="en">{item.labelEn}</span>
                  {item.label}
                </p>
                <ul className={styles.keyword}>
                  {item.keyword.map((keyword, idx) => {
                    return <li key={idx}>{keyword}</li>;
                  })}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.customNavigation}>
          <button
            className={styles.prevButton}
            onClick={handlePrev}
            style={{ opacity: isFirstSlide ? 0.3 : 1 }}
          >
            <SwiperButton />
          </button>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            style={{ opacity: isLastSlide ? 0.3 : 1 }}
          >
            <SwiperButton />
          </button>
        </div>
      </div>
    </section>
  );
}
