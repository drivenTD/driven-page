import styles from "./Solution.module.scss";

export default function Solution() {
  return (
    <section className={styles.solutionSection}>
      <div className="container">
        <div className="col-lg-2 col-md-4 col-span-15">
          <div className={`${styles.titWrap} pageTxtWrap`}>
            <p className={`${styles.tit} pageTitMiuem black motion scaleUp`}>
              <span>WHO WE ARE</span>
              <strong>구글마케팅 솔루션은..</strong>
            </p>
            <p className="pageDesc black motion scaleUp">
              효과적인 마케팅을 위해 GA4 / GTM / UTM 3가지 병행 운영은 꼭
              필요합니다.
              <br /> <br />
              이를 통해 매체별 / 키워드별 / 고객행동 패턴을 분석해 고객이 전환을
              쉽게 할 수 있도록 최적화 운영을 하며 일반 브랜드 사이트 뿐만이
              아니라 전자상거래 및 앱 까지 데이터 트래킹으로 최고의 효과를 얻을
              수 있습니다
            </p>
          </div>
        </div>

        <div className="col-lg-1 col-md-4 col-xs-2 col-span-15 motion scaleUp">
          <div className={`${styles.solutionItem} ${styles.item1}`}>
            <img src="/image/marketing/google/solutionImg01.png" alt="" />
          </div>
        </div>
        <div className="col-lg-1 col-md-4 col-xs-2 col-span-15 motion scaleUp">
          <div className={`${styles.solutionItem} ${styles.item2}`}>
            <img src="/image/marketing/google/solutionImg02.png" alt="" />
          </div>
        </div>
        <div className="col-lg-1 col-md-4 col-xs-2 col-span-15 motion scaleUp">
          <div className={`${styles.solutionItem} ${styles.item3}`}>
            <img src="/image/marketing/google/solutionImg03.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
