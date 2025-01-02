"use client";

import { clientItem } from "./ClientsItem";

import styles from "./Clients.module.scss";

export default function Clients() {
  return (
    <section className={styles.clientSection}>
      <div className="container">
        <div className={`${styles.txtBox} col-span-15`}>
          <p className={styles.tit}>
            맞춤형 광고 컨설팅으로
            <br className="visibleMobile" />
            비즈니스 성공을 함께합니다.
          </p>
          <p className={styles.desc}>
            Driven은 대기업, 중견기업, 소상공인 등 다양한 규모의 광고주를
            대상으로, 각자의 상황과 필요에 맞춘 맞춤형 광고 컨설팅을 제공합니다.
            <br />
            <br className="visibleMobile" />
            한정된 광고 예산으로도 비즈니스 성공을 이끌어내고자 하는
            <br className="visibleMobile" />
            광고주 여러분, 지금 Driven과 함께하세요!
            <br />
            최적의 전략과 솔루션으로 귀사의 성장을 지원하겠습니다.
          </p>
        </div>

        <div className={styles.clientList}>
          {clientItem.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15`}
            >
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
