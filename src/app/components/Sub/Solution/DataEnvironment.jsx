import styles from "./DataEnvironment.module.scss";

export default function DataEnvironment() {
  const itemData = [
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "데이터 품질 관리",
      labelEn: "Data Quality<br/>Management",
      desc: "데이터의 정확성과 일관성을 개선합니다."
    },
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "UI/UX 최적화",
      labelEn: "UI/UX<br/>Optimization",
      desc: "사용자 중심의 직관적 디자인을 제공합니다."
    },
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "데이터 분석",
      labelEn: "Data<br/>Analysis",
      desc: "데이터를 분석해 유용한 인사이트를 도출합니다."
    },
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "데이터 클러스터링",
      labelEn: "Data<br/>Clustering",
      desc: "유사한 특성의 데이터를 그룹화합니다."
    },
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "ML 모델링",
      labelEn: "ML<br/>Modeling",
      desc: "머신러닝 모델을 설계하고 훈련합니다."
    },
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "데이터 시각화",
      labelEn: "Data<br/>Visualization",
      desc: "데이터를 그래프나 차트로 쉽게 표현합니다."
    },
    {
      class: "col-lg-1 col-md-1 col-xs-1",
      label: "데이터 추출",
      labelEn: "Data<br/>Extraction",
      desc: "다양한 소스에서 데이터를 수집합니다."
    },
    {
      class: "col-lg-3 col-md-1 col-xs-1",
      label: "데이터몬",
      labelEn: "DATA MON",
      desc: "데이터 추출, 분석, 시각화, 품질 관리, ML모델링, 데이터 클러스터링 등 데이터 환경 구축 솔루션을 제공합니다."
    }
  ];

  return (
    <div className={styles.environmentSection}>
      <div className={styles.backgroundVideo}>
        <video
          muted
          autoPlay
          loop
          playsInline
          data-object-fit="cover"
          data-wf-ignore="true"
        >
          <source src="/video/solutionData.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div
          className={`${styles.titWrap} col-span-15 pageTxtWrap txtC motion scaleUp`}
        >
          <p className="pageTitMiuem white txtL">
            <span lang="en">VOUCHER</span>
            전문화 프로세스
          </p>
        </div>

        <ul className={`${styles.dataLists}`}>
          {itemData.map((item, index) => (
            <li
              className={`${styles.item} ${item.class} col-span-15 motion scaleUp`}
              key={index}
            >
              <div className={styles.itemWrap}>
                <div className={styles.headCont}>
                  <span>{item.label}</span>
                  <p
                    lang="en"
                    dangerouslySetInnerHTML={{ __html: item.labelEn }} // 여기에서 HTML을 렌더링
                  />
                </div>
                <div className={styles.bodyCont}>{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
