import { useEffect } from "react";
import styles from "./SolutionList.module.scss";

export default function SolutionList() {
  const itemData = [
    {
      label: "INSIGHT SOLUTION",
      desc: "데이터몬은 데이터의 모든 과정을 한눈에 관리하고<br />분석할 수 있는 포괄적 솔루션을 제공합니다."
    },
    {
      label: "OPTIMIZATION SOLUTION",
      desc: "패널 설계, A/B Test, 검색엔진최적화, 행동파악을 통해 사이트의<br class='visibleMobile' /> 사용성을 높입니다.<br class='visiblePc visibleTablet' />사이트 KPI 달성을 위한 전략을 수립하고<br class='visibleMobile' /> 프로모션의 효과성을 측정합니다."
    },
    {
      label: "ON-DEMAND SOLUTION",
      desc: "클라이언트의 니즈에 맞는 맞춤형 데이터 분석 서비스를 제공합니다.<br />문제를 해결하기 위한 최적의 방법론을 제안합니다."
    }
  ];

  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.item}`);
    items[0].classList.add(styles.action);
    items.forEach((item) => {
      item.addEventListener("mouseover", () => {
        items.forEach((i) => i.classList.remove(styles.action));

        item.classList.add(styles.action);
      });
    });
  }, []);

  return (
    <section className={styles.accordionSection}>
      <div className="container">
        <div className={`${styles.titWrap} pageTxtWrap txtC motion scaleUp`}>
          <p className="pageTitMiuem black">
            <span lang="en">DATAMON</span>
            데이터 기반 성공을 위한 통합 솔루션
          </p>
          <p className="pageDesc">
            SOLUTION, INSIGHT, OPTIMIZATION, ON-DEMAND 서비스를 결합하여, 실시간
            <br className="visiblePc" />
            <br className="visibleTablet" />
            인사이트와 맞춤형 솔루션을 제공하고 최적화된 성과를 통해 비즈니스
            <br className="visiblePc" />
            <br className="visibleTablet" />
            성공을 이끕니다. 필요할 때 언제든지 제공합니다.
          </p>
        </div>

        <div className={`${styles.accordionListWrap} col-span-15`}>
          <ul className={styles.accordionList}>
            {itemData.map((data, index) => (
              <li key={index} className={`${styles.item} motion scaleUp`}>
                <p
                  className={styles.coverTit}
                  dangerouslySetInnerHTML={{ __html: data.label }}
                />
                <div className={styles.txtWrap}>
                  <p
                    className={styles.tit}
                    lang="en"
                    dangerouslySetInnerHTML={{ __html: data.label }}
                  />
                  <p
                    className={styles.desc}
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
