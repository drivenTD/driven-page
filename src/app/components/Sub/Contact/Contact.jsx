"use client";
import { useState } from "react";

import styles from "./Contact.module.scss";
import Personal from "./Personal";

// Images
import CheckSVG from "@/image/global/checked-ico.svg";

export default function Contact() {
  const body = document.querySelector("html", "body");
  const [isPersonalPopup, setIsPersonalPopup] = useState(false);
  const [isOtherChecked, setIsOtherChecked] = useState(true);

  const handlePopup = (event) => {
    event.preventDefault();
    body.style.overflow = "hidden";
    setIsPersonalPopup((prev) => !prev);
  };

  const closePopup = () => {
    body.style.overflow = "auto";
    setIsPersonalPopup(false);
  };

  const handleOtherChange = () => {
    setIsOtherChecked((prev) => !prev);
  };

  const focusOnInput = () => {
    const inputField = document.getElementById("supportOther");

    if (isOtherChecked) {
      inputField.removeAttribute("disabled");
      inputField.focus();
    } else {
      inputField.setAttribute("disabled", "true");
      inputField.value = "";
    }
  };

  return (
    <>
      <section className={`${styles.contactSection} section`}>
        <div className="container">
          <div className={`${styles.wrap} col-lg-4 col-lg-span-1`}>
            <div className="col-span-15">
              <div className="pageTxtWrap txtC">
                <p className="pageTit">
                  함께하는 성공의 시작, <span lang="en">Driven</span>
                </p>
                <p className="pageDesc">
                  Driven은 다양한 규모의 광고주들에게 맞춤형 광고
                  <br className="visibleMobile" /> 컨설팅을 제공하는 마케팅
                  파트너입니다.
                  <br />
                  효율적인 예산 활용과 데이터 기반 전략으로
                  <br className="visibleMobile" /> 비즈니스 성장을 지원합니다.
                </p>
              </div>
            </div>

            <div className="col-span-15">
              <div className={styles.formContainer}>
                <form>
                  <div className={styles.formWrap}>
                    <div className={styles.txtWrap}>
                      <p className={styles.tit}>
                        <label htmlFor="name" className={`${styles.formLabel}`}>
                          기본정보
                        </label>
                        <span className={styles.essential}>*</span>
                      </p>
                      <p className={styles.essentialBox}>
                        <span className={styles.essential}>*</span>
                        필수항목
                      </p>
                    </div>
                    <div className={styles.flexBox}>
                      {/* 이름 */}
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="name"
                          className={`${styles.formLabel} ${styles.srOnly}`}
                        >
                          이름
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={styles.formInput}
                          placeholder="이름을 입력하세요"
                        />
                      </div>

                      {/* 회사명 */}
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="company"
                          className={`${styles.formLabel} ${styles.srOnly}`}
                        >
                          회사명
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className={styles.formInput}
                          placeholder="회사명을 입력하세요"
                        />
                      </div>
                    </div>

                    <div className={styles.flexBox}>
                      {/* 연락처 */}
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="contact"
                          className={`${styles.formLabel} ${styles.srOnly}`}
                        >
                          연락처
                        </label>
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          className={styles.formInput}
                          placeholder="연락처를 입력하세요"
                        />
                      </div>

                      {/* 이메일 */}
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="email"
                          className={`${styles.formLabel} ${styles.srOnly}`}
                        >
                          이메일
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={styles.formInput}
                          placeholder="이메일을 입력하세요"
                        />
                      </div>
                    </div>

                    {/* 홈페이지 주소 */}
                    <div className={`${styles.formGroup} ${styles.single}`}>
                      <label
                        htmlFor="website"
                        className={`${styles.formLabel} ${styles.srOnly}`}
                      >
                        홈페이지 주소
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className={styles.formInput}
                        placeholder="홈페이지 주소를 입력하세요"
                      />
                    </div>
                  </div>

                  <div className={styles.formWrap}>
                    <div className={styles.txtWrap}>
                      <p className={styles.tit}>
                        월 예상 광고비{" "}
                        <span className={styles.essential}>*</span>
                      </p>
                    </div>

                    {/* 월 예상 광고비 */}
                    <div className={styles.formGroup}>
                      <div
                        className={`${styles.radioGroup} ${styles.checkedGroup}`}
                      >
                        <input
                          type="radio"
                          id="around10M"
                          name="budget"
                          value="around10M"
                        />
                        <label htmlFor="around10M">1000만원 전후</label>

                        <input
                          type="radio"
                          id="above50M"
                          name="budget"
                          value="above50M"
                        />
                        <label htmlFor="above50M">5000만원 이상</label>

                        <input
                          type="radio"
                          id="above100M"
                          name="budget"
                          value="above100M"
                        />
                        <label htmlFor="above100M">1억원 이상</label>

                        <input
                          type="radio"
                          id="noBudgetConsulting"
                          name="budget"
                          value="noBudgetConsulting"
                        />
                        <label htmlFor="noBudgetConsulting">
                          예산컨설팅(없음)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formWrap}>
                    <div className={styles.txtWrap}>
                      <p className={styles.tit}>
                        필요 지원 내용{" "}
                        <span className={styles.essential}>*</span>{" "}
                        <span className={styles.checkedEx}>
                          (중복선택 가능)
                        </span>
                      </p>
                    </div>
                    {/* 지원 내용 */}
                    <div className={`${styles.formGroup}`}>
                      <div
                        className={`${styles.checkboxGroup} ${styles.checkedGroup}`}
                      >
                        <input
                          type="checkbox"
                          id="businessModel"
                          name="support"
                          value="businessModel"
                        />
                        <label htmlFor="businessModel">
                          비즈니스 모델 설계
                        </label>

                        <input
                          type="checkbox"
                          id="techEnhancement"
                          name="support"
                          value="techEnhancement"
                        />
                        <label htmlFor="techEnhancement">기술 역량 강화</label>

                        <input
                          type="checkbox"
                          id="marketingStrategy"
                          name="support"
                          value="marketingStrategy"
                        />
                        <label htmlFor="marketingStrategy">
                          마케팅 및 고객 유치 전략
                        </label>

                        <input
                          type="checkbox"
                          id="projectManagement"
                          name="support"
                          value="projectManagement"
                        />
                        <label htmlFor="projectManagement">
                          프로젝트 관리 시스템 구축
                        </label>

                        <input
                          type="checkbox"
                          id="networkingPartnership"
                          name="support"
                          value="networkingPartnership"
                        />
                        <label htmlFor="networkingPartnership">
                          네트워킹 및 파트너십
                        </label>

                        <input
                          type="checkbox"
                          id="funding"
                          name="support"
                          value="funding"
                        />
                        <label htmlFor="funding">투자 및 자금 조달</label>

                        <input
                          type="checkbox"
                          id="other"
                          name="support"
                          value="other"
                          onChange={handleOtherChange}
                          onClick={focusOnInput} // 클릭 시 포커스
                        />
                        <label htmlFor="other">기타</label>

                        <input
                          type="text"
                          id="supportOther"
                          name="supportOther"
                          disabled
                          className={`${styles.inputText} ${styles.formInput}`}
                          placeholder="기타 내용을 입력하세요"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.formWrap}>
                    <div className={styles.txtWrap}>
                      <p className={styles.tit}>
                        <label
                          htmlFor="additionalRequest"
                          className={styles.formLabel}
                        >
                          추가 요청사항
                        </label>
                      </p>
                    </div>
                    {/* 추가 요청사항 */}
                    <div className={styles.formGroup}>
                      <textarea
                        id="additionalRequest"
                        name="additionalRequest"
                        className={styles.textarea}
                        placeholder="추가 요청사항을 입력하세요"
                      ></textarea>
                    </div>

                    <div
                      className={`${styles.formGroup} ${styles.personalGroup}`}
                    >
                      <label htmlFor="personal">
                        <input
                          type="checkbox"
                          name="personal"
                          id="personal"
                          value="personal"
                        />
                        <CheckSVG />
                        개인정보취급방침에 동의합니다.
                      </label>
                      <button
                        onClick={(event) => {
                          handlePopup(event);
                        }}
                      >
                        자세히보기
                      </button>
                    </div>

                    {/* 전송 버튼 */}
                    <div className={styles.submitBox}>
                      <button type="submit" className={styles.submitButton}>
                        제출하기
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Personal isPersonalPopup={isPersonalPopup} onClose={closePopup} />
    </>
  );
}
