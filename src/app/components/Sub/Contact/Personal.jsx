"use client";
import { useState } from "react";
import styles from "./Contact.module.scss";
import CloseSVG from "@/image/global/close-ico.svg";

export default function Personal({ isPersonalPopup, onClose }) {
  console.log(isPersonalPopup, onClose);
  return (
    <div
      className={`${styles.personalPopup} ${
        isPersonalPopup ? `${styles.active}` : ""
      }`}
      id="personalPopup"
    >
      <div className={styles.popupContianer}>
        <div className={styles.head}>
          <p className={styles.tit}>개인정보처리방침</p>
          <button onClick={onClose}>
            <CloseSVG />
          </button>
        </div>
        <div className={styles.body}>
          <ul>
            <li>
              <span>개인정보의 수집·이용 목적</span>
              <p>
                서비스 제공 및 계약의 이행, 구매 및 대금결제, 물품배송 또는
                청구지 발송, 회원관리 등을 위한 목적
              </p>
            </li>
            <li>
              <span>수집하려는 개인정보의 항목</span>
              <p>이름,주소,연락처,이메일 등</p>
            </li>
            <li>
              <span>개인정보의 보유 및 이용 기간</span>
              <p>
                회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외없이
                해당정보를 파기합니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
