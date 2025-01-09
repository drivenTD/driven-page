import styles from "./SolutionItem.module.scss";

export default function SolutionItem() {
  const panelsDate = [
    {
      title: "잠재고객 분석",
      subTit: "Full-Funnel",
      imgUrl: "/image/marketing/google/SolutionItem01.jpg"
    },
    {
      title: "예산 낭비 방지",
      subTit: "광고 집행 효율 극대화",
      imgUrl: "/image/marketing/google/SolutionItem02.jpg"
    },
    {
      title: "WEB + APP",
      subTit: "통합 관리",
      imgUrl: "/image/marketing/google/SolutionItem03.jpg"
    },
    {
      title: "전자상거래 및 APP 트래킹",
      subTit: "매출 증감 원인 정밀 분석",
      imgUrl: "/image/marketing/google/SolutionItem04.jpg"
    }
  ];

  return (
    <section className={styles.solutionItemSection}>
      <main className={styles.parallax__cont}>
        {panelsDate.map((item, index) => (
          <section
            className={styles.parallax__item}
            key={index}
            style={{
              background: `url(${item.imgUrl}) center no-repeat`
            }}
          >
            <div className={`${styles.titWrap} pageTxtWrap txtC`}>
              <p className={`${styles.tit} pageTitMiuem white motion scaleUp`}>
                <span>{item.subTit}</span>
                <strong dangerouslySetInnerHTML={{ __html: item.title }} />
              </p>
            </div>
          </section>
        ))}
      </main>
    </section>
  );
}
