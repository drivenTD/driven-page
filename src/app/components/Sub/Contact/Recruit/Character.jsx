import styles from "./Character.module.scss";

export default function Character() {
  const panelsDate = [
    {
      title: "올바른 가치관과 선한<br/>영향력으로 함께 성장하는 미래",
      subTit: "Right Character",
      desc: "올바른 가치관을 바탕으로, 선한 영향력을 나누며,<br class='visibleMobile'/> 모두가 함께 발전하는 미래를 만들어 가기를 바랍니다.",
      imgUrl: "/image/contact/character/characterCont01.jpg"
    },
    {
      title: "미래를 함께 만들어가는 핵심 가치",
      subTit: "Ownership Mentality",
      desc: "모든 임직원이 주인의식을 가지고 회사의 비전과 목표를 공유하며,<br class='visibleMobile'/> 책임감을 가지고 행동할 때,<br class='visiblePc'/> <br class='visibleTablet'/>드리븐은 더 강해지고<br class='visibleMobile'/> 지속 가능한 성장을 이룰 수 있습니다.<br class='visibleMobile'/> 각자가 주인의 마음가짐으로 회사 발전에 기여하기를 바랍니다..",
      imgUrl: "/image/contact/character/characterCont02.jpg"
    },
    {
      title: "모든 어려움을 함께 극복하는 소통의 중요성",
      subTit: "Communication",
      desc: "소통은 성장의 힘입니다. 어려운 일도 동료들과<br class='visibleMobile'/> 소통하며 해결해 나가면, 불가능한 일이 없습니다.<br/>작은 걸음이지만, 협력할 때 그 힘은 커집니다.<br class='visibleMobile'/> 포기하지 않고 서로 믿으면, 함께 할 수 없는 길은 없습니다.",
      imgUrl: "/image/contact/character/characterCont03.jpg"
    }
  ];

  return (
    <section className={styles.chracterSection}>
      <div className="container">
        <div className="col-span-15">
          <div className="pageTxtWrap txtC">
            <p className="pageTit motion scaleUp">
              인재가 모이는 곳, <span lang="en">Driven</span>
            </p>
            <p className="pageDesc motion scaleUp">
              다양한 분야의 전문가들이 협력하며 새로운 아이디어와 솔루션을
              창출하는 공간으로,
              <br />
              개인의 역량을 최대한 발휘할 수 있는 환경을 제공합니.
            </p>
          </div>
        </div>
      </div>

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
              <p
                className="pageDesc white motion scaleUp"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          </section>
        ))}
      </main>
    </section>
  );
}
