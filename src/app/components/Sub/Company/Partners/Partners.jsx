import { partners01 } from "./PartnersItem";
import { partners02 } from "./PartnersItem";

import styles from "./Partners.module.scss";

export default function Partners() {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.wrap}>
        <div className={styles.partnersGrid}>
          {partners01?.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <img src={partner.img} alt={partner.alt} />
            </div>
          ))}
        </div>

        <div className={styles.partnersGrid}>
          {partners01?.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <img src={partner.img} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.txtBox}`}>
        <div className="container">
          <div className="col-span-15">
            우리는 다양한 파트너사와 함께
            <br className="visibleMobile" /> 광고 성과 향상 및 광고주의
            <br className="visibleMobile" />
            만족 극대화를 위해 일하고 있습니다.
            <br />
            <br className="visibleMobile" />
            Driven은 다양한 업종의 광고를 집행 및
            <br className="visibleMobile" /> 수 많은 캠페인을 성공시킨 경험을
            <br className="visibleMobile" />
            보유하고 있습니다.
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.partnersGrid}>
          {partners02?.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <img src={partner.img} alt={partner.alt} />
            </div>
          ))}
        </div>

        <div className={styles.partnersGrid}>
          {partners02?.map((partner, index) => (
            <div key={index} className={styles.partnerItem}>
              <img src={partner.img} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
