"use client";

import { useEffect, useState } from "react";
import Script from "next/script"; // Script 컴포넌트 사용

import Link from "next/link";
import styles from "./Map.module.scss";

import DrivenLogo from "@/image/global/logo.svg";
import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function Map() {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false); // API 로드 여부를 체크하는 state

  useEffect(() => {
    // Kakao Maps API가 로드되었는지 확인
    if (isKakaoLoaded && window.kakao) {
      // Kakao Maps API 로드 후 실행
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 맵을 표시할 DOM 요소
        const options = {
          center: new window.kakao.maps.LatLng(
            37.52114142117729,
            127.03856029818272
          ), // 초기 위치
          level: 3 // 확대/축소 레벨
        };
        const map = new window.kakao.maps.Map(container, options); // 맵 객체 생성

        // 스크롤로 인한 확대/축소를 막기
        map.setZoomable(false);

        // 마커를 표시할 위치 (위도, 경도)
        const markerPosition = new window.kakao.maps.LatLng(
          37.52114142117729,
          127.03856029818272
        );

        // 마커 객체 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });

        // 마커를 지도에 표시
        marker.setMap(map);

        // 커스텀 오버레이 내용 (HTML)
        const customOverlayContent =
          '<div class="overlaybox">' +
          '    <div class="boxtitle">PERFORMANCE MARKETING DRIVEN</div>' +
          "</div>";

        // 커스텀 오버레이 생성
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: customOverlayContent,
          xAnchor: 0.3,
          yAnchor: 0.91
        });

        // 커스텀 오버레이 지도에 표시
        customOverlay.setMap(map);
      });
    }
  }, [isKakaoLoaded]); // isKakaoLoaded가 변경될 때만 실행

  return (
    <section className={styles.mapSection}>
      <div className="container">
        <div className="col-span-15">
          <div className="pageTxtWrap txtC">
            <p className="pageTit">
              <span lang="en">Driven</span> 오시는 길
            </p>
            <p className="pageDesc">
              Driven은 고객과의 소통과 성공적인 비즈니스
              <br className="visibleMobile" /> 지원을 위해 언제나 열려 있습니다.
              <br />
              오시는 길에 대해 궁금한 점이 있다면
              <br className="visibleMobile" /> 언제든지 연락 주시면 친절히
              안내해 드리겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.mapWrap} container`}>
        <div className="col-span-15">
          {/* 카카오맵 API 스크립트 로드 */}
          <Script
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
            strategy="lazyOnload"
            onLoad={() => setIsKakaoLoaded(true)} // API가 로드되면 isKakaoLoaded를 true로 설정
          />
          {/* 지도 표시 영역 */}
          <div
            id="map"
            className={styles.map}
            style={{
              width: "100%",
              height: "500px" // 지도 크기 설정
            }}
          ></div>
        </div>
      </div>

      {/* 주소 및 연락처 정보 */}
      <div className={`${styles.adressWrap} container`}>
        <div className={`${styles.infoWrap} col-lg-3 col-md-3 col-xs-1`}>
          <div className={`${styles.mapInfotxt} col-span-15`}>
            <p className={styles.tit} lang="en">
              ADRESS
            </p>
            <p className={styles.desc}>
              서울특별시 강남구 선릉로
              <br />
              145길 13, 202호 (럭스웨이빌딩)
            </p>
          </div>
          <div className={`${styles.mapInfotxt} col-span-15`}>
            <p className={styles.tit} lang="en">
              E-Mail
            </p>
            <p className={styles.desc}>
              <Link href="mailto:help@driven.co.kr">help@driven.co.kr</Link>
            </p>
          </div>
          <div className={`${styles.mapInfotxt} col-span-15`}>
            <p className={styles.tit} lang="en">
              TEL
            </p>
            <p className={styles.desc}>
              <Link href="tel:02-552-8818">02-552-8818</Link>
            </p>
          </div>
        </div>
        <div
          className={`${styles.buttonsWrap} col-lg-2 col-md-4 col-xs-1 col-lg-span-1 col-md-span-1`}
          lang="en"
        >
          <Link className="btn-line" href="/">
            KAKAO MAP
            <ButtonIco />
          </Link>
          <Link className="btn-line" href="/">
            NAVER MAP
            <ButtonIco />
          </Link>
          <Link className="btn-line" href="/">
            T MAP
            <ButtonIco />
          </Link>
        </div>
      </div>
    </section>
  );
}