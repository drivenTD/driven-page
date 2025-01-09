import styles from "../FixedinFocus.module.scss";

export default function FixedinFocus() {
  const focusDate = [
    {
      className: "col-lg-1 col-md-1 col-xs-1",
      label: "홈페이지 코드를 건드리지 않고도 추가적인 세팅이 가능합니다."
    },
    {
      className: `col-lg-1 col-md-1 col-xs-1  ${styles.emoji} ${styles.strong}`,
      label: "구글 태그 매니저는타 매체와의 호환성이 뛰어납니다."
    },
    {
      className: `col-lg-span-1 col-lg-2 col-md-2 col-md-span-1 col-xs-1 ${styles.emoji} ${styles.eye}`,
      label: "미리 보기기능을<br/>사용할 수 있습니다."
    },
    {
      className: "col-lg-1 col-md-1 col-xs-1",
      label: "마케팅 태그 설정의 효율성 극대화"
    },
    {
      className: "col-lg-2 col-lg-span-1 col-md-1 col-xs-1",
      label: "세분화된 데이터를 수집할 수 있어 분석이 용이합니다."
    },
    {
      className: `col-lg-2 col-lg-span-1 col-md-1 col-xs-1 ${styles.emoji} ${styles.phone}`,
      label: "GTM은 모바일 페이지<br/>적용이 가능합니다."
    },
    {
      className: `col-lg-4 col-lg-span-3 col-md-1 col-xs-1`,
      label: "데이터를 효율적으로 관리하여 신뢰도 높은 분석이 가능합니다."
    }
  ];
  return (
    <section className={`${styles.fixedinSection} black`}>
      <div className={`${styles.row} container`}>
        <div className={`${styles.titWrap} pageTxtWrap txtC`}>
          <p className={`${styles.tit} pageTitMiuem white motion scaleUp`}>
            <span lang="en">What is Google Tag Manager</span>
            <strong>구글 태그 매니저 (GTM)란?</strong>
          </p>
          <p className="pageDesc white col-span-15 motion scaleUp">
            구글 태그 관리자 혹은 태그 매니저란 구글에서 출시한 서비스로
            인터넷상의
            <br className="visiblePc" />
            <br className="visibleTablet" />
            인터페이스에서 웹 분석, 광고 성과 측정, 제휴마케팅 추적 등 다양한
            태그를
            <br className="visiblePc" />
            <br className="visibleTablet" />
            관리할 수 있도록 하는 솔루션을 뜻합니다.
            <br />
            <br />
            또한 태그관리자를 통해서 구글 애널리틱스의 기본 스크립트 및 이벤트
            <br className="visiblePc" />
            <br className="visibleTablet" />
            추적 스크립트, 애드워즈 전환 스크립트 와 리마케팅 스크립트 등
            구글에서
            <br className="visiblePc" />
            <br className="visibleTablet" />
            제공하는 서비스 관련 태그 외에도 클릭초이 스, 클릭스 등 광고 성과를
            측정하는
            <br className="visiblePc" />
            <br className="visibleTablet" />
            전환 스크립트, 에이스카운터 등 웹분석 스크립트와 같이 다양한 제3자
            태그를 관리
            <br className="visiblePc" />
            <br className="visibleTablet" />
            (추가, 삭제 및 수정)할 수 있습니다.
          </p>
        </div>

        <div className={`${styles.fixedCont}`}>
          {focusDate.map((item, index) => (
            <div
              className={`${styles.itemWrap} ${item.className} motion scaleUp`}
              key={index}
            >
              <div className="col-span-15">
                <div
                  className={styles.item}
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            </div>
          ))}

          <div
            className={`${styles.itemWrap} ${styles.emojixs} col-xs-1 motion scaleUp`}
          >
            <div className={`${styles.emojiBox} col-span-15`}>
              <img
                src="/image/marketing/google/emoji__eye.png"
                alt="눈 이모지"
              />
              <img
                src="/image/marketing/google/emoji__phone.png"
                alt="핸드폰 이모지"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
