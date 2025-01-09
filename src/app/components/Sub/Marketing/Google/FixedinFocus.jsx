import styles from "../FixedinFocus.module.scss";

export default function FixedinFocus() {
  const focusDate = [
    {
      className: "col-lg-1 col-md-1 col-xs-1",
      label: "한눈에 내 웹사이트<br/>데이터를 관리하세요"
    },
    {
      className: `col-lg-1 col-md-1 col-xs-1 ${styles.emoji} ${styles.clap}`,
      label: "지금 쇼핑몰에 활동중인 고객의<br/>활동메세지를 캐치하세요"
    },
    {
      className: `col-lg-span-1 col-lg-2 col-md-2 col-md-span-1 col-xs-1 ${styles.emoji} ${styles.pen}`,
      label: "마케팅 채널별 성과를<br/>측정하세요"
    },
    {
      className: "col-lg-1 col-md-1 col-xs-1",
      label: "우리 비즈니스의 잠재<br/>고객을 알아보세요"
    },
    {
      className: "col-lg-2 col-lg-span-1 col-md-1 col-xs-1",
      label: "고객들은 어떤 흐름으로<br/>웹사이트를 이용"
    },
    {
      className: "col-lg-2 col-lg-span-1 col-md-1 col-xs-1",
      label: "어디서든 데이터의<br/>신호를 놓치지 마세요"
    },
    {
      className: `col-lg-4 col-lg-span-3 col-md-1 col-xs-1 ${styles.emoji} ${styles.okay}`,
      label: "측정할 수 없으면<br/>관리할 수 없다"
    }
  ];
  return (
    <section className={styles.fixedinSection}>
      <div className={`${styles.row} container`}>
        <div className={`${styles.titWrap} pageTxtWrap txtC`}>
          <p className={`${styles.tit} pageTitMiuem black motion scaleUp`}>
            <span lang="en">What is Google Analytics</span>
            <strong>구글 애널리틱스4 (GA4) 란?</strong>
          </p>
          <p className="pageDesc black col-span-15 motion scaleUp">
            차세대 Google 애널리틱스(GA)4로 업그레이드 된 데이터분석
            <br className="visibleMobile" /> 툴을 활용하세요.
            <br />
            <br />
            구글애널리틱스(GA)4는 데이터를 수집하여 User ID, 디바이스별 기기,
            <br className="visiblePc" />
            <br className="visibleTablet" />
            세션 및 참여 데이터를 연결할 수 있습니다.
            <br className="visibleMobile" /> <br className="visibleMobile" />{" "}
            웹사이트와 모바일 앱, 게임 콘솔과 같은
            <br className="visiblePc" />
            <br className="visibleTablet" />
            여러 디지털 기기로부터 데이터를 수집하는 구글애널리틱스는 비즈니스에
            맞는
            <br className="visiblePc" /> 데이터를 수집, 측정하여 Google 광고
            플랫폼과의 향상된 원활한 통합으로
            <br className="visibleTablet" /> 캠페인 실적 최적화 및 마케팅 ROI를
            증대시키는데 사용됩니다.
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
                src="/image/marketing/google/emoji__clap.png"
                alt="박수 이모지"
              />
              <img
                src="/image/marketing/google/emoji__great.png"
                alt="좋아요 이모지"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
